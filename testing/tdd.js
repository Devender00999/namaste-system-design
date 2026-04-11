// palindrome check

function isPalindrome(str) {
   if (!str) return null;

   if (typeof str === "number") {
      str = Math.abs(str).toString();
   }
   if (str.length == 1) return true;

   if (typeof str != "string") return null;

   const reverse = str.split("").reverse().join("");
   if (reverse.toLowerCase() == str.toLowerCase()) return true;

   return false;
}

module.exports = { isPalindrome };
console.log(isPalindrome(-121));
