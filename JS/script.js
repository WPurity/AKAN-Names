const entryData = document.getElementById("submit");
const giveName = document.querySelector("#display");
const inputGender = document.querySelectorAll("#identity");
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const namesOfMales = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const namesOfFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
entryData.addEventListener("click", function (stopRepeat) {
    stopRepeat.preventDefault();
    const receivedDate = document.getElementById("date").value;
    const year = date.getFullYear();
    const day = date.getDay();
    const date = new Date(receivedDate);
const day = date.getDay();
for(let choice of inputGender){
if (choice.value === "male"){
giveName.innerHTML = `Generated Akan Name is: ${namesOfMales[day]}`;
}
if (choice.value === "female"){
giveName.innerHTML = `Generated Akan Name is: ${namesOfFemales[day]}`;
}
}
})

    