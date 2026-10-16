import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, ALL_PROJECTS } from "@/data/projectsData";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#0070e0] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
