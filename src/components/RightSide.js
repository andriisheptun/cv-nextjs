"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import { useTranslations } from 'next-intl';
import { useState } from "react";

export default function RightSide() {

  const t = useTranslations('RightSide');

  const experience = t.raw('exp');
  const courses = t.raw('courses');
  const skills = t.raw('skills');

  const isExperienceArray = Array.isArray(experience);
  const isCoursesArray = Array.isArray(courses);
  const isSkillsArray = Array.isArray(skills);

  const [activeId, setActiveId] = useState(null);

  const handleOpen = (id) => setActiveId(id);
  const handleClose = () => setActiveId(null);

  return (
    <main className="flex-1 bg-white p-6 relative">

      <header className="mb-10 relative">
        <h1 className="text-4xl font-bold border-b pb-4">{t("name")}</h1>
      </header>

      <Box className="mt-10">
        <h2 className="text-2xl font-bold border-b pb-3">{t("title-1")}</h2>

        <ul className="mt-4 space-y-6">
          {isExperienceArray && experience.map((item, index) => (
            <li key={index}>
              <Box className="flex justify-between">
                <span className="font-bold">{item.title}</span>
                <span>{item.time}</span>
              </Box>
              <Box className="italic mt-2">{item.subtitle}</Box>
              <Box className="mt-1">{item.descr}</Box>
            </li>
          ))}
        </ul>
      </Box>

      <Box className="mt-10">
        <h2 className="text-2xl font-bold border-b pb-3">{t("title-2")}</h2>

        <ul className="mt-4 space-y-6">
          <li>
            <Box className="flex justify-between">
              <span className="font-bold">{t("edu.title")}</span>
              <span>{t("edu.time")}</span>
            </Box>
            <Box className="italic mt-2">{t("edu.subtitle")}</Box>
            <Box className="mt-1">{t("edu.descr")}</Box>
          </li>
        </ul>
      </Box>

      <Box className="mt-10">
        <h2 className="text-2xl font-bold border-b pb-3">{t("title-3")}</h2>

        <ul className="mt-4 space-y-6">
          {isCoursesArray && [...courses]
            .sort((a, b) => b.id - a.id).map((item) => (
              <li key={item.id}>
                <Box className="flex justify-between">
                  <span className="font-bold">{item.title}</span>
                  <span>{item.time}</span>
                </Box>
                <span className="italic">{item.subtitle}</span>
              </li>
            ))}
        </ul>
      </Box>

      <Box className="mt-10">
        <h2 className="text-2xl font-bold border-b pb-3">{t("title-4")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-2">
          {isCoursesArray && [...courses].sort((a, b) => b.id - a.id).map((item) => (
            <button
              key={item.id}
              onClick={() => handleOpen(item.id)}
              className="cursor-pointer"
              title={item.title}
            >
              <img
                src={`/img/certificate_${item.id}.jpg`}
                alt={item.title}
                className="w-full rounded shadow-md hover:opacity-80 transition"
              />
            </button>
          ))}
        </div>

        {activeId !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-lg p-4 max-w-4xl w-full shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 flex items-center justify-center 
                         text-gray-600 hover:text-black text-xl 
                         bg-white rounded-full w-8 h-8 shadow"
              >
                ✕
              </button>

              <iframe
                src={`/img/certificate_${activeId}.pdf`}
                className="w-full h-[70vh]"
                title="certificate viewer"
              ></iframe>
            </div>
          </div>
        )}
      </Box>

      <Box className="mt-10">
        <h2 className="text-2xl font-bold border-b pb-3">{t("title-5")}</h2>
        <Box className="flex flex-wrap gap-1">
          <span>
            {isSkillsArray && skills.map((skill, index) => (
              <strong key={index}>
                {skill}{index < skills.length - 1 && ', '}
              </strong>
            ))}
          </span>

        </Box>

      </Box>

      <Box className="mt-10">
        <h3 className="text-xl font-bold border-b pb-3">{t("title-6")}</h3>

        <Box className="mt-4 space-x-4">
          <Link href="https://andriisheptun.github.io" className="btn bg-[#3f6592] text-white px-4 py-2 rounded-lg">
            CV on pure JS
          </Link>
          <Link href="https://andriisheptun.github.io/projects/estatein" className="btn bg-[#3f6592] text-white px-4 py-2 rounded-lg">
            Estatein
          </Link>
        </Box>
      </Box>
    </main>
  );
}