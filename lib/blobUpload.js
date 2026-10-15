
// import { put, del } from "@vercel/blob";
// import crypto from "crypto";

// const allowedTypes = {
//   "image/jpeg": ".jpg",
//   "image/png": ".png",
//   "image/webp": ".webp",
//   "image/gif": ".gif",
// };

// export async function uploadPublicImage(file, folder = "uploads") {
//   if (!file || typeof file.arrayBuffer !== "function" || file.size === 0) {
//     throw new Error("Please select an image");
//   }

//   if (!allowedTypes[file.type]) {
//     throw new Error("Only JPG, PNG, WEBP and GIF images are allowed");
//   }

//   if (file.size > 5 * 1024 * 1024) {
//     throw new Error("Image must be 5 MB or smaller");
//   }

//   const fileName = `${folder}/${crypto.randomUUID()}${allowedTypes[file.type]}`;

//   const blob = await put(fileName, file, {
//     access: "public",
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//     contentType: file.type,
//     addRandomSuffix: false,
//   });

//   return blob.url;
// }

// export async function deleteBlobImage(url) {
//   if (!url) return;

//   await del(url, {
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//   });
// }



import { put, del } from "@vercel/blob";
import crypto from "crypto";

const allowedImageTypes = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

const allowedDocumentTypes = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

// ==========================================
// UPLOAD PUBLIC IMAGE
// ==========================================

export async function uploadPublicImage(file, folder = "uploads") {
  if (
    !file ||
    typeof file.arrayBuffer !== "function" ||
    file.size <= 0
  ) {
    throw new Error("Please select an image");
  }

  if (!allowedImageTypes[file.type]) {
    throw new Error("Only JPG, PNG, WEBP and GIF images are allowed");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image must be 5 MB or smaller");
  }

  const safeFolder = validateFolder(folder);
  const fileName = `${safeFolder}/${crypto.randomUUID()}${allowedImageTypes[file.type]}`;

  const blob = await put(fileName, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: file.type,
    addRandomSuffix: false,
  });

  return blob.url;
}

// ==========================================
// UPLOAD PUBLIC DOCUMENT (PDF, DOC, DOCX)
// ==========================================

export async function uploadPublicFile(file, folder = "uploads") {
  if (
    !file ||
    typeof file.arrayBuffer !== "function" ||
    file.size <= 0
  ) {
    throw new Error("Please select a file");
  }

  if (!allowedDocumentTypes[file.type]) {
    throw new Error("Only PDF, DOC and DOCX files are allowed");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File size must be 5 MB or smaller");
  }

  const safeFolder = validateFolder(folder);
  const extension = allowedDocumentTypes[file.type];
  const fileName = `${safeFolder}/${crypto.randomUUID()}${extension}`;

  const blob = await put(fileName, file, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: file.type,
    addRandomSuffix: false,
  });

  return blob.url;
}

// ==========================================
// VALIDATE FOLDER
// ==========================================

function validateFolder(folder) {
  const safeFolder = String(folder).replace(/^\/+|\/+$/g, "");

  if (
    !safeFolder ||
    safeFolder.split("/").some(
      (part) => !part || part === "." || part === ".."
    )
  ) {
    throw new Error("Invalid upload folder");
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  }

  return safeFolder;
}

// ==========================================
// DELETE BLOB FILE
// ==========================================

export async function deleteBlobImage(url) {
  if (!url) return;

  await del(url, {
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}




// import { put, del } from "@vercel/blob";
// import crypto from "crypto";

// const ALLOWED_TYPES = {
//   "image/jpeg": ".jpg",
//   "image/png": ".png",
//   "image/webp": ".webp",
//   "image/gif": ".gif",
// };

// const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

// export async function uploadPublicImage(file, folder = "uploads") {
//   if (
//     !file ||
//     typeof file.arrayBuffer !== "function" ||
//     file.size <= 0
//   ) {
//     throw new Error("Please select an image");
//   }

//   if (!ALLOWED_TYPES[file.type]) {
//     throw new Error("Only JPG, PNG, WEBP and GIF images are allowed");
//   }

//   if (file.size > MAX_IMAGE_SIZE) {
//     throw new Error("Image must be 5 MB or smaller");
//   }

//   const safeFolder = folder.replace(/^\/+|\/+$/g, "");

//   if (
//     !safeFolder ||
//     safeFolder.split("/").some(
//       (part) => !part || part === "." || part === ".."
//     )
//   ) {
//     throw new Error("Invalid upload folder");
//   }

//   const fileName = `${safeFolder}/${crypto.randomUUID()}${
//     ALLOWED_TYPES[file.type]
//   }`;

//   const blob = await put(fileName, file, {
//     access: "public",
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//     contentType: file.type,
//     addRandomSuffix: false,
//   });

//   return blob.url;
// }

// export async function deleteBlobImage(url) {
//   if (!url) return;

//   // Delete only URLs belonging to your configured Blob store.
//   const configuredHostname = process.env.BLOB_HOSTNAME;

//   if (!configuredHostname) {
//     throw new Error("BLOB_HOSTNAME is not configured");
//   }

//   let parsedUrl;

//   try {
//     parsedUrl = new URL(url);
//   } catch {
//     throw new Error("Invalid Blob URL");
//   }

//   if (
//     parsedUrl.protocol !== "https:" ||
//     parsedUrl.hostname !== configuredHostname
//   ) {
//     throw new Error("Image URL does not belong to your Blob store");
//   }

//   await del(url, {
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//   });
// }
