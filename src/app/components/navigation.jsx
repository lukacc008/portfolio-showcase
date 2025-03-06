export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md p-4 z-50">
      <ul className="flex gap-6 justify-center text-white text-lg font-medium">
        <li>
          <a href="#home" className="transition-transform duration-200 transform hover:scale-110 hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#project1" className="transition-transform duration-200 transform hover:scale-110 hover:text-gray-300">
            Skill-Based Hiring Platform
          </a>
        </li>
        <li>
          <a href="#project2" className="transition-transform duration-200 transform hover:scale-110 hover:text-gray-300">
            First Tailwind Project
          </a>
        </li>
        <li>
          <a href="#project3" className="transition-transform duration-200 transform hover:scale-110 hover:text-gray-300">
            Tic-Tac-Toe Game
          </a>
        </li>
      </ul>
    </nav>
  );
}
