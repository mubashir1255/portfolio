"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-5xl font-bold">
            About Me
          </h2>

          <p className="mb-6 leading-8 text-gray-400">
            I&apos;m Mubashir, an IT student and aspiring Full Stack Developer
            passionate about building modern, scalable web applications.
          </p>

          <p className="mb-6 leading-8 text-gray-400">
            My interests include cloud computing, backend architecture,
            Docker, Kubernetes, databases, and creating products that solve
            real-world problems.
          </p>

          <p className="leading-8 text-gray-400">
            I&apos;m currently building my portfolio while developing AgroBid
            Pakistan as my major full-stack project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10"
        >
          <h3 className="mb-8 text-2xl font-semibold">
            Quick Facts
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex justify-between">
              <span>Location</span>
              <span>Pakistan 🇵🇰</span>
            </div>

            <div className="flex justify-between">
              <span>Education</span>
              <span>BS Information Technology</span>
            </div>

            <div className="flex justify-between">
              <span>Focus</span>
              <span>Full Stack Development</span>
            </div>

            <div className="flex justify-between">
              <span>Cloud</span>
              <span>AWS</span>
            </div>

            <div className="flex justify-between">
              <span>Backend</span>
              <span>Node.js • Prisma</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}