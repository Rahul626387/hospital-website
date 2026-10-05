import AboutPartOne from "../components/AboutPartOne";
import AboutPartTwo from "../components/AboutPartTwo";

export const metadata = {
  title: "About Us | Baderia Metro Prime Multi Speciality Hospital",
  description:
    "Learn about Baderia Metro Prime Multi Speciality Hospital, our commitment to compassionate healthcare, clinical excellence, advanced medical technology, and patient-centered care.",
};
export default function AboutPage() {

  return (
    <>
      <AboutPartOne />
      <AboutPartTwo />
    </>
  ); 
}