// async function call(a,b){
//       return new Promise ((resolve , reject)=>{

 
//     var c=a/b;  
//   if (c) {
    
//  resolve("division is --> "+c);}
//     else{
//     reject("invalid operation ");}

//     })};


//  let done= function (dn){   
//     console.log(dn);
// };
// let notdone = function 

var a=false;
function call(){
 return  new Promise((res , rej)=>{
 
  if (a) {
    res(" i am true ")
    
  }else {
    rej(" i am false ")
  }


})}

var dn= function (done){
  console.log(done);
}
var ndn= function (ntdone){
  console.log(ntdone);
}
call().then(dn).catch(ndn)