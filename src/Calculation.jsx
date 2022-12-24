
const Add =(a,b)=>{
    var sum=a+b;
    return  sum;
}
const Sub =(a,b)=>{
    var sub=a-b;
    return  sub;
}
const Mul=(a,b)=>{
    var mul=a*b;
    return  mul;
}
const Div =(a,b)=>{
    var div=a/b;
    div=div.toFixed(3);//to how many place after decimal.
    return  div;
}
export {Add,Sub,Div,Mul} ;