import Navigation from "../app/components/navigation";
import Projects from "../app/components/projects";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <section
        id="home"
        className="h-screen relative flex items-center justify-center z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/herosection.jpg')",
          height: "calc(100vh + 64px)", // Adjust for nav height (default ~64px)
          marginTop: "-64px", // Pull it up behind the nav
        }}
      >
        {/* Text Box */}
        <div className="absolute top-[140px] left-[1200px] bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-2xl text-center text-white shadow-xl">

          <h1 className="text-4xl font-bold">
            Welcome to My Digital Playground
          </h1>
          <p className="mt-4 text-lg">
            Dive into my world of projects, where ideas turn into interactive
            experiences.
          </p>
        </div>
      </section>

      <Projects />
    </main>
  );
}
