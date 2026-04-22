const data = {
   authors: [
      {
         id: "1",
         name: "Rohit Sharma",
         bookIds: ["101", "102"],
      },
      {
         id: "2",
         name: "Mark Manson",
         bookIds: ["103"],
      },
      {
         id: "3",
         name: "Paulo Coelho",
         bookIds: ["104", "105"],
      },
   ],

   books: [
      {
         id: "101",
         title: "Who Will Cry When You Die",
         authorId: "1",
         publishedYear: 2021,
      },
      {
         id: "102",
         title: "The Monk Who Sold His Ferrari",
         authorId: "1",
         publishedYear: 2019,
      },
      {
         id: "103",
         title: "The Subtle Art of Not Giving a F*ck",
         authorId: "2",
         publishedYear: 2016,
      },
      {
         id: "104",
         title: "The Alchemist",
         authorId: "3",
         publishedYear: 1988,
      },
      {
         id: "105",
         title: "Brida",
         authorId: "3",
         publishedYear: 1990,
      },
   ],
};
export const resolvers = {
   Book: {
      author: (parent, args, context, info) => {
         return data.authors.find((author) => author.id === parent.authorId);
      },
   },
   Author: {
      books: (parent, args) => {
         return data.books.filter((book) => {
            return parent.bookIds.includes(book.id);
         });
      },
   },
   Query: {
      books: () => data.books,
      authors: () => data.authors,
   },

   Mutation: {
      addBook: (parent, args) => {
         const newBook = { ...args, id: data.books.length + 1 };
         data.books.push(newBook);
         return newBook;
      },

      deleteBook: (parent, args) => {
         console.log(args);
         const book = data.books.find((currentBook) => currentBook.id == args.bookId);
         console.log(data.books);

         data.books = data.books.filter((currentBook) => currentBook.id !== book.id);
         return book;
      },
   },
};
