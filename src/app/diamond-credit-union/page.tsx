import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projectsData";
import ProjectDetailView from "@/components/ProjectDetailView";

export default function Page() {
  const project = getProjectBySlug("diamond-credit-union");
  if (!project) notFound();
  return <ProjectDetailView project={project} />;
}
