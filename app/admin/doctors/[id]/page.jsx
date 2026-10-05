import React from 'react'

const doctor = {
  id: 1,
  created_by: 1,
  department_id: 2,
  specialty_id: 5,
  name: "Dr. Rajesh Sharma",
  contact_no: "+91-9876543210",
  email: "dr.rajesh.sharma@example.com",
  qualification: "MBBS, MD (Medicine), DM (Cardiology)",
  experience_years: 18,
  web_experience: "18+ Years of Experience",
  image_url: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",

  web_bio:
    "Dr. Rajesh Sharma is a highly experienced cardiologist with more than 18 years of experience in diagnosing and treating cardiovascular diseases. He specializes in interventional cardiology, heart failure management, preventive cardiology and hypertension.",

  web_heading: "Senior Consultant Cardiologist",

  web_specilization: [
    "Interventional Cardiology",
    "Heart Failure Management",
    "Preventive Cardiology",
    "Hypertension",
  ],

  web_certificat: [
    {
      title: "Advanced Cardiac Life Support",
      organization: "American Heart Association",
      year: 2021,
      file_url: "/uploads/certificates/acls.pdf",
    },
    {
      title: "Interventional Cardiology Certification",
      organization: "National Cardiology Institute",
      year: 2022,
      file_url:
        "/uploads/certificates/interventional-cardiology.pdf",
    },
  ],

  web_awards: [
    {
      title: "Best Cardiologist Award",
      organization: "Healthcare Excellence Foundation",
      year: 2023,
    },
    {
      title: "Outstanding Medical Service Award",
      organization: "State Medical Association",
      year: 2024,
    },
  ],
};

const page = () => {
  return (
    <div>page</div>
  )
}

export default page