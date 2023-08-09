var studentArr =[]
function addStudent(){
    var studentObj = {
        myName: studentName.value,
        myMatric: myMat.value,
        myEmail: studentEmail.value,
        myDepartment: studentDepartment.value,
        myPassword: studentPass.value,
    }
    // console.log(studentArr);
    if (studentName.value!="" && myMat.value!="" && studentEmail.value!="" && studentDepartment.value!="" && studentPass.value!="")  {
        document.getElementById("showEmptyErrorMessage").style.display="none"
        studentArr.push(studentObj)
        console.log(studentArr);
        // displayStudents()
        localStorage.setItem("students", JSON.stringify(studentArr))
        window.location.href="signin.html"
    }else{
        document.getElementById('showEmptyErrorMessage').style.display="block"
    }
}

// function displayStudents(){
//     document.getElementById('noStudentRegistered').style.display="none"
//     studentTable.innerHTML = `
//     <tr>
//     <th>S/N</th>
//     <th>Name</th>
//     <th>Matric No</th>
//     <th>Email</th>
//     <th>Department</th>
//     <th>Action</th>
//     </tr>
//     `
//     for (let index = 0; index < studentArr.length; index++) {
//         studentTable.innerHTML += `
//         <tr>
//         <td>${[index+1]}</td>
//         <td>${studentArr[index].myName}</td>
//         <td>${studentArr[index].myMatric}</td>
//         <td>${studentArr[index].myEmail}</td>
//         <td>${studentArr[index].myDepartment}</td>
//         <td><button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editStudent(${index})">Edit</button><button class="btn btn-danger" onclick="deleteStudent(${index})">Delete</button></td>
//         </tr>
        
//         `
        
//     }
// }

// function editStudent(i){
//     // console.log(i);
//     if ( editedName.value !="" && editedMatric.value !="" && editedEmail.value !="" && editedDepartment.value !="") {
//         var studentObj = {
//             myName: editedName.value,
//             myMatric: editedMatric.value,
//             myEmail: editedEmail.value,
//             myDepartment: editedDepartment.value,
//             myPassword: studentPass.value
//         }


//         studentArr.splice(i,1,studentObj)
//         console.log(studentArr);
//         // displayStudents()
//     }
// }

// function deleteStudent(j){
//     studentArr.splice(j,1)
//     displayStudents()

// }