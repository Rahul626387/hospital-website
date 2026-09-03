// import React from 'react'

// const Category = [
//   {
//     "id": 1,
//     "name": "Health Tips",
//     "slug": "health-tips",
//     "description": "General health and wellness tips",
//     "status": "active",
//     "postCount": 12
//   },
//   {
//     "id": 2,
//     "name": "Heart Care",
//     "slug": "heart-care",
//     "description": "Heart health and cardiovascular care",
//     "status": "active",
//     "postCount": 8
//   },
//   {
//     "id": 3,
//     "name": "Diabetes",
//     "slug": "diabetes",
//     "description": "Diabetes care and management",
//     "status": "active",
//     "postCount": 6
//   },
//   {
//     "id": 4,
//     "name": "Women Health",
//     "slug": "women-health",
//     "description": "Women's health and wellness",
//     "status": "active",
//     "postCount": 10
//   },
//   {
//     "id": 5,
//     "name": "Child Care",
//     "slug": "child-care",
//     "description": "Child health and pediatric care",
//     "status": "active",
//     "postCount": 7
//   },
//   {
//     "id": 6,
//     "name": "Mental Health",
//     "slug": "mental-health",
//     "description": "Mental health awareness and care",
//     "status": "active",
//     "postCount": 5
//   },
//   {
//     "id": 7,
//     "name": "Nutrition",
//     "slug": "nutrition",
//     "description": "Healthy diet and nutrition tips",
//     "status": "active",
//     "postCount": 9
//   },
//   {
//     "id": 8,
//     "name": "Fitness",
//     "slug": "fitness",
//     "description": "Fitness, exercise and lifestyle",
//     "status": "active",
//     "postCount": 4
//   },
//   {
//     "id": 9,
//     "name": "Hospital News",
//     "slug": "hospital-news",
//     "description": "Latest hospital updates and news",
//     "status": "active",
//     "postCount": 11
//   },
//   {
//     "id": 10,
//     "name": "Medical Awareness",
//     "slug": "medical-awareness",
//     "description": "Medical awareness and education",
//     "status": "active",
//     "postCount": 15
//   }
// ]

// const Categorypage = () => {
//   return (
//     <div>
//         <div>
//            Category
//         </div>
//         <div>
//            card
//         </div>
//         <div>
//             table
//         </div>
//     </div>
//   )
// }

// export default Categorypage

"use client";

import React, { useState } from "react";
import ModalComponent from "../../components/admin/ModelComponent";
import CategoryForm from "../../components/admin/CategoryForm";
import CommonButton from "../../components/admin/CommonButton";
import CategoryTable from "../../components/admin/CategoryTable";

import { FiLayers, FiCheckCircle, FiXCircle, FiFileText } from "react-icons/fi";
import StatCard from "../../components/admin/StatCard";
import Breadcrumb from "../../components/admin/Breadcrumb";

const categoryStats = [
  {
    id: 1,
    title: "Total Categories",
    value: 10,
    type: "total",
    icon: FiLayers,
  },
  {
    id: 2,
    title: "Active Categories",
    value: 10,
    type: "active",
    icon: FiCheckCircle,
  },
  {
    id: 3,
    title: "Inactive Categories",
    value: 0,
    type: "inactive",
    icon: FiXCircle,
  },
  {
    id: 4,
    title: "Total Blog Posts",
    value: 87,
    type: "posts",
    icon: FiFileText,
  },
];

const CategoryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = (data) => {
    console.log("Category:", data);

    // JSON/localStorage/API me save karenge

    setModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      
      <div className="flex items-center justify-between mb-2">
        

        <CommonButton onClick={() => setModalOpen(true)}>
          + Add Category
        </CommonButton>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          title="Total Categories"
          value={10}
          type="total"
          icon={FiLayers}
        />

        <StatCard
          title="Active Categories"
          value={10}
          type="active"
          icon={FiCheckCircle}
        />

        <StatCard
          title="Inactive Categories"
          value={0}
          type="inactive"
          icon={FiXCircle}
        />

        <StatCard
          title="Total Blog Posts"
          value={87}
          type="posts"
          icon={FiFileText}
        />
      </div>
      <div className="mt-2">
        <CategoryTable />
      </div>

      {/* Modal */}
      <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Category"
        description="Create a new blog category"
      >
        <CategoryForm
          onSubmit={handleSave}
          onCancel={() => setModalOpen(false)}
        />
      </ModalComponent>
    </div>
  );
};

export default CategoryPage;
