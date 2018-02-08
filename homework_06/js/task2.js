var euro_number = prompt('Enter please money in euro');
var usd_number = prompt('Enter please money in usd');
var euro_course = 33.4;
var usd_course = 27.1;
var eu_to_usd=euro_course/usd_course;
console.log(euro_number + " EURO are equal " + euro_number * euro_course + " UAH, " + usd_number + " USD are equal " + usd_number * usd_course + " UAH, one euro is equal " + eu_to_usd.toFixed(2) + " dollars");
