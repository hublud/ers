import React from "react";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { PUBLIC_SECTOR_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Public Sector – E.R. Stuebner Construction",
  description:
    "Municipal fire stations, public transit centers, emergency response facilities, and civic municipal projects delivered by E.R. Stuebner General Contractor.",
};

export default function PublicSectorPage() {
  return (
    <CategoryPageTemplate
      title="Public Sector"
      description="We construct vital municipal and public infrastructure that serves regional populations around the clock. From emergency fire rescue stations to busy regional transit hubs, our public sector builds are engineered for maximum durability and civic utility."
      heroImage="/images/projects/public-sector-hero.jpg"
      projects={PUBLIC_SECTOR_PROJECTS}
    />
  );
}
