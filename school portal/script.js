var studentArr = []
function addStudent(){
    if (studentName.value !="") {
        studentArr.push(studentName.value)
        studentName.value=""
        document.getElementById("showEmptyErrorMessage").style.display="none"
        displayStudents()
        console.log(studentArr);
        
    }else{
        document.getElementById("showEmptyErrorMessage").style.display="block"
        console.log("you dey whine me");
    }
}

function addFirstItem(){
    // firstItem.innerHTML=""
    var myFirstItem = document.getElementById("firstItem").value
    if (myFirstItem !="") {

        
        studentArr.unshift(myFirstItem)
        displayStudents()
        console.log(studentArr);
    }
}

function editStudent(){
    var newIndex = editedIndex.value
    var newStudent = editedDetails.value
    console.log(newIndex, newStudent);
    if (editedIndex.value !="" && editedDetails.value !="") {
        if (studentArr.length > newIndex-1) {
            studentArr.splice(newIndex-1,1,newStudent)
            
        }else{
            alert(`index is only ${studentArr.length} long`)
        }
        
    }else{
        alert("Please fill in the details")
    }
    displayStudents()
}
// function editStudent(){
//     if (editedIndex.value !=""&&editedDetails.value !="") {
//         if (editedIndex.value-1>studentArr.length) {
//             alert(`this is more than ${studentArr.length} long`)
            
//         }else{

//             studentArr.splice(editedIndex.value-1,1,editedDetails.value)
//             console.log(studentArr);
//             displayStudents()
//         }
        
//     }else{
//         alert("Fill in the spaces")
//     }
// }

function clearFirstItem(){

    studentArr.shift()
    displayStudents()
    console.log(studentArr);
}

function clearLastItem(){
    studentArr.pop()
    displayStudents()
    console.log(studentArr);
}

function clearRandomItem(){
    var myRandomClear = prompt("which number do you want to delete")
    studentArr.splice(myRandomClear-1,1)
    displayStudents()
    console.log(studentArr);
}

function clearAllItem(){
    studentArr.splice(0,studentArr.length)
    displayStudents()
    console.log(studentArr);
}

function displayStudents(){
    document.getElementById("noStudentRegistered").style.display="none"
    document.getElementById("allButtons").style.display="block"
    studentTable.innerHTML =""
    studentTable.innerHTML = `
    <tr>
        <th>S/N</th>
        <th>Student Name</th>
    </tr>
    `
    for (let index = 0; index < studentArr.length; index++) {
        studentTable.innerHTML +=`
        <tr>
            <td>${index+1}</td>
            <td>${studentArr[index]}</td>
            
        </tr>
        
        `
        
    }
}