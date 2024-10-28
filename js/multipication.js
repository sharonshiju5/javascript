function add(){
    let a =+document.getElementById("value").value
    str=``
    for(i=1;i<=10;i++){
        str+=`<h1>${i}x${a}=${i*a}</h1>`
        document.getElementById("out").innerHTML=str
    }
}