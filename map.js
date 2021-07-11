
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = []
for (let num of nums) {
  results.push(num * 2);
}
console.log('for loop:               ', results);


// Using map()
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log('verbose map results:    ', mapResults);


// Simplified w/ map()
const mapResultsSimp = nums.map(function (num) { return num * 2 });
console.log('simplified map function:', mapResultsSimp);


// Simplfied w/ map() + arrow function
const mapArrow = nums.map(num => num * 2);
console.log('arrow function map:     ', mapArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// return an array with just names and ids
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

//return an array with the original object values
// with ages added
let ages = [32, 26, 28];
const objStudentsWithAges = students.map((student, i) => {
  student.age = ages[i];
  return student;
});
console.log(objStudentsWithAges);

//return an array with objects with only the
// id and name remaining
const objStudentIdName = students.map(student => {
  delete student.profession;
  delete student.skill;
  return student;
});
console.log(objStudentIdName);