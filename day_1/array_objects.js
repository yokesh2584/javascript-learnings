// ! => 1. Create an array of favorite movies. Log the first and last movie.
const favAnimes = [
  "Bleach",
  "Dragon Ball",
  "Naruto",
  "Idaten Jump",
  "Attack On Titan",
];
console.log(favAnimes[0]); // Logs the first element of an array.
console.log(favAnimes[favAnimes.length - 1]); // Logs the last element of an array.

// ! => 2. Add and remove elements from the start and end of the array.
const arrayOfNum = [1, 2, 3, 4, 5];

// * Adding element at the start
arrayOfNum.unshift(0); // Adds element at the start of an array.
console.log(arrayOfNum);

// * Removing element from the end
arrayOfNum.pop(); // Removes element from the end of an array.
console.log(arrayOfNum);

// ! => 3. Create an object called student with name, age, isPass.
const student = {
  name: "Yokesh",
  age: 20,
  isPass: true,
};

// ! => 4. Log each property of the object using dot and bracket notation.
console.log(student.name); // This logs the name of the student.
console.log(student.age); // This logs the age of the student.
console.log(student.isPass); // This logs the isPass of the student.

// ! => 5. Push a new object into an array of students.
const arrayOfStudents = [];

arrayOfStudents.push(student); // This will push the student object into the arrayOfStudents array.
console.log(arrayOfStudents);
