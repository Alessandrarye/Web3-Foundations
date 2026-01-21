console.log("I ran day 02")
let skills = ["JavaScript", "Git", "Solidity",];
console.log(skills)
console.log(skills[0]); // first item
console.log(skills[2]); // third item
skills.push("Smart Contracts");
console.log(skills);
for (let i = 0; i < skills.length; i++) {console.log(skills[i]); }
function hasSkill(skill) {
  return skills.includes(skill);
}
console.log("Has Solidity?", hasSkill("Solidity"));
console.log("Has Rust?", hasSkill("Rust"));
//Reflection:
// - What clicked today?
// - Arrays feel intuitive and I understand zero-based indexing.
// - What felt confusing?
// - Remembering when to use push versus direct assignment to add items to an array.