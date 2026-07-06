import React, { useState } from "react";

function Ikkinchisi() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Future of Web Development",
      category: "Technology",
      date: "2025-11-20",
      status: "Published",
    },
    {
      id: 2,
      title: "Mastering Productivity",
      category: "Productivity",
      date: "2025-11-18",
      status: "Published",
    },
    {
      id: 3,
      title: "Design Principles That Matter",
      category: "Design",
      date: "2025-11-15",
      status: "Draft",
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      category: "Technology",
      date: "2025-11-12",
      status: "Published",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Technology");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      date: new Date().toISOString().split("T")[0],
      status: "Published",
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
  };

  function handleDelete(id) {
    setPosts(posts.filter((item) => item.id !== id));
  }

  function handleStartEdit(item) {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditCategory(item.category);
    setEditStatus(item.status);
  }

  function handleSaveEdit(id) {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, title: editTitle, category: editCategory, status: editStatus }
          : post
      )
    );
    setEditingId(null);
  }

  const getCategoryStyles = (category) => {
    switch (category) {
      case "Technology":
        return "bg-[#eff6ff] text-[#3b82f6]";
      case "Productivity":
        return "bg-[#f3e8ff] text-[#9333ea]";
      case "Design":
        return "bg-[#e0e7ff] text-[#4f46e5]";
      default:
        return "bg-slate-50 text-slate-500";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#0f172a]">Recent Posts</h2>
          <p className="text-xs text-slate-400 mt-0.5">Manage and monitor your latest content</p>
        </div>

        <form onSubmit={handleAddPost} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Post sarlavhasi..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-400 text-slate-800"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none text-slate-700 cursor-pointer"
          >
            <option value="Technology">Technology</option>
            <option value="Productivity">Productivity</option>
            <option value="Design">Design</option>
          </select>
          <button
            type="submit"
            className="px-4 py-1.5 text-xs font-semibold bg-[#4f46e5] text-white rounded-lg hover:bg-[#4338ca] transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase">
              <th className="pb-3 font-medium">Title</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50 text-sm">
            {posts.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/30 transition-colors">
                <td className="py-4 font-semibold text-[#1e293b]">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-2 py-1 border border-slate-200 rounded focus:outline-none text-sm font-normal"
                    />
                  ) : (
                    item.title
                  )}
                </td>

                <td className="py-4">
                  {editingId === item.id ? (
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      className="px-1 py-1 border border-slate-200 rounded text-xs focus:outline-none"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Productivity">Productivity</option>
                      <option value="Design">Design</option>
                    </select>
                  ) : (
                    <span className={`${getCategoryStyles(item.category)} text-xs font-medium px-2.5 py-1 rounded-full`}>
                      {item.category}
                    </span>
                  )}
                </td>

                <td className="py-4 text-xs text-slate-400">{item.date}</td>

                <td className="py-4">
                  {editingId === item.id ? (
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="px-1 py-1 border border-slate-200 rounded text-xs focus:outline-none"
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  ) : (
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.status === "Published" ? "bg-[#ecfdf5] text-[#10b981]" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </td>

                <td className="py-4 text-right text-xs font-semibold space-x-3">
                  {editingId === item.id ? (
                    <>
                      <button onClick={() => handleSaveEdit(item.id)} className="text-[#10b981] hover:underline">
                        Save
                      </button>
                      <button onClick={() => setEditingId(null)} className="text-slate-400 hover:underline">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleStartEdit(item)} className="text-[#4f46e5] hover:underline">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="text-rose-500 hover:underline">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ikkinchisi;