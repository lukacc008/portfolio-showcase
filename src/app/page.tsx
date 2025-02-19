"use client"; // Required for client-side effects
import "aos/dist/aos.css";

export default function HomePage() {


  return (
    <main>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
        <ul className="flex gap-4 justify-center">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="hero" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 data-aos="fade-up">Welcome to My Portfolio</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-200">
        <h2 data-aos="fade-right">My Projects</h2>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-gray-300">
        <h2 data-aos="fade-left">About Me</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
        <h2 data-aos="zoom-in">Contact Me</h2>
      </section>
    </main>
  );
}
