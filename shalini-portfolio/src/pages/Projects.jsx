import React from 'react'

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <h2 className="text-3xl font-semibold mb-4 animate-slideIn">Projects</h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <p className="font-medium">Expense Tracker (MERN)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Full-stack app with JWT authentication and protected routes.</li>
            <li>RESTful APIs for real-time CRUD operations.</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Task Management Application</p>
          <ul className="list-disc list-inside ml-4">
            <li>Todo list with React Hooks and persistent local storage.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
