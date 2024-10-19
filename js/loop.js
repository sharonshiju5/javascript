
// while loop

// i=1
// while(i<=10 )
// {
//     console.log(i)
//     i++;
// }

// dowhile

// i=1
// do 
// {
//     console.log(i)
//     i++;
// }while(i<=5)


// for loop

// for(i=1;i<=8;i++)
// {
//     console.log(i)
// }



//  for(i=0;i<=10;i+=2)
//  {
//     console.log(i)
//  }




// function asd(){
//    if(true){
//       let a=10;
//       console.log("inside block"+a)
//    }
//    console.log("inside function"+a)
// }
// asd()
// console.log("out side function"+a)


  
// for(i=1;i<=5;i++)
// {
// str=''
// for(j=1;j<=i;j++)
// {
//    str+="*";
// }
// console.log(str);
// }


// braek and continue

// for(i=1;i<=10;i++){
//    if(i==5){
//       continue;
//    }
//    console.log(i)
// }



// function buyeggs(money){
//    return "buy" +money/6+ "eggs at" +money " rupees "
// }


// x=function(name){
//    console.log("hello"+name);
// }
// x("uuhaaahhaa")


// x=parseInt(prompt("enter the first number"))

// function fact(x){
//    if(x==0){
//       return 1
//    }
//    else{
//       return x*fact(x-1)
//    }
// }
// y=fact(x)
// alert(y)





// let arr=[]
// for(i=0;i<100;i++){
//    arr.push(i)
// }
// for(i=0;i<100;i++){


//    if(arr[i]%3==0) {
//         arr[i]="fizz"
         
//       }
//    }



//    console.log(arr);
//       elseif(i%5==0)
//          console.log("buzz");
//       else()
// console.log(i);




todos=[]
while (true) {
   const choice=prompt("[1] add todo \n [2]display todo \n [3] edit todo \n [4]delet todo \n [5]exit")
if 
(choice==1){
   const todo = prompt("add todo")
   todos.push(todo)
}
else if(choice==2){
   str=``
   for(i=0;i<todos.length;i++){
      str+=(`[${(i+1)}] ${todos[i]} \n`)
   }

   alert(str)
}
else if(choice==3){
   str=``
   for(i=0;i<todos.length;i++){
      str+=`[${i+1}] ${todos[i]}`
   }
   const index=prompt(`${str} \n enter choice`)
   const updatetodo=prompt("enter data to be update")
   todos[index-1]=updatetodo
   alert("successfully updated")

}
else if(choice==4){
   str=``
   for(i=0;i<todos.length;i++){
      str+=`[${i+1}] ${todos[i]}`
   }
   n=parseInt(prompt`${str} \n enter the deleting elelment`)
   todos.splice(a-1,1)
   alert("succeccfully delelted")

}
else if(choice==5){
   break;
}

else{
alert("invalid option")
}


}