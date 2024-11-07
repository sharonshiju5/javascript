// class car{
//     colour="red";
//     wheel=4;

//     airbag(){
//         console.log("this car have air bag");
        
//     }
//     powersteering(){
//         console.log("car have power steering");
        
//     }

// }
// swift=new car()
// swift.powersteering()
// console.log(swift.colour);

// benz=new car()
// benz.powersteering()
// benz.airbag()
// console.log(benz.colour);


// new


// class car{
//     colour;
//     wheel;
//     constructor(wheel,colour){
//         this.wheel=wheel
//         this.colour=colour

//     }
// properties(){
//     console.log(`wheel: ${this.wheel}, colour: ${this.colour}`);
    
// }

// }
// swift=new car(2,"kaappe")
// swift.properties()
// beleno=new car(10,"manja")
// beleno.properties()


// new
// new
// new
// new



// class Person{

//     constructor(name,second,age){
//         this.name=name
//         this.second=second
//         this.fullname=name + second
//         this.age=age

//     }
// properties(){
//     if(this.age>=18){
//         console.log(`name: ${this.fullname} \n  adult`);

//     }
//     else{
//         console.log(`name: ${this.fullname} \n  not adult`);

//     }
// }

// }
// person=new Person("sharon"," shiju",18)
// person.properties()
// person2=new Person("shan"," shi",10)
// person2.properties()


// new
// new
// new
// new



// class Lib{


//         constructor(title,author,year){
//             this.title=title
//             this.author=author
//             this.year=year
    
//         }
//     properties(){
//         console.log(`the book ${this.title} is written by${this.author}"The Guide","  R. K. Narayan", "his novel is about a tour guide who becomes a spiritual guide. It won the" novel written in English"`)
//     }
// }
//     book=new Lib("The Guide","  R. K. Narayan", 1960 )
//     book.properties()
    


//new
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
