let tasks=[]
function add(){
    let data=document.getElementById("task").value
    let data2=document.getElementById("task2").value
    tasks.push({data,data2})
    document.getElementById("task").value=""
    document.getElementById("task2").value=""
    gettasks()
}
function gettasks(){
    str=``
    for(i=0;i<tasks.length;i++){
        str+=`<li>${tasks[i].data} :${tasks[i].data2} <button onclick="del(${i})">delete</button> <button onclick="edit(${i})">edit</edit></li>`
    }
    document.getElementById("tasks").innerHTML=str
}



function del(index){
    tasks.splice(index,1)
    gettasks()
}
function edit(index){
    let a=prompt("enter the name ")
    let b=prompt("enter the number ")
    tasks[index].data=a
    tasks[index].data2=b
    gettasks()
}