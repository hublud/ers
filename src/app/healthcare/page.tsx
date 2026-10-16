import React from "react";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { HEALTHCARE_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Healthcare – E.R. Stuebner Construction",
  description:
    "Explore clinical healthcare, surgical suites, specialized radiation vaults, and maternity wings built with clinical precision by E.R. Stuebner General Contractor.",
};

export default function HealthcarePage() {
  return (
    <CategoryPageTemplate
      title="Healthcare"
      description="Healthcare construction demands uncompromising precision, infection control, and life-safety compliance. We deliver advanced clinical environments, surgical suites, and specialized therapy vaults that support healing and operational excellence."
      heroImage="/images/projects/healthcare-hero.jpg"
      projects={HEALTHCARE_PROJECTS}
    />
  );
}
