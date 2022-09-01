let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum."

let regex1 = /l\o/gi; // looking for space with g = global and i =case insensitive
let regex2 = /\um/g; // looking for um with g=global search 

console.log("exec: ", regex1.exec(text));
console.log("exec: ", regex2.exec(text));

console.log("match: ", text.match(regex1));
console.log("match: ", text.match(regex2));

console.log("search: ", text.search(regex1));
console.log("search: ", text.search(regex2));

console.log("replace: ", text.replace(regex1, "Found"));
console.log("replace: ", text.replace(regex2, "Found2"));

console.log(text.split(regex1));
