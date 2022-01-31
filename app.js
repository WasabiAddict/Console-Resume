const name = "Hunter Hamilton";
const career = "Web Development, Software Engineer";
const description =
  "Knowledgeable Technical Support Specialist with over 8 years of experience in large corporations, 4 years of experience with workshop background as an automotive mechanic, and 4 years of experience within a warehouse atmosphere as Technical Support Director, Quality Control Manager, and Operations Exectuive.";
const interests = ["Locomotives", "Art", "Computers", "Piano", "Cars"];
const skillName = [
  "Linux OS fluent",
  "CCNA Certified",
  "Leadership Skills 101 Certified",
  "JavaScript",
  "CSS",
  "HTML",
];
const companyName = "Chase Bays";
const jobTitle = "Quality Control Manager";
const jobDescription =
  "Quality Control Inspector with hands-on experience inspecting precision production manufactured parts. Good knowledge of GD&T; detail-oriented with great communication and computer skills. Highly skilled with calipers, micrometers, height gages, comparators, oscilloscopes, spectrophotometer vision systems, CMM, and other precision inspection instruments.";

function displayPosition(companyName, jobTitle, jobDescription) {
  console.log(jobTitle + " at " + companyName + " - " + jobDescription);
}

function displaySkill(skillName, isCool) {
  if (isCool == true) {
    console.log("* BAM: " + skillName);
  } else {
    console.log("*", skillName);
  }
}

console.log("Name: " + name.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description);
console.log();
console.log("My Interests:");
console.log("* " + interests[0]);
console.log("* " + interests[1]);
console.log("* " + interests[2]);
console.log("* " + interests[3]);
console.log("* " + interests[4]);
console.log();
console.log("My Previous Work Experience:");
displayPosition(companyName, jobTitle, jobDescription);
console.log();
console.log("My Skills: ");
displaySkill(skillName[0], false);
displaySkill(skillName[1], true);
displaySkill(skillName[2], false);
displaySkill(skillName[3], false);
displaySkill(skillName[4], false);
displaySkill(skillName[5], false);