export default class Tape{
    private data: Map<number, string>;
    constructor() {
        this.data = new Map()
    }
    get(id: number){
        if(this.data.hasOwnProperty(id)) {
            return this.data.get(id)
        }
        return "0"
    }
    set(id: number, value: string){
        this.data.set(id, value)
    }
}