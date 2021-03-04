import Machine from "./machine";
// target state, new state, target value, new value, move
const machine = new Machine([
    ["0", "0", "0", "0", 1]
])
machine.clock(1000, function() {
    console.log(this)
})