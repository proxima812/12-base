import { useState } from "react";

function Search({ searchList, searchWords }) {
 const [query, setQuery] = useState("");
 const [posts, setPosts] = useState([]);

 const handleOnSearch = (e) => {
  const value = e.target.value;
  setQuery(value);

  if (value.length > 1) {
   const filteredList = searchList.filter((post) => {
    return (
     (post.name && post.name.toLowerCase().includes(value.toLowerCase())) ||
     post.format.toLowerCase().includes(value.toLowerCase())
    );
   });

   setPosts(filteredList);
  } else {
   setPosts([]);
  }
 };

 return (
  <>
   <div className="-mx-5 md:-mx-0 relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       fillRule="evenodd"
       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
       clipRule="evenodd"
      ></path>
     </svg>
    </div>
    <input
     type="text"
     value={query}
     className="bg-white shadow-sm outline-double outline-1 outline-slate-100 w-full rounded-lg block pl-[40px] pr-4 py-3"
     onChange={handleOnSearch}
     placeholder={searchWords}
    />
    <ul className="z-20 empty:bg-transparent bg-gray-200/60 backdrop-blur-sm empty:p-0 p-[20px] absolute flex flex-col gap-3 left-0 top-[60px] w-full overflow-auto rounded-lg">
     {query.length > 1 && (
      <p className="font-medium">
       📊 {posts.length === 1 ? "Найден" : "Найдено"} {posts.length}{" "}
       {posts.length === 1 ? "файл" : "файлов"}
      </p>
     )}
     {posts &&
      posts.map((post) => (
       <a href={`/base/${post.slug}`} key={post.slug}>
        <li className="flex justify-between gap-3 items-center rounded-lg bg-white p-4">
         <h3 className="font-bold leading-tight flex flex-wrap gap-1 items-end">
          {post.name}
          <span
           className={`text-xs ${
            post.size.includes("MB") ? "text-red-500" : "text-green-500"
           }`}
          >
           {post.size}
          </span>
         </h3>

         <span
          className={`text-white rounded-md font-medium tracking-tight p-1 leading-none ${
           post.format === ".pdf"
            ? "bg-red-500"
            : post.format === ".docx"
            ? "bg-blue-500"
            : post.format === ".doc"
            ? "bg-blue-400"
            : post.format === ".epub"
            ? "bg-orange-400"
            : post.format === ".jpeg"
            ? "bg-sky-400"
            : post.format === ".png"
            ? "bg-green-600"
            : post.format === ".fb2"
            ? "bg-blue-700"
            : post.format === ".zip"
            ? "bg-slate-900"
            : "bg-slate-400"
          }`}
         >
          {post.format}
         </span>
        </li>
       </a>
      ))}
    </ul>
   </div>
  </>
 );
}

export default Search;
