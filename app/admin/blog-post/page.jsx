"use client"


import React, { useState } from 'react'
import CommonButton from '../../components/admin/CommonButton'
import ModalComponent from '../../components/admin/ModelComponent'
import BlogPostForm from "../../components/admin/BlogPostForm";


const blogdata = [
  {
    "id": 1,
    "title": "10 Tips for a Healthy Heart",
    "slug": "10-tips-for-a-healthy-heart",
    "categoryId": 2,
    "category": "Heart Care",
    "author": "Dr. Rahul Sharma",
    "status": "published",
    "publishedAt": "2026-09-01",
    "image": "/images/blog/heart-care.jpg"
  },
  {
    "id": 2,
    "title": "How to Control Diabetes Naturally",
    "slug": "how-to-control-diabetes",
    "categoryId": 3,
    "category": "Diabetes",
    "author": "Dr. Amit Verma",
    "status": "published",
    "publishedAt": "2026-08-28",
    "image": "/images/blog/diabetes.jpg"
  }
]

const Blogpage = () => {
  const [modalOpen, setModalOpen] = useState(false)

   const handleSave = (data) => {
    console.log("Category:", data);

    // JSON/localStorage/API me save karenge

    setModalOpen(false);
  };
  return (
    <div>
      <div>
       <CommonButton onClick={() => setModalOpen(true)}>
          + Add Post
        </CommonButton>
      </div>
        <div>
            card 
        </div>


        <div>
            table
        </div>
         <ModalComponent
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Add Blog Post"
          size="xl"
          // description="Post a new blog With Category"
        >
        <BlogPostForm
          onSubmit={handleSave}
          onCancel={() => setModalOpen(false)}
        />
      </ModalComponent>
    </div>
  )
}

export default Blogpage