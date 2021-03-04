import Tape from "./Tape"
// target state, new state, target value, new value, move
type codeLine = [string, string, string, string, number]

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
    clock(frequency: number, callback: Function = () => {}){
        console.log(this)
        this.interval = setInterval(()=> {
            this.tick()
            if(this.interval) callback.call(this)
        }, frequency)
        console.log(this)
    }
}