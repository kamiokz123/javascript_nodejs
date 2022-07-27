users={
    name:"kami",
    id:1,
    us:{
        name:"farhan",
        id:2
    }
}

for (var key in users) {
    if (Object.hasOwnProperty.call(users, key)) {
        var a = users[key];
        console.log(a); 
        
    }
}
for (const key1 in users.us) {
    if (Object.hasOwnProperty.call(users.us, key1)) {
        const b = users.us[key1];
        console.log(b);
    }
}