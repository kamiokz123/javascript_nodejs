
localStorage.setItem("name" , "kam")
localStorage.setItem("age", 18)

// getitem is use to get data from local storage 

Name=localStorage.getItem("name")
console.log(Name);

// clear funtion is to use to clear all data in local storage\

// localStorage.clear("age")


// remove function is use to remove only one key value

// localStorage.removeItem("age")

var v=["cat","dog","lion"]
localStorage.setItem("animals",JSON.stringify(v))
a=localStorage.getItem("animals");
console.log(a);
