i=1
function ac() {
    setTimeout(() => {
    const date = new Date();
    const day = date.getDay();
    const dayElement = document.getElementById("day");
 
    switch (day) {
        case 0:
            dayElement.textContent = "sun";
            break;
        case 1:
            dayElement.textContent = "mon";
            break;
        case 2:
            dayElement.textContent = "tue";
            break;
        case 3:
            dayElement.textContent = "wed";
            break;
        case 4:
            dayElement.textContent = "thu";
            break;
        case 5:
            dayElement.textContent = "fri";
            break;
        case 6:
            dayElement.textContent = "sat";
            break;
        default:
            dayElement.textContent = "";
    }

}, 1000);
}

ac();

ac()

function asd() {
    const date=new Date()
    const y=date.getHours()
    if(y>=12){
        document.getElementById("hour").textContent=y-12
        document.getElementById("am").textContent="pm"

        
    }
    else{
        document.getElementById("hour").textContent=y
        document.getElementById("am").textContent="am"

    }
}

function ab() {
    const date=new Date()
    setTimeout(() => {
        document.getElementById("minutes").textContent=date.getMinutes()
        ab()
    }, 1000);
}
ab()

asd()
function ad() {
    const date=new Date()
    setTimeout(() => {
        document.getElementById("seconds").textContent=date.getSeconds()
        ad()
    }, 1000);
}
ad()



// array destrection

// a=[1,2,3,4,5,6]
// const[b,,d,,,g]=a
// console.log(b,d,g);


// spread destrection

// a=[10,20,30,40]
// b=[...a]
// b[3]+=1
// console.log(b);
// console.log(a);


// nested destructtion error an

// a=[{name:"alan",age:20,mark:32}]
// const {name,mark}=a
// console.log(name);


// largest num using loop

a=[10,20,90,60,100,70,80]
  let b=0
for(i=0;i<a.length;i++){
    if(a[i]<b){
        b=a[i]
    }
}
console.log(b);
