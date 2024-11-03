//========================?Q-9==================================

/** format */

// using if, else if, else write code for below conditions:
/*
    if Shaden is a mentor print out "Hi Shaden, you are a mentor"
    if Shaden is a student print out "Hi Shaden, you are student"
    if Shaden is a teacher print out "Hi Shaden, you are a teacher"
    if she is none of above, print out "Hi Shaden, you should join APS"
*/

let yourName = "Shaden";
let yourRole = "mentor"
let text = "Hi name, you are a role"

if (yourRole === "mentor") {
    console.log(text.replace("name" , yourName).replace("role" , yourRole));
}
else if (yourRole === "student") {
    console.log(text.replace("name" , yourName).replace("role" , yourRole));
}
else if (yourRole === "teacher") {
    console.log(text.replace("name" , yourName).replace("role" , yourRole));
}
else {
    console.log("Hi name, you should join APS".replace("name" , yourName));
}
/* 
EXPECTED RESULT
---------------
Hi Shaden, you are a mentor.
*/



// Done!