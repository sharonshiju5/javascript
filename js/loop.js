
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



let Todos=[]


while(true){
   const choice=parseInt(prompt("1:Add todo \n 2:Display \n 3:Edit \n 4:Delect \n 5:Exit"))
   if(choice==1){
       
      const name=prompt("enter name") 
      const num=parseInt(prompt("enter number"))
   //   x={name:name,num:num}
   //   console.log(x);
      Todos.push({name,num})

      
   }
   else if(choice==2){
       str=``
       str1=``
       for(i=0;i<Todos.length;i++){
          str+=Todos[i].name
          str+=" :"
          str+=Todos[i].num
          str+="\n"
       }
       alert(`${str} \n `)
   }
   else if(choice==3){
       str=``
       for(i=0;i<Todos.length;i++){
           str+=(`${(i+1)} ${Todos[i]} \n`)
       }
       const index=prompt(`${str} \n enter the no to edit `)
       const edit=prompt("enter the data for update")
       Todos[index-1]=edit
       alert("succesfully updated")
       
   }
   else if(choice==4){
       str=``
       for(i=0;i<Todos.length;i++){
           str+=(`${(i+1)} ${Todos[i]} \n`)
       }s.splice(a-1,1)
       alert("succesfully Delected")

   }
   else if(choice==5){
       break
   }
   else{
       alert("invalid no")
   }
}