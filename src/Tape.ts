export default class Tape{
    private data: string[];
    constructor(){
        this.data = []
    }
    get(id: number){
        if(this.data.hasOwnProperty(id)) return this.data[id]
        return "0"
    }
    set(id:number, value:string){
        this.data[id] = value
    }
}