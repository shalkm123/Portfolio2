import React from 'react'

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      <h2 className="text-3xl font-semibold mb-4 animate-slideIn">Skills</h2>
      <div className="space-y-2 text-gray-700">
        <p className="font-medium">Languages</p>
        <p>C, C++, JavaScript, HTML, CSS</p>
        <p className="font-medium mt-4">Frameworks</p>
        <p>Node.js, Express.js, React.js, TailwindCSS</p>
        <p className="font-medium mt-4">Databases &amp; Tools</p>
        <p>MongoDB, Postman, Git, GitHub</p>
      </div>
    </div>
  )
}
