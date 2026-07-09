import React from "react";
import Yakun from "./Yakun";

function CreatPosts() {
  return (
    <div className="bg-[#fafafa] min-h-screen w-full p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Post</h1>
        <p className="text-sm text-slate-400">
          Fill in the details to create a new blog post
        </p>
      </div>

      <Yakun />
    </div>
  );
}

export default CreatPosts;