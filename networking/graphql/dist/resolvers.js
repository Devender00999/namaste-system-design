export const resolvers = {
    Query: {
        authors: () => {
            return [{ id: 1, name: "Mark Mansion" }];
        },
        books: () => {
            return [
                {
                    id: 1,
                    title: "Subtle art of not giving a f*ck",
                    publishedYear: 2021,
                },
            ];
        },
    },
};
