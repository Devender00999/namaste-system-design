const users = [
   { name: "Devender", age: 26 },
   { name: "Akshay", age: 28 },
   { name: "Simran", age: 80 },
   { name: "Elon", age: 10 },
];

function sortByAge() {
   const data = users.sort((a, b) => {
      return a.age - b.age;
   });
   return data;
}

module.exports = { sortByAge };
