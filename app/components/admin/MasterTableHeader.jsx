"use client";

import React from "react";

const MasterTableHeader = ({ columns = [] }) => {
  return (
    <thead className="sticky top-0 z-20">
      <tr className="border-b bg-[#087f8c]">
        {columns.map((column) => (
          <th
            key={column.key}
            className="px-5 py-3.5 text-left text-[10px] font-bold uppercase tracking-wider text-white"
          >
            {column.label}
          </th>
        ))}

        <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-wider text-white">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default MasterTableHeader;



// const TableHeader = ({ columns = [] }) => {
//   return (
//     <thead className="sticky top-0 z-10 bg-accent text-white">
//       <tr>
//         {columns.map((col, index) => (
//           <th
//             key={index}
//             className="px-4 py-2 text-left text-sm font-semibold whitespace-nowrap"
//           >
//             {col}
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

// export default TableHeader;