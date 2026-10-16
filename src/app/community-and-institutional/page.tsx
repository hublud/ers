import React from "react";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { COMMUNITY_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Community & Institutional – E.R. Stuebner Construction",
  description:
    "Explore community centers, civic hubs, and institutional facility projects delivered by E.R. Stuebner General Contractor across Pennsylvania.",
};

export default function CommunityInstitutionalPage() {
  return (
    <CategoryPageTemplate
      title="Community & Institutional"
      description="We proudly construct spaces that bring people together and serve public missions—from civic community centers to religious and institutional landmarks designed with safety, longevity, and community impact."
      heroImage="/images/projects/community-hero.jpg"
      projects={COMMUNITY_PROJECTS}
    />
  );
}
