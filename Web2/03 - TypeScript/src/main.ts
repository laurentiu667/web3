import Student from "./Student"

window.addEventListener("load", () => {
    let student:Student = new Student("John", "Doe", "A2023");
    console.log(student.show());
})