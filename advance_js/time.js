
users=[
    {
        name:"kami",
        pass:210,
    },{
        name:"mehdi",
        pass:211,
    }
]
function adduser(user2,pass2){
    data1={
        name:user2,
        pass:pass2
    }
    users.push(data1)
}

function getuser(){
 console.log("------------new list is ---------------");
 console.log(users);
}


function login(user1,pass1){
    data=[{
        name:false,
        pass:false
    }]
    users.forEach( a => {
        if (a.name==user1) {
            if (a.pass==pass1) {data[0].pass=true
        }
        data[0].name=true
    }
    });
    if (data[0].name==true) {
        if (data[0].pass == true) {
            console.log("loging successfully \n");
        
    }else{
        console.log("wrong password\n");
    }
        
    }else{
        console.log("wrong username\n");
    }

}
adduser("hadi",212)
getuser()
login("kami",210)









