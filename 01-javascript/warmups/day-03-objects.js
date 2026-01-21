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
