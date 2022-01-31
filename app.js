const name = "David Tran";
const career = "Web Development, Software Engineer";
const description =
  "Hardworking student currently enrolled at Innovate. Previously worked as an environmental scientist for the State. Very analytical with experience in customer satisfaction and data gathering";
const interests = ["Music", "Movies", "Dota 2", "Friends"];
const skillName = ["JavaScript", "CSS","HTML"];
const companyName = "ADEM";
const jobTitle = "Environmental Scientist";
const jobDescription =
  "Answer customer complaints, investigate illegal hazardous dumping, report and enforce penalties for responsible parties.";

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