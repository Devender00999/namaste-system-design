const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Hello From Timer 1"), 0);

setImmediate(() => console.log("Hello From Immediate 1"));

console.log("Hello From Top Level");
process.env.UV_THREADPOOL_SIZE = 1;

fs.readFile("", "utf-8", (err, data) => {
   console.log("File read completed");
   //  setTimeout(() => console.log("Hello From Timer 2"), 0);
   //  setTimeout(() => console.log("Hello From Timer 3"), 5 * 1000);
   //  setImmediate(() => console.log("Hello From Immediate 2"));

   crypto.pbkdf2("password1", "salt", 100000, 512, "sha512", () => {
      console.log("Password 1 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password2", "salt", 100000, 512, "sha512", () => {
      console.log("Password 2 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password3", "salt", 100000, 512, "sha512", () => {
      console.log("Password 3 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password4", "salt", 100000, 512, "sha512", () => {
      console.log("Password 4 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password1", "salt", 100000, 512, "sha512", () => {
      console.log("Password 1 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password2", "salt", 100000, 512, "sha512", () => {
      console.log("Password 2 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password3", "salt", 100000, 512, "sha512", () => {
      console.log("Password 3 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password4", "salt", 100000, 512, "sha512", () => {
      console.log("Password 4 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
   crypto.pbkdf2("password5", "salt", 100000, 512, "sha512", () => {
      console.log("Password 5 completed at ", Date.now() - start, "ms");
   });
});

// initial project => top level code => require module => event callack register => start event loop
// Expired timeout => IO Polling => set Immedicate =>  close callback
