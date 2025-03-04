export default function Projects() {
  const projects = [
    {
      id: "project1",
      title: "Skill-Based Hiring Platform",
      description:
        "A MERN-stack web application designed to streamline hiring with skill-based tests. Built with React, Node.js, Express, and MongoDB, it features role-based authentication, timed assessments, anti-cheating measures, and an admin panel for result tracking.",
      image: "/project1.jpg",
      link: "https://testing-platform-woad.vercel.app/home",
    },
    {
      id: "project2",
      title: "First Tailwind Project",
      description:
        "A responsive portfolio website built with Tailwind CSS, featuring smooth animations using AOS (Animate on Scroll). Includes a contact form powered by EmailJS for direct communication. Utilizes React hooks such as useState and useEffect for dynamic UI interactions.",
      image: "/project2.jpg",
      link: "https://lukacc008.github.io/tailwind-portfolio/",
    },
    {
      id: "project3",
      title: "Tic-Tac-Toe Game",
      description:
        "A classic Tic-Tac-Toe game built with React, featuring interactive gameplay, real-time state management with useState, and dynamic UI updates. Includes win detection logic, a reset function.",
      image: "/project3.jpg",
      link: "https://tic-tac-toe-project-flame.vercel.app/",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <section
          key={project.id}
          id={project.id}
          className="h-screen relative flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 92%)",
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 text-white text-center max-w-2xl p-6">
            <h2 className="text-4xl font-bold">{project.title}</h2>
            <p className="text-lg mt-4">{project.description}</p>

            {/* Visit Button - Positioned Bottom Right of Center */}
            <div className="mt-8 flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-20 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:opacity-90"
              >
                Visit
              </a>
            </div> 
          </div>
        </section>
      ))}
    </div>
  );
}
