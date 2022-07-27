students=["kamran", "mehdi", "kami"];
subjects=["eng", "math" , "science", "isl"];
marks =[
    [40,50,60,70],
    [50,60,75,80],
    [90, 70, 65 ,80]
]
for (let  i = 0; i < students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
        console.log(students[i]+ " got "+ marks[i][j]+ " marks in "+ subjects[j]);
        console.log("--------------")
        
    }
    
}