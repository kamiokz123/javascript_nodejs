students=["kami", "mukhti", "sibtain", "ayaz"];
course=["blockchain", "cyber security" , "CSE", "EE"];
rollno=[1,2,3,4];
math=[60, 85, 60 ,70];
attendence=[80, 80, 70, 90];

    array1={
        strenght:students,
        subject:course,
        number:rollno,
        sub1:math,
        joining:attendence
    }
    for (let i = 0; i <=4 ; i++){
    
        if (array1.sub1[i] >= 50 && array1.joining[i] >= 60) {
            console.log("name:"+ array1.strenght[i]  + "\n course:"+ array1.subject[i]+ 
            "\n roll no:"+array1.number[i]+
            "\n marks in math:"+ array1.sub1[i]
            +"\n attendence:"+ array1.joining[i]+ "\n  this students is promoted "+"\n ----------------")
            
        }
    

    
    }
    console.log("those students who are not in this list are not allowed to promoted because of short attendence and failed in marks");




