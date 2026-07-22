export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-white transition hover:text-blue-400"
        >
          MUBASHIR
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 transition hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="text-gray-300 transition hover:text-blue-400">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 transition hover:text-blue-400">
            Projects
          </a>

          <a href="#contact" className="text-gray-300 transition hover:text-blue-400">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <a
        href="/Mubashir_Fayyaz_Resume.pdf"
        download
        className="hidden rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition      duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/40 md:block"
        >
          Resume
        </a>
      </div>
    </header>
  );
}