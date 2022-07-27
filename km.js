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
for (i=1 ; i < array.length; i++) {
    let a=student1;
    let b = student2; 
    console.log(a);
    

    if (student1.attendence< 60 && student1.math< 50 ) {
        console.log("mukhtar attendence is short and also failed in math subject");
        
    }
    else if (student1.math>= 50 && student1.attendence < 60) {
        console.log("mukhtar is  passed in math subject  but short attendence");
        
    }
    else if (student1.math>= 50 && student1.attendence>= 60) {
        console.log("mukhtar is passed in math subject and having full attendence");
        
    }
    else {
        console.log("mukhtar is failed in math and having short attendence");
    }
// for english subject
if (student1.attendence< 60 && student1.eng< 50 ) {
    console.log("mukhtar attendence is short and also failed in english subject");
    
}
else if (student1.eng>= 50 && student1.attendence < 60) {
    console.log("mukhtar is  passed in english subject  but short attendence");
    
}
else if (student1.eng>= 50 && student1.attendence>= 60) {
    console.log("mukhtar is passed in english subject and having full attendence");
    
}
else {
    console.log("mukhtar is failed in eng an short attendence");
}

// student 2 math subject

    console.log(b);

    if (student2.attendence< 60 && student2.math< 50 ) {
        console.log("kami attendence is short and also failed in math subject");
        
    }
    else if (student2.math>= 50 && student2.attendence < 60) {
        console.log("kami is  passed in math subject but short attendence");
        
    }
    else if (student2.math>= 50 && student2.attendence>= 60) {
        console.log("kami is passed in math  and having full attendence");
        
    }
    else {
        console.log("kami is failed in math and short attendence");
    }
// student 2 eng subject

if (student2.attendence< 60 && student2.eng< 50 ) {
    console.log("kami attendence is short and also failed in english subject");
    
}
else if (student2.eng>= 50 && student2.attendence < 60) {
    console.log("kami is  passed in english subject but short attendence");
    
}
else if (student2.eng>= 50 && student2.attendence>= 60) {
    console.log("kami is passed in english  and having full attendence");
    
}
else {
    console.log("kami is failed in english and short attendence");
}

    
}