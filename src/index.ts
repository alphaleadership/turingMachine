import Machine from "./machine";
// target state, new state, target value, new value, move
const machine = new Machine([
    ["0", "0", "0", "0", 1]
])
machine.clock(1000,{
    beforeCallback:function(){
        console.log("data before :", this.tape)
    },afterCallback:function(){
        console.log("data after :", this.tape)
    },haltedCallback: function(){
        console.log("data after halted :", this.tape)
    },
})