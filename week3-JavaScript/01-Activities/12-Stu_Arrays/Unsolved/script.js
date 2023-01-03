// WRITE YOUR CODE HERE
var names = ["matt", "jeff", "tina", "ed", "eddy" ,"edd"]
console.log("there are" + names.length + "students")

console.log("Welcome to the class " + names[0])
console.log("Welcome to the class " + names[1])
console.log("Welcome to the class " + names[2])
console.log("Welcome to the class " + names[3])
console.log("Welcome to the class " + names[4])
console.log("Welcome to the class " + names[5])

names[0] = "bateman"

console.log("Welcome to the class " + names[0])

if (names[0] != "matt") {
    console.log(names[0] + " is in class")
}
