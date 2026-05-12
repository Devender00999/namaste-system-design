const db = new Dexie("Todos");

db.version(1).stores({
   todos: "++id, task, status",
});

async function run() {
   const db = await indexedDB.open("todos");
   await db.todos.bulkPut([{ task: "Mark my word", status: false }]);

   //  const firstTodo = await db.todos.first();
   //  console.log(firstTodo);
}

run();
