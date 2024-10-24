function ab() {
    let a =parseInt(document.getElementById("valu1").value)
    let b =parseInt(document.getElementById("valu2").value)
    document.getElementById("p").textContent=`result:${a+b}`
}
function diff() {
    let a =parseInt(document.getElementById("valu1").value)
    let b =parseInt(document.getElementById("valu2").value)
    document.getElementById("p").textContent=`result:${a-b}`
}
function mul() {
    let a =parseInt(document.getElementById("valu1").value)
    let b =parseInt(document.getElementById("valu2").value)
    document.getElementById("p").textContent=`result:${a*b}`
}
function div() {
    let a =parseInt(document.getElementById("valu1").value)
    let b =parseInt(document.getElementById("valu2").value)
    document.getElementById("p").textContent=`result:${a/b}`
}
function clear() {
    let a =parseInt(document.getElementById("valu1").value)
    let b =parseInt(document.getElementById("valu2").value)
    document.getElementById("p").textContent=`result:""`
}
