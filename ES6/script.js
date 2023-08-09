
let studentArray = [
    {
        id: 1,
        name: "Akin",
        favFood: "Pawpaw",
        school: "FUNAAB"
    },
    {
        id: 2,
        name: "Sola",
        favFood: "Rice",
        school: "LAUTECH"
    },
    {
        id: 3,
        name: "Kunle",
        favFood: "Beans",
        school: "FUTA"
    },
    {
        id: 4,
        name: "Miracle",
        favFood: "Spaghetti",
        school: "SQI"
    },
    {
        id: 5,
        name: "Idris",
        favFood: "Pounded yam",
        school: "SQI"
    }
]

let newStudent = studentArray.filter((student)=>{
    return student.school=="SQI"
})
console.log(newStudent);


for (let index = 0; index < studentArray.length; index++) {
    const serialNumber = index+1
    const element = studentArray[index].id;
    const element2 = studentArray[index].name;
    const element3 = studentArray[index].favFood;
    const element4 = studentArray[index].school;
    document.getElementById("show").innerHTML += `<h3><small>${serialNumber}</small> I am student ${element} and my name is ${element2} and my favourite food is ${element3} while my school is ${element4}</h3>`
}

studentArray.map((student,index)=>{
    document.getElementById("disp").innerHTML += `
        <small>${student.id}</small>
        <h2>${student.name}</h2>
        <h2>${student.favFood}</h2>
        <h2>${student.school}</h2>
    `

    console.log(index+1);
    console.log(student.id);
    console.log(student.name);
    console.log(student.favFood);
    console.log(student.school);

})

// function check() {
    
// }
const check = () =>{
    alert("Mo de, emi ES6")
    let song = "burna.mp3"
    var mySong = new Audio(song)
    mySong.play()
}

// console.log(nameOfStudent);