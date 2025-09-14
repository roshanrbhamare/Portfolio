import React from "react";
import { GraduationCap } from "lucide-react";

function Education() {
  const educationList = [
    {
      title: "B.Tech in Computer Science and Engineering",
      place: "IIIT Sri City",
      duration: "2023 – 2027",
      percentage: "8.7 (Current CGPA)",
    },
    {
      title: "Higher Secondary Education",
      place: "Maharashtra State Board",
      duration: "2021 – 2023",
      percentage: "75.17%",
    },
    {
      title: "Secondary School Certificate (SSC)",
      place: "Maharashtra State Board",
      duration: "2020 – 2021",
      percentage: "97.20%",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-600 dark:border-indigo-500">
          {educationList.map((edu, idx) => (
            <div key={idx} className="mb-10 ml-6 group">
              {/* Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full ring-4 ring-white dark:ring-gray-900"></span>

              {/* Card */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                {/* Title + Percentage in one row */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <span className="ml-3 inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                    {edu.percentage}
                  </span>
                </div>

                {/* Place + Duration */}
                <p className="mt-1 text-indigo-600 dark:text-indigo-400 font-medium">
                  {edu.place}
                </p>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
