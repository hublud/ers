import React from "react";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { EDUCATION_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Education – E.R. Stuebner Construction",
  description:
    "Discover K-12 schools, high school campuses, athletic stadiums, and higher education facilities built by E.R. Stuebner General Contractor across Pennsylvania.",
};

export default function EducationPage() {
  return (
    <CategoryPageTemplate
      title="Education"
      description="Inspiring the next generation through modern academic environments. With extensive K-12 and collegiate campus experience, we build safe, forward-thinking educational facilities on time and on budget."
      heroImage="/images/projects/education-hero.jpg"
      projects={EDUCATION_PROJECTS}
    />
  );
}
