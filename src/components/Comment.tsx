'use client'
import React, { useState } from "react";

const CommentsSection = () => {
    
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  
  const [newComment, setNewComment] = useState<string>("");
  const [name, setName] = useState<string>("");

  
  const handleAddComment = () => {
    if (newComment.trim() === "" || name.trim() === "") return; 

    setComments([...comments, { name, text: newComment }]); 
    setNewComment(""); 
    setName(""); 
  };

  return (
    <div className="p-4 rounded-lg shadow-md mt-6 flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Comments</h2>

        
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-800"
          />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="p-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-800"
          />
          <button
            onClick={handleAddComment}
            className="px-2 py-1 bg-blue-950 text-white rounded-md hover:bg-blue-800"
          >
            Add Comment
          </button>
        </div>

        
        <div className="space-y-2">
          {comments.map((comment, index) => (
            <div key={index} className="p-2  rounded-md shadow-sm">
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;