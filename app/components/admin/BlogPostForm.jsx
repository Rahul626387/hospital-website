
"use client";

import React, { useRef, useState } from "react";
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

const BlogPostForm = ({ onClose }) => {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    featuredImage: null,
    status: "published",
    tags: [],
    seoTitle: "",
    seoDescription: "",
  });

  const [tagInput, setTagInput] = useState("");

  const [imagePreview, setImagePreview] = useState("");

  const categories = [
    "Health Tips",
    "Heart Care",
    "Diabetes",
    "Women Health",
    "Child Care",
    "Mental Health",
    "Nutrition",
    "Fitness",
    "Hospital News",
    "Medical Awareness",
  ];

  // ----------------------------------------
  // Normal Input Change
  // ----------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ----------------------------------------
  // Title + Auto Slug
  // ----------------------------------------

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

  // ----------------------------------------
  // Editor Input
  // ----------------------------------------

  const handleEditorInput = (e) => {
    const html = e.currentTarget?.innerHTML || "";

    setFormData((prev) => ({
      ...prev,
      content: html,
    }));
  };

  // ----------------------------------------
  // Editor Command
  // ----------------------------------------

  const executeCommand = (command, value = null) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    try {
      document.execCommand(command, false, value);
    } catch (error) {
      console.error("Editor command error:", error);
      return;
    }

    const html = editorRef.current?.innerHTML || "";

    setFormData((prev) => ({
      ...prev,
      content: html,
    }));
  };

  // ----------------------------------------
  // Heading
  // ----------------------------------------

  const formatHeading = (level) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    try {
      document.execCommand("formatBlock", false, level);
    } catch (error) {
      console.error("Heading formatting error:", error);
      return;
    }

    const html = editorRef.current?.innerHTML || "";

    setFormData((prev) => ({
      ...prev,
      content: html,
    }));
  };

  // ----------------------------------------
  // Link
  // ----------------------------------------

  const addLink = () => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
      alert("Please select some text first.");
      return;
    }

    const selectedText = selection.toString();

    if (!selectedText) {
      alert("Please select text first.");
      return;
    }

    const url = window.prompt(
      "Enter URL",
      "https://"
    );

    if (!url) return;

    try {
      document.execCommand(
        "createLink",
        false,
        url
      );
    } catch (error) {
      console.error("Link error:", error);
      return;
    }

    const html = editorRef.current?.innerHTML || "";

    setFormData((prev) => ({
      ...prev,
      content: html,
    }));
  };

  // ----------------------------------------
  // Image Upload
  // ----------------------------------------

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      featuredImage: file,
    }));

    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  // ----------------------------------------
  // Remove Image
  // ----------------------------------------

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      featuredImage: null,
    }));

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImagePreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // ----------------------------------------
  // Tags
  // ----------------------------------------

  const addTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    if (
      formData.tags.some(
        (item) =>
          item.toLowerCase() === tag.toLowerCase()
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
      tags: prev.tags.filter(
        (tag) => tag !== tagToRemove
      ),
    }));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  // ----------------------------------------
  // Submit
  // ----------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalContent =
      editorRef.current?.innerHTML || "";

    const finalData = {
      ...formData,
      content: finalContent,
    };

    console.log("Blog Post Data:", finalData);

    alert("Blog post saved successfully!");
  };

  // ----------------------------------------
  // Character Count
  // ----------------------------------------

  const contentText = formData.content
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_290px]">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="min-w-0 space-y-4">

          {/* -----------------------------------------------------
              BLOG TITLE
          ----------------------------------------------------- */}

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
              className="
                w-full
                border-0
                bg-transparent
                px-0
                text-xl
                font-bold
                text-gray-800
                outline-none
                placeholder:text-gray-300
              "
            />

            <div className="mt-2 h-px bg-gray-100" />

            <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-400">

              <FiGlobe size={11} />

              <span>
                yourwebsite.com/blog/
              </span>

              <span className="font-medium text-[#087f8c]">
                {formData.slug ||
                  "your-blog-slug"}
              </span>

            </div>
          </div>

          {/* -----------------------------------------------------
              SHORT DESCRIPTION
          ----------------------------------------------------- */}

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
              className="
                mt-3
                w-full
                resize-none
                rounded-lg
                border
                border-gray-200
                bg-gray-50/50
                px-3
                py-2.5
                text-xs
                leading-5
                text-gray-700
                outline-none
                transition

                placeholder:text-gray-400

                focus:border-[#087f8c]
                focus:bg-white
                focus:ring-2
                focus:ring-[#087f8c]/10
              "
            />

            <div className="mt-1 text-right text-[9px] text-gray-400">
              {formData.excerpt.length}/180
            </div>
          </div>

          {/* -----------------------------------------------------
              BLOG CONTENT EDITOR
          ----------------------------------------------------- */}

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-gray-100 px-4 py-3">

              <SectionTitle
                icon={FiFileText}
                title="Blog Content"
                description="Write and format your article."
              />

            </div>

            {/* Toolbar */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-1
                border-b
                border-gray-100
                bg-gray-50/80
                px-3
                py-2
              "
            >

              {/* Bold */}

              <EditorButton
                title="Bold"
                onClick={() =>
                  executeCommand("bold")
                }
              >
                <FiBold size={14} />
              </EditorButton>

              {/* Italic */}

              <EditorButton
                title="Italic"
                onClick={() =>
                  executeCommand("italic")
                }
              >
                <FiItalic size={14} />
              </EditorButton>

              <ToolbarDivider />

              {/* H2 */}

              <EditorButton
                title="Heading 2"
                onClick={() =>
                  formatHeading("h2")
                }
              >
                H2
              </EditorButton>

              {/* H3 */}

              <EditorButton
                title="Heading 3"
                onClick={() =>
                  formatHeading("h3")
                }
              >
                H3
              </EditorButton>

              <ToolbarDivider />

              {/* Bullet */}

              <EditorButton
                title="Bullet List"
                onClick={() =>
                  executeCommand(
                    "insertUnorderedList"
                  )
                }
              >
                <FiList size={14} />
              </EditorButton>

              {/* Number */}

              <EditorButton
                title="Numbered List"
                onClick={() =>
                  executeCommand(
                    "insertOrderedList"
                  )
                }
              >
                1.
              </EditorButton>

              <ToolbarDivider />

              {/* Quote */}

              <EditorButton
                title="Quote"
                onClick={() =>
                  formatHeading("blockquote")
                }
              >
                "
              </EditorButton>

              {/* Link */}

              <EditorButton
                title="Add Link"
                onClick={addLink}
              >
                <FiLink size={14} />
              </EditorButton>

              {/* Clear */}

              <EditorButton
                title="Clear Formatting"
                onClick={() =>
                  executeCommand(
                    "removeFormat"
                  )
                }
              >
                Tx
              </EditorButton>

            </div>

            {/* -------------------------------------------------
                CONTENT EDITABLE
            ------------------------------------------------- */}

            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              onInput={handleEditorInput}
              data-placeholder="Start writing your blog post..."
              className="
                min-h-[350px]
                w-full
                px-5
                py-5
                text-sm
                leading-7
                text-gray-700
                outline-none

                empty:before:pointer-events-none
                empty:before:text-gray-300
                empty:before:content-[attr(data-placeholder)]

                [&_h2]:mb-3
                [&_h2]:mt-5
                [&_h2]:text-xl
                [&_h2]:font-bold
                [&_h2]:text-gray-800

                [&_h3]:mb-2
                [&_h3]:mt-4
                [&_h3]:text-lg
                [&_h3]:font-bold
                [&_h3]:text-gray-800

                [&_p]:mb-3

                [&_blockquote]:my-3
                [&_blockquote]:border-l-4
                [&_blockquote]:border-[#087f8c]
                [&_blockquote]:bg-[#087f8c]/5
                [&_blockquote]:px-4
                [&_blockquote]:py-2
                [&_blockquote]:italic
                [&_blockquote]:text-gray-600

                [&_ul]:my-2
                [&_ul]:list-disc
                [&_ul]:pl-6

                [&_ol]:my-2
                [&_ol]:list-decimal
                [&_ol]:pl-6

                [&_li]:mb-1

                [&_a]:font-medium
                [&_a]:text-[#087f8c]
                [&_a]:underline
              "
            />

            {/* Footer */}

            <div className="border-t border-gray-100 px-4 py-2 text-right text-[9px] text-gray-400">
              {contentText.length} characters
            </div>

          </div>

          {/* -----------------------------------------------------
              SEO SETTINGS
          ----------------------------------------------------- */}

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

            <SectionTitle
              icon={FiGlobe}
              title="SEO Settings"
              description="Optimize this post for search engines."
            />

            <div className="mt-3 space-y-3">

              {/* SEO Title */}

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
                  className="
                    h-9
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50/50
                    px-3
                    text-xs
                    outline-none
                    transition

                    focus:border-[#087f8c]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#087f8c]/10
                  "
                />

                <div className="mt-1 text-right text-[9px] text-gray-400">
                  {formData.seoTitle.length}/60
                </div>

              </div>

              {/* Meta Description */}

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
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50/50
                    px-3
                    py-2
                    text-xs
                    outline-none
                    transition

                    focus:border-[#087f8c]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#087f8c]/10
                  "
                />

                <div className="mt-1 text-right text-[9px] text-gray-400">
                  {formData.seoDescription.length}/160
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="space-y-4 xl:sticky xl:top-4 xl:self-start">

          {/* -----------------------------------------------------
              PUBLISH
          ----------------------------------------------------- */}

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

            <div
              className="
                border-b
                border-gray-100
                bg-gradient-to-r
                from-[#087f8c]/5
                to-[#075985]/5
                px-4
                py-3
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xs font-bold text-gray-800">
                    Publish
                  </h3>

                  <p className="mt-0.5 text-[9px] text-gray-400">
                    Manage visibility
                  </p>

                </div>

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-[#087f8c]
                    shadow-sm
                  "
                >
                  <FiEye size={13} />
                </div>

              </div>

            </div>

            <div className="space-y-3 p-4">

              {/* Status */}

              <div>

                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  Status
                </label>

                <div className="relative">

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="
                      h-9
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50/50
                      px-3
                      pr-8
                      text-xs
                      text-gray-700
                      outline-none
                      transition

                      focus:border-[#087f8c]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#087f8c]/10
                    "
                  >
                    <option value="published">
                      Published
                    </option>

                    <option value="draft">
                      Draft
                    </option>

                    <option value="inactive">
                      Inactive
                    </option>
                  </select>

                  <FiChevronDown
                    size={13}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      text-gray-400
                    "
                  />

                </div>

              </div>

              {/* Category */}

              <div>

                <label className="mb-1 block text-[10px] font-semibold text-gray-600">
                  Category
                </label>

                <div className="relative">

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="
                      h-9
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50/50
                      px-3
                      pr-8
                      text-xs
                      text-gray-700
                      outline-none
                      transition

                      focus:border-[#087f8c]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#087f8c]/10
                    "
                  >

                    <option value="">
                      Select category
                    </option>

                    {categories.map(
                      (category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      )
                    )}

                  </select>

                  <FiChevronDown
                    size={13}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      text-gray-400
                    "
                  />

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="border-t border-gray-100 bg-gray-50/50 p-3">

              <button
                type="submit"
                className="
                  flex
                  h-9
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-gradient-to-r
                  from-[#087f8c]
                  to-[#075985]
                  text-xs
                  font-semibold
                  text-white
                  shadow-sm
                  transition

                  hover:-translate-y-0.5
                  hover:shadow-md

                  active:translate-y-0
                "
              >

                <FiSave size={13} />

                Save Blog Post

              </button>

              <button
                type="button"
                className="
                  mt-2
                  flex
                  h-8
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-[10px]
                  font-medium
                  text-gray-500
                  transition

                  hover:border-gray-300
                  hover:text-gray-700
                "
              >

                <FiEye size={12} />

                Preview

              </button>

            </div>

          </div>

          {/* -----------------------------------------------------
              FEATURED IMAGE
          ----------------------------------------------------- */}

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

            <SectionTitle
              icon={FiImage}
              title="Featured Image"
              description="Recommended 1200 × 630 px"
            />

            <label className="mt-3 block cursor-pointer">

              {imagePreview ? (

                <div className="relative overflow-hidden rounded-lg border border-gray-200">

                  <img
                    src={imagePreview}
                    alt="Featured"
                    className="
                      h-36
                      w-full
                      object-cover
                    "
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-black/60
                      text-white
                      transition
                      hover:bg-red-500
                    "
                  >
                    <FiX size={12} />
                  </button>

                </div>

              ) : (

                <div
                  className="
                    flex
                    h-32
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-dashed
                    border-gray-200
                    bg-gray-50/70
                    transition

                    hover:border-[#087f8c]/40
                    hover:bg-[#087f8c]/[0.03]
                  "
                >

                  <div
                    className="
                      mb-2
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                      text-[#087f8c]
                      shadow-sm
                    "
                  >
                    <FiUploadCloud size={18} />
                  </div>

                  <p className="text-[10px] font-semibold text-gray-600">
                    Click to upload
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400">
                    PNG, JPG, WEBP
                  </p>

                </div>

              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>

          </div>

          {/* -----------------------------------------------------
              TAGS
          ----------------------------------------------------- */}

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
                onChange={(e) =>
                  setTagInput(e.target.value)
                }
                onKeyDown={handleTagKeyDown}
                placeholder="Add tag..."
                className="
                  h-8
                  min-w-0
                  flex-1
                  rounded-lg
                  border
                  border-gray-200
                  bg-gray-50/50
                  px-2.5
                  text-[10px]
                  outline-none

                  focus:border-[#087f8c]
                  focus:bg-white
                "
              />

              <button
                type="button"
                onClick={addTag}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#087f8c]/10
                  text-[#087f8c]
                  transition

                  hover:bg-[#087f8c]
                  hover:text-white
                "
              >
                <FiPlus size={13} />
              </button>

            </div>

            {formData.tags.length > 0 && (

              <div className="mt-3 flex flex-wrap gap-1.5">

                {formData.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      bg-[#087f8c]/10
                      px-2
                      py-1
                      text-[9px]
                      font-medium
                      text-[#087f8c]
                    "
                  >

                    #{tag}

                    <button
                      type="button"
                      onClick={() =>
                        removeTag(tag)
                      }
                      className="
                        transition
                        hover:text-red-500
                      "
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

// =============================================================
// SECTION TITLE
// =============================================================

const SectionTitle = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center gap-2.5">

      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#087f8c]/10
          text-[#087f8c]
        "
      >
        <Icon size={13} />
      </div>

      <div>

        <h3 className="text-xs font-bold text-gray-800">
          {title}
        </h3>

        {description && (
          <p className="text-[9px] text-gray-400">
            {description}
          </p>
        )}

      </div>

    </div>
  );
};

// =============================================================
// EDITOR BUTTON
// =============================================================

const EditorButton = ({
  children,
  onClick,
  title,
}) => {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => {
        /*
          VERY IMPORTANT:

          Button click se editor ki selection lose ho jati hai.

          preventDefault() selection ko preserve karta hai,
          isliye Bold / Italic / Link selected text par
          properly apply hote hain.
        */

        e.preventDefault();

        onClick();
      }}
      className="
        flex
        h-7
        min-w-7
        items-center
        justify-center
        rounded-md
        px-2
        text-[10px]
        font-medium
        text-gray-500
        transition

        hover:bg-white
        hover:text-[#087f8c]
        hover:shadow-sm

        active:scale-95
      "
    >
      {children}
    </button>
  );
};

// =============================================================
// TOOLBAR DIVIDER
// =============================================================

const ToolbarDivider = () => {
  return (
    <div className="mx-1 h-4 w-px bg-gray-200" />
  );
};

export default BlogPostForm;

