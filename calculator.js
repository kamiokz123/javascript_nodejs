function value(num1,type,num2) {
if (type==="+") {
    sum(num1 , num2);
    }

    else if(type==="-") {
        sub(num1 , num2);

    }
    else if (type === "*"){
        mult(num1, num2)
    }
    else if (type === "/") {
        div(num1 , num2)
        
    }
    else if (type === "^2") {
        sqr(num1 , num2)
    }
    else if (type=== "%") {
        per(num1 , num2)
        
    }
    else { 
        console.log("invalid operation")

    }
    
}
function sum(n1 , n2) {
    result=n1+n2;
    console.log("sum="+ result);
    
}
function sub(n1 , n2) {
    result=n1 - n2;
    console.log("sub="+ result);
    
}
function mult(n1,n2) {
    result=n1*n2;
    console.log("multiplication="+ result);
    
}
function div(n1,n2) {
    result=n1/n2;
    console.log("division="+ result)
    
}
function sqr(n1,n2) {
    result=n1*n1;
    console.log("square="+ result);
    
}
function per(n1, n2) {
    result=n1/n2*100;
    console.log("percentage="+result);
}
    

value(10 , "+", 12);
// value(10 , "-" , 5);
// value(10, "*", 2);
// value(10, "/", 2);
// value(10 , "^2" );
// value(10 ,"%", 100);
// value(10,">")