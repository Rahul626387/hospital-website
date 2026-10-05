
// "use client";

// import React, { useState } from "react";
// import {
//   FiSave,
//   FiImage,
//   FiFileText,
//   FiTag,
//   FiGlobe,
//   FiEye,
//   FiUploadCloud,
//   FiX,
//   FiPlus,
//   FiChevronDown,
// } from "react-icons/fi";

// const BlogPostForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     category: "",
//     excerpt: "",
//     content: "",
//     featuredImage: null,
//     status: "published",
//     tags: [],
//     seoTitle: "",
//     seoDescription: "",
//   });

//   const [tagInput, setTagInput] = useState("");

//   const categories = [
//     "Health Tips",
//     "Heart Care",
//     "Diabetes",
//     "Women Health",
//     "Child Care",
//     "Mental Health",
//     "Nutrition",
//     "Fitness",
//     "Hospital News",
//     "Medical Awareness",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Generate slug automatically
//   const handleTitleChange = (e) => {
//     const title = e.target.value;

//     const slug = title
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//     setFormData((prev) => ({
//       ...prev,
//       title,
//       slug,
//     }));
//   };

//   // Image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: file,
//     }));
//   };

//   // Add tag
//   const addTag = () => {
//     const tag = tagInput.trim();

//     if (!tag) return;

//     if (formData.tags.includes(tag)) {
//       setTagInput("");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       tags: [...prev.tags, tag],
//     }));

//     setTagInput("");
//   };

//   // Remove tag
//   const removeTag = (tagToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   const handleTagKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addTag();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Blog Post Data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">

//         {/* =====================================================
//             LEFT CONTENT
//         ====================================================== */}
//         <div className="min-w-0 space-y-4">

//           {/* Blog Title */}
//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <div className="mb-3">
//               <label className="mb-1.5 block text-[11px] font-semibold text-gray-600">
//                 Blog Title
//               </label>

//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleTitleChange}
//                 placeholder="Enter your blog title..."
//                 className="w-full border-0 bg-transparent px-0 text-xl font-bold text-gray-800 outline-none placeholder:text-gray-300"
//               />

//               <div className="mt-2 h-px bg-gray-100" />

//               <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
//                 <FiGlobe size={11} />
//                 <span>yourwebsite.com/blog/</span>
//                 <span className="font-medium text-[#087f8c]">
//                   {formData.slug || "your-blog-slug"}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Excerpt */}
//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiFileText}
//               title="Short Description"
//               description="A short summary shown on blog cards."
//             />

//             <textarea
//               name="excerpt"
//               value={formData.excerpt}
//               onChange={handleChange}
//               maxLength={180}
//               rows={3}
//               placeholder="Write a short description for your blog post..."
//               className="mt-3 w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs leading-5 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//             />

//             <div className="mt-1 text-right text-[9px] text-gray-400">
//               {formData.excerpt.length}/180
//             </div>
//           </div>

//           {/* Content Editor */}
//           <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//             <div className="border-b border-gray-100 px-4 py-3">
//               <SectionTitle
//                 icon={FiFileText}
//                 title="Blog Content"
//                 description="Write the complete article content."
//               />
//             </div>

//             {/* Fake Toolbar */}
//             <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 bg-gray-50/70 px-3 py-2">
//               <EditorButton label="B" bold />
//               <EditorButton label="I" italic />
//               <EditorButton label="H2" />
//               <EditorButton label="H3" />

//               <div className="mx-1 h-4 w-px bg-gray-200" />

//               <EditorButton label="• List" />
//               <EditorButton label="1. List" />

//               <div className="mx-1 h-4 w-px bg-gray-200" />

//               <EditorButton label="Quote" />
//               <EditorButton label="Link" />
//             </div>

//             <textarea
//               name="content"
//               value={formData.content}
//               onChange={handleChange}
//               rows={14}
//               placeholder="Start writing your blog post..."
//               className="w-full resize-none border-0 px-4 py-4 text-sm leading-7 text-gray-700 outline-none placeholder:text-gray-300"
//             />

//             <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
//               {formData.content.length} characters
//             </div>
//           </div>

//           {/* SEO */}
//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiGlobe}
//               title="SEO Settings"
//               description="Optimize this post for search engines."
//             />

//             <div className="mt-3 space-y-3">
//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   SEO Title
//                 </label>

//                 <input
//                   type="text"
//                   name="seoTitle"
//                   value={formData.seoTitle}
//                   onChange={handleChange}
//                   maxLength={60}
//                   placeholder="SEO optimized title"
//                   className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-xs outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoTitle.length}/60
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Meta Description
//                 </label>

//                 <textarea
//                   name="seoDescription"
//                   value={formData.seoDescription}
//                   onChange={handleChange}
//                   maxLength={160}
//                   rows={3}
//                   placeholder="Write SEO meta description..."
//                   className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoDescription.length}/160
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             RIGHT SIDEBAR
//         ====================================================== */}
//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* Publish Card */}
//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//             <div className="border-b border-gray-100 bg-gradient-to-r from-[#087f8c]/5 to-[#075985]/5 px-4 py-3">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-xs font-bold text-gray-800">
//                     Publish
//                   </h3>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     Manage visibility
//                   </p>
//                 </div>

//                 <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                   <FiEye size={13} />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3 p-4">

//               {/* Status */}
//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Status
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                   >
//                     <option value="published">Published</option>
//                     <option value="draft">Draft</option>
//                     <option value="inactive">Inactive</option>
//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* Category */}
//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Category
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                   >
//                     <option value="">Select category</option>

//                     {categories.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="border-t border-gray-100 bg-gray-50/50 p-3">
//               <button
//                 type="submit"
//                 className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
//               >
//                 <FiSave size={13} />
//                 Save Blog Post
//               </button>

//               <button
//                 type="button"
//                 className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[10px] font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-700"
//               >
//                 <FiEye size={12} />
//                 Preview
//               </button>
//             </div>
//           </div>

//           {/* Featured Image */}
//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiImage}
//               title="Featured Image"
//               description="Recommended 1200 × 630 px"
//             />

//             <label className="mt-3 block cursor-pointer">
//               {formData.featuredImage ? (
//                 <div className="relative overflow-hidden rounded-lg border border-gray-200">
//                   <img
//                     src={URL.createObjectURL(formData.featuredImage)}
//                     alt="Featured"
//                     className="h-36 w-full object-cover"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         featuredImage: null,
//                       }))
//                     }
//                     className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
//                   >
//                     <FiX size={12} />
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/70 transition hover:border-[#087f8c]/40 hover:bg-[#087f8c]/[0.03]">
//                   <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                     <FiUploadCloud size={18} />
//                   </div>

//                   <p className="text-[10px] font-semibold text-gray-600">
//                     Click to upload
//                   </p>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     PNG, JPG, WEBP
//                   </p>
//                 </div>
//               )}

//               <input
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </label>
//           </div>

//           {/* Tags */}
//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiTag}
//               title="Tags"
//               description="Add relevant blog tags."
//             />

//             <div className="mt-3 flex gap-1.5">
//               <input
//                 type="text"
//                 value={tagInput}
//                 onChange={(e) => setTagInput(e.target.value)}
//                 onKeyDown={handleTagKeyDown}
//                 placeholder="Add tag..."
//                 className="h-8 min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50/50 px-2.5 text-[10px] outline-none focus:border-[#087f8c] focus:bg-white"
//               />

//               <button
//                 type="button"
//                 onClick={addTag}
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c] transition hover:bg-[#087f8c] hover:text-white"
//               >
//                 <FiPlus size={13} />
//               </button>
//             </div>

//             {formData.tags.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-1.5">
//                 {formData.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="inline-flex items-center gap-1 rounded-full bg-[#087f8c]/10 px-2 py-1 text-[9px] font-medium text-[#087f8c]"
//                   >
//                     #{tag}

//                     <button
//                       type="button"
//                       onClick={() => removeTag(tag)}
//                       className="hover:text-red-500"
//                     >
//                       <FiX size={10} />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// /* ============================================================
//    SECTION TITLE
// ============================================================ */

// const SectionTitle = ({ icon: Icon, title, description }) => {
//   return (
//     <div className="flex items-center gap-2.5">
//       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c]">
//         <Icon size={13} />
//       </div>

//       <div>
//         <h3 className="text-xs font-bold text-gray-800">
//           {title}
//         </h3>

//         {description && (
//           <p className="text-[9px] text-gray-400">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ============================================================
//    EDITOR BUTTON
// ============================================================ */

// const EditorButton = ({ label, bold, italic }) => {
//   return (
//     <button
//       type="button"
//       className={`rounded-md px-2 py-1 text-[10px] text-gray-500 transition hover:bg-white hover:text-[#087f8c] hover:shadow-sm ${
//         bold ? "font-bold" : ""
//       } ${italic ? "italic" : ""}`}
//     >
//       {label}
//     </button>
//   );
// };

// export default BlogPostForm;



// "use client";

// import React, { useState } from "react";
// import {
//   FiSave,
//   FiImage,
//   FiFileText,
//   FiTag,
//   FiGlobe,
//   FiEye,
//   FiUploadCloud,
//   FiX,
//   FiPlus,
//   FiChevronDown,
//   FiBold,
//   FiItalic,
//   FiLink,
//   FiList,
//   FiAlignLeft,
// } from "react-icons/fi";

// const BlogPostForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     category: "",
//     excerpt: "",
//     content: "",
//     featuredImage: null,
//     status: "published",
//     tags: [],
//     seoTitle: "",
//     seoDescription: "",
//   });

//   const [tagInput, setTagInput] = useState("");

//   const categories = [
//     "Health Tips",
//     "Heart Care",
//     "Diabetes",
//     "Women Health",
//     "Child Care",
//     "Mental Health",
//     "Nutrition",
//     "Fitness",
//     "Hospital News",
//     "Medical Awareness",
//   ];

//   /* ============================================================
//      COMMON CHANGE
//   ============================================================ */

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* ============================================================
//      TITLE + SLUG
//   ============================================================ */

//   const handleTitleChange = (e) => {
//     const title = e.target.value;

//     const slug = title
//       .toLowerCase()
//       .trim()
//       .replace(/[^a-z0-9\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-");

//     setFormData((prev) => ({
//       ...prev,
//       title,
//       slug,
//     }));
//   };

//   /* ============================================================
//      IMAGE
//   ============================================================ */

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: file,
//     }));
//   };

//   /* ============================================================
//      TAGS
//   ============================================================ */

//   const addTag = () => {
//     const tag = tagInput.trim();

//     if (!tag) return;

//     if (formData.tags.includes(tag)) {
//       setTagInput("");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       tags: [...prev.tags, tag],
//     }));

//     setTagInput("");
//   };

//   const removeTag = (tagToRemove) => {
//     setFormData((prev) => ({
//       ...prev,
//       tags: prev.tags.filter((tag) => tag !== tagToRemove),
//     }));
//   };

//   const handleTagKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addTag();
//     }
//   };

//   /* ============================================================
//      REAL EDITOR
//   ============================================================ */

//   const executeCommand = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   const handleEditorInput = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       content: e.currentTarget.innerHTML,
//     }));
//   };

//   /* ============================================================
//      HEADING
//   ============================================================ */

//   const formatHeading = (level) => {
//     document.execCommand("formatBlock", false, level);
//   };

//   /* ============================================================
//      LINK
//   ============================================================ */

//   const addLink = () => {
//     const url = window.prompt("Enter URL");

//     if (!url) return;

//     executeCommand("createLink", url);
//   };

//   /* ============================================================
//      SUBMIT
//   ============================================================ */

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Blog Post Data:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">

//         {/* ======================================================
//             LEFT CONTENT
//         ======================================================= */}

//         <div className="min-w-0 space-y-4">

//           {/* ====================================================
//               TITLE
//           ==================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <label className="mb-1.5 block text-[11px] font-semibold text-gray-600">
//               Blog Title
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleTitleChange}
//               placeholder="Enter your blog title..."
//               className="w-full border-0 bg-transparent px-0 text-xl font-bold text-gray-800 outline-none placeholder:text-gray-300"
//             />

//             <div className="mt-2 h-px bg-gray-100" />

//             <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
//               <FiGlobe size={11} />

//               <span>yourwebsite.com/blog/</span>

//               <span className="font-medium text-[#087f8c]">
//                 {formData.slug || "your-blog-slug"}
//               </span>
//             </div>
//           </div>

//           {/* ====================================================
//               SHORT DESCRIPTION
//           ==================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiAlignLeft}
//               title="Short Description"
//               description="A short summary shown on blog cards."
//             />

//             <textarea
//               name="excerpt"
//               value={formData.excerpt}
//               onChange={handleChange}
//               maxLength={180}
//               rows={3}
//               placeholder="Write a short description..."
//               className="mt-3 w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs leading-5 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//             />

//             <div className="mt-1 text-right text-[9px] text-gray-400">
//               {formData.excerpt.length}/180
//             </div>
//           </div>

//           {/* ====================================================
//               BLOG CONTENT EDITOR
//           ==================================================== */}

//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             {/* Header */}
//             <div className="border-b border-gray-100 px-4 py-3">
//               <SectionTitle
//                 icon={FiFileText}
//                 title="Blog Content"
//                 description="Write and format your article."
//               />
//             </div>

//             {/* ==================================================
//                 TOOLBAR
//             ================================================== */}

//             <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 bg-gray-50/80 px-3 py-2">

//               {/* Bold */}
//               <EditorButton
//                 title="Bold"
//                 onClick={() => executeCommand("bold")}
//               >
//                 <FiBold size={14} />
//               </EditorButton>

//               {/* Italic */}
//               <EditorButton
//                 title="Italic"
//                 onClick={() => executeCommand("italic")}
//               >
//                 <FiItalic size={14} />
//               </EditorButton>

//               <ToolbarDivider />

//               {/* H2 */}
//               <EditorButton
//                 title="Heading 2"
//                 onClick={() => formatHeading("h2")}
//               >
//                 H2
//               </EditorButton>

//               {/* H3 */}
//               <EditorButton
//                 title="Heading 3"
//                 onClick={() => formatHeading("h3")}
//               >
//                 H3
//               </EditorButton>

//               <ToolbarDivider />

//               {/* Bullet List */}
//               <EditorButton
//                 title="Bullet List"
//                 onClick={() => executeCommand("insertUnorderedList")}
//               >
//                 <FiList size={14} />
//               </EditorButton>

//               {/* Number List */}
//               <EditorButton
//                 title="Numbered List"
//                 onClick={() => executeCommand("insertOrderedList")}
//               >
//                 1.
//               </EditorButton>

//               <ToolbarDivider />

//               {/* Quote */}
//               <EditorButton
//                 title="Quote"
//                 onClick={() => formatHeading("blockquote")}
//               >
//                 "
//               </EditorButton>

//               {/* Link */}
//               <EditorButton
//                 title="Add Link"
//                 onClick={addLink}
//               >
//                 <FiLink size={14} />
//               </EditorButton>

//               {/* Clear */}
//               <EditorButton
//                 title="Clear Formatting"
//                 onClick={() => executeCommand("removeFormat")}
//               >
//                 Tx
//               </EditorButton>
//             </div>

//             {/* ==================================================
//                 EDITOR
//             ================================================== */}

//             <div
//               contentEditable
//               suppressContentEditableWarning
//               onInput={handleEditorInput}
//               className="
//                 min-h-[350px]
//                 w-full
//                 px-5
//                 py-5
//                 text-sm
//                 leading-7
//                 text-gray-700
//                 outline-none
//                 empty:before:text-gray-300
//                 empty:before:content-[attr(data-placeholder)]
//                 [&_h2]:mb-3
//                 [&_h2]:mt-4
//                 [&_h2]:text-xl
//                 [&_h2]:font-bold
//                 [&_h2]:text-gray-800
//                 [&_h3]:mb-2
//                 [&_h3]:mt-3
//                 [&_h3]:text-lg
//                 [&_h3]:font-bold
//                 [&_h3]:text-gray-800
//                 [&_blockquote]:my-3
//                 [&_blockquote]:border-l-4
//                 [&_blockquote]:border-[#087f8c]
//                 [&_blockquote]:bg-[#087f8c]/5
//                 [&_blockquote]:px-4
//                 [&_blockquote]:py-2
//                 [&_blockquote]:italic
//                 [&_ul]:my-2
//                 [&_ul]:list-disc
//                 [&_ul]:pl-6
//                 [&_ol]:my-2
//                 [&_ol]:list-decimal
//                 [&_ol]:pl-6
//                 [&_a]:text-[#087f8c]
//                 [&_a]:underline
//               "
//               data-placeholder="Start writing your blog post..."
//               dangerouslySetInnerHTML={{
//                 __html: formData.content,
//               }}
//             />

//             {/* Character Count */}
//             <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
//               {formData.content.replace(/<[^>]+>/g, "").length} characters
//             </div>
//           </div>

//           {/* ====================================================
//               SEO
//           ==================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiGlobe}
//               title="SEO Settings"
//               description="Optimize this post for search engines."
//             />

//             <div className="mt-3 space-y-3">

//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   SEO Title
//                 </label>

//                 <input
//                   type="text"
//                   name="seoTitle"
//                   value={formData.seoTitle}
//                   onChange={handleChange}
//                   maxLength={60}
//                   placeholder="SEO optimized title"
//                   className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-xs outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoTitle.length}/60
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Meta Description
//                 </label>

//                 <textarea
//                   name="seoDescription"
//                   value={formData.seoDescription}
//                   onChange={handleChange}
//                   maxLength={160}
//                   rows={3}
//                   placeholder="Write SEO meta description..."
//                   className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoDescription.length}/160
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ======================================================
//             RIGHT SIDEBAR
//         ======================================================= */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* Publish */}
//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             <div className="border-b border-gray-100 bg-gradient-to-r from-[#087f8c]/5 to-[#075985]/5 px-4 py-3">
//               <div className="flex items-center justify-between">

//                 <div>
//                   <h3 className="text-xs font-bold text-gray-800">
//                     Publish
//                   </h3>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     Manage visibility
//                   </p>
//                 </div>

//                 <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                   <FiEye size={13} />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3 p-4">

//               {/* Status */}
//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Status
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                   >
//                     <option value="published">
//                       Published
//                     </option>

//                     <option value="draft">
//                       Draft
//                     </option>

//                     <option value="inactive">
//                       Inactive
//                     </option>
//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* Category */}
//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Category
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none transition focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                   >
//                     <option value="">
//                       Select category
//                     </option>

//                     {categories.map((category) => (
//                       <option
//                         key={category}
//                         value={category}
//                       >
//                         {category}
//                       </option>
//                     ))}
//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="border-t border-gray-100 bg-gray-50/50 p-3">

//               <button
//                 type="submit"
//                 className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
//               >
//                 <FiSave size={13} />
//                 Save Blog Post
//               </button>

//               <button
//                 type="button"
//                 className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[10px] font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-700"
//               >
//                 <FiEye size={12} />
//                 Preview
//               </button>
//             </div>
//           </div>

//           {/* ====================================================
//               FEATURED IMAGE
//           ==================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiImage}
//               title="Featured Image"
//               description="Recommended 1200 × 630 px"
//             />

//             <label className="mt-3 block cursor-pointer">

//               {formData.featuredImage ? (
//                 <div className="relative overflow-hidden rounded-lg border border-gray-200">

//                   <img
//                     src={URL.createObjectURL(
//                       formData.featuredImage
//                     )}
//                     alt="Featured"
//                     className="h-36 w-full object-cover"
//                   />

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         featuredImage: null,
//                       }))
//                     }
//                     className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
//                   >
//                     <FiX size={12} />
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/70 transition hover:border-[#087f8c]/40 hover:bg-[#087f8c]/[0.03]">

//                   <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                     <FiUploadCloud size={18} />
//                   </div>

//                   <p className="text-[10px] font-semibold text-gray-600">
//                     Click to upload
//                   </p>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     PNG, JPG, WEBP
//                   </p>
//                 </div>
//               )}

//               <input
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </label>
//           </div>

//           {/* ====================================================
//               TAGS
//           ==================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiTag}
//               title="Tags"
//               description="Add relevant blog tags."
//             />

//             <div className="mt-3 flex gap-1.5">

//               <input
//                 type="text"
//                 value={tagInput}
//                 onChange={(e) =>
//                   setTagInput(e.target.value)
//                 }
//                 onKeyDown={handleTagKeyDown}
//                 placeholder="Add tag..."
//                 className="h-8 min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50/50 px-2.5 text-[10px] outline-none focus:border-[#087f8c] focus:bg-white"
//               />

//               <button
//                 type="button"
//                 onClick={addTag}
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c] transition hover:bg-[#087f8c] hover:text-white"
//               >
//                 <FiPlus size={13} />
//               </button>
//             </div>

//             {formData.tags.length > 0 && (
//               <div className="mt-3 flex flex-wrap gap-1.5">

//                 {formData.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="inline-flex items-center gap-1 rounded-full bg-[#087f8c]/10 px-2 py-1 text-[9px] font-medium text-[#087f8c]"
//                   >
//                     #{tag}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         removeTag(tag)
//                       }
//                       className="hover:text-red-500"
//                     >
//                       <FiX size={10} />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// /* ================================================================
//    SECTION TITLE
// ================================================================ */

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
// }) => {
//   return (
//     <div className="flex items-center gap-2.5">

//       <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c]">
//         <Icon size={13} />
//       </div>

//       <div>
//         <h3 className="text-xs font-bold text-gray-800">
//           {title}
//         </h3>

//         {description && (
//           <p className="text-[9px] text-gray-400">
//             {description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ================================================================
//    EDITOR BUTTON
// ================================================================ */

// const EditorButton = ({
//   children,
//   onClick,
//   title,
// }) => {
//   return (
//     <button
//       type="button"
//       title={title}
//       onMouseDown={(e) => {
//         // Important:
//         // selection ko lose hone se bachata hai
//         e.preventDefault();
//         onClick();
//       }}
//       className="
//         flex
//         h-7
//         min-w-7
//         items-center
//         justify-center
//         rounded-md
//         px-2
//         text-[10px]
//         font-medium
//         text-gray-500
//         transition
//         hover:bg-white
//         hover:text-[#087f8c]
//         hover:shadow-sm
//         active:scale-95
//       "
//     >
//       {children}
//     </button>
//   );
// };

// /* ================================================================
//    TOOLBAR DIVIDER
// ================================================================ */

// const ToolbarDivider = () => {
//   return (
//     <div className="mx-1 h-4 w-px bg-gray-200" />
//   );
// };

// export default BlogPostForm;
