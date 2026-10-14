// "use client";

// import React, { useRef, useState } from "react";
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
// import ApiService from "../../src/services/Apiservices";
// import useSWR from "swr";

// const BlogPostForm = ({ onSubmit, onClose, userId }) => {
//   const editorRef = useRef(null);
//   const fileInputRef = useRef(null);

//   // =============================================================
//   // FORM DATA
//   // =============================================================

//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     category: "",
//     excerpt: "",
//     content: "",
//     featuredImage: null,
//     status: "published",

//     // Featured Article
//     // 0 = Normal Article
//     // 1 = Featured Article
//     is_featured: 0,

//     tags: [],
//     seoTitle: "",
//     seoDescription: "",
//     userId: userId,
//   });

//   const [tagInput, setTagInput] = useState("");
//   const [imagePreview, setImagePreview] = useState("");

//   // =============================================================
//   // CATEGORIES
//   // =============================================================

//   const {
//     data,
//     error,
//     isLoading,
//   } = useSWR("blog-categories", ApiService.get);

//   const categories = data?.data || [];

//   // =============================================================
//   // NORMAL INPUT CHANGE
//   // =============================================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =============================================================
//   // TITLE + AUTO SLUG
//   // =============================================================

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

//   // =============================================================
//   // EDITOR INPUT
//   // =============================================================

//   const handleEditorInput = (e) => {
//     const html = e.currentTarget?.innerHTML || "";

//     setFormData((prev) => ({
//       ...prev,
//       content: html,
//     }));
//   };

//   // =============================================================
//   // EDITOR COMMAND
//   // =============================================================

//   const executeCommand = (command, value = null) => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     try {
//       document.execCommand(command, false, value);
//     } catch (error) {
//       console.error("Editor command error:", error);
//       return;
//     }

//     const html = editorRef.current?.innerHTML || "";

//     setFormData((prev) => ({
//       ...prev,
//       content: html,
//     }));
//   };

//   // =============================================================
//   // HEADING
//   // =============================================================

//   const formatHeading = (level) => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     try {
//       document.execCommand("formatBlock", false, level);
//     } catch (error) {
//       console.error("Heading formatting error:", error);
//       return;
//     }

//     const html = editorRef.current?.innerHTML || "";

//     setFormData((prev) => ({
//       ...prev,
//       content: html,
//     }));
//   };

//   // =============================================================
//   // LINK
//   // =============================================================

//   const addLink = () => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     const selection = window.getSelection();

//     if (!selection || selection.rangeCount === 0) {
//       alert("Please select some text first.");
//       return;
//     }

//     const selectedText = selection.toString();

//     if (!selectedText) {
//       alert("Please select text first.");
//       return;
//     }

//     const url = window.prompt("Enter URL", "https://");

//     if (!url) return;

//     try {
//       document.execCommand("createLink", false, url);
//     } catch (error) {
//       console.error("Link error:", error);
//       return;
//     }

//     const html = editorRef.current?.innerHTML || "";

//     setFormData((prev) => ({
//       ...prev,
//       content: html,
//     }));
//   };

//   // =============================================================
//   // IMAGE UPLOAD
//   // =============================================================

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: file,
//     }));

//     const previewUrl = URL.createObjectURL(file);

//     setImagePreview(previewUrl);
//   };

//   // =============================================================
//   // REMOVE IMAGE
//   // =============================================================

//   const removeImage = () => {
//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: null,
//     }));

//     if (imagePreview) {
//       URL.revokeObjectURL(imagePreview);
//     }

//     setImagePreview("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // =============================================================
//   // FEATURED ARTICLE TOGGLE
//   // =============================================================

//   const toggleFeatured = () => {
//     setFormData((prev) => ({
//       ...prev,
//       is_featured: prev.is_featured === 1 ? 0 : 1,
//     }));
//   };

//   // =============================================================
//   // TAGS
//   // =============================================================

//   const addTag = () => {
//     const tag = tagInput.trim();

//     if (!tag) return;

//     if (
//       formData.tags.some(
//         (item) => item.toLowerCase() === tag.toLowerCase()
//       )
//     ) {
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
//       tags: prev.tags.filter(
//         (tag) => tag !== tagToRemove
//       ),
//     }));
//   };

//   const handleTagKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addTag();
//     }
//   };

//   // =============================================================
//   // SUBMIT
//   // =============================================================

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const finalContent =
//       editorRef.current?.innerHTML || "";

//     const finalData = {
//       ...formData,
//       content: finalContent,
//     };

//     console.log("Blog Post Data:", finalData);

//     // Parent ko data pass
//     onSubmit(finalData);
//   };

//   // =============================================================
//   // CHARACTER COUNT
//   // =============================================================

//   const contentText = formData.content
//     .replace(/<[^>]*>/g, "")
//     .replace(/&nbsp;/g, " ")
//     .trim();

//   // =============================================================
//   // RETURN
//   // =============================================================

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full"
//     >
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">

//         {/* =====================================================
//             LEFT SIDE
//         ===================================================== */}

//         <div className="min-w-0 space-y-4">

//           {/* =====================================================
//               BLOG TITLE
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
//               Blog Title
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleTitleChange}
//               placeholder="Enter your blog title..."
//               className="
//                 w-full
//                 border-0
//                 bg-transparent
//                 px-0
//                 text-xl
//                 font-bold
//                 text-gray-800
//                 outline-none
//                 placeholder:text-gray-300
//               "
//             />

//             <div className="mt-2 h-px bg-gray-100" />

//             <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-400">

//               <FiGlobe size={11} />

//               <span>
//                 yourwebsite.com/blog/
//               </span>

//               <span className="font-medium text-[#087f8c]">
//                 {formData.slug || "your-blog-slug"}
//               </span>

//             </div>
//           </div>

//           {/* =====================================================
//               SHORT DESCRIPTION
//           ===================================================== */}

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
//               className="
//                 mt-3
//                 w-full
//                 resize-none
//                 rounded-lg
//                 border
//                 border-gray-200
//                 bg-gray-50/50
//                 px-3
//                 py-2.5
//                 text-xs
//                 leading-5
//                 text-gray-700
//                 outline-none
//                 transition
//                 placeholder:text-gray-400
//                 focus:border-[#087f8c]
//                 focus:bg-white
//                 focus:ring-2
//                 focus:ring-[#087f8c]/10
//               "
//             />

//             <div className="mt-1 text-right text-[9px] text-gray-400">
//               {formData.excerpt.length}/180
//             </div>

//           </div>

//           {/* =====================================================
//               BLOG CONTENT EDITOR
//           ===================================================== */}

//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             {/* Header */}

//             <div className="border-b border-gray-100 px-4 py-3">

//               <SectionTitle
//                 icon={FiFileText}
//                 title="Blog Content"
//                 description="Write and format your article."
//               />

//             </div>

//             {/* Toolbar */}

//             <div
//               className="
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-1
//                 border-b
//                 border-gray-100
//                 bg-gray-50/80
//                 px-3
//                 py-2
//               "
//             >

//               {/* Bold */}

//               <EditorButton
//                 title="Bold"
//                 onClick={() =>
//                   executeCommand("bold")
//                 }
//               >
//                 <FiBold size={14} />
//               </EditorButton>

//               {/* Italic */}

//               <EditorButton
//                 title="Italic"
//                 onClick={() =>
//                   executeCommand("italic")
//                 }
//               >
//                 <FiItalic size={14} />
//               </EditorButton>

//               <ToolbarDivider />

//               {/* H2 */}

//               <EditorButton
//                 title="Heading 2"
//                 onClick={() =>
//                   formatHeading("h2")
//                 }
//               >
//                 H2
//               </EditorButton>

//               {/* H3 */}

//               <EditorButton
//                 title="Heading 3"
//                 onClick={() =>
//                   formatHeading("h3")
//                 }
//               >
//                 H3
//               </EditorButton>

//               <ToolbarDivider />

//               {/* Bullet */}

//               <EditorButton
//                 title="Bullet List"
//                 onClick={() =>
//                   executeCommand(
//                     "insertUnorderedList"
//                   )
//                 }
//               >
//                 <FiList size={14} />
//               </EditorButton>

//               {/* Number */}

//               <EditorButton
//                 title="Numbered List"
//                 onClick={() =>
//                   executeCommand(
//                     "insertOrderedList"
//                   )
//                 }
//               >
//                 1.
//               </EditorButton>

//               <ToolbarDivider />

//               {/* Quote */}

//               <EditorButton
//                 title="Quote"
//                 onClick={() =>
//                   formatHeading("blockquote")
//                 }
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
//                 onClick={() =>
//                   executeCommand(
//                     "removeFormat"
//                   )
//                 }
//               >
//                 Tx
//               </EditorButton>

//             </div>

//             {/* Content Editable */}

//             <div
//               ref={editorRef}
//               contentEditable
//               suppressContentEditableWarning
//               onInput={handleEditorInput}
//               data-placeholder="Start writing your blog post..."
//               className="
//                 min-h-[350px]
//                 w-full
//                 px-5
//                 py-5
//                 text-sm
//                 leading-7
//                 text-gray-700
//                 outline-none

//                 empty:before:pointer-events-none
//                 empty:before:text-gray-300
//                 empty:before:content-[attr(data-placeholder)]

//                 [&_h2]:mb-3
//                 [&_h2]:mt-5
//                 [&_h2]:text-xl
//                 [&_h2]:font-bold
//                 [&_h2]:text-gray-800

//                 [&_h3]:mb-2
//                 [&_h3]:mt-4
//                 [&_h3]:text-lg
//                 [&_h3]:font-bold
//                 [&_h3]:text-gray-800

//                 [&_p]:mb-3

//                 [&_blockquote]:my-3
//                 [&_blockquote]:border-l-4
//                 [&_blockquote]:border-[#087f8c]
//                 [&_blockquote]:bg-[#087f8c]/5
//                 [&_blockquote]:px-4
//                 [&_blockquote]:py-2
//                 [&_blockquote]:italic
//                 [&_blockquote]:text-gray-600

//                 [&_ul]:my-2
//                 [&_ul]:list-disc
//                 [&_ul]:pl-6

//                 [&_ol]:my-2
//                 [&_ol]:list-decimal
//                 [&_ol]:pl-6

//                 [&_li]:mb-1

//                 [&_a]:font-medium
//                 [&_a]:text-[#087f8c]
//                 [&_a]:underline
//               "
//             />

//             {/* Footer */}

//             <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
//               {contentText.length} characters
//             </div>

//           </div>

//           {/* =====================================================
//               SEO SETTINGS
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiGlobe}
//               title="SEO Settings"
//               description="Optimize this post for search engines."
//             />

//             <div className="mt-3 space-y-3">

//               {/* SEO Title */}

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
//                   className="
//                     h-9
//                     w-full
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoTitle.length}/60
//                 </div>

//               </div>

//               {/* Meta Description */}

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
//                   className="
//                     w-full
//                     resize-none
//                     rounded-lg
//                     border
//                     border-gray-200
//                     bg-gray-50/50
//                     px-3
//                     py-2
//                     text-xs
//                     outline-none
//                     transition
//                     focus:border-[#087f8c]
//                     focus:bg-white
//                     focus:ring-2
//                     focus:ring-[#087f8c]/10
//                   "
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoDescription.length}/160
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             RIGHT SIDE
//         ===================================================== */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* =====================================================
//               PUBLISH
//           ===================================================== */}

//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

//             {/* Publish Header */}

//             <div
//               className="
//                 border-b
//                 border-gray-100
//                 bg-gradient-to-r
//                 from-[#087f8c]/5
//                 to-[#075985]/5
//                 px-4
//                 py-3
//               "
//             >

//               <div className="flex items-center justify-between">

//                 <div>

//                   <h3 className="text-xs font-bold text-gray-800">
//                     Publish
//                   </h3>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     Manage visibility
//                   </p>

//                 </div>

//                 <div
//                   className="
//                     flex
//                     h-7
//                     w-7
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-white
//                     text-[#087f8c]
//                     shadow-sm
//                   "
//                 >
//                   <FiEye size={13} />
//                 </div>

//               </div>

//             </div>

//             <div className="space-y-3 p-4">

//               {/* =================================================
//                   STATUS
//               ================================================= */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Status
//                 </label>

//                 <div className="relative">

//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="
//                       h-9
//                       w-full
//                       appearance-none
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       px-3
//                       pr-8
//                       text-xs
//                       text-gray-700
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
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
//                     className="
//                       pointer-events-none
//                       absolute
//                       right-3
//                       top-3
//                       text-gray-400
//                     "
//                   />

//                 </div>

//               </div>

//               {/* =================================================
//                   FEATURED ARTICLE
//               ================================================= */}

//               <div
//                 className="
//                   rounded-lg
//                   border
//                   border-gray-200
//                   bg-gray-50/50
//                   p-3
//                 "
//               >

//                 <div className="flex items-center justify-between gap-3">

//                   <div className="min-w-0">

//                     <div className="flex items-center gap-1.5">

//                       <span className="text-[10px] font-semibold text-gray-700">
//                         Featured Article
//                       </span>

//                       {formData.is_featured === 1 && (
//                         <span
//                           className="
//                             rounded-full
//                             bg-[#087f8c]/10
//                             px-1.5
//                             py-0.5
//                             text-[8px]
//                             font-semibold
//                             text-[#087f8c]
//                           "
//                         >
//                           Featured
//                         </span>
//                       )}

//                     </div>

//                     <p className="mt-0.5 text-[9px] text-gray-400">
//                       Show this blog as a featured article
//                     </p>

//                   </div>

//                   {/* Toggle */}

//                   <button
//                     type="button"
//                     onClick={toggleFeatured}
//                     aria-label="Toggle featured article"
//                     aria-pressed={formData.is_featured === 1}
//                     className={`
//                       relative
//                       h-5
//                       w-9
//                       shrink-0
//                       rounded-full
//                       transition
//                       ${
//                         formData.is_featured === 1
//                           ? "bg-[#087f8c]"
//                           : "bg-gray-300"
//                       }
//                     `}
//                   >

//                     <span
//                       className={`
//                         absolute
//                         top-0.5
//                         h-4
//                         w-4
//                         rounded-full
//                         bg-white
//                         shadow-sm
//                         transition
//                         ${
//                           formData.is_featured === 1
//                             ? "left-[18px]"
//                             : "left-0.5"
//                         }
//                       `}
//                     />

//                   </button>

//                 </div>

//               </div>

//               {/* =================================================
//                   CATEGORY
//               ================================================= */}

//               <div>

//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Category
//                 </label>

//                 <div className="relative">

//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="
//                       h-9
//                       w-full
//                       appearance-none
//                       rounded-lg
//                       border
//                       border-gray-200
//                       bg-gray-50/50
//                       px-3
//                       pr-8
//                       text-xs
//                       text-gray-700
//                       outline-none
//                       transition
//                       focus:border-[#087f8c]
//                       focus:bg-white
//                       focus:ring-2
//                       focus:ring-[#087f8c]/10
//                     "
//                   >

//                     <option value="">
//                       Select category
//                     </option>

//                     {categories
//                       ?.filter(
//                         (category) =>
//                           Number(category.status) === 1
//                       )
//                       .map((category) => (
//                         <option
//                           key={category.id}
//                           value={category.id}
//                         >
//                           {category.name}
//                         </option>
//                       ))}

//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="
//                       pointer-events-none
//                       absolute
//                       right-3
//                       top-3
//                       text-gray-400
//                     "
//                   />

//                 </div>

//               </div>

//             </div>

//             {/* =================================================
//                 BUTTONS
//             ================================================= */}

//             <div className="border-t border-gray-100 bg-gray-50/50 p-3">

//               <button
//                 type="submit"
//                 className="
//                   flex
//                   h-9
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-lg
//                   bg-gradient-to-r
//                   from-[#087f8c]
//                   to-[#075985]
//                   text-xs
//                   font-semibold
//                   text-white
//                   shadow-sm
//                   transition
//                   hover:-translate-y-0.5
//                   hover:shadow-md
//                   active:translate-y-0
//                 "
//               >

//                 <FiSave size={13} />

//                 Save Blog Post

//               </button>

//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="
//                   mt-2
//                   flex
//                   h-8
//                   w-full
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-lg
//                   border
//                   border-gray-200
//                   bg-white
//                   text-[10px]
//                   font-medium
//                   text-gray-500
//                   transition
//                   hover:border-gray-300
//                   hover:text-gray-700
//                 "
//               >

//                 <FiX size={12} />

//                 Cancel

//               </button>

//             </div>

//           </div>

//           {/* =====================================================
//               FEATURED IMAGE
//           ===================================================== */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

//             <SectionTitle
//               icon={FiImage}
//               title="Featured Image"
//               description="Recommended 1200 × 630 px"
//             />

//             <label className="mt-3 block cursor-pointer">

//               {imagePreview ? (

//                 <div className="relative overflow-hidden rounded-lg border border-gray-200">

//                   <img
//                     src={imagePreview}
//                     alt="Featured"
//                     className="
//                       h-36
//                       w-full
//                       object-cover
//                     "
//                   />

//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       removeImage();
//                     }}
//                     className="
//                       absolute
//                       right-2
//                       top-2
//                       flex
//                       h-6
//                       w-6
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-black/60
//                       text-white
//                       transition
//                       hover:bg-red-500
//                     "
//                   >
//                     <FiX size={12} />
//                   </button>

//                 </div>

//               ) : (

//                 <div
//                   className="
//                     flex
//                     h-32
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-lg
//                     border
//                     border-dashed
//                     border-gray-200
//                     bg-gray-50/70
//                     transition
//                     hover:border-[#087f8c]/40
//                     hover:bg-[#087f8c]/[0.03]
//                   "
//                 >

//                   <div
//                     className="
//                       mb-2
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-lg
//                       bg-white
//                       text-[#087f8c]
//                       shadow-sm
//                     "
//                   >
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
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />

//             </label>

//           </div>

//           {/* =====================================================
//               TAGS
//           ===================================================== */}

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
//                 className="
//                   h-8
//                   min-w-0
//                   flex-1
//                   rounded-lg
//                   border
//                   border-gray-200
//                   bg-gray-50/50
//                   px-2.5
//                   text-[10px]
//                   outline-none
//                   focus:border-[#087f8c]
//                   focus:bg-white
//                 "
//               />

//               <button
//                 type="button"
//                 onClick={addTag}
//                 className="
//                   flex
//                   h-8
//                   w-8
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-[#087f8c]/10
//                   text-[#087f8c]
//                   transition
//                   hover:bg-[#087f8c]
//                   hover:text-white
//                 "
//               >
//                 <FiPlus size={13} />
//               </button>

//             </div>

//             {formData.tags.length > 0 && (

//               <div className="mt-3 flex flex-wrap gap-1.5">

//                 {formData.tags.map((tag) => (

//                   <span
//                     key={tag}
//                     className="
//                       inline-flex
//                       items-center
//                       gap-1
//                       rounded-full
//                       bg-[#087f8c]/10
//                       px-2
//                       py-1
//                       text-[9px]
//                       font-medium
//                       text-[#087f8c]
//                     "
//                   >

//                     #{tag}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         removeTag(tag)
//                       }
//                       className="
//                         transition
//                         hover:text-red-500
//                       "
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

// // =============================================================
// // SECTION TITLE
// // =============================================================

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
// }) => {
//   return (
//     <div className="flex items-center gap-2.5">

//       <div
//         className="
//           flex
//           h-7
//           w-7
//           shrink-0
//           items-center
//           justify-center
//           rounded-lg
//           bg-[#087f8c]/10
//           text-[#087f8c]
//         "
//       >
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

// // =============================================================
// // EDITOR BUTTON
// // =============================================================

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
//         // Selection preserve karne ke liye
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

// // =============================================================
// // TOOLBAR DIVIDER
// // =============================================================

// const ToolbarDivider = () => {
//   return (
//     <div className="mx-1 h-4 w-px bg-gray-200" />
//   );
// };

// export default BlogPostForm;



// "use client";

// import React, {
//   useEffect,
//   useRef,
//   useState,
// } from "react";

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

// import ApiService from "../../src/services/Apiservices";
// import useSWR from "swr";

// const createInitialForm = (initialData, userId) => {
//   const post = initialData || {};

//   let tags = post.tags || [];

//   if (typeof tags === "string") {
//     try {
//       tags = JSON.parse(tags);
//     } catch {
//       tags = tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter(Boolean);
//     }
//   }

//   if (!Array.isArray(tags)) {
//     tags = [];
//   }

//   return {
//     title: post.title || "",
//     slug: post.slug || "",

//     category: String(
//       post.category_id ??
//       post.category ??
//       ""
//     ),

//     excerpt: post.excerpt || "",
//     content: post.content || "",

//     featuredImage: null,

//     status: post.status || "published",

//     is_featured:
//       Number(post.is_featured) === 1 ? 1 : 0,

//     tags,

//     seoTitle:
//       post.seoTitle ||
//       post.seo_title ||
//       "",

//     seoDescription:
//       post.seoDescription ||
//       post.seo_description ||
//       "",

//     userId: userId || post.author_id || "",
//   };
// };

// const BlogPostForm = ({
//   onSubmit,
//   onCancel,
//   onClose,
//   userId,
//   initialData = null,
//   mode = "add",
// }) => {
//   const editorRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const objectUrlRef = useRef(null);

//   const [formData, setFormData] = useState(
//     () => createInitialForm(initialData, userId)
//   );

//   const [tagInput, setTagInput] = useState("");
//   const [imagePreview, setImagePreview] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ---------------------------------------------------------
//   // Reset/populate form whenever selected post changes
//   // ---------------------------------------------------------

//   useEffect(() => {
//     const nextData = createInitialForm(
//       initialData,
//       userId
//     );

//     setFormData(nextData);
//     setTagInput("");

//     if (editorRef.current) {
//       editorRef.current.innerHTML =
//         nextData.content;
//     }

//     if (objectUrlRef.current) {
//       URL.revokeObjectURL(objectUrlRef.current);
//       objectUrlRef.current = null;
//     }

//     const existingImage =
//       initialData?.featured_image ||
//       initialData?.featuredImage ||
//       initialData?.image ||
//       "";

//     setImagePreview(existingImage);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }

//   }, [initialData, userId, mode]);

//   // Cleanup temporary image preview
//   useEffect(() => {
//     return () => {
//       if (objectUrlRef.current) {
//         URL.revokeObjectURL(objectUrlRef.current);
//       }
//     };
//   }, []);

//   // ---------------------------------------------------------
//   // Categories
//   // ---------------------------------------------------------

//   const {
//     data,
//     error: categoryError,
//     isLoading: categoriesLoading,
//   } = useSWR(
//     "blog-categories",
//     ApiService.get
//   );

//   const categories = Array.isArray(data?.data)
//     ? data.data
//     : [];

//   // ---------------------------------------------------------
//   // Normal input change
//   // ---------------------------------------------------------

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ---------------------------------------------------------
//   // Title + slug
//   // ---------------------------------------------------------

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

//   // ---------------------------------------------------------
//   // Editor input
//   // ---------------------------------------------------------

//   const handleEditorInput = () => {
//     const html =
//       editorRef.current?.innerHTML || "";

//     setFormData((prev) => ({
//       ...prev,
//       content: html,
//     }));
//   };

//   // ---------------------------------------------------------
//   // Editor commands
//   // ---------------------------------------------------------

//   const executeCommand = (command, value = null) => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     try {
//       document.execCommand(command, false, value);
//     } catch (err) {
//       console.error("Editor command error:", err);
//       return;
//     }

//     handleEditorInput();
//   };

//   const formatHeading = (level) => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     try {
//       document.execCommand(
//         "formatBlock",
//         false,
//         level
//       );
//     } catch (err) {
//       console.error("Heading formatting error:", err);
//       return;
//     }

//     handleEditorInput();
//   };

//   // ---------------------------------------------------------
//   // Add link
//   // ---------------------------------------------------------

//   const addLink = () => {
//     if (!editorRef.current) return;

//     editorRef.current.focus();

//     const selection = window.getSelection();

//     if (!selection || selection.rangeCount === 0) {
//       alert("Please select some text first.");
//       return;
//     }

//     if (!selection.toString()) {
//       alert("Please select text first.");
//       return;
//     }

//     const url = window.prompt(
//       "Enter URL",
//       "https://"
//     );

//     if (!url) return;

//     try {
//       document.execCommand(
//         "createLink",
//         false,
//         url
//       );
//     } catch (err) {
//       console.error("Link error:", err);
//       return;
//     }

//     handleEditorInput();
//   };

//   // ---------------------------------------------------------
//   // Image upload
//   // ---------------------------------------------------------

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     if (
//       objectUrlRef.current
//     ) {
//       URL.revokeObjectURL(objectUrlRef.current);
//     }

//     const previewUrl = URL.createObjectURL(file);

//     objectUrlRef.current = previewUrl;

//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: file,
//     }));

//     setImagePreview(previewUrl);
//   };

//   // ---------------------------------------------------------
//   // Remove image
//   // ---------------------------------------------------------

//   const removeImage = () => {
//     setFormData((prev) => ({
//       ...prev,
//       featuredImage: null,
//     }));

//     if (objectUrlRef.current) {
//       URL.revokeObjectURL(objectUrlRef.current);
//       objectUrlRef.current = null;
//     }

//     setImagePreview("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // ---------------------------------------------------------
//   // Featured toggle
//   // ---------------------------------------------------------

//   const toggleFeatured = () => {
//     setFormData((prev) => ({
//       ...prev,
//       is_featured:
//         Number(prev.is_featured) === 1 ? 0 : 1,
//     }));
//   };

//   // ---------------------------------------------------------
//   // Tags
//   // ---------------------------------------------------------

//   const addTag = () => {
//     const tag = tagInput.trim();

//     if (!tag) return;

//     if (
//       formData.tags.some(
//         (item) =>
//           item.toLowerCase() === tag.toLowerCase()
//       )
//     ) {
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
//       tags: prev.tags.filter(
//         (tag) => tag !== tagToRemove
//       ),
//     }));
//   };

//   const handleTagKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addTag();
//     }
//   };

//   // ---------------------------------------------------------
//   // Submit
//   // ---------------------------------------------------------

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (loading) return;

//     if (typeof onSubmit !== "function") {
//       alert("Submit handler is not configured.");
//       return;
//     }

//     const finalData = {
//       ...formData,

//       content:
//         editorRef.current?.innerHTML ??
//         formData.content,

//       is_featured: Number(formData.is_featured),

//       userId: userId || formData.userId,
//     };

//     try {
//       setLoading(true);

//       await onSubmit(finalData);
//     } catch (err) {
//       console.error("Blog submit error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ---------------------------------------------------------
//   // Cancel
//   // ---------------------------------------------------------

//   const handleCancel = () => {
//     const cancelHandler = onCancel || onClose;

//     if (typeof cancelHandler === "function") {
//       cancelHandler();
//     }
//   };

//   // ---------------------------------------------------------
//   // Character count
//   // ---------------------------------------------------------

//   const contentText = (formData.content || "")
//     .replace(/<[^>]*>/g, "")
//     .replace(/&nbsp;/g, " ")
//     .trim();

//   const isEditing = mode === "edit";

//   // ---------------------------------------------------------
//   // View
//   // ---------------------------------------------------------

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full"
//     >
//       <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">

//         {/* LEFT SIDE */}

//         <div className="min-w-0 space-y-4">

//           {/* BLOG TITLE */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
//               Blog Title
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleTitleChange}
//               placeholder="Enter your blog title..."
//               required
//               className="w-full border-0 bg-transparent px-0 text-xl font-bold text-gray-800 outline-none placeholder:text-gray-300"
//             />

//             <div className="mt-2 h-px bg-gray-100" />

//             <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-400">
//               <FiGlobe size={11} />
//               <span>yourwebsite.com/blog/</span>
//               <span className="break-all font-medium text-[#087f8c]">
//                 {formData.slug || "your-blog-slug"}
//               </span>
//             </div>
//           </div>

//           {/* SHORT DESCRIPTION */}

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

//           {/* BLOG CONTENT */}

//           <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
//             <div className="border-b border-gray-100 px-4 py-3">
//               <SectionTitle
//                 icon={FiFileText}
//                 title="Blog Content"
//                 description="Write and format your article."
//               />
//             </div>

//             {/* Toolbar */}

//             <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 bg-gray-50/80 px-3 py-2">
//               <EditorButton
//                 title="Bold"
//                 onClick={() => executeCommand("bold")}
//               >
//                 <FiBold size={14} />
//               </EditorButton>

//               <EditorButton
//                 title="Italic"
//                 onClick={() => executeCommand("italic")}
//               >
//                 <FiItalic size={14} />
//               </EditorButton>

//               <ToolbarDivider />

//               <EditorButton
//                 title="Heading 2"
//                 onClick={() => formatHeading("h2")}
//               >
//                 H2
//               </EditorButton>

//               <EditorButton
//                 title="Heading 3"
//                 onClick={() => formatHeading("h3")}
//               >
//                 H3
//               </EditorButton>

//               <ToolbarDivider />

//               <EditorButton
//                 title="Bullet List"
//                 onClick={() =>
//                   executeCommand("insertUnorderedList")
//                 }
//               >
//                 <FiList size={14} />
//               </EditorButton>

//               <EditorButton
//                 title="Numbered List"
//                 onClick={() =>
//                   executeCommand("insertOrderedList")
//                 }
//               >
//                 1.
//               </EditorButton>

//               <ToolbarDivider />

//               <EditorButton
//                 title="Quote"
//                 onClick={() => formatHeading("blockquote")}
//               >
//                 "
//               </EditorButton>

//               <EditorButton
//                 title="Add Link"
//                 onClick={addLink}
//               >
//                 <FiLink size={14} />
//               </EditorButton>

//               <EditorButton
//                 title="Clear Formatting"
//                 onClick={() => executeCommand("removeFormat")}
//               >
//                 Tx
//               </EditorButton>
//             </div>

//             {/* Existing content gets populated through useEffect */}

//             <div
//               ref={editorRef}
//               contentEditable
//               suppressContentEditableWarning
//               onInput={handleEditorInput}
//               data-placeholder="Start writing your blog post..."
//               className="min-h-[350px] w-full px-5 py-5 text-sm leading-7 text-gray-700 outline-none empty:before:pointer-events-none empty:before:text-gray-300 empty:before:content-[attr(data-placeholder)] [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_p]:mb-3 [&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#087f8c] [&_blockquote]:bg-[#087f8c]/5 [&_blockquote]:px-4 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:font-medium [&_a]:text-[#087f8c] [&_a]:underline"
//             />

//             <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
//               {contentText.length} characters
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
//                   className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-xs outline-none focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
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
//                   className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs outline-none focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                 />

//                 <div className="mt-1 text-right text-[9px] text-gray-400">
//                   {formData.seoDescription.length}/160
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}

//         <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

//           {/* PUBLISH */}

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

//               {/* STATUS */}

//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Status
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
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

//               {/* FEATURED */}

//               <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-3">
//                 <div className="flex items-center justify-between gap-3">
//                   <div>
//                     <span className="text-[10px] font-semibold text-gray-700">
//                       Featured Article
//                     </span>

//                     <p className="mt-0.5 text-[9px] text-gray-400">
//                       Show as a featured article
//                     </p>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={toggleFeatured}
//                     aria-label="Toggle featured article"
//                     aria-pressed={formData.is_featured === 1}
//                     className={`relative h-5 w-9 shrink-0 rounded-full transition ${
//                       formData.is_featured === 1
//                         ? "bg-[#087f8c]"
//                         : "bg-gray-300"
//                     }`}
//                   >
//                     <span
//                       className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
//                         formData.is_featured === 1
//                           ? "left-[18px]"
//                           : "left-0.5"
//                       }`}
//                     />
//                   </button>
//                 </div>
//               </div>

//               {/* CATEGORY */}

//               <div>
//                 <label className="mb-1 block text-[10px] font-semibold text-gray-600">
//                   Category
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
//                   >
//                     <option value="">
//                       {categoriesLoading
//                         ? "Loading categories..."
//                         : "Select category"}
//                     </option>

//                     {categories.map((item) => (
//                       <option
//                         key={item.id}
//                         value={String(item.id)}
//                       >
//                         {item.name}
//                       </option>
//                     ))}
//                   </select>

//                   <FiChevronDown
//                     size={13}
//                     className="pointer-events-none absolute right-3 top-3 text-gray-400"
//                   />
//                 </div>

//                 {categoryError && (
//                   <p className="mt-1 text-[10px] text-red-500">
//                     Failed to load categories.
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* BUTTONS */}

//             <div className="border-t border-gray-100 bg-gray-50/50 p-3">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] text-xs font-semibold text-white shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
//               >
//                 <FiSave size={13} />

//                 {loading
//                   ? "Saving..."
//                   : isEditing
//                   ? "Update Blog Post"
//                   : "Save Blog Post"}
//               </button>

//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 disabled={loading}
//                 className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[10px] font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-700 disabled:opacity-50"
//               >
//                 <FiX size={12} />
//                 Cancel
//               </button>
//             </div>
//           </div>

//           {/* FEATURED IMAGE */}

//           <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
//             <SectionTitle
//               icon={FiImage}
//               title="Featured Image"
//               description="Recommended 1200 × 630 px"
//             />

//             <div className="mt-3">
//               {imagePreview ? (
//                 <div className="relative overflow-hidden rounded-lg border border-gray-200">
//                   <img
//                     src={imagePreview}
//                     alt="Featured blog"
//                     className="h-36 w-full object-cover"
//                   />

//                   <button
//                     type="button"
//                     onClick={removeImage}
//                     className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-red-500"
//                   >
//                     <FiX size={12} />
//                   </button>
//                 </div>
//               ) : (
//                 <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/70 transition hover:border-[#087f8c]/40 hover:bg-[#087f8c]/[0.03]">
//                   <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
//                     <FiUploadCloud size={18} />
//                   </div>

//                   <p className="text-[10px] font-semibold text-gray-600">
//                     Click to upload
//                   </p>

//                   <p className="mt-0.5 text-[9px] text-gray-400">
//                     PNG, JPG, WEBP
//                   </p>
//                 </label>
//               )}

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/png,image/jpeg,image/webp"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </div>
//           </div>

//           {/* TAGS */}

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
//                 className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c] hover:bg-[#087f8c] hover:text-white"
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

// // ---------------------------------------------------------
// // Section title
// // ---------------------------------------------------------

// const SectionTitle = ({
//   icon: Icon,
//   title,
//   description,
// }) => (
//   <div className="flex items-center gap-2.5">
//     <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c]">
//       <Icon size={13} />
//     </div>

//     <div>
//       <h3 className="text-xs font-bold text-gray-800">
//         {title}
//       </h3>

//       {description && (
//         <p className="text-[9px] text-gray-400">
//           {description}
//         </p>
//       )}
//     </div>
//   </div>
// );

// // ---------------------------------------------------------
// // Editor button
// // ---------------------------------------------------------

// const EditorButton = ({
//   children,
//   onClick,
//   title,
// }) => (
//   <button
//     type="button"
//     title={title}
//     onMouseDown={(e) => {
//       e.preventDefault();
//       onClick();
//     }}
//     className="flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-[10px] font-medium text-gray-500 transition hover:bg-white hover:text-[#087f8c] hover:shadow-sm active:scale-95"
//   >
//     {children}
//   </button>
// );

// // ---------------------------------------------------------
// // Toolbar divider
// // ---------------------------------------------------------

// const ToolbarDivider = () => (
//   <div className="mx-1 h-4 w-px bg-gray-200" />
// );

// export default BlogPostForm;




"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FiSave,
  FiImage,
  FiFileText,
  FiTag,
  FiGlobe,
  FiEye,
  FiUploadCloud,
  FiX,
  FiPlus,
  FiChevronDown,
  FiBold,
  FiItalic,
  FiLink,
  FiList,
  FiAlignLeft,
} from "react-icons/fi";
import useSWR from "swr";
import toast from "react-hot-toast";
import ApiService from "../../src/services/Apiservices";

const createInitialForm = (initialData, userId) => {
  const post = initialData || {};

  let tags = post.tags || [];

  if (typeof tags === "string") {
    try {
      tags = JSON.parse(tags);
    } catch {
      tags = tags.split(",").map((tag) => tag.trim()).filter(Boolean);
    }
  }

  if (!Array.isArray(tags)) tags = [];

  return {
    title: post.title || "",
    slug: post.slug || "",
    category: String(post.category_id ?? post.category ?? ""),
    excerpt: post.excerpt || "",
    content: post.content || "",
    featuredImage: null,
    removeFeaturedImage: false,
    status: post.status || "published",
    is_featured: Number(post.is_featured) === 1 ? 1 : 0,
    tags,
    seoTitle: post.seoTitle || post.seo_title || "",
    seoDescription: post.seoDescription || post.seo_description || "",
    userId: userId || post.author_id || "",
  };
};

const BlogPostForm = ({
  onSubmit,
  onCancel,
  onClose,
  userId,
  initialData = null,
  mode = "add",
}) => {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const objectUrlRef = useRef(null);

  const [formData, setFormData] = useState(() =>
    createInitialForm(initialData, userId)
  );
  const [tagInput, setTagInput] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = mode === "edit";

  // Load form data when a different post is selected.
  useEffect(() => {
    const nextData = createInitialForm(initialData, userId);

    setFormData(nextData);
    setTagInput("");

    if (editorRef.current) {
      editorRef.current.innerHTML = nextData.content;
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    const existingImage =
      initialData?.featured_image ||
      initialData?.featuredImage ||
      initialData?.image ||
      "";

    setImagePreview(existingImage);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [initialData, userId, mode]);

  // Clean up temporary image URLs.
  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  // Categories.
  const {
    data,
    error: categoryError,
    isLoading: categoriesLoading,
  } = useSWR("blog-categories", ApiService.get);

  const categories = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data)
      ? data
      : [];

  // Normal input changes.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate slug from title.
  const handleTitleChange = (e) => {
    const title = e.target.value;

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setFormData((prev) => ({
      ...prev,
      title,
      slug,
    }));
  };

  // Rich text editor.
  const handleEditorInput = () => {
    const content = editorRef.current?.innerHTML || "";

    setFormData((prev) => ({
      ...prev,
      content,
    }));
  };

  const executeCommand = (command, value = null) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    try {
      document.execCommand(command, false, value);
      handleEditorInput();
    } catch (error) {
      console.error("Editor command error:", error);
      toast.error("Unable to format content.");
    }
  };

  const formatHeading = (level) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    try {
      document.execCommand("formatBlock", false, level);
      handleEditorInput();
    } catch (error) {
      console.error("Heading formatting error:", error);
    }
  };

  const addLink = () => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0 || !selection.toString()) {
      toast.error("Please select some text first.");
      return;
    }

    const url = window.prompt("Enter URL", "https://");

    if (!url) return;

    try {
      const parsedUrl = new URL(url);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        toast.error("Please enter a valid HTTP or HTTPS URL.");
        return;
      }

      document.execCommand("createLink", false, parsedUrl.href);
      handleEditorInput();
    } catch {
      toast.error("Please enter a valid URL.");
    }
  };

  // IMAGE UPLOAD.
  // The input stays mounted whether an image exists or not.
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG and WEBP images are allowed.");
      e.target.value = "";
      return;
    }

    // Optional 5 MB size limit.
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5 MB.");
      e.target.value = "";
      return;
    }

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    const previewUrl = URL.createObjectURL(file);
    objectUrlRef.current = previewUrl;

    setFormData((prev) => ({
      ...prev,
      featuredImage: file,
      removeFeaturedImage: false,
    }));

    setImagePreview(previewUrl);
  };

  // Remove the selected image from the form.
  const removeImage = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    setFormData((prev) => ({
      ...prev,
      featuredImage: null,
      removeFeaturedImage: true,
    }));

    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Open the native file picker.
  const openImagePicker = () => {
    fileInputRef.current?.click();
  };

  const toggleFeatured = () => {
    setFormData((prev) => ({
      ...prev,
      is_featured: Number(prev.is_featured) === 1 ? 0 : 1,
    }));
  };

  // Tags.
  const addTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    if (
      formData.tags.some(
        (item) => item.toLowerCase() === tag.toLowerCase()
      )
    ) {
      setTagInput("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, tag],
    }));

    setTagInput("");
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  // Submit to the parent handler.
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (typeof onSubmit !== "function") {
      toast.error("Blog submit handler is not configured.");
      return;
    }

    const finalData = {
      ...formData,
      content: editorRef.current?.innerHTML ?? formData.content,
      is_featured: Number(formData.is_featured),
      userId: userId || formData.userId,
    };

    try {
      setLoading(true);
      await onSubmit(finalData);
    } catch (error) {
      console.error("Blog submit error:", error);
      toast.error(error?.message || "Unable to save blog post.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    const handler = onCancel || onClose;

    if (typeof handler === "function") {
      handler();
    }
  };

  const contentText = (formData.content || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">
        {/* LEFT SIDE */}
        <div className="min-w-0 space-y-4">
          {/* BLOG TITLE */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Enter your blog title..."
              required
              className="w-full border-0 bg-transparent px-0 text-xl font-bold text-gray-800 outline-none placeholder:text-gray-300"
            />

            <div className="mt-2 h-px bg-gray-100" />

            <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-400">
              <FiGlobe size={11} />
              <span>yourwebsite.com/blog/</span>
              <span className="break-all font-medium text-[#087f8c]">
                {formData.slug || "your-blog-slug"}
              </span>
            </div>
          </div>

          {/* SHORT DESCRIPTION */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <SectionTitle
              icon={FiAlignLeft}
              title="Short Description"
              description="A short summary shown on blog cards."
            />

            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              maxLength={180}
              rows={3}
              placeholder="Write a short description..."
              className="mt-3 w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-xs leading-5 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#087f8c] focus:bg-white focus:ring-2 focus:ring-[#087f8c]/10"
            />

            <div className="mt-1 text-right text-[9px] text-gray-400">
              {formData.excerpt.length}/180
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-4 py-3">
              <SectionTitle
                icon={FiFileText}
                title="Blog Content"
                description="Write and format your article."
              />
            </div>

            <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 bg-gray-50/80 px-3 py-2">
              <EditorButton
                title="Bold"
                onClick={() => executeCommand("bold")}
              >
                <FiBold size={14} />
              </EditorButton>

              <EditorButton
                title="Italic"
                onClick={() => executeCommand("italic")}
              >
                <FiItalic size={14} />
              </EditorButton>

              <ToolbarDivider />

              <EditorButton
                title="Heading 2"
                onClick={() => formatHeading("h2")}
              >
                H2
              </EditorButton>

              <EditorButton
                title="Heading 3"
                onClick={() => formatHeading("h3")}
              >
                H3
              </EditorButton>

              <ToolbarDivider />

              <EditorButton
                title="Bullet List"
                onClick={() => executeCommand("insertUnorderedList")}
              >
                <FiList size={14} />
              </EditorButton>

              <EditorButton
                title="Numbered List"
                onClick={() => executeCommand("insertOrderedList")}
              >
                1.
              </EditorButton>

              <ToolbarDivider />

              <EditorButton
                title="Quote"
                onClick={() => formatHeading("blockquote")}
              >
                "
              </EditorButton>

              <EditorButton title="Add Link" onClick={addLink}>
                <FiLink size={14} />
              </EditorButton>

              <EditorButton
                title="Clear Formatting"
                onClick={() => executeCommand("removeFormat")}
              >
                Tx
              </EditorButton>
            </div>

            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={handleEditorInput}
              data-placeholder="Start writing your blog post..."
              className="min-h-[350px] w-full px-5 py-5 text-sm leading-7 text-gray-700 outline-none empty:before:pointer-events-none empty:before:text-gray-300 empty:before:content-[attr(data-placeholder)] [&_h2]:mb-3 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-bold [&_p]:mb-3 [&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#087f8c] [&_blockquote]:px-4 [&_blockquote]:py-2 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1 [&_a]:text-[#087f8c] [&_a]:underline"
            />

            <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
              {contentText.length} characters
            </div>
          </div>

          {/* SEO */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <SectionTitle
              icon={FiGlobe}
              title="SEO Settings"
              description="Optimize this post for search engines."
            />

            <div className="mt-3 space-y-3">
              <div>
                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  SEO Title
                </label>

                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  maxLength={60}
                  placeholder="SEO optimized title"
                  className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3 text-xs outline-none focus:border-[#087f8c]"
                />

                <div className="mt-1 text-right text-[9px] text-gray-400">
                  {formData.seoTitle.length}/60
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  Meta Description
                </label>

                <textarea
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleChange}
                  maxLength={160}
                  rows={3}
                  placeholder="Write SEO meta description..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs outline-none focus:border-[#087f8c]"
                />

                <div className="mt-1 text-right text-[9px] text-gray-400">
                  {formData.seoDescription.length}/160
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">
          {/* PUBLISH */}
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gradient-to-r from-[#087f8c]/5 to-[#075985]/5 px-4 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-gray-800">
                    Publish
                  </h3>
                  <p className="mt-0.5 text-[9px] text-gray-400">
                    Manage visibility
                  </p>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
                  <FiEye size={13} />
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4">
              <div>
                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  Status
                </label>

                <div className="relative">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none focus:border-[#087f8c]"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="inactive">Inactive</option>
                  </select>

                  <FiChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-3 text-gray-400"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-semibold text-gray-700">
                      Featured Article
                    </span>
                    <p className="mt-0.5 text-[9px] text-gray-400">
                      Show as a featured article
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={toggleFeatured}
                    aria-label="Toggle featured article"
                    aria-pressed={formData.is_featured === 1}
                    className={`relative h-5 w-9 shrink-0 rounded-full transition ${
                      formData.is_featured === 1
                        ? "bg-[#087f8c]"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        formData.is_featured === 1
                          ? "left-[18px]"
                          : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  Category
                </label>

                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3 pr-8 text-xs text-gray-700 outline-none focus:border-[#087f8c]"
                  >
                    <option value="">
                      {categoriesLoading
                        ? "Loading categories..."
                        : "Select category"}
                    </option>

                    {categories.map((item) => (
                      <option key={item.id} value={String(item.id)}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <FiChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-3 text-gray-400"
                  />
                </div>

                {categoryError && (
                  <p className="mt-1 text-[10px] text-red-500">
                    Failed to load categories.
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-100 bg-gray-50/50 p-3">
              <button
                type="submit"
                disabled={loading}
                className="flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087f8c] to-[#075985] text-xs font-semibold text-white shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSave size={13} />
                {loading
                  ? "Saving..."
                  : isEditing
                    ? "Update Blog Post"
                    : "Save Blog Post"}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="mt-2 flex h-8 w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-[10px] font-medium text-gray-500 transition hover:border-gray-300 hover:text-gray-700 disabled:opacity-50"
              >
                <FiX size={12} />
                Cancel
              </button>
            </div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <SectionTitle
              icon={FiImage}
              title="Featured Image"
              description="Recommended 1200 × 630 px"
            />

            <div className="mt-3">
              {imagePreview ? (
                <div className="relative overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={imagePreview}
                    alt="Featured blog"
                    className="h-40 w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="flex gap-2 border-t border-gray-100 p-2">
                    <button
                      type="button"
                      onClick={openImagePicker}
                      className="flex flex-1 items-center justify-center gap-1 rounded-md bg-[#087f8c]/10 px-2 py-2 text-xs font-medium text-[#087f8c] hover:bg-[#087f8c]/20"
                    >
                      <FiUploadCloud size={13} />
                      Change Image
                    </button>

                    <button
                      type="button"
                      onClick={removeImage}
                      className="flex items-center justify-center gap-1 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100"
                    >
                      <FiX size={13} />
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openImagePicker}
                  className="flex h-32 w-full flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50/70 transition hover:border-[#087f8c]/50 hover:bg-[#087f8c]/5"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#087f8c] shadow-sm">
                    <FiUploadCloud size={18} />
                  </div>

                  <p className="text-[10px] font-semibold text-gray-600">
                    Click to upload
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400">
                    PNG, JPG, WEBP · Max 5 MB
                  </p>
                </button>
              )}

              {/* Keep this input mounted at all times. */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

              {formData.removeFeaturedImage && !formData.featuredImage && (
                <p className="mt-2 text-[10px] text-amber-600">
                  Image removal will be applied when you save.
                </p>
              )}
            </div>
          </div>

          {/* TAGS */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <SectionTitle
              icon={FiTag}
              title="Tags"
              description="Add relevant blog tags."
            />

            <div className="mt-3 flex gap-1.5">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Add tag..."
                className="h-8 min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50/50 px-2.5 text-[10px] outline-none focus:border-[#087f8c]"
              />

              <button
                type="button"
                onClick={addTag}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c] hover:bg-[#087f8c] hover:text-white"
              >
                <FiPlus size={13} />
              </button>
            </div>

            {formData.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-[#087f8c]/10 px-2 py-1 text-[9px] font-medium text-[#087f8c]"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      aria-label={`Remove ${tag}`}
                      className="hover:text-red-500"
                    >
                      <FiX size={10} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

const SectionTitle = ({ icon: Icon, title, description }) => (
  <div className="flex items-center gap-2.5">
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#087f8c]/10 text-[#087f8c]">
      <Icon size={13} />
    </div>

    <div>
      <h3 className="text-xs font-bold text-gray-800">{title}</h3>
      {description && (
        <p className="text-[9px] text-gray-400">{description}</p>
      )}
    </div>
  </div>
);

const EditorButton = ({ children, onClick, title }) => (
  <button
    type="button"
    title={title}
    onMouseDown={(e) => {
      e.preventDefault();
      onClick();
    }}
    className="flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-[10px] font-medium text-gray-500 transition hover:bg-white hover:text-[#087f8c] hover:shadow-sm active:scale-95"
  >
    {children}
  </button>
);

const ToolbarDivider = () => (
  <div className="mx-1 h-4 w-px bg-gray-200" />
);

export default BlogPostForm;

