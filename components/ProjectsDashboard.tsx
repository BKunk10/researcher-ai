// components/ProjectsDashboard.tsx
export default function ProjectsDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Your Projects</h1>
      <p className="text-gray-600">This is where all your research or design projects will live.</p>

      {/* Placeholder for future project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="font-semibold">Example Project</h2>
          <p className="text-sm text-gray-500">A sample project card.</p>
        </div>
      </div>
    </div>
  );
}
