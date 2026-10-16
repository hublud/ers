import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projectsData";
import ProjectDetailView from "@/components/ProjectDetailView";

export default function Page() {
  const project = getProjectBySlug("staybridge");
  if (!project) notFound();
  return <ProjectDetailView project={project} />;
}
