var users=[
    {
    name:"kami",
    pass:120
},{
    name:"sami",
    pass:121

}

]

function updatedata(name1,pass1){
    var user={
        name:name1,
        pass:pass1
    }
   users.push(user)

}
function getuserlist(){
    console.log("----all users----");
    users.forEach(a => {
       
        console.log(a.name);
        
    });
}

function login(user1,pass1){
    var name=false;
    var pass=false;
    users.forEach(a => {
  if (a.name==user1 & a.pass==pass1) {
      if (a.name!==user1 || a.pass!==pass1) { name=true
          
      } console.log(a.name+" login succefully"); 
      
  }
        
    });
    if (name==true) {
        console.log("wrong usernmae or pass");
        
    }
   
} 
// function login(name,pass){


// }
updatedata("hadi",123)
updatedata("azhar",122)
getuserlist()
login("hadi",13)