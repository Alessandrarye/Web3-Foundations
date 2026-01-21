console.log("I ran day 03");
let student = {
    name: "Sandra",
    year: 2026,
    isReady: true,
    track: "solidity"
};
console.log(student);
console.log(student.name);
console.log(student.track);
function describeStudent(s) {
    return `${s.name} is on the ${s.track} track`;
}
console.log(describeStudent(student));
// --- Objects inside arrays (real-world pattern) ---
let students = [
    { name: "Sandra", track: "solidity",
isReady: true },
    { name: "Alex", track: "frontend",
isReady: false },
    { name: "Jordan", track: "backend",
isReady: true }  
] 
// Filter: keep only ready students
let readyStudents = students.filter(s =>
    s.isReady);
console.log("Ready students:", readyStudents);

// Map: get just the names (transform)
let names = students.map(s => s.name);
console.log("Student names:", names);

// Find: get the first matching student (search)
let firstSolidityStudent = students.find(s=>
s.track === "solidity");
console.log("First solidity student:", firstSolidityStudent);
