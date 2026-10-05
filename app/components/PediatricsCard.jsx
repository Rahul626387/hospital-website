import Image from "next/image";
import Link from "next/link";

export default function PediatricsCard({
  title = "Pediatrics",
  description = "Healthy childhood, brighter future for your little ones.",
  // Replace this URL with your local image path (e.g., "/images/pediatrics.jpg")
  imageSrc = "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600&h=400", 
  linkHref = "#",
}) {
  return (
    <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
      
      {/* Top Image Section */}
      <div className="relative w-full h-40">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Overlapping Icon Badge */}
      <div className="absolute top-[130px] left-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1a7f8f] shadow-md z-10">
        {/* Baby Face SVG */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-7 h-7"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="9" cy="10" r="1"></circle>
          <circle cx="15" cy="10" r="1"></circle>
          <path d="M9 15c1.5 1 4.5 1 6 0"></path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="pt-10 pb-6 px-6">
        <h3 className="m-0 mb-2 text-xl font-bold text-[#1e3a5f]">
          {title}
        </h3>
        
        <p className="m-0 mb-5 text-sm leading-relaxed text-[#5a7184]">
          {description}
        </p>
        
        <Link 
          href={linkHref} 
          className="inline-flex items-center text-sm font-semibold text-[#1a7f8f] hover:underline group"
        >
          View Details 
          <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}