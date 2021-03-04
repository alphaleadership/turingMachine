export default class Tape{
    private data: [];
    constructor() {
        this.data = []
    }
    get(id: number){
        if(this.data.hasOwnProperty(id)) { // @ts-ignore
            return this.data[id]
        }
        return "0"
    }
    set(id:number, value:string){
        // @ts-ignore
        this.data[id] = value
    }
}