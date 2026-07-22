"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started BS Information Technology",
    description:
      "Began learning programming, databases, networking, and software engineering.",
  },
  {
    year: "2024",
    title: "Explored Web Development",
    description:
      "Built projects using HTML, CSS, JavaScript, React and started learning Next.js.",
  },
  {
    year: "2025",
    title: "Cloud & Backend",
    description:
      "Learned Docker, AWS, PostgreSQL, Prisma and modern backend development.",
  },
  {
    year: "2026",
    title: "Building Portfolio & AgroBid Pakistan",
    description:
      "Creating production-ready full stack applications while preparing for internships and software engineering roles.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="mb-16 text-center text-5xl font-bold">
          My Journey
        </h2>

        <div className="space-y-10">

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <p className="text-blue-400 font-semibold">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}