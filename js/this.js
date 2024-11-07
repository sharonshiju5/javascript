// x={
//     a:10,
//     b:20,
//     c:function(){
// console.log(this.a+this.b);

//     }
// }

// // y=x.c
// // y.call(x)

// y=x.c.bind(x)
// y()




// x={
//     a:10,
//     b:20,
//     c:function(c,d){
// console.log(this,c,d);

//     }
// }

// y=x.c
// y.apply(x,[5,8])



x={
    a:50,
    b:91,
}
y={
    c:function(){
        console.log(this.a+this.b);
        
}
}
z=y.c
z.call(x)