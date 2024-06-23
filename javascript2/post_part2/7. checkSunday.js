// Loop through the years from 2014 to 2050 (inclusive)
for (let year = 2014; year <= 2050; year++) {
    // Create a Date object for January 1st of the current year
    let d = new Date(year, 0, 1);

    // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
    if (d.getDay() === 0) {
        console.log("1st January is being a Sunday  " + year);
    }
}
