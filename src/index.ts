import Machine from "./machine";
// target state, new state, target value, new value, move
const machine = new Machine([
    ["0", "1", "0", "1", 1],
    ["1", "0", "0", "0", 1],
])
machine.clock(1000, function(){
    console.log(this.tape)
    console.log(this.state)
})