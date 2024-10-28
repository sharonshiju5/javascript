
// 1
// 1
// 1

// console.log("start");
// setTimeout(()=>{
//     for(i=0;i<=10;i++){
//         console.log(i);
        
//     }
// },4000)
// console.log("stop");


// 2 program
// 2
// 2


i=10
x=setInterval(()=>{
    if(i==0){
        document.getElementById("asd").textContent="start"
        clearInterval(x)
    }
    else{
        document.getElementById("asd").textContent=i

    }
    i--;
},1000)

