import React from "react";
import Posts from "./Posts";
import postData from "../Data.json"

function MidRight() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* Main Content Area */}
      <main className="flex-1 bg-gray-100 pt-20">
        <div className="p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
            <p className="text-gray-600">
              This is your main content area. You can add any content here.
            </p>
            {postData.map((post)=>(
              <Posts post={post} key={post.id}/>
            ))}
            
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-full lg:w-64 bg-white border-t lg:border-t-0 lg:border border-gray-200 pt-20">
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">New user registration</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">System update completed</p>
              <p className="text-xs text-gray-400">1 hour ago</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Daily backup successful</p>
              <p className="text-xs text-gray-400">3 hours ago</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MidRight;
