const { sortByAge } = require("./app");

test("testing if the first user is Elon after sorting", () => {
   const sortedData = sortByAge();
   expect(sortedData[0].name).toBe("Elon");
});

test("testing if the last user is Elon after sorting", () => {
   const sortedData = sortByAge();
   expect(sortedData[sortedData.length - 1].name).toBe("Simran");
});
