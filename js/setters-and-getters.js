//new

// class Button{
//     constructor(name){
//         this.button=document.createElement("button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     setWidth(width){
//         this.button.style.width=width+"px"
//     }
//     setHeight(height){
//         this.button.style.height=height+"px"
//     }

// }

// btn1=new Button("clickme")
// btn1.setWidth(200)
// btn1.setHeight(100)


//new Seter
//new seter

// class Button{
//     constructor(name){
//         this.button=document.createElement("button")
//         this.button.innerHTML=name;
//         document.body.appendChild(this.button)
//     }
//     set Width(width){
//         this.button.style.width=width+"px"
//     }
//     set Height(height){
//         this.button.style.height=height+"px"
//     }
    
// }

// btn1=new Button("clickme")
// btn1.Width=200
// btn1.Height=100



//new
//new

class Button{
    constructor(name){
        this.button=document.createElement("button")
        this.button.innerHTML=name;
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+"px"
    }
    set height(height){
        this.button.style.height=height+"px"
    }
    get width(){
        return parseInt(this.button.style.width)
    }
    get height(){
        return parseInt(this.button.style.height)
    }
}

btn1=new Button("clickme")
btn1.width=200
btn1.height=100

console.log(btn1.width,btn1.height);
