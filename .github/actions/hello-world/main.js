import { getInput } from "@actions/core";

const firstGreeting = getInput("first-greeting");
const secondGreeting = getInput("second-greeting");
const thridGreeting = getInput("third-greeting");

console.log('Hello ${firstGreeting}')
console.log('Hello ${secondGreeting}')
if(thridGreeting) {
    console.log('Hello ${thridGreeting}')
}