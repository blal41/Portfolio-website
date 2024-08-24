import React from "react";

function EducationAndInternship() {
  return (
    <section className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education & Internship
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Education Section */}
          <div className="flex-1 mb-12 md:mb-0">
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-8">
              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <h4 className="text-md font-medium">
                    Jodhpur Institute of Engineering and Technology, Jodhpur
                  </h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2021-08">2021-2025</time>
                  </h4>
                  <h4 className="text-md font-medium">8.9/10 CGPA</h4>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">Higher Secondary</h3>
                  <h4 className="text-md font-medium">
                    Shri Aaijee Vidya Mandir Sr. Sec. School, Bilara
                  </h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2021-03">2021</time>
                  </h4>
                  <h4 className="text-md font-medium">95.80%</h4>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">Secondary</h3>
                  <h4 className="text-md font-medium">
                    Shri Nalanda Vidhya Mandir, Bagri-nagar
                  </h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2019-03">2019</time>
                  </h4>
                  <h4 className="text-md font-medium">84.33%</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8">Internship</h3>
            <div className="space-y-8">
              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">
                    JR. Software Developer
                  </h3>
                  <h4 className="text-md font-medium">
                    Bitwit Techno, Ahmedabad
                  </h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2024-06">June 2024 - Present</time>
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                    <li>
                      Proficient in ReactJs development, with expertise in
                      JavaScript and building basic applications.
                    </li>
                    <li>
                      Experienced in creating intuitive design and layout files.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">SAS Training</h3>
                  <h4 className="text-md font-medium">
                    Statistical Analysis System (SAS)
                  </h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2022-10">October 2022 - March 2024</time>
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                    <li>
                      Data Analysis (Visual Analytics 1), navigating and
                      exploring data using SAS Drive.
                    </li>
                    <li>
                      Learning SAS tools like SAS Studio and Enterprise Guide.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="timeline-item relative">
                <div
                  className="circle-dot w-3 h-3 bg-white rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"
                  aria-label="Timeline dot"
                ></div>
                <div className="pl-8">
                  <h3 className="text-lg font-semibold">Research Trainee</h3>
                  <h4 className="text-md font-medium">Zeetron Networks</h4>
                  <h4 className="text-sm text-gray-400">
                    <time dateTime="2023-05">May 2023 - June 2023</time>
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                    <li>
                      Completed comprehensive machine learning training,
                      focusing on algorithmic analysis, model development, and
                      statistical evaluation.
                    </li>
                    <li>Learned machine learning using Python.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationAndInternship;
