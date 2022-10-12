// exercise 2
console.log("_______________Exercise 2________________");
let person = "Sameer Katija";
console.log(`Hello ${person}, would you like to learn some Python today?`);
// exercise 3
console.log("_______________Exercise 3________________");
let TitleCase = person
  .toLowerCase()
  .split(" ")
  .map((idx) => idx.charAt(0).toUpperCase() + idx.slice(1))
  .join(" ");
console.log(
  `Lower Case: ${person.toLowerCase()} \nUpper Case: ${person.toUpperCase()} \nTitle Case: ${TitleCase}`
);
// exercise 4
console.log("_______________Exercise 4________________");
console.log(
  "Albert Einstein once said, A person who never made a mistake never tried anything new."
);
//exercise 5
let famous_person = "Albert Einstein";
let message = "A person who never made a mistake never tried anything new.";
console.log("_______________Exercise 5________________");
console.log(`${famous_person} once said, ${message}`);
// exercise 6
console.log("_______________Exercise 6________________");
console.log(`${person} \t is the nameof person`);

//exercise 7 & 8
console.log("_______________Exercise 7 & 8________________");
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 2);
console.log(16 / 2);

//exercise 9
console.log("_______________Exercise 09________________");
let fav_num = 11;
console.log(`My favourite number is ${fav_num}`);

//exercise 10
console.log("_______________Exercise 10________________");
// this statement is written to print 8 by adding 5 plus 3
console.log(5 + 3);
// this statement is written to print 8 by substracting 10 minus 2
console.log(10 - 2);

////////////////    Exercise 11 ///////////////////////////////////////
var names = ['Sir Zia', 'Sir Zeeshan', 'Sir Danyal'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


////////////////    Exercise 12 ///////////////////////////////////////
var names = ['Sir Zia shb', 'Sir Zeeshan shb', 'Sir Danyal shb'];
var msg = 'Hello, ';
console.log(msg + names[0]);
console.log(msg + names[1]);
console.log(msg + names[2]);


////////////////    Exercise 13 ///////////////////////////////////////
var favouriteTrans = ['Honda Civic', 'Fortuner', 'Tesla', 'Prado'];
var qualties = ['I love ', 'Dream car', 'One of the most favourite', 'Old but Amazing'];
console.log("".concat(qualties[0], " -> ").concat(favouriteTrans[0]));
console.log("".concat(qualties[1], " -> ").concat(favouriteTrans[1]));
console.log("".concat(qualties[2], " -> ").concat(favouriteTrans[2]));
console.log("".concat(qualties[3], " -> ").concat(favouriteTrans[3]));


////////////////    Exercise 14 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
var msg = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg);


////////////////    Exercise 15 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
var deletedguest = guests.pop();
var deletedguestMsg = deletedguest + ' is not comming at today party ';
guests.push('Noman');
var msg = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg + '\t\n');
console.log(deletedguestMsg);


////////////////    Exercise 16 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman'); //add element at beg
guests.splice(2, 0, 'Hafiz'); //at middle 
guests.push('CEO');
var msg = " Come at my home to enjoy party according to your Lavish. ";
var msgtoCall = "Guey's our big dinner is ready ";
console.log(guests);
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg);
console.log(guests[3] + msg);
console.log(guests[4] + msg);
console.log(guests[5] + msg + '\t\n');
console.log(msgtoCall);


////////////////    Exercise 17 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman'); //add element at beg
guests.splice(2, 0, 'Hafiz'); //at middle 
guests.push('CEO');
var msg = " please come to dinner ";
var msgtoCall = "Guey's our big dinner is ready ";
console.log(guests);
console.log('Sorry! we have space for only two persons ');
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner." + '\n');
//invited person below 
console.log(msgtoCall);
console.log(guests.pop() + ', ' + msg);
console.log(guests.pop() + ', ' + msg);
console.log(guests);


////////////////    Exercise 18 ///////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ['new yark', 'swizer land', 'germany', 'dubai'];
var alphaOrder = __spreadArray([], locations, true);
console.log(locations);
console.log('\nAlphabatical order : ');
console.log(alphaOrder.sort());
console.log('\nOriginal Array : ');
console.log(locations);
//reverse order of aplhabatical
console.log('\nReverse alphabatical order : ');
console.log(alphaOrder.reverse());
//original array
console.log('\nOriginal Array : ');
console.log(locations);
//original order reverse
console.log('\nReverse original order array');
console.log(locations.reverse());
//again reverse original array
console.log('\n Again reverse original order array');
console.log(locations.reverse());
//change location sort 
console.log('\nReverse alphabatical order : ');
console.log(locations.sort());
//again reverse alphabatical order
console.log('\n Again reverse alphabatical order : ');
console.log(locations.reverse());


////////////////    Exercise 19 ///////////////////////////////////////
"use strict";
exports.__esModule = true;
exports.guests = void 0;
exports.guests = './p-17/';
var totalPeople = exports.guests.length;
console.log('We are inviting ' + totalPeople + ' People in dinner at 9:00 PM');


////////////////    Exercise 20 ///////////////////////////////////////
var countries;
var cities;
var language;
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var keya = [];
countries = ['Japan', 'Pakistan', 'America', 'India', 'England'];
cities = ['Tokyo', 'Lahore', 'New York', 'Bombay', 'Canada'];
language = ['Japani', 'Urdu', 'English', 'Hindi', 'Enlish'];
keya.push('Country  ', ' City ', ' Language ');
list1.push(countries[0], cities[0], language[0]);
list2.push(countries[1], cities[1], language[1]);
list3.push(countries[2], cities[1], language[2]);
list4.push(countries[3], cities[3], language[3]);
list5.push(countries[4], cities[4], language[4]);
var result = {};
function convertToObj(a, b) {
    if (a.length != b.length || a.length == 0 || b.length == 0) {
        return null;
    }
    var obj = {};
    // Using the foreach method
    a.forEach(function (k, i) { obj[k] = b[i]; });
    return obj;
}
console.log(convertToObj(keya, list1));
console.log(convertToObj(keya, list2));
console.log(convertToObj(keya, list3));
console.log(convertToObj(keya, list4));
console.log(convertToObj(keya, list5));

//exercise 22
console.log("_______________Exercise 22________________");
console.log(invitees[23]);

//exercise 23
console.log("_______________Exercise 23 & 24________________");
let car = "subaru";

console.log("Is car == 'subaru' : ", car === "subaru" ? "true" : "fasle");
console.log("Is car == 'sabaru' : ", car === "sabaru" ? "true" : "fasle");
console.log("0 == '0': ", 0 == "0" ? "true" : "False");
console.log("0 === '0': ", 0 === "0" ? "true" : "False");
console.log("NUll === Null: ", null === null ? "true" : "False");
console.log(
  "undefined === undefined: ",
  undefined === undefined ? "true" : "False"
);
console.log(
  "Infinity === Infinity: ",
  Infinity === Infinity ? "true" : "False"
);
console.log("Object === Object: ", person === Object ? "true" : "False");
console.log("True === False: ", true === false ? "true" : "False");
console.log("Object === Object: ", person === Object ? "true" : "False");

//exercise 24
console.log(
  "Is car == 'subaru' : ",
  car.toLowerCase() === "subaru" ? "true" : "fasle"
);

console.log(
  "Is car !== 'subaru' : ",
  car.toLowerCase() !== "subaru" ? "true" : "fasle"
);
console.log(
  "length of invitees > length of locations: ",
  invitees.length > locations.length ? "true" : "false"
);
console.log(
  "length of invitees < length of locations: ",
  invitees.length < locations.length ? "true" : "false"
);
console.log(
  "type of invitees = array: ",
  typeof locations == "array" ? "true" : "false"
);
console.log(
  "type of invitees = object: ",
  typeof locations == "object" ? "true" : "false"
);
console.log(
  "is france in locations: ",
  "france" in locations ? "true" : "false"
);
console.log(
  "is france a string and in locations: ",
  typeof "france" === "string" && "france" in locations ? "true" : "false"
);
//exercise 25
console.log("_______________Exercise 25________________");
let alien_color = "green";
if (alien_color === "green") console.log("player just earned 5 points");
if (alien_color === "red")
  console.log("if you are seeing this that means i am wrong");

//exercise 26
console.log("_______________Exercise 26________________");
if (alien_color === "green")
  console.log("player just earned 5 points for shooting the alien.");
else console.log("player just earned 10 points");

//exercise 27
console.log("_______________Exercise 27________________");
if (alien_color === "green") console.log("player just earned 5 points");
else if (alien_color === "yellow") console.log("player just earned 10 points");
else if (alien_color === "red") console.log("player just earned 15 points");
//exercise 28
console.log("_______________Exercise 28________________");
let age = 22;
if (age < 2) console.log("person is a baby");
else if (age >= 2 && age < 4) console.log("person is a toddler");
else if (age >= 4 && age < 13) console.log("person is a kid");
else if (age >= 13 && age < 20) console.log("person is a teenager");
else if (age >= 20 && age < 65) console.log("person is a adult");
else console.log("Person is an elder");
//exercise 29
console.log("_______________Exercise 29________________");
let favorite_fruits = ["mango", "peach", "banana"];

if (favorite_fruits.includes("mango"))
  console.log(`such as You really like mangos!`);
if (favorite_fruits.includes("peach"))
  console.log(`such as You really like peach!`);
if (favorite_fruits.includes("banana"))
  console.log(`such as You really like banana!`);
if (favorite_fruits.includes("mangoa")) console.log(`I never run`);
if (favorite_fruits.includes("mangol")) console.log(`I never run`);
//exercise 30
console.log("_______________Exercise 30________________");
let username = ["us1", "us2", "us3", "us4", "admin"];
for (let i = 0; i < username.length; i++) {
  if (username[i] === "admin")
    console.log("Hello admin, would you like to see a status report?");
  else
    console.log("Greetings, ", username[i], ", thank you for logging in again");
}
//exercise 31
console.log("_______________Exercise 31________________");
username = [];
if (username.length < 1) console.log("We need to find some users!");
//exercise 32
console.log("_______________Exercise 32________________");
let current_users = ["us1", "us2", "us3", "us4", "admin"];
let new_users = ["us11", "us22", "us3", "us44", "admin"];

new_users.map((idx) => {
  if (current_users.includes(idx.toLowerCase())) {
    console.log(idx, " you will need to enter a new username");
  } else console.log("username is available");
});
//exercise 33
console.log("_______________Exercise 33________________");
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal.length; i++) {
  if (ordinal[i] === 1) console.log(ordinal[i] + "st");
  else if (ordinal[i] === 2) console.log(ordinal[i] + "nd");
  else console.log(ordinal[i] + "th");
}

//exercise 34
console.log("_______________Exercise 34________________");
const pizza = ["malai boti", "supreme", "cheese"];

console.log(
  "I seriously very much love pizza that is mild in spice and has some juicy stuff and filled crust, such as"
);
pizza.map((idx) => console.log(`I really love ${idx}`));

//exercise 35
console.log("_______________Exercise 35________________");
let animal = ["dog", "cat", "rabbit"];
let statement = {
  dog: "A dog will make a great pet",
  cat: "cat is funny",
  rabbit: "rabbit is fluffy",
};
animal.map((idx) => console.log(`${statement[idx]}`));

//exercise 36 and 37
console.log("_______________Exercise 36 & 37________________");
const make_shirt = (size = "L", text = "I love Js") => {
  console.log(
    `The size selected is ${size} and the message that will be printed is: ${text}`
  );
};
make_shirt("M", "I love Js");

//exercise 38
console.log("_______________Exercise 38________________");
const describe_city = (city, country = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};

describe_city("Lahore");
describe_city("Peshawar");
describe_city("Peris", "France");

//exercise 39
console.log("_______________Exercise 39________________");
const city_country = (city, country = "Pakistan") => {
  console.log(`"${city}, ${country}"`);
};
city_country("Lahore");
//exercise 40
console.log("_______________Exercise 40________________");
const make_album = (artist_name, album_title, track = 0) => {
  console.log({
    "Artist Name": artist_name,
    "Album Title": album_title,
    track: track,
  });
};
make_album("Sameer", "ajeeb dastan hy");
make_album("Sooraj", "Waqat asan hy");
make_album("laiba", "Zindgi haseen ha");
make_album("amna", "Zindgi haseen ha", 20);

////////////////    Exercise 41 ///////////////////////////////////////
var magician = ['magician1', 'magician2', 'magician3'];
var show_magicians = function (arr) {
    arr.map(function (idx) { return console.log(idx); });
};
show_magicians(magician);


////////////////    Exercise 42 &&& 43 ///////////////////////////////////////
var magicians = ['Harry Houdini', 'David Blaine', 'Teller'];
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var old_magicions = [];
//      exercise 42 
var make_great = function (arr) {
    var great_magicians = [];
    for (var i = 0; i < arr.length; i++) {
        great_magicians.push("The Great " + arr[i]);
        old_magicions.push(arr[i]);
    }
    show_magicians(great_magicians);
};
show_magicians(magicians);
make_great(magicians);
///only comment to clear answer
console.log('\n\n *************** old magitions ************** \n');
show_magicians(old_magicions);
////////////////    Exercise 44 ///////////////////////////////////////
var make_sandwich = function (arr) {
    console.log("\n\n********I'll make you a great sandwich:************");
    for (var i = 0; i < arr.length; i++) {
        console.log("  ...adding " + arr[i] + " to your sandwich.");
    }
    console.log('Your sandwich is ready');
};
var item_toadd = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'];
var item_toadd1 = ['turkey', 'apple slices', 'honey mustard'];
var item_toadd2 = ['peanut butter', 'strawberry jam'];
make_sandwich(item_toadd);
console.log('\n\t /////********************** adding things to your 2nd pizza ***********');
make_sandwich(item_toadd1);
console.log('\n\t /////********************** adding things to your 3nd pizza ***********');
make_sandwich(item_toadd2);

//exercise 45
console.log("_______________Exercise 45________________");
const make_car = (manufacturer, model, args) => {
  let obj = { manufacturer, model };
  //   console.log(Object.entries(args));
  Object.entries(args).map((idx) => (obj[idx[0]] = idx[1]));
  console.log(obj);
};
make_car("honda", "17", { doors: 2, wheels: 4 });