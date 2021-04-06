// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
};


function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
}

//example from lab
// function outer(greeting, msg = "It's a fine day to learn") { // 2
//     const innerFunction = function (name, lang = "Python") { // 3
//         return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     }
//     return innerFunction("student", "JavaScript"); // 5
// }

// outer("Hello"); // 1
//   //=> "Hello, student! It's a fine day to learn JavaScript"


function demoChain(name) {
    const part1 = 'hi'

    return function () {

        const part2 = 'there'

        return function () {
            console.log(`${part1.toUpperCase()} ${part2} ${name}`);
        }

    }

}

demoChain("Dr. Stephen Strange")()() //=> HI there Dr. Stephen Strange 



function wrapAdjective(flair = "*") {
    return function (msg = "special") {
        return `You are ${flair}${msg}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer");