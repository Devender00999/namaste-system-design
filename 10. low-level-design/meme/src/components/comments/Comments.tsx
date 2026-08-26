import CommentBox from "./CommentBox";

const Comments = () => {
   const data = [
      {
         id: 1,
         author: {
            name: "Aarav Sharma",
            avatar: "https://robohash.org/aarav-sharma.png",
         },
         content: "This article explains the concept really well. The examples are especially helpful.",
         createdAt: "2026-08-26T08:00:00Z",
         likes: 12,
         replies: [
            {
               id: 2,
               author: {
                  name: "Priya Mehta",
                  avatar: "https://robohash.org/priya-mehta.png",
               },
               content: "Agreed! I finally understood how the nested structure works.",
               createdAt: "2026-08-26T08:15:00Z",
               likes: 5,
               replies: [
                  {
                     id: 3,
                     author: {
                        name: "Rohan Kapoor",
                        avatar: "https://robohash.org/rohan-kapoor.png",
                     },
                     content: "Same here. The last example made it much clearer.",
                     createdAt: "2026-08-26T08:22:00Z",
                     likes: 2,
                     replies: [],
                  },
               ],
            },
            {
               id: 4,
               author: {
                  name: "Neha Singh",
                  avatar: "https://robohash.org/neha-singh.png",
               },
               content: "I have one question about the second example.",
               createdAt: "2026-08-26T08:30:00Z",
               likes: 3,
               replies: [],
            },
         ],
      },
      {
         id: 5,
         author: {
            name: "Vikram Patel",
            avatar: "https://robohash.org/vikram-patel.png",
         },
         content: "Would love to see a follow-up covering performance optimization.",
         createdAt: "2026-08-26T07:45:00Z",
         likes: 8,
         replies: [
            {
               id: 6,
               author: {
                  name: "Ananya Rao",
                  avatar: "https://robohash.org/ananya-rao.png",
               },
               content: "Yes, especially for very large comment trees.",
               createdAt: "2026-08-26T07:55:00Z",
               likes: 4,
               replies: [],
            },
         ],
      },
   ];
   return (
      <div>
         <CommentBox data={data} />
      </div>
   );
};

export default Comments;
