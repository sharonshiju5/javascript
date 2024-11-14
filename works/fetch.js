function fetData(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json()) .then((data) =>{
      console.log(data);
    str=``
    data.map((dt)=>{
        str+=`<tr>
        <td> ${dt.id}</td>
        <td>${dt.userId}</td>
        <td> ${dt.title} </td>
        <td>${dt.body}</tr>`
    })
    document.getElementById("posts").innerHTML=str
})
}

// document.getElementById("btn").addEventListener("click",()=>{
    fetData()
// })

function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    document.getElementById("filter").addEventListener("keyup",(e)=>{
    
    
    
    })
    .then((res) => res.json()) .then((data) =>{
        console.log(data);
      str=``
      data.filter((dt)=>{
          str+=`<tr>
          <td> ${dt.id}</td>
          <td>${dt.userId}</td>
          <td> ${dt.title} </td>
          <td>${dt.body}</tr>`
      })
      document.getElementById("posts").innerHTML=str
  })
}
      