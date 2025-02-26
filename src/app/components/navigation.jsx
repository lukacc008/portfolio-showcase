export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md p-4 z-50">
        <ul className="flex gap-4 justify-center text-white">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#project1" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#project2" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#project3" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  } 