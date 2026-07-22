export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Welcome
        </p>

        <h1 className="mt-4 text-6xl font-extrabold">
          Hi, I&apos;m Mubashir 👋
        </h1>

        <h2 className="mt-4 text-2xl text-gray-300">
          IT Student • Full Stack Developer • Cloud Enthusiast
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          I enjoy building modern web applications with React, Next.js,
          TypeScript, Docker, and AWS. I&apos;m currently working on AgroBid
          Pakistan and continuously improving my skills in full-stack
          development.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-lg border border-gray-600 px-6 py-3 transition hover:bg-gray-900">
            Contact Me
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/mubashir1255"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}