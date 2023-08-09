let studentArray=[]
const addStudent=()=>{
    let studentObj ={
        myName : studentName.value,
        myMatric: studentMatric.value,
        myScore : studentScore.value
        
    
    }
    if (studentName.value!="" && studentMatric.value!="" && studentScore.value!="") {
        studentArray.push(studentObj)
        console.log(studentArray);
        document.getElementById("showEmptyErrorMessage").style.display="none"
        localStorage.setItem("students", JSON.stringify(studentArray))
        
    }else{
        document.getElementById("showEmptyErrorMessage").style.display="block"
    }

}