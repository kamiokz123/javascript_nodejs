array= [
    student1={
        name:"mukhtar",
        rollno:01,
        course:"blockchain",
        math: 90,
        eng:70,
        attendence:40
    },
    student2 ={
        nmme: "kami",
        rollno:02,
        course:"blockchain",
        math:80,
        eng:40,
        attendence:40

}
]
for (let i = 0; i < array.length; i++) {

    let a= array[i];
console.log(a);
    if (array[i].attendence< 60 && array[i].math< 50 ) {
        console.log("attendence is short and also failed in math subject");
        
    }
    else if (array[i].math>= 50 && array[i].attendence < 60) {
        console.log(" passed in math subject  but short attendence");
        
    }
    else if (array[i].math>= 50 && array[i].attendence>= 60) {
        console.log("passed in math subject and having full attendence");
        
    }
    else {
        console.log("failed in math and having short attendence");
    }

    if (array[i].attendence< 60 && array[i].eng< 50 ) {
        console.log("attendence is short and also failed in english subject");
        
    }
    else if (array[i].eng>= 50 && array[i].attendence < 60) {
        console.log("passed in english subject  but short attendence");
        
    }
    else if (array[i].eng>= 50 && array[i].attendence>= 60) {
        console.log(" passed in english subject and having full attendence");
        
    }
    else {
        console.log("failed in eng an short attendence");
    }

}
