import Tape from "./Tape"
// target state, new state, target value, new value, move
type codeLine = [string, string, string, string, number]
type callbacks = {
    beforeCallback: Function | null,
    afterCallback: Function | null,
    haltedCallback: Function | null,
}

export default class Machine{
    private code: Array<codeLine>
    private state: string
    private tape: Tape
    private pos: number
    private interval: number | null
    constructor(code: Array<codeLine> = []){
        this.code = code
        this.state = "0"
        this.tape = new Tape()
        this.pos = 0
        this.interval = null
    }
    tick(){
        let actualValue = this.tape.get(this.pos)
        // @ts-ignore
        let actualCodeLine = this.code.find((codeLine: codeLine) => {
            return codeLine[0] === this.state &&
                codeLine[2] === actualValue
        })
        if(!actualCodeLine){
            if(this.interval){
                clearInterval(this.interval)
                this.interval = null
            }
            return
        }
        this.state = actualCodeLine[1]
        this.tape.set(this.pos, actualCodeLine[3])
        this.pos += actualCodeLine[4]
    }
    clock(frequency: number, callbacks: callbacks = {
        beforeCallback: null,
        afterCallback: null,
        haltedCallback: null
    }){
        this.interval = setInterval(()=> {
            if(callbacks.beforeCallback) callbacks.beforeCallback.call(this)
            this.tick()
            if(callbacks.afterCallback) callbacks.afterCallback.call(this)
            if(!this.interval && callbacks.haltedCallback) callbacks.haltedCallback.call(this)
        }, frequency)
    }
}