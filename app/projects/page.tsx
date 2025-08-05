// app/projects/page.tsx
import ProjectsDashboard from '@/components/ProjectsDashboard';

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <ProjectsDashboard />
    </div>
  );
}
