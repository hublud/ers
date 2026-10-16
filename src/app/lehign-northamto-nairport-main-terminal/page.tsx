import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projectsData";
import ProjectDetailView from "@/components/ProjectDetailView";

export default function Page() {
  const project = getProjectBySlug("lehign-northamto-nairport-main-terminal");
  if (!project) notFound();
  return <ProjectDetailView project={project} />;
}
