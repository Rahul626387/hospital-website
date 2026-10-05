// "use client";

// import React, { useMemo, useState } from "react";
// import { FiLayers } from "react-icons/fi";
// import MasterHeader from "../../components/admin/MasterHeader";
// import MasterFilters from "../../components/admin/MasterFilters";
// import MasterFooter from "../../components/admin/MasterFooter";
// import MasterTableHeader from "../../components/admin/MasterTableHeader";
// import MasterResultInfo from "../../components/admin/MasterResultInfo";
// import MasterTable from "../../components/admin/MasterTable";
// import AuthService from "../../src/services/Authservices";
// import ApiService from "../../src/services/Apiservices";
// import useSWR from 'swr'

// // const columns = [
// //   {
// //     key: "id",
// //     label: "#",
// //   },
// //   {
// //     key: "doctor_name",
// //     label: "Doctor",
// //     editable: true,
// //   },
// //   {
// //     key: "specialization",
// //     label: "Specialization",
// //     editable: true,
// //   },
// //   {
// //     key: "status",
// //     label: "Status",
// //     align: "center",
// //   },
// // ];


// const columns = [
//   {
//     key: "id",
//     label: "#",
//     width: "w-[60px]",
//     render: (value) => (
//       <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-gray-50 px-2 text-[10px] font-bold text-gray-400">
//         {String(value).padStart(2, "0")}
//       </span>
//     ),
//   },

//   {
//     key: "name",
//     label: "Category",
//     editable: true,
//     placeholder: "Category name",
//     render: (value, item) => (
//       <div className="flex items-center gap-3">
//         <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#087f8c]/10 to-[#075985]/10 text-[#087f8c]">
//           <span className="text-sm font-bold">
//             {value?.charAt(0)?.toUpperCase()}
//           </span>

//           <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-white bg-[#087f8c]" />
//         </div>

//         <div>
//           <p className="text-[13px] font-semibold text-gray-800">
//             {value}
//           </p>

//           <p className="mt-0.5 text-[10px] text-gray-400">
//             Category #{item.id}
//           </p>
//         </div>
//       </div>
//     ),
//   },

//   {
//     key: "slug",
//     label: "Slug",
//     editable: true,
//     placeholder: "category-slug",
//     render: (value) => (
//       <span className="inline-flex max-w-[190px] truncate rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 font-mono text-[10px] text-gray-500">
//         /{value}
//       </span>
//     ),
//   },

//   {
//     key: "description",
//     label: "Description",
//     editable: true,
//     inputType: "textarea",
//     placeholder: "Description",
//     render: (value) => (
//       <p
//         className="max-w-[280px] truncate text-[11px] leading-5 text-gray-500"
//         title={value || ""}
//       >
//         {value || "No description available"}
//       </p>
//     ),
//   },

//   {
//     key: "status",
//     label: "Status",
//     align: "center",
//     render: (value) =>
//       value == "1" ? (
//         <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
//           <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//           Active
//         </span>
//       ) : (
//         <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-500">
//           <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
//           Inactive
//         </span>
//       ),
//   },
// ];

// export default function DoctorSpecialtyPage() {
//    const userId = AuthService.getUserId()
//   const [modalOpen, setModalOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [editingId, setEditingId] = useState(null);
//   const [updating, setUpdating] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     slug: "",
//     description: "",
//     user_id:userId
//   });

//     const { data, error, isLoading } =  useSWR('specialties',ApiService.get)

//     const categories = data?.data || []

    

//   // ================= FILTER DATA =================
//   const filteredCategories = useMemo(() => {
//     return categories.filter((category) => {
//       const searchText = search.toLowerCase().trim();

//       const matchesSearch =
//         !searchText ||
//         category.name?.toLowerCase().includes(searchText) ||
//         category.slug?.toLowerCase().includes(searchText) ||
//         category.description?.toLowerCase().includes(searchText);

//       const matchesStatus =
//         statusFilter === "all" ||
//         String(category.status) === statusFilter;

//       return matchesSearch && matchesStatus;
//     });
//   }, [categories, search, statusFilter]);

//   // ================= RESET =================
//   const handleReset = () => {
//     setSearch("");
//     setStatusFilter("all");
//   };

//   const hasFilter = search || statusFilter !== "all";


  
//   const handleSave = async (data) => {
//   try {
//     const res = await ApiService.post("blog-categories", data);

//     if (res?.success) {
//       toast.success("Category saved successfully");
//       setModalOpen(false);
//       mutate('blog-categories')
//     } else {
//       toast.error(res?.message || "Category save failed");
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error("Something went wrong");
//   }
// };
 




  
//   // delete api 


// const handleDelete = (cateId) => {
//   toast((t) => (
//     <div className="flex flex-col gap-3">
//       <p className="font-medium text-gray-800">
//         Are you sure you want to delete this category?
//       </p>

//       <div className="flex justify-end gap-2">
//         <button
//           onClick={() => toast.dismiss(t.id)}
//           className="rounded-md bg-gray-200 px-3 py-1.5 text-sm"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={async () => {
//             toast.dismiss(t.id);

//             try {
//               const user_id = localStorage.getItem("user_id");

//               const res = await ApiService.delete(
//                 `blog-categories/${cateId}`,
//                 {
//                   user_id: Number(user_id),
//                 }
//               );

//               if (res?.success) {
//                 toast.success(
//                   res.message || "Category deleted successfully"
//                 );

//                 mutate("blog-categories");
//               } else {
//                 toast.error(
//                   res?.message || "Failed to delete category"
//                 );
//               }
//             } catch (error) {
//               toast.error(
//                 error?.response?.data?.message ||
//                 "Something went wrong"
//               );
//             }
//           }}
//           className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   ));
// };

// // Edit api

// const handleEdit = (category) => {
//   setEditingId(category.id);

//   setEditForm({
//     name: category.name || "",
//     slug: category.slug || "",
//     description: category.description || "",
//   });
// };


// const handleUpdate = async (id) => {
//   try {
//     const payload = {
//       name: editForm.name.trim(),
//       slug: editForm.slug.trim(),
//       description: editForm.description.trim(),
//       user_id: userId,
//     };

//     if (!payload.name) {
//       toast.error("Category name is required");
//       return;
//     }

//     if (!payload.slug) {
//       toast.error("Category slug is required");
//       return;
//     }

//     setUpdating(true);

//     const res = await ApiService.put(
//       `blog-categories/${id}`,
//       payload
//     );

//     if (res?.success) {
//       toast.success(
//         res?.message || "Category updated successfully"
//       );

//       setEditingId(null);

//       mutate("blog-categories");
//     } else {
//       toast.error(
//         res?.message || "Failed to update category"
//       );
//     }

//   } catch (error) {
//     console.error("Update category error:", error);

//     toast.error(
//       error?.response?.data?.message ||
//       "Something went wrong while updating category"
//     );

//   } finally {
//     setUpdating(false);
//   }
// };

//   return (
//     <div>
//       <div>

//       <MasterHeader
//         title="Doctor Specialty"
//         description="Manage doctor specialties"
//         icon={FiLayers}
//         addText="Add Specialty"
//         onAdd={() => setModalOpen(true)}
//       />

//         <MasterFilters
//           search={search}
//           setSearch={setSearch}
//           statusFilter={statusFilter}
//           setStatusFilter={setStatusFilter}
//           onReset={handleReset}
//           hasFilter={hasFilter}
//           searchPlaceholder="Search Specialty..."
//         />
//       </div>

//         {/* <MasterResultInfo
//           filteredCount={filteredCategories.length}
//           totalCount={categories.length}
//           label="categories"
//           hasFilter={hasFilter}
//         /> */}
//           <MasterTable
//             data={filteredCategories}
//             columns={columns}
//             editingId={editingId}
//             editForm={editForm}
//             setEditForm={setEditForm}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//             onUpdate={handleUpdate}
//             onCancel={() => setEditingId(null)}
//             updating={updating}
//             hasFilter={hasFilter}
//             onReset={handleReset}
//             emptyTitle="No Specialty found"
//           />
       
//         <MasterFooter
//           total={categories.length}
//           label="Specialty"
//           rightText="Specialty Management"
//         />
//       {/* Modal */}
//       {/* {modalOpen && (
//         <div>
//           Doctor Specialty Modal
//         </div>
//       )} */}
//     </div>
//   );
// }



"use client";

import React, { useMemo, useState } from "react";
import { FiLayers } from "react-icons/fi";
import useSWR from "swr";
import { toast } from "react-hot-toast";

import MasterHeader from "../../components/admin/MasterHeader";
import MasterFilters from "../../components/admin/MasterFilters";
import MasterFooter from "../../components/admin/MasterFooter";
import MasterTable from "../../components/admin/MasterTable";

import AuthService from "../../src/services/Authservices";
import ApiService from "../../src/services/Apiservices";
import ModalComponent from "../../components/admin/ModelComponent";
import CategoryForm from "../../components/admin/CategoryForm";
import SpecialtyForm from "../../components/admin/SpecialtyForm";

const columns = [
  {
    key: "id",
    label: "#",
    width: "w-[60px]",
    render: (value) => (
      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-gray-50 px-2 text-[10px] font-bold text-gray-400">
        {String(value).padStart(2, "0")}
      </span>
    ),
  },

  {
    key: "name",
    label: "Specialty",
    editable: true,
    placeholder: "Specialty name",

    render: (value, item) => (
      <div className="flex items-center gap-3">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#087f8c]/10 to-[#075985]/10 text-[#087f8c]">
          <span className="text-sm font-bold">
            {value?.charAt(0)?.toUpperCase()}
          </span>

          {/* <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-white bg-[#087f8c]" /> */}
        </div>

        <div>
          <p className="text-[13px] font-semibold text-gray-800">
            {value || "N/A"}
          </p>

          {/* <p className="mt-0.5 text-[10px] text-gray-400">
            Specialty #{item.id}
          </p> */}
        </div>
      </div>
    ),
  },

  // {
  //   key: "department_name",
  //   label: "Department",
  //   editable: true,
  //   placeholder: "department",

  //   render: (value) => (
  //     <span className="inline-flex max-w-[190px] truncate rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 font-mono text-[10px] text-gray-500">
  //       {value || ""}
  //     </span>
  //   ),
  // },

  {
  key: "department_name",
  label: "Department",
  editable: false,

  render: (value) => (
    <span className="inline-flex max-w-[190px] truncate rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 font-mono text-[10px] text-gray-500">
      {value || "-"}
    </span>
  ),
},


  {
    key: "status",
    label: "Status",
    align: "center",

    render: (value) =>
      value == "1" ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Active
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          Inactive
        </span>
      ),
  },
];

export default function DoctorSpecialtyPage() {
  // ================= USER ID =================

  const userId = AuthService.getUserId();

  // ================= STATES =================

  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    user_id: userId,
  });

  // ================= GET SPECIALTIES =================

  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR("specialties", ApiService.get);

  const specialties = data?.data || [];

  // ================= FILTER SPECIALTIES =================

  const filteredSpecialties = useMemo(() => {
    return specialties.filter((specialty) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        specialty.name?.toLowerCase().includes(searchText) ||
        specialty.department_name?.toLowerCase().includes(searchText) ||
        specialty.description?.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "all" ||
        String(specialty.status) === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [specialties, search, statusFilter]);

  // ================= RESET FILTER =================

  const handleReset = () => {
    setSearch("");
    setStatusFilter("all");
  };

  const hasFilter = search || statusFilter !== "all";

  // ================= SAVE SPECIALTY =================

  const handleSave = async (formData) => {
    try {
      // const payload = {
      //   ...formData,
      //   user_id: userId,
      // };

      const res = await ApiService.post(
        "specialties",
        formData
      );

      if (res?.success) {
        toast.success(
          res?.message || "Specialty saved successfully"
        );

        setModalOpen(false);

        // Refresh specialties
        mutate();
      } else {
        toast.error(
          res?.message || "Specialty save failed"
        );
      }
    } catch (error) {
      console.error(
        "Save specialty error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  // ================= DELETE SPECIALTY =================

  const handleDelete = (specialtyId) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-medium text-gray-800">
          Are you sure you want to delete this specialty?
        </p>

        <div className="flex justify-end gap-2">
          {/* Cancel */}

          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            className="rounded-md bg-gray-200 px-3 py-1.5 text-sm text-gray-700"
          >
            Cancel
          </button>

          {/* Delete */}

          <button
            type="button"
            onClick={async () => {
              toast.dismiss(t.id);

              try {
                const user_id =
                  localStorage.getItem("user_id");

                const res =
                  await ApiService.delete(
                    `specialties/${specialtyId}`,
                    {
                      user_id: Number(user_id),
                    }
                  );

                if (res?.success) {
                  toast.success(
                    res?.message ||
                      "Specialty deleted successfully"
                  );

                  // Refresh list
                  mutate();
                } else {
                  toast.error(
                    res?.message ||
                      "Failed to delete specialty"
                  );
                }
              } catch (error) {
                console.error(
                  "Delete specialty error:",
                  error
                );

                toast.error(
                  error?.response?.data?.message ||
                    "Something went wrong"
                );
              }
            }}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm text-white"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  // ================= EDIT SPECIALTY =================

  const handleEdit = (specialty) => {
    setEditingId(specialty.id);

    setEditForm({
      name: specialty.name || "",
      slug: specialty.slug || "",
      description: specialty.description || "",
      user_id: userId,
    });
  };

  // ================= UPDATE SPECIALTY =================

  const handleUpdate = async (id) => {
    // try {
    //   const payload = {
    //     name: editForm.name.trim(),
    //     slug: editForm.slug.trim(),
    //     description: editForm.description.trim(),
    //     user_id: userId,
    //   };

    //   // Validate name

    //   if (!payload.name) {
    //     toast.error(
    //       "Specialty name is required"
    //     );
    //     return;
    //   }

    //   // Validate slug

    //   if (!payload.slug) {
    //     toast.error(
    //       "Specialty slug is required"
    //     );
    //     return;
    //   }

    //   setUpdating(true);

    //   const res = await ApiService.put(
    //     `specialties/${id}`,
    //     payload
    //   );

    //   if (res?.success) {
    //     toast.success(
    //       res?.message ||
    //         "Specialty updated successfully"
    //     );

    //     setEditingId(null);

    //     // Refresh list
    //     mutate();
    //   } else {
    //     toast.error(
    //       res?.message ||
    //         "Failed to update specialty"
    //     );
    //   }
    // } catch (error) {
    //   console.error(
    //     "Update specialty error:",
    //     error
    //   );

    //   toast.error(
    //     error?.response?.data?.message ||
    //       "Something went wrong while updating specialty"
    //   );
    // } finally {
    //   setUpdating(false);
    // }
  };

  // ================= LOADING =================

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-[#087f8c]" />
          Loading specialties...
        </div>
      </div>
    );
  }

  // ================= ERROR =================

  if (error) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="rounded-xl border border-red-100 bg-red-50 px-5 py-4 text-sm text-red-600">
          Failed to load specialties.
        </div>
      </div>
    );
  }

  // ================= UI =================

  return (
   <div className="w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      {/* ================= HEADER ================= */}

      {/* <MasterHeader
        title="Doctor Specialty"
        description="Manage doctor specialties"
        icon={FiLayers}
        addText="Add Specialty"
        onAdd={() => setModalOpen(true)}
      /> */}

      <MasterHeader
        title="Doctor Specialty"
        description="Manage doctor specialties"
        icon={FiLayers}
        addText="Add Specialty"
        onAdd={() => setModalOpen(true)}
        
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onReset={handleReset}
        hasFilter={hasFilter}
        searchPlaceholder="Search Specialty..."
      />

      {/* ================= FILTER ================= */}

      {/* <MasterFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onReset={handleReset}
        hasFilter={hasFilter}
        searchPlaceholder="Search Specialty..."
      /> */}

      {/* ================= TABLE ================= */}

      <MasterTable
        data={filteredSpecialties}
        columns={columns}
        editingId={editingId}
        editForm={editForm}
        setEditForm={setEditForm}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onCancel={() => setEditingId(null)}
        updating={updating}
        hasFilter={hasFilter}
        onReset={handleReset}
        emptyTitle="No Specialty found"
      />

      {/* ================= FOOTER ================= */}

      <MasterFooter
        total={specialties.length}
        label="Specialty"
        rightText="Specialty Management"
      />

      {/* ================= MODAL ================= */}

      <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Specialties"
        description="Create a new Doctor Specialties"
        size="sm"
      >
        <SpecialtyForm
          onSubmit={handleSave}
          onCancel={() => setModalOpen(false)}
          userId={userId}
        />
      </ModalComponent>
    </div>
  );
}