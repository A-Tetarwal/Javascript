// console.log(Date());

const today = new Date();
const day = today.getDay(); // retrieves the day
const hour = today.getHours(); // get the hours
const minute = today.getMinutes(); // get the minutes
const seconds = today.getSeconds(); // getting the seconds
const date = today.getDate();

console.log(`Day: ${day}, date: ${date}, hour: ${hour}, minute: ${minute}, second: ${seconds}`);

// day today
const daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // 0 for sunday, pehle se set hai
console.log(`Day: ${daysList[day]}`);

// Time with AM/PM
let phase = "PM";
if (hour > 12) {
    console.log(`Time: ${hour - 12}:${minute}:${seconds} ${phase}`);
}
else if (hour == 12) {
    console.log(`Time: ${hour}:${minute}:${seconds} ${phase}`);
}
else if (hour == 0) {
    phase = "AM"
    console.log(`Time: ${12}:${minute}:${seconds} ${phase}`);
}
else {
    console.log(`Time: ${hour}:${minute}:${seconds} ${phase}`);
}

