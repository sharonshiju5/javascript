function asd(a,b){
    function myfunction(){
        c=a+b
        return c
    }
    return myfunction
}
let x=asd(5,3)
let y=x()
console.dir(x);