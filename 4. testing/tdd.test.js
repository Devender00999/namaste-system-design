const { isPalindrome } = require("./tdd");

test("abc -> false", () => {
   const result = isPalindrome("abc");
   expect(result).toBe(false);
});

test("aba -> true", () => {
   const result = isPalindrome("aba");
   expect(result).toBe(true);
});

test("a -> true", () => {
   const result = isPalindrome("a");
   expect(result).toBe(true);
});

test("123 -> false", () => {
   const result = isPalindrome(123);
   expect(result).toBe(false);
});

test("121 -> true", () => {
   const result = isPalindrome(121);
   console.log(result);
   expect(result).toBe(true);
});

test("-121 -> true", () => {
   const result = isPalindrome(-121);
   expect(result).toBe(true);
});

test("Aba -> true", () => {
   const result = isPalindrome("Aba");
   expect(result).toBe(true);
});

test("Aba   -> true", () => {
   const result = isPalindrome("  Aba  ");
   expect(result).toBe(true);
});

test("no input   -> nul", () => {
   const result = isPalindrome();
   expect(result).toBeNull();
});

test("null -> nul", () => {
   const result = isPalindrome();
   expect(result).toBeNull();
});

// aba -> true
// no input 0-> null
// single -> true
// 123 -> false
// 121 -> true
// Negative number -121 -> true
// Boolean, {}, [], -> false
// Aba -> true
// "  abc  " => true
// length > 10 => null
