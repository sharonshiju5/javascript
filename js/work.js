function select(max,num,id){
    str=``
    for(i=num;i<=max;i++){
        str+=`<option>${i}</option>`
        document.getElementById(id).innerHTML=str
    }
}
select(59,0,"min")
select(24,0,"hou")
select(30,0,"date")
select(12,0,"month")
select(6,1,"day")
select(2025,2000,"year")

function log(id){ 
    var e = document.getElementById(id);
   var text = e.options[e.selectedIndex].text;
   console.log(text);  
}