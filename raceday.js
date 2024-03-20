let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false;
const age = 18;
if (registerEarly && age > 18){
  raceNumber += 1000;
}

if (registerEarly && age > 18){
  console.log(`Race will begin at 9:30 am, Your race number is : ${raceNumber}.`);
} else if (!registerEarly && age > 18){
  console.log(`Late adults run at 11:00 am, Your race number is : ${raceNumber}.`);
} else if (age < 18){
  console.log(`Youth registrants run at 12:30pm, Your race number ${raceNumber}.`);
} else {
  console.log("See the registration desk")
}
