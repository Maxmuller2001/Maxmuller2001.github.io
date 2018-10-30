//Opdracht 1
const allTableCells = document.getElementsByClassName("grade");
console.log(allTableCells[0].innerText); //Check to see if i can get the grades

let allGrades = [];
for (let i = 0; i < allTableCells.length; i++) {
    allGrades.push(allTableCells[i].innerText);
}
console.log(allGrades);

//function to determin the average grade of an array
function averageGrade(gradeArray) {
    sumOfGrades = 0;
    for (let i = 0; i < gradeArray.length; i++) {
        sumOfGrades += parseFloat(gradeArray[i]); //parsefloat to parse all elements from the array
    }
    return sumOfGrades / allGrades.length;
}
console.log("Het gemiddelde is", averageGrade(allGrades));

//Opdracht 2
function changeBackground() {
    const colorArray = ["blue", "red", "purple", "green"];
    const table = document.getElementById('course');
    const rows = table.getElementsByTagName("li"); //get all the rows of the table
    for (i = 0; i < rows.length; i++) {

            rows[i].style.backgroundColor = colorArray;

    }
}
changeBackground();
//Opdracht 3
//Zonder function
const body = document.getElementById("body");
const createImg = document.createElement("img");
createImg.src = 'https://picsum.photos/200/300';
createImg.alt = "My image";

body.appendChild(createImg);

//Met function
function createImgElement(imageSrcName){
const image = document.createElement("img");
image.src = imageSrcName;
image.alt = "My image";

body.appendChild(image);
}
createImgElement("https://picsum.photos/200/300");
