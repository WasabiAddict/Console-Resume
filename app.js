const name = "david tran";
const career = "Web Development, Software Engineer";
const description = "Hardworking student currently enrolled at Innovate. Previously worked as an environmental scientist for the State. Very analytical with experience in customer satisfaction and data gathering";
const interests = ["Music", "Movies", "Dota 2", "Friends"];
const skillName = ["JavaScript", "CSS","HTML", "dance", "singing"];
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
console.log(" ");
console.log("My Interests:");
for (i=0; i < interests.length; i++) {
    console.log("* " + interests[i])
};
console.log(" ");
console.log("My Previous Work Experience:");
displayPosition(companyName, jobTitle, jobDescription);
console.log(" ");
console.log("My Skills: ");
displaySkill(skillName[0], true);
displaySkill(skillName[1], false);
displaySkill(skillName[2], false);
displaySkill(skillName[3], true);
displaySkill(skillName[4], true);

