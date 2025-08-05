// app/projects/page.tsx
import ProjectsDashboard from '@/components/ProjectsDashboard';

export default function ProjectsPage() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        <ProjectsDashboard />
      </div>
    </main>
  );
}
