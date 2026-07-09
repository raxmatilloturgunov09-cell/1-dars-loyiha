import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

function Yakun() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      title,
      content,
      category,
    });

    setTitle("");
    setContent("");
    setCategory("Technology");
    setImage(null);
  }

  function handleCancel() {
    setTitle("");
    setContent("");
    setCategory("Technology");
    setImage(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex gap-6"
    >
      <div className="flex-1">
        <div className="mb-5">
          <label className="text-sm font-medium text-slate-700">
            Post Title
          </label>

          <input
            type="text"
            placeholder="Enter post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Content
          </label>

          <textarea
            rows="14"
            placeholder="Write your post content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mt-2 border border-slate-200 rounded-lg p-4 outline-none resize-none focus:border-indigo-500"
          ></textarea>
        </div>
      </div>

      <div className="w-72">
        <div className="border border-slate-200 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-lg mb-4">
            Post Settings
          </h3>

          <label className="text-sm text-slate-600">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-2 border border-slate-200 rounded-lg px-3 py-3 outline-none"
          >
            <option>Technology</option>
            <option>Design</option>
            <option>Productivity</option>
          </select>
        </div>

        <div className="border border-slate-200 rounded-xl p-5">
          <h3 className="font-semibold text-lg mb-4">
            Featured Image
          </h3>

          <label className="border-2 border-dashed border-slate-300 rounded-xl h-52 flex flex-col justify-center items-center cursor-pointer hover:border-indigo-500 transition">
            {image ? (
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <FiUpload size={35} className="text-slate-500" />

                <p className="text-sm text-slate-500 mt-3 text-center">
                  Click to upload or drag and drop
                </p>

                <span className="text-xs text-slate-400 mt-2">
                  PNG, JPG or WEBP
                </span>
              </>
            )}

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImage}
            />
          </label>

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              className="flex-1 bg-[#4f46e5] hover:bg-[#4338ca] text-white py-3 rounded-lg font-medium"
            >
              Publish Post
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="px-5 border border-slate-300 rounded-lg hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Yakun;