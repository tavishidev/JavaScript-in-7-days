const store="   The cat is sleeping on the chair.  ";
const uppercase=store.toUpperCase();
const lowercase=store.toLowerCase();
const extraspace=store.trim();
console.log(store);
console.log("all in uppercase:",uppercase);
console.log("all in lowercase:",lowercase);
console.log(" extraspace removed:",extraspace);
console.log("lenth of string is:",store.length);
console.log("lenth of trimmed string:",extraspace.length);
console.log("first word is=",store.slice(3,6));
console.log("last word is=",store.slice(30,35));
console.log(store.replace("cat","dog"));
console.log(store.includes("chair"));








