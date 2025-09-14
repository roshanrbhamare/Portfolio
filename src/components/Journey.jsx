import React from "react";
import { Trophy, Users } from "lucide-react";

function Journey() {
  const sections = [
    {
      heading: "Achievements",
      icon: <Trophy className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      items: [
        {
          title: "1st Runner-Up - Agentica Hackathon",
          place: "IIIT Sri City",
          duration: "2025",
          extra: "₹20,000 Prize",
        },
        {
          title: "3rd Prize - IIIT SriCity Shark Tank Competition",
          place: "IIIT Sri City",
          duration: "2024",
          extra: "Startup Pitch",
        },
        {
          title: "200+ DSA Problems Solved",
          place: "LeetCode, GFG",
          duration: "2024 – Present",
          extra: "Problem Solving Skills",
        },
      ],
    },
    {
      heading: "Volunteer & Clubs",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-green-500",
      items: [
        {
          title: "NexSync Club",
          place: "Web-Dev Domain Member",
          duration: "August 2024 – August 2025",
          extra: "Worked on innovative projects",
        },
        {
          title: "E-Cell",
          place: "Core Member",
          duration: "January 2024 – December 2024",
          extra: "Organized startup events",
        },
        {
          title: "NSS Cell",
          place: "Core Member",
          duration: "August 2023 – May 2024",
          extra: "Community service & social work",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14 tracking-tight">
          Achievements & Volunteering
        </h2>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl shadow-lg bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition transform duration-300 flex flex-col"
            >
              {/* Icon Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${section.color} shadow-md`}
                >
                  {section.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {section.heading}
                </h3>
              </div>

              {/* List Items */}
              <div className="flex flex-col flex-1 space-y-5">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex-1 p-5 rounded-xl bg-white/60 dark:bg-gray-700/60 shadow-sm hover:shadow-md hover:bg-white/80 dark:hover:bg-gray-700 transition flex flex-col justify-between"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                        <span className="ml-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          {item.extra}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {item.place} • {item.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
