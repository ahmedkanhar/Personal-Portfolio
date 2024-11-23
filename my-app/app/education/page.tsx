const Education = () => {
  return (
    <section className="bg-indigo-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-red-900">
          My Education
        </h2>
        <p className="text-lg text-gray-800 text-center mb-12">
          A comprehensive overview of my educational journey, detailing my academic achievements, specialized courses, and certifications that reflect my dedication to continuous learning and professional growth.
        </p>
        {/* Download CV Button */}
        <div className="text-center mb-8">
          <a href="/pdf/Ahmedcv.pdf" download>
            <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition duration-300">
              Download My CV
            </button>
          </a>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Matric */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Matric</h4>
              <p className="text-black">
                <span className="text-red-900">School:</span> Shah Mardan Shah Boys High School
                <br />
                <span>
                  <span className="text-red-900">Description:</span> Focused on science and mathamatics, building a strong academic foundation.
                </span>
                <br />
                <span>
                  <span className="text-red-900">Category:</span> Science
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> 2014-2016
                </span>
              </p>
            </div>

            {/* Intermediate */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Intermediate</h4>
              <p className="text-black">
                <span className="text-red-900">College:</span> Superior Science College
                <br />
                <span>
                  <span className="text-red-900">Description:</span> Specialized in pre-engineering with subjects like physics and mathamatics and chemistry.
                </span>
                <br />
                <span>
                  <span className="text-red-900">Catagory:</span> Pre-Engineering
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> 2016-2018
                </span>
              </p>
            </div>

            {/* Bachelor's */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor's</h4>
              <p className="text-black">
                <span className="text-red-900">University:</span> Shah Abdul Latif University
                <br />
                <span>
                  <span className="text-red-900">Description:</span>  Completed a BS in Physics, focusing on theoretical and applied physics, including areas such as quantum mechanics .
                </span>
                <br />
                <span>
                  <span className="text-red-900">Catagory:</span> Physical Science
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> 2019-2023
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full-Stack Web Development */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Full-Stack Web Development
              </h4>
              <p className="text-black">
                <span className="text-red-900">Platform:</span> Governer House Sindh
                <br />
                <span>
                  <span className="text-red-900">Description:</span> Gained hands-on experience with Typescript, React, Node.js, and database integration.
                </span>
                <br />
                <span>
                  <span className="text-red-900">Catagory:</span> Programming
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> 2024-Present
                </span>
              </p>
            </div>

                
{/* English Language Course */}
<div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
  <h4 className="text-xl font-bold text-gray-900 mb-2">
    English Language Course
  </h4>
  <p className="text-black">
    <span className="text-red-900">Institution:</span> ABC Language Institute
    <br />
    <span>
      <span className="text-red-900">Description:</span> Enhanced proficiency in English, focusing on grammar and speaking skills.
    </span>
    <br />
    <span className="text-red-900">Category:</span> Language
    <br />
    <span>
      <span className="text-red-900">Year:</span> 2023
    </span>
  </p>
</div>

            
            {/* Introduction to AI */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Introduction to Generative AI
              </h4>
              <p className="text-black">
                <span className="text-red-900">Platform:</span> Governer House Sindh
                <br />
                <span>
                  <span className="text-red-900">Description:</span> Explored machine learning techniques and AI applications in various fields.
                </span>
                <br />
                <span>
                  <span className="text-red-900">Catagory:</span>  Artificial Intelligence
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> 2024-Present
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certified Web Developer */}
            <div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                TypeScript Operators
              </h4>
              <p className="text-black">
                <span className="text-red-900">Platform:</span> Coursera online
                <br />
                <span>
                  <span className="text-red-900">Description:</span>Learned core TypeScript operators and their practical application in developing robust applications.
                </span>
                <br />
                <span>
                  <span className="text-red-900">Year:</span> April 2024
                </span>
              </p>
            </div>  

             {/* English Language Certificate */}
<div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
  <h4 className="text-xl font-bold text-gray-900 mb-2">
    English Language Certificate
  </h4>
  <p className="text-black">
    <span className="text-red-900">Platform:</span> Microsoft Center
    <br />
    <span>
      <span className="text-red-900">Description:</span> Enhanced proficiency in English language skills, including grammar, vocabulary, and communication.
    </span>
    <br />
    <span>
      <span className="text-red-900">Year:</span> 2023
    </span>
  </p>
</div>


{/* TypeScript: The New JavaScript for Web Development */}
<div className="p-6 bg-white border-2 border-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
  <h4 className="text-xl font-bold text-gray-900 mb-2">
    TypeScript: The New JavaScript
  </h4>
  <p className="text-gray-800">
    <span className="text-red-900">Platform:</span> SimpliLearn | SkillUp online
    <br />
    <span className="text-red-900">Description:</span> Gained proficiency in TypeScript, learning to write scalable and maintainable code for modern web applications.
    <br />
    <span className="text-gray-700"><span>Year:</span>: 2024</span>
  </p>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
