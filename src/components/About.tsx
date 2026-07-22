"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, BrainCircuit, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    text: "Next.js, React, TypeScript",
  },
  {
    icon: Cloud,
    title: "Cloud",
    text: "Docker • AWS",
  },
  {
    icon: BrainCircuit,
    title: "AI",
    text: "Gemini API & AI Projects",
  },
  {
    icon: Rocket,
    title: "Goal",
    text: "Software Engineer",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-black py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400"
        >
          I&apos;m an IT student passionate about building beautiful,
          scalable applications that solve real-world problems.
          My interests include full-stack development, cloud
          computing, AI, and DevOps.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-800 bg-zinc-900/50 p-6 transition"
              >
                <Icon className="mb-5 h-10 w-10 text-blue-500" />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 text-center md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold text-blue-500">20+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">8+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">2023</h3>
            <p className="text-gray-400">Started Programming</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">∞</h3>
            <p className="text-gray-400">Learning Every Day</p>
          </div>

        </div>

      </div>
    </section>
  );
}