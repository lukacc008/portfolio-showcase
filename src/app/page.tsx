"use client"; // Required for client-side effects
import "aos/dist/aos.css";

export default function HomePage() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
<section
  id="home"
  className="h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-2xl text-center text-white shadow-xl">
    <h1 className="text-4xl font-bold">Welcome to My Digital Playground</h1>
    <p className="mt-4 text-lg">
      Dive into my world of projects, where ideas turn into interactive experiences.
    </p>
  </div>
</section>
      {/* SECTION WITH PICTURE */}
      {/* <section
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 p-6"
      >
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Showcasing My Best Work
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A collection of projects that highlight my journey as a developer.
            Scroll down to explore.
          </p>
        </div>
        <img
          src="/web-project.png"
          alt="Projects Preview"
          className="w-80 md:w-96 mt-6 md:mt-0 md:ml-12 shadow-lg rounded-lg"
        />
      </section> */}

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <h2>My Projects</h2>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <h2>About Me</h2>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <h2>Contact Me</h2>
      </section>
    </main>
  );
}
