import React from 'react';
import './App.css';

const Navbar = () => (
  <nav className="fixed w-full bg-white shadow z-10">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Shalini Kumari</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 container mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-200 inline-block animate-slideIn">{title}</h2>
    <div className="mt-4 space-y-2 text-gray-700 animate-fadeIn">
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-slideIn">Shalini Kumari</h1>
          <p className="text-lg animate-fadeIn">B.Tech Electrical and Computer Engineering student at Shiv Nadar University</p>
        </div>
      </section>
      <Section id="about" title="About">
        <p>Phone: 9016819287</p>
        <p>Email: <a href="mailto:shalinikmri07@gmail.com" className="text-blue-600 hover:underline">shalinikmri07@gmail.com</a></p>
        <p><a href="https://www.linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a> | <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a></p>
        <p>CGPA: 7.94/10.0</p>
      </Section>
      <Section id="experience" title="Experience">
        <p className="font-medium">Web Development Intern - Duco Consultancy (May 2025 – Aug 2025)</p>
        <ul className="list-disc list-inside">
          <li>Built responsive front-end apps with React and Tailwind CSS for enterprise clients.</li>
          <li>Implemented data-driven financial dashboards and secure token-based auth.</li>
          <li>Managed state with Redux and collaborated with cross-functional teams.</li>
        </ul>
      </Section>
      <Section id="projects" title="Projects">
        <p className="font-medium">Expense Tracker (MERN)</p>
        <ul className="list-disc list-inside">
          <li>Full-stack app with JWT auth and protected routes.</li>
          <li>RESTful APIs for real-time CRUD operations.</li>
        </ul>
        <p className="font-medium mt-4">Task Management Application</p>
        <ul className="list-disc list-inside">
          <li>Todo list with React Hooks and persistent local storage.</li>
        </ul>
      </Section>
      <Section id="contact" title="Contact">
        <p>Feel free to reach out for collaboration or opportunities!</p>
      </Section>
      <footer className="text-center py-4 text-sm text-gray-500">© {new Date().getFullYear()} Shalini Kumari</footer>
    </div>
  );
}

export default App;
