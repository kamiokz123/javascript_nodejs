array= [
    student1={
        name:"mukhtar",
        rollno:01,
        course:"blockchain",
        marks: 90,
        attendence:80
    },
    student2 ={
        nmme:"kami",
        rollno:02,
        course:"blockchain",
        marks:80,
        attendence:40

}
]
console.log(student1);
if (student1.attendence< 60 && student1.marks< 50 ) {
    console.log("mukhtar attendence is short and also failed");
    
}
else if (student1.marks>= 50 && student1.attendence < 60) {
    console.log("mukhtar is  passed  but short attendence");
    
}
else if (student1.marks>= 50 && student1.attendence>= 60) {
    console.log("mukhtar is passed and having full attendence");
    
}
else {
    console.log("mukhtar is failed");
}


console.log(student2);
if (student2.attendence< 60 && student2.marks< 50 ) {
    console.log("kami attendence is short and also failed");
    
}
else if (student2.marks>= 50 && student2.attendence < 60) {
    console.log("kami is  passed  but short attendence");
    
}
else if (student2.marks>= 50 && student2.attendence>= 60) {
    console.log("kami is passed and having full attendence");
    
}
else {
    console.log("kami is failed");
}


