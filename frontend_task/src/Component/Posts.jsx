import React from "react";

function Posts({ post }) {
  return (
    <div className="mt-10">
      <h1 className="text-xl pb-3">{post.name}</h1>
      <img src={post.image} alt="" className="rounded-lg w-full" />
    </div>
  );
}

export default Posts;
