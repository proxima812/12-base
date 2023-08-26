import { useEffect, useState } from "react";

function SavedPosts() {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  const savedPosts = localStorage.getItem("saved-posts");
  setPosts(savedPosts ? JSON.parse(savedPosts) : []);
 }, []);

 function getBackgroundColor(format) {
  switch (format) {
   case ".pdf":
    return "bg-red-500";
   case ".docx":
    return "bg-blue-500";
   case ".doc":
    return "bg-blue-400";
   case ".epub":
    return "bg-orange-400";
   case ".jpeg":
    return "bg-sky-400";
   case ".png":
    return "bg-green-600";
   case ".fb2":
    return "bg-blue-700";
   case ".zip":
    return "bg-slate-900";
   default:
    return "bg-slate-400";
  }
 }

 function getTextClass(size) {
  return size.includes("MB") ? "text-red-500" : "text-green-500";
 }

 return (
  <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {posts.map((item) => (
    <>
     <a
      href={item.id}
      className="flex flex-col justify-between gap-5 p-5 rounded-md bg-white"
     >
      <h3 className="text-xl font-bold">{item.title}</h3>
      <div className=" flex gap-2 justify-between items-center">
       <span
        className={`text-white rounded-md font-medium tracking-tight px-2 py-1 leading-none ${getBackgroundColor(
         item.format
        )}`}
       >
        {item.format}
       </span>
       <span className={`text-xs ${getTextClass(item.size)}`}>{item.size}</span>
      </div>
     </a>
    </>
   ))}
  </div>
 );
}

export default SavedPosts;
