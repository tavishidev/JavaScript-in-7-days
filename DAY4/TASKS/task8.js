function leapYear(yr) {
    if (yr % 400===0)
        return `${yr} is leap year`;
    else
        return `${yr} is not a leap year`;
} console.log(leapYear(2000));

function ageFromBirthyr(currentyr, birthyr) {
    let age = currentyr - birthyr;
    return age;
} console.log(ageFromBirthyr(2026, 2006));

// Create a function to get number of days in a month
function daysInMonth(yr, month) {
    month=month.toLowerCase();
    if (month === "jan" || month === "mar" || month === "may" || month === "jul" || month === "aug" || month === "oct" || month === "dec")
        return 31;
    else if (month === "feb") {
        if ((yr%4===0 && yr%100!==0)||yr%400===0)
            return 29;
        else
            return 28;
    }
    else
        return 30;}
    console.log(daysInMonth(2000,"June"));
    





