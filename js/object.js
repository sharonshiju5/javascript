
// stud=[
//     {name:"alen",age:18,mark:80},
//     {name:"thomas",age:18,mark:80},
//     {name:"merin",age:18,mark:80}
// ]
// for(i=0;i<stud.length;i++){
//     console.log(stud[i].name)
// }

// studs={}
// studs.name='alen'
// console.log(studs.name);

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
           str+=(`${(i+1)} 
           ${Todos[i]} \n`)
       }
       const index=prompt(`${str} \n enter the no to edit `)
       const edit=prompt("enter the data for update")
       const num=parseInt(prompt("enter number"))
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
