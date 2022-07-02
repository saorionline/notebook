let greeting = process.env.NAME || 'No name';
let web = process.env.WEB || "No web";
let idea = process.env.IDEA || "No idea";

console.log('Hi ' + greeting);
console.log('My site is ' + web);
console.log('My idea is ' + idea )