import React from 'react';

const BestPracticesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Best Practices</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder content - replace with actual best practices content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">OKR Best Practices</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Tip</span>
              <span>Keep objectives ambitious but achievable</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Tip</span>
              <span>Set clear, measurable key results</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Tip</span>
              <span>Review and adjust quarterly</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Action Plan Guidelines</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Guide</span>
              <span>Break down large goals into smaller tasks</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Guide</span>
              <span>Assign clear ownership and deadlines</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Guide</span>
              <span>Track progress regularly</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Team Collaboration</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Best</span>
              <span>Schedule regular check-ins</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Best</span>
              <span>Document decisions and progress</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Best</span>
              <span>Maintain open communication channels</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BestPracticesPage;