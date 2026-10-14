// "use client"


// import React, { useMemo, useState } from 'react'
// import CommonButton from '../../components/admin/CommonButton'
// import ModalComponent from '../../components/admin/ModelComponent'
// import BlogPostForm from "../../components/admin/BlogPostForm";
// import ApiService from '../../src/services/Apiservices';
// import useSWR from 'swr'
// import BlogPostsTable from '../../components/admin/Blogposttable';
// import {
//   FiEye,
//   FiEdit2,
//   FiTrash2,
//   FiStar,
//   FiCalendar,
//   FiSearch,
//   FiPlus,
//   FiRotateCcw,
//   FiFilter,
//   FiChevronDown,
// } from "react-icons/fi";
// import AuthService from '../../src/services/Authservices';



// const Blogpage = () => {
//   const [modalOpen, setModalOpen] = useState(false)
//    const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [status, setStatus] = useState("");

//   const {
//     data,
//     error,
//     isLoading,
//   } = useSWR("blog-post", ApiService.get);

//   const posts = data?.data || [];

//   /* --------------------------------
//      Categories
//   -------------------------------- */
//   const categories = useMemo(() => {
//     return [...new Set(
//       posts
//         .map((post) => post.category_name)
//         .filter(Boolean)
//     )];
//   }, [posts]);

//   /* --------------------------------
//      Filter
//   -------------------------------- */
//   const filteredPosts = useMemo(() => {
//     const searchText = search.toLowerCase().trim();

//     return posts.filter((post) => {
//       const matchesSearch =
//         !searchText ||
//         post.title?.toLowerCase().includes(searchText) ||
//         post.category_name?.toLowerCase().includes(searchText) ||
//         post.slug?.toLowerCase().includes(searchText);

//       const matchesCategory =
//         !category || post.category_name === category;

//       const matchesStatus =
//         !status || post.status === status;

//       return matchesSearch && matchesCategory && matchesStatus;
//     });
//   }, [posts, search, category, status]);

//   /* --------------------------------
//      Reset
//   -------------------------------- */
//   const handleReset = () => {
//     setSearch("");
//     setCategory("");
//     setStatus("");
//   };

//   /* --------------------------------
//      Date
//   -------------------------------- */
//   const formatDate = (date) => {
//     if (!date) return "-";

//     return new Date(date).toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   /* --------------------------------
//      Error
//   -------------------------------- */
//   if (error) {
//     return (
//       <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
//         Failed to load blog posts.
//       </div>
//     );
//   }

//   const userId = AuthService.getUserId()
//   const handleSave = async (formdata) => {
//   try {
//     // console.log("Form Data:", formdata);
//     // return

//    const payload = new FormData();

//     payload.append("title", formdata.title);
//     payload.append("slug", formdata.slug);
//     payload.append("category_id", formdata.category || "");
//     payload.append("excerpt", formdata.excerpt || "");
//     payload.append("content", formdata.content || "");
//     payload.append("status", formdata.status || "draft");
//     payload.append("author_id", formdata.userId);

//     payload.append(
//       "tags",
//       JSON.stringify(formdata.tags || [])
//     );

//     payload.append(
//       "seoTitle",
//       formdata.seoTitle || ""
//     );

//     payload.append(
//       "seoDescription",
//       formdata.seoDescription || ""
//     );

//     // Image
//     if (formdata.featuredImage instanceof File) {
//       payload.append(
//         "featured_image",
//         formdata.featuredImage
//       );
//     }

//     // Console FormData
//     console.log("========== FORM DATA ==========");

//     for (const [key, value] of payload.entries()) {
//       if (value instanceof File) {
//         console.log(key, {
//           name: value.name,
//           type: value.type,
//           size: value.size,
//         });
//       } else {
//         console.log(key, value);
//       }
//     }

//     console.log("================================");


    

//     const res = await ApiService.post("blog-post",payload);

//     console.log("Response:", res);

//     if (res?.success) {
//       setModalOpen(false);
//     }
//   } catch (error) {
//     console.error("Save Error:", error);
//   }
// };
//   return (
//     <div>
//       {/* <div>
//        <CommonButton onClick={() => setModalOpen(true)}>
//           + Add Post
//         </CommonButton>
//       </div> */}
//         {/* <div>
//             card 
//         </div> */}


//          <div className="w-full">
        
//               {/* =================================
//                   TOP HEADER
//               ================================= */}
//               <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        
//                 <div>
//                   <div className="flex items-center gap-2">
//                     <h1 className="text-xl font-bold tracking-tight text-gray-900">
//                       Blog Posts
//                     </h1>
        
//                     <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
//                       {posts.length}
//                     </span>
//                   </div>
        
//                   <p className="mt-1 text-xs text-gray-500">
//                     Create, manage and publish your blog content
//                   </p>
//                 </div>
        
//                 <button
//                   type="button"
//                   className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
//                   onClick={()=>setModalOpen(true)}
//                 >
//                   <FiPlus size={15} />
//                   Add New Post
//                 </button>
        
//               </div>
        
//               {/* =================================
//                   FILTER BAR
//               ================================= */}
//               <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        
//                 <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        
//                   {/* Search */}
//                   <div className="relative flex-1">
        
//                     <FiSearch
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
        
//                     <input
//                       type="text"
//                       value={search}
//                       onChange={(e) => setSearch(e.target.value)}
//                       placeholder="Search by title, category or slug..."
//                       className="
//                         h-9
//                         w-full
//                         rounded-lg
//                         border border-gray-200
//                         bg-gray-50
//                         pl-9
//                         pr-3
//                         text-xs
//                         text-gray-700
//                         outline-none
//                         transition
//                         placeholder:text-gray-400
//                         focus:border-gray-400
//                         focus:bg-white
//                         focus:ring-2
//                         focus:ring-gray-100
//                       "
//                     />
        
//                   </div>
        
//                   {/* Category */}
//                   <div className="relative">
        
//                     <FiFilter
//                       size={14}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
        
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className="
//                         h-9
//                         min-w-[170px]
//                         appearance-none
//                         rounded-lg
//                         border border-gray-200
//                         bg-gray-50
//                         pl-9
//                         pr-8
//                         text-xs
//                         font-medium
//                         text-gray-600
//                         outline-none
//                         focus:border-gray-400
//                         focus:bg-white
//                       "
//                     >
//                       <option value="">All Categories</option>
        
//                       {categories.map((item) => (
//                         <option key={item} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
        
//                     <FiChevronDown
//                       size={14}
//                       className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
        
//                   </div>
        
//                   {/* Status */}
//                   <div className="relative">
        
//                     <select
//                       value={status}
//                       onChange={(e) => setStatus(e.target.value)}
//                       className="
//                         h-9
//                         min-w-[140px]
//                         appearance-none
//                         rounded-lg
//                         border border-gray-200
//                         bg-gray-50
//                         px-3
//                         pr-8
//                         text-xs
//                         font-medium
//                         text-gray-600
//                         outline-none
//                         focus:border-gray-400
//                         focus:bg-white
//                       "
//                     >
//                       <option value="">All Status</option>
//                       <option value="published">Published</option>
//                       <option value="draft">Draft</option>
//                     </select>
        
//                     <FiChevronDown
//                       size={14}
//                       className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
//                     />
        
//                   </div>
        
//                   {/* Reset */}
//                   <button
//                     type="button"
//                     onClick={handleReset}
//                     className="
//                       inline-flex
//                       h-9
//                       items-center
//                       justify-center
//                       gap-2
//                       rounded-lg
//                       border border-gray-200
//                       bg-white
//                       px-3
//                       text-xs
//                       font-semibold
//                       text-gray-600
//                       transition
//                       hover:border-gray-300
//                       hover:bg-gray-50
//                       hover:text-gray-900
//                     "
//                   >
//                     <FiRotateCcw size={14} />
//                     Reset
//                   </button>
        
//                 </div>
        
//                 {/* Filter Result */}
//                 <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        
//                   <p className="text-[11px] text-gray-400">
//                     Showing{" "}
//                     <span className="font-semibold text-gray-600">
//                       {filteredPosts.length}
//                     </span>{" "}
//                     of{" "}
//                     <span className="font-semibold text-gray-600">
//                       {posts.length}
//                     </span>{" "}
//                     posts
//                   </p>
        
//                   {(search || category || status) && (
//                     <button
//                       onClick={handleReset}
//                       className="text-[11px] font-medium text-gray-500 hover:text-gray-900"
//                     >
//                       Clear filters
//                     </button>
//                   )}
        
//                 </div>
        
//               </div>
        
//               {/* =================================
//                   TABLE
//               ================================= */}
//               <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        
//                 <div className="w-full overflow-x-auto">
        
//                   <table className="w-full min-w-[1050px] text-left">
        
//                     {/* TABLE HEADING */}
//                     <thead>
        
//                       <tr className="bg-gray-900">
        
//                         <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Blog Post
//                         </th>
        
//                         <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Category
//                         </th>
        
//                         <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Status
//                         </th>
        
//                         <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Featured
//                         </th>
        
//                         {/* <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Views
//                         </th> */}
        
//                         <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Published
//                         </th>
        
//                         <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-300">
//                           Actions
//                         </th>
        
//                       </tr>
        
//                     </thead>
        
//                     {/* TABLE BODY */}
//                     <tbody className="divide-y divide-gray-100">
        
//                       {/* Loading */}
//                       {isLoading && (
//                         <>
//                           {[1, 2, 3, 4].map((item) => (
//                             <tr key={item}>
        
//                               <td colSpan={7} className="px-4 py-3">
        
//                                 <div className="h-10 w-full animate-pulse rounded-lg bg-gray-100" />
        
//                               </td>
        
//                             </tr>
//                           ))}
//                         </>
//                       )}
        
//                       {/* Empty */}
//                       {!isLoading && filteredPosts.length === 0 && (
//                         <tr>
        
//                           <td colSpan={7} className="px-4 py-14 text-center">
        
//                             <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                               <FiSearch size={17} className="text-gray-400" />
//                             </div>
        
//                             <p className="mt-3 text-sm font-semibold text-gray-700">
//                               No blog posts found
//                             </p>
        
//                             <p className="mt-1 text-xs text-gray-400">
//                               Try changing your search or filters
//                             </p>
        
//                           </td>
        
//                         </tr>
//                       )}
        
//                       {/* Data */}
//                       {!isLoading &&
//                         filteredPosts.map((post) => (
        
//                           <tr
//                             key={post.id}
//                             className="group transition-colors hover:bg-gray-50/80"
//                           >
        
//                             {/* BLOG */}
//                             <td className="px-4 py-3">
        
//                               <div className="flex items-center gap-3">
        
//                                 {/* Image */}
//                                 {/* <div className="h-11 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        
//                                   <img
//                                     src={
//                                       post.featured_image ||
//                                       "/assets/images/blog-placeholder.jpg"
//                                     }
//                                     alt={post.title}
//                                     className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                                     onError={(e) => {
//                                       e.currentTarget.src =
//                                         "/assets/images/blog-placeholder.jpg";
//                                     }}
//                                   />
        
//                                 </div> */}
        
//                                 {/* Content */}
//                                 <div className="min-w-0">
        
//                                   <p className="max-w-[330px] truncate text-[13px] font-semibold text-gray-800">
//                                     {post.title}
//                                   </p>
        
//                                   <p className="mt-1 max-w-[330px] truncate text-[11px] text-gray-400">
//                                     {post.excerpt || post.slug}
//                                   </p>
        
//                                 </div>
        
//                               </div>
        
//                             </td>
        
//                             {/* CATEGORY */}
//                             <td className="px-4 py-3">
        
//                               <span className="inline-flex rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600">
//                                 {post.category_name || "Uncategorized"}
//                               </span>
        
//                             </td>
        
//                             {/* STATUS */}
//                             <td className="px-4 py-3">
        
//                               {post.status === "published" ? (
        
//                                 <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
        
//                                   <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        
//                                   Published
        
//                                 </span>
        
//                               ) : (
        
//                                 <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
        
//                                   <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        
//                                   Draft
        
//                                 </span>
        
//                               )}
        
//                             </td>
        
//                             {/* FEATURED */}
//                             <td className="px-4 py-3">
        
//                               {Number(post.is_featured) === 1 ? (
        
//                                 <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600">
        
//                                   <FiStar
//                                     size={13}
//                                     className="fill-current"
//                                   />
        
//                                   Featured
        
//                                 </span>
        
//                               ) : (
        
//                                 <span className="text-xs text-gray-300">
//                                   —
//                                 </span>
        
//                               )}
        
//                             </td>
        
//                             {/* VIEWS */}
//                             {/* <td className="px-4 py-3">
        
//                               <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
        
//                                 <FiEye
//                                   size={13}
//                                   className="text-gray-400"
//                                 />
        
//                                 {Number(post.views || 0).toLocaleString()}
        
//                               </div>
        
//                             </td> */}
        
//                             {/* DATE */}
//                             <td className="px-4 py-3">
        
//                               <div className="flex items-center gap-1.5 whitespace-nowrap">
        
//                                 <FiCalendar
//                                   size={13}
//                                   className="text-gray-400"
//                                 />
        
//                                 <span className="text-[11px] text-gray-500">
//                                   {formatDate(post.published_at)}
//                                 </span>
        
//                               </div>
        
//                             </td>
        
//                             {/* ACTIONS */}
//                             <td className="px-4 py-3">
        
//                               <div className="flex items-center justify-center gap-1">
        
//                                 <button
//                                   type="button"
//                                   title="View"
//                                   className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
//                                 >
//                                   <FiEye size={14} />
//                                 </button>
        
//                                 <button
//                                   type="button"
//                                   title="Edit"
//                                   className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-gray-100 hover:text-gray-800"
//                                 >
//                                   <FiEdit2 size={14} />
//                                 </button>
        
//                                 <button
//                                   type="button"
//                                   title="Delete"
//                                   className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition hover:bg-red-50 hover:text-red-600"
//                                 >
//                                   <FiTrash2 size={14} />
//                                 </button>
        
//                               </div>
        
//                             </td>
        
//                           </tr>
        
//                         ))}
        
//                     </tbody>
        
//                   </table>
        
//                 </div>
        
//                 {/* FOOTER */}
//                 {!isLoading && posts.length > 0 && (
        
//                   <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-4 py-2.5">
        
//                     <p className="text-[11px] text-gray-400">
//                       Total{" "}
//                       <span className="font-semibold text-gray-600">
//                         {filteredPosts.length}
//                       </span>{" "}
//                       posts
//                     </p>
        
//                     <p className="text-[11px] text-gray-400">
//                       Sorted by newest
//                     </p>
        
//                   </div>
        
//                 )}
        
//               </div>
            
//             </div>
//          <ModalComponent
//           isOpen={modalOpen}
//           onClose={() => setModalOpen(false)}
//           title="Add Blog Post"
//           size="xl"
//           // description="Post a new blog With Category"
//         >
//         <BlogPostForm
//           onSubmit={handleSave}
//           onCancel={() => setModalOpen(false)}
//           userId={userId}
//         />
//       </ModalComponent>
//     </div>
//   )
// }

// export default Blogpage



"use client";

import React, { useMemo, useState } from "react";
import useSWR from "swr";
import toast from "react-hot-toast";

import ModalComponent from "../../components/admin/ModelComponent";
import BlogPostForm from "../../components/admin/BlogPostForm";
import ApiService from "../../src/services/Apiservices";
import AuthService from "../../src/services/Authservices";

import {
  FiEye,
  FiEdit2,
  FiTrash2,
  FiStar,
  FiCalendar,
  FiSearch,
  FiPlus,
  FiRotateCcw,
  FiFilter,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const Blogpage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedPost, setSelectedPost] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const userId = AuthService.getUserId();

  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR("blog-post", ApiService.get);

  const posts = Array.isArray(data?.data) ? data.data : [];

  // Categories
  const categories = useMemo(() => {
    return [
      ...new Set(
        posts
          .map((post) => post.category_name)
          .filter(Boolean)
      ),
    ];
  }, [posts]);

  // Search and filters
  const filteredPosts = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return posts.filter((post) => {
      const matchesSearch =
        !searchText ||
        post.title?.toLowerCase().includes(searchText) ||
        post.category_name?.toLowerCase().includes(searchText) ||
        post.slug?.toLowerCase().includes(searchText);

      const matchesCategory =
        !category || post.category_name === category;

      const matchesStatus =
        !status || post.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [posts, search, category, status]);

  // Reset filters
  const handleReset = () => {
    setSearch("");
    setCategory("");
    setStatus("");
  };

  // Date formatter
  const formatDate = (date) => {
    if (!date) return "-";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "-";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Open add modal
  const handleAdd = () => {
    setSelectedPost(null);
    setModalMode("add");
    setModalOpen(true);
  };

  // Open view modal
  const handleView = (post) => {
    setSelectedPost(post);
    setModalMode("view");
    setModalOpen(true);
  };

  // Open edit modal
  const handleEdit = (post) => {
    setSelectedPost(post);
    setModalMode("edit");
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
    setModalMode("add");
  };

  // Save or update blog post
  const handleSave = async (formdata) => {
    try {
      const payload = new FormData();

      payload.append("title", formdata.title || "");
      payload.append("slug", formdata.slug || "");

      payload.append(
        "category_id",
        formdata.category || formdata.category_id || ""
      );

      payload.append("excerpt", formdata.excerpt || "");
      payload.append("content", formdata.content || "");
      payload.append("status", formdata.status || "draft");

      payload.append(
        "author_id",
        formdata.userId || userId || ""
      );

      payload.append(
        "tags",
        JSON.stringify(formdata.tags || [])
      );

      payload.append(
        "seoTitle",
        formdata.seoTitle || ""
      );

      payload.append(
        "seoDescription",
        formdata.seoDescription || ""
      );

      // Upload image only when a new File is selected
      if (
        typeof File !== "undefined" &&
        formdata.featuredImage instanceof File
      ) {
        payload.append(
          "featured_image",
          formdata.featuredImage
        );
      }

      let response;

      if (modalMode === "edit" && selectedPost?.id) {
        // Update API
        response = await ApiService.put(
          `blog-post/${selectedPost.id}`,
          payload
        );
      } else {
        // Create API
        response = await ApiService.post(
          "blog-post",
          payload
        );
      }

      if (response?.success) {
        toast.success(
          modalMode === "edit"
            ? "Blog post updated successfully"
            : "Blog post created successfully"
        );

        handleCloseModal();
        await mutate();
      } else {
        toast.error(
          response?.message || "Unable to save blog post"
        );
      }
    } catch (err) {
      console.error("Blog save error:", err);

      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong"
      );
    }
  };

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
        Failed to load blog posts.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Blog Posts
            </h1>

            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
              {posts.length}
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500">
            Create, manage and publish your blog content
          </p>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-800"
        >
          <FiPlus size={15} />
          Add New Post
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <FiSearch
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, category or slug..."
              className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <FiFilter
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-9 min-w-[170px] appearance-none rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-8 text-xs font-medium text-gray-600 outline-none focus:border-gray-400 focus:bg-white"
            >
              <option value="">All Categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <FiChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Status */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-9 min-w-[140px] appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 pr-8 text-xs font-medium text-gray-600 outline-none focus:border-gray-400 focus:bg-white"
            >
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            <FiChevronDown
              size={14}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Reset */}
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <FiRotateCcw size={14} />
            Reset
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
          <p className="text-[11px] text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-600">
              {filteredPosts.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-600">
              {posts.length}
            </span>{" "}
            posts
          </p>

          {(search || category || status) && (
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] font-medium text-gray-500 hover:text-gray-900"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Blog Post
                </th>

                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Category
                </th>

                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Status
                </th>

                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Featured
                </th>

                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Published
                </th>

                <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {/* Loading */}
              {isLoading &&
                [1, 2, 3, 4].map((item) => (
                  <tr key={item}>
                    <td colSpan={6} className="px-4 py-3">
                      <div className="h-10 w-full animate-pulse rounded-lg bg-gray-100" />
                    </td>
                  </tr>
                ))}

              {/* Empty */}
              {!isLoading && filteredPosts.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-14 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <FiSearch size={17} className="text-gray-400" />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-gray-700">
                      No blog posts found
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Try changing your search or filters
                    </p>
                  </td>
                </tr>
              )}

              {/* Data */}
              {!isLoading &&
                filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="group transition-colors hover:bg-gray-50/80"
                  >
                    <td className="px-4 py-3">
                      <div className="min-w-0">
                        <p className="max-w-[330px] truncate text-[13px] font-semibold text-gray-800">
                          {post.title || "Untitled"}
                        </p>

                        <p className="mt-1 max-w-[330px] truncate text-[11px] text-gray-400">
                          {post.excerpt || post.slug || "-"}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                        {post.category_name || "Uncategorized"}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {post.status === "published" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          Draft
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      {Number(post.is_featured) === 1 ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600">
                          <FiStar size={13} className="fill-current" />
                          Featured
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300">
                          —
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <FiCalendar
                          size={13}
                          className="text-gray-400"
                        />

                        <span className="text-[11px] text-gray-500">
                          {formatDate(post.published_at)}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        {/* <button
                          type="button"
                          title="View"
                          onClick={() => handleView(post)}
                          className="flex h-8 w-8 items-center justify-center rounded-md text-blue-500 transition hover:bg-blue-50"
                        >
                          <FiEye size={15} />
                        </button> */}

                        <button
                          type="button"
                          title="Edit"
                          onClick={() => handleEdit(post)}
                          className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                          <FiEdit2 size={15} />
                        </button>

                        {/* <button
                          type="button"
                          title="Delete"
                          onClick={() => {
                            toast("Delete API abhi connect nahi hai.");
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-md text-red-500 transition hover:bg-red-50"
                        >
                          <FiTrash2 size={15} />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {!isLoading && posts.length > 0 && (
          <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-4 py-2.5">
            <p className="text-[11px] text-gray-400">
              Total{" "}
              <span className="font-semibold text-gray-600">
                {filteredPosts.length}
              </span>{" "}
              posts
            </p>

            <p className="text-[11px] text-gray-400">
              Sorted by newest
            </p>
          </div>
        )}
      </div>

      {/* Add / Edit / View Modal */}
      <ModalComponent
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={
          modalMode === "view"
            ? "View Blog Post"
            : modalMode === "edit"
            ? "Edit Blog Post"
            : "Add Blog Post"
        }
        size="xl"
      >
        {modalMode === "view" && selectedPost ? (
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="break-words text-xl font-bold text-gray-900">
                  {selectedPost.title || "Untitled"}
                </h2>

                <p className="mt-1 break-all text-sm text-gray-500">
                  /{selectedPost.slug || ""}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  selectedPost.status === "published"
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {selectedPost.status || "draft"}
              </span>
            </div>

            {selectedPost.featured_image && (
              <img
                src={selectedPost.featured_image}
                alt={selectedPost.title || "Blog image"}
                className="max-h-64 w-full rounded-xl border border-gray-200 object-cover"
              />
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">Category</p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  {selectedPost.category_name || "Uncategorized"}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-500">
                  Published Date
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-800">
                  {formatDate(selectedPost.published_at)}
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-800">
                Excerpt
              </h3>

              <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
                {selectedPost.excerpt || "No excerpt available."}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-800">
                Content
              </h3>

              <div className="max-h-64 overflow-y-auto whitespace-pre-wrap break-words rounded-lg border border-gray-200 p-4 text-sm leading-6 text-gray-600">
                {selectedPost.content || "No content available."}
              </div>
            </div>

            <div className="flex justify-end gap-2 border-t border-gray-100 pt-4">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => handleEdit(selectedPost)}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                <FiEdit2 size={14} />
                Edit Post
              </button>
            </div>
          </div>
        ) : (
          <BlogPostForm
            key={`${modalMode}-${selectedPost?.id ?? "new"}`}
            onSubmit={handleSave}
            onCancel={handleCloseModal}
            userId={userId}
            initialData={
              modalMode === "edit" ? selectedPost : null
            }
            mode={modalMode}
          />
        )}
      </ModalComponent>
    </div>
  );
};

export default Blogpage;