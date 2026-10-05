// "use client";

// import React from "react";
// import {
//   FiEdit2,
//   FiTrash2,
//   FiCheck,
//   FiX,
// } from "react-icons/fi";

// const MasterRow = ({
//   item,
//   index,
//   columns = [],
//   isEditing,
//   editForm,
//   setEditForm,
//   onEdit,
//   onDelete,
//   onUpdate,
//   onCancel,
//   updating = false,
// }) => {
//   const handleChange = (field, value) => {
//     setEditForm?.((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <tr className="group bg-white transition-all duration-200 hover:bg-[#087f8c]/[0.025]">

//       {columns.map((column, columnIndex) => {
//         const value = item?.[column.key];

//         return (
//           <td
//             key={column.key || columnIndex}
//             className={`px-5 py-3.5 ${
//               column.align === "center"
//                 ? "text-center"
//                 : column.align === "right"
//                 ? "text-right"
//                 : ""
//             }`}
//           >
//             {isEditing && column.editable ? (
//               column.inputType === "textarea" ? (
//                 <textarea
//                   value={editForm?.[column.key] ?? ""}
//                   onChange={(e) =>
//                     handleChange(
//                       column.key,
//                       e.target.value
//                     )
//                   }
//                   placeholder={
//                     column.placeholder || ""
//                   }
//                   rows={2}
//                   className="w-full min-w-[180px] resize-none rounded-lg border border-[#087f8c]/30 bg-white px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
//                 />
//               ) : (
//                 <input
//                   type={column.inputType || "text"}
//                   value={editForm?.[column.key] ?? ""}
//                   onChange={(e) =>
//                     handleChange(
//                       column.key,
//                       e.target.value
//                     )
//                   }
//                   placeholder={
//                     column.placeholder || ""
//                   }
//                   className="w-full min-w-[150px] rounded-lg border border-[#087f8c]/30 bg-white px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
//                 />
//               )
//             ) : column.render ? (
//               column.render(value, item, index)
//             ) : (
//               <span className="text-xs text-gray-600">
//                 {value ?? "-"}
//               </span>
//             )}
//           </td>
//         );
//       })}

//       {/* ACTIONS */}
//       <td className="px-5 py-3.5">
//         <div className="flex justify-end">
//           <div className="flex items-center gap-1 rounded-xl border border-gray-100 bg-gray-50/70 p-1">

//             {isEditing ? (
//               <>
//                 <button
//                   type="button"
//                   title="Save"
//                   disabled={updating}
//                   onClick={() =>
//                     onUpdate?.(item.id)
//                   }
//                   className="flex h-7 w-7 items-center justify-center rounded-lg text-emerald-500 transition hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   <FiCheck size={15} />
//                 </button>

//                 <button
//                   type="button"
//                   title="Cancel"
//                   disabled={updating}
//                   onClick={onCancel}
//                   className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
//                 >
//                   <FiX size={15} />
//                 </button>
//               </>
//             ) : (
//               <>
//                 {onEdit && (
//                   <button
//                     type="button"
//                     title="Edit"
//                     onClick={() =>
//                       onEdit(item)
//                     }
//                     className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
//                   >
//                     <FiEdit2 size={14} />
//                   </button>
//                 )}

//                 {onDelete && (
//                   <button
//                     type="button"
//                     title="Delete"
//                     onClick={() =>
//                       onDelete(item.id)
//                     }
//                     className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                   >
//                     <FiTrash2 size={14} />
//                   </button>
//                 )}
//               </>
//             )}

//           </div>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default MasterRow;


"use client";

import React from "react";
import {
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX,
} from "react-icons/fi";

const MasterRow = ({
  item,
  index,
  columns = [],
  isEditing,
  editForm,
  setEditForm,
  onEdit,
  onDelete,
  onUpdate,
  onCancel,
  updating = false,
}) => {
  const handleChange = (field, value) => {
    setEditForm?.((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderEditField = (column) => {
    const value = editForm?.[column.key] ?? "";

    

    // SELECT
    if (column.inputType === "select") {
      return (
        <select
          value={value}
          onChange={(e) =>
            handleChange(column.key, e.target.value)
          }
          className="w-full min-w-[150px] rounded-lg border border-[#087f8c]/30 bg-white px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
        >
          <option value="">
            {column.placeholder || "Select"}
          </option>

          {(column.options || []).map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    // TEXTAREA
    if (column.inputType === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(e) =>
            handleChange(column.key, e.target.value)
          }
          placeholder={column.placeholder || ""}
          rows={2}
          className="w-full min-w-[180px] resize-none rounded-lg border border-[#087f8c]/30 bg-white px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
        />
      );
    }

    // INPUT
    return (
      <input
        type={column.inputType || "text"}
        value={value}
        onChange={(e) =>
          handleChange(column.key, e.target.value)
        }
        placeholder={column.placeholder || ""}
        className="w-full min-w-[150px] rounded-lg border border-[#087f8c]/30 bg-white px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
      />
    );
  };

  return (
    <tr className="group bg-white transition-all duration-200 hover:bg-[#087f8c]/[0.025]">
      {columns.map((column, columnIndex) => {
        const value = item?.[column.key];

        // console.log("rahul nath",value)

        return (
          <td
            key={column.key || columnIndex}
            className={`px-5 py-3.5 ${
              column.align === "center"
                ? "text-center"
                : column.align === "right"
                ? "text-right"
                : ""
            }`}
          >
            {isEditing && column.editable ? (
              renderEditField(column)
            ) : column.render ? (
              column.render(value, item, index)
            ) : (
              <span className="text-xs text-gray-600">
                {value ?? "-"}
              </span>
            )}
          </td>
        );
      })}

      {/* ACTIONS */}
      <td className="px-5 py-3.5">
        <div className="flex justify-end">
          <div className="flex items-center gap-1 rounded-xl border border-gray-100 bg-gray-50/70 p-1">
            {isEditing ? (
              <>
                <button
                  type="button"
                  title="Save"
                  disabled={updating}
                  onClick={() => onUpdate?.(item.id)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-emerald-500 transition hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiCheck size={15} />
                </button>

                <button
                  type="button"
                  title="Cancel"
                  disabled={updating}
                  onClick={onCancel}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                >
                  <FiX size={15} />
                </button>
              </>
            ) : (
              <>
                {onEdit && (
                  <button
                    type="button"
                    title="Edit"
                    onClick={() => onEdit(item)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FiEdit2 size={14} />
                  </button>
                )}

                {onDelete && (
                  <button
                    type="button"
                    title="Delete"
                    onClick={() => onDelete(item.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <FiTrash2 size={14} />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MasterRow;