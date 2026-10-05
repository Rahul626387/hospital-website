// "use client";

// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import MasterRow from "./MasterRow";

// const MasterTable = ({
//   data = [],
//   columns = [],
//   editingId,
//   editForm,
//   setEditForm,
//   onEdit,
//   onDelete,
//   onUpdate,
//   onCancel,
//   updating,
//   hasFilter,
//   onReset,
//   emptyTitle = "No records found",
//   emptyDescription = "Try changing your search or filter.",
// }) => {
//   return (
//     <div className="max-h-[430px] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

//       <table className="w-full min-w-[750px] text-left">

//         <thead className="sticky top-0 z-20">
//           <tr className="border-b border-white/10 bg-gradient-to-r from-[#075f6a] via-[#087f8c] to-[#075985]">

//             {columns.map((column, index) => (
//               <th
//                 key={column.key || index}
//                 className={`px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white/80 ${
//                   column.width || ""
//                 } ${
//                   column.align === "center"
//                     ? "text-center"
//                     : column.align === "right"
//                     ? "text-right"
//                     : ""
//                 }`}
//               >
//                 {column.label}
//               </th>
//             ))}

//             <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-wider text-white/80">
//               Actions
//             </th>

//           </tr>
//         </thead>

//         <tbody className="divide-y divide-gray-100">

//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <MasterRow
//                 key={item.id ?? index}
//                 item={item}
//                 index={index}
//                 columns={columns}
//                 isEditing={
//                   editingId === item.id
//                 }
//                 editForm={editForm}
//                 setEditForm={setEditForm}
//                 onEdit={onEdit}
//                 onDelete={onDelete}
//                 onUpdate={onUpdate}
//                 onCancel={onCancel}
//                 updating={updating}
//               />
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={columns.length + 1}
//                 className="px-5 py-16 text-center"
//               >
//                 <div className="flex flex-col items-center justify-center">

//                   <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-300">
//                     <FiSearch size={20} />
//                   </div>

//                   <h4 className="text-sm font-semibold text-gray-700">
//                     {emptyTitle}
//                   </h4>

//                   <p className="mt-1 text-[11px] text-gray-400">
//                     {emptyDescription}
//                   </p>

//                   {hasFilter && (
//                     <button
//                       type="button"
//                       onClick={onReset}
//                       className="mt-3 rounded-lg bg-[#087f8c] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#076d78]"
//                     >
//                       Clear Filters
//                     </button>
//                   )}

//                 </div>
//               </td>
//             </tr>
//           )}

//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MasterTable;



"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import MasterRow from "./MasterRow";

const MasterTable = ({
  // ================= DATA =================
  data = [],

  // ================= COLUMNS =================
  columns = [],

  // ================= EDIT =================
  editingId = null,
  editForm = {},
  setEditForm,

  // ================= ACTIONS =================
  onEdit,
  onDelete,
  onUpdate,
  onCancel,

  // ================= STATE =================
  updating = false,
  loading = false,

  // ================= EMPTY STATE =================
  hasFilter = false,
  onReset,
  emptyTitle = "No records found",
  emptyDescription = "Try changing your search or filter.",

  // ================= TABLE =================
  minWidth = "750px",

  // Optional custom key
  rowKey = "id",
}) => {
  // =========================================================
  // LOADING
  // =========================================================



  if (loading) {
    return (
      <div className="max-h-[430px] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <table
          className="w-full text-left"
          style={{ minWidth }}
        >
          {/* HEADER */}

          <thead className="sticky top-0 z-20">
            <tr className="border-b border-white/10 bg-gradient-to-r from-[#075f6a] via-[#087f8c] to-[#075985]">
              {columns.map((column, index) => (
                <th
                  key={column.key || index}
                  className={`
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white/80
                    ${column.width || ""}
                    ${
                      column.align === "center"
                        ? "text-center"
                        : column.align === "right"
                        ? "text-right"
                        : ""
                    }
                  `}
                >
                  {column.label}
                </th>
              ))}

              <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-wider text-white/80">
                Actions
              </th>
            </tr>
          </thead>

          {/* LOADING BODY */}

          <tbody>
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-5 py-16 text-center"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-3 h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#087f8c]" />

                  <p className="text-sm font-medium text-gray-600">
                    Loading...
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // =========================================================
  // TABLE
  // =========================================================

  console.log(data)

  return (
    <div className="max-h-[430px] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
      <table
        className="w-full text-left"
        style={{ minWidth }}
      >
        {/* =================================================
            TABLE HEADER
        ================================================= */}

        <thead className="sticky top-0 z-20">
          <tr className="border-b border-white/10 bg-gradient-to-r from-[#075f6a] via-[#087f8c] to-[#075985]">
            {columns.map((column, index) => (
              <th
                key={column.key || index}
                className={`
                  px-5 py-3.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-white/80
                  ${column.width || ""}
                  ${
                    column.align === "center"
                      ? "text-center"
                      : column.align === "right"
                      ? "text-right"
                      : ""
                  }
                `}
              >
                {column.label}
              </th>
            ))}

            {/* ACTION COLUMN */}

            <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-wider text-white/80">
              Actions
            </th>
          </tr>
        </thead>

        {/* =================================================
            TABLE BODY
        ================================================= */}

        <tbody className="divide-y divide-gray-100">
          {data.length > 0 ? (
            data.map((item, index) => (
              <MasterRow
                key={item?.[rowKey] ?? index}
                item={item}
                index={index}
                columns={columns}
                isEditing={
                  editingId === item?.[rowKey]
                }
                editForm={editForm}
                setEditForm={setEditForm}
                onEdit={onEdit}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onCancel={onCancel}
                updating={updating}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-5 py-16 text-center"
              >
                <div className="flex flex-col items-center justify-center">
                  {/* ICON */}

                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-300">
                    <FiSearch size={20} />
                  </div>

                  {/* TITLE */}

                  <h4 className="text-sm font-semibold text-gray-700">
                    {emptyTitle}
                  </h4>

                  {/* DESCRIPTION */}

                  <p className="mt-1 text-[11px] text-gray-400">
                    {emptyDescription}
                  </p>

                  {/* CLEAR FILTER */}

                  {hasFilter && onReset && (
                    <button
                      type="button"
                      onClick={onReset}
                      className="mt-3 rounded-lg bg-[#087f8c] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-[#076d78]"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MasterTable;
