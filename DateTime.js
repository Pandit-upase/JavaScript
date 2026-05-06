// Create current date and time
const now = new Date();


// =========================
// PRINTING DATE/TIME
// =========================

// Prints complete date and time
console.log(now);

// Converts full date into readable string
console.log(now.toString());

// Prints only date
console.log(now.toDateString());

// Prints only time
console.log(now.toTimeString());

// Prints date and time in local format
console.log(now.toLocaleString());


// =========================
// GETTING INDIVIDUAL VALUES
// =========================

// Prints current year
console.log(now.getFullYear());

// Prints current month
// Month starts from 0
// 0 = January
console.log(now.getMonth());

// Prints current date of month
console.log(now.getDate());

// Prints current day number
// 0 = Sunday
console.log(now.getDay());

// Prints current hour
console.log(now.getHours());

// Prints current minutes
console.log(now.getMinutes());

// Prints current seconds
console.log(now.getSeconds());


// =========================
// TIMESTAMP
// =========================

// Prints milliseconds passed since 1 Jan 1970
console.log(Date.now());

// Converts milliseconds into seconds
console.log(Math.floor(Date.now() / 1000));


// =========================
// CUSTOM DATE
// =========================

// Creates custom date
// Format:
// Year, Month(0-11), Day, Hour, Minute
const customDate = new Date(2026, 3, 29, 15, 30);

// Prints custom date
console.log(customDate.toString());


// =========================
// FORMATTED DATE
// =========================

// Prints formatted date in Indian style
console.log(
  now.toLocaleString('en-IN', {

    // Prints weekday name
    weekday: "long",

    // Prints year
    year: "numeric",

    // Prints month name
    month: "long",

    // Prints day number
    day: "numeric"

  })
);


// =========================
// PRINT CURRENT TIME ONCE
// =========================

// Prints current time once
console.log(now.toLocaleTimeString());
