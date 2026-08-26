type Comment = {
   id: number;
   author: {
      name: string;
      avatar: string;
   };
   content: string;
   createdAt: string;
   likes: number;
   replies: Comment[];
};

const CommentBox = ({ data }: { data: Comment[] }) => {
   return (
      <div className="flex flex-col gap-4">
         {data?.map((comment) => {
            return (
               <div key={comment.id} className="">
                  <div className="flex items-center gap-1">
                     <img className="w-8 h-8 rounded-full bg-amber-50" src={comment.author.avatar} />
                     <span className="text-sm">{comment?.author?.name}</span>
                  </div>
                  <div className="text-sm ml-9">{comment?.content}</div>

                  {comment?.replies && (
                     <div style={{ marginLeft: 20, marginTop: 5 }}>
                        <CommentBox data={comment.replies} />
                     </div>
                  )}
               </div>
            );
         })}
      </div>
   );
};

export default CommentBox;
