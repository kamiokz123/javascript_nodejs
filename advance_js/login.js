
users=[{
    name:"kamran@gmail.com",
    pass:253
},{
    name:"mehdi123@gmail.com",
    pass:254
}]
function addusers(name2,pass2) {
    data={
        name:name2,
        pass: pass2

    }
    users.push(data)
    
}
function getUser(){
    console.log("\n------- All Users List --------");
    users.forEach(user => {
        console.log(user);
    });
}

function login(user1,pass1){
    temp=[{
        name: false,
        pass: false
    }]
    users.forEach(user => {
        if (user.name == user1) {
            if (user.pass == pass1) {
                temp[0].pass=true 
            }
            temp[0].name=true 
        }
        
    });
    if (temp[0].name== true) {
        if (temp[0].pass == true) {
            console.log(" login successfully");
            
        }else {
            console.log(" wrong pass");
        }
    }
    else {
        console.log("your username is not match");
    }
    
    


}
addusers("farhan",255)
addusers("haseeb", 256)
getUser()
login("mehdi123@gmail.com", 253)