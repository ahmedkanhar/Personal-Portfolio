

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-12 px-6 bg-indigo-100">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Skill Box 1: JavaScript */}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" // Link to JavaScript docs
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-blue-500 text-white rounded-lg shadow-blue-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-javascript text-4xl mb-2"></i> {/* JavaScript Icon */}
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </a>

          {/* Skill Box 2: React */}
          <a
            href="https://reactjs.org/" // Link to React website
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-yellow-500 text-white rounded-lg shadow-yellow-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-react text-4xl mb-2"></i> {/* React Icon */}
            <h3 className="text-lg font-semibold">React</h3>
          </a>

          {/* Skill Box 3: Tailwind CSS */}
          <a
            href="https://tailwindcss.com/" // Link to Tailwind CSS website
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-gray-600 text-white rounded-lg shadow-gray-600 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-tailwind-css text-4xl mb-2"></i> {/* Tailwind CSS Icon */}
            <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          </a>

          {/* Skill Box 4: Node.js */}
          <a
            href="https://nodejs.org/en/" // Link to Node.js website
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-teal-500 text-white rounded-lg shadow-teal-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-nodejs text-4xl mb-2"></i> {/* Node.js Icon */}
            <h3 className="text-lg font-semibold">Node.js</h3>
          </a>

          {/* Skill Box 5: TypeScript */}
          <a
            href="https://www.typescriptlang.org/" // Link to TypeScript website
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-blue-700 text-white rounded-lg shadow-blue-700 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-typescript text-4xl mb-2"></i> {/* TypeScript Icon */}
            <h3 className="text-lg font-semibold">TypeScript</h3>
          </a>

          {/* Skill Box 6: HTML */}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML" // Link to HTML docs
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-red-500 text-white rounded-lg shadow-red-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-html5 text-4xl mb-2"></i> {/* HTML Icon */}
            <h3 className="text-lg font-semibold">HTML</h3>
          </a>

          {/* Skill Box 7: CSS */}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS" // Link to CSS docs
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-indigo-500 text-white rounded-lg shadow-indigo-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-css3 text-4xl mb-2"></i> {/* CSS Icon */}
            <h3 className="text-lg font-semibold">CSS</h3>
          </a>

          {/* Skill Box 8: Figma */}
          <a
            href="https://www.figma.com/" // Link to Figma website
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center w-24 h-28 bg-green-500 text-white rounded-lg shadow-green-500 shadow-lg p-4 cursor-pointer"
          >
            <i className="bx bxl-figma text-4xl mb-2"></i> {/* Figma Icon */}
            <h3 className="text-lg font-semibold">Figma</h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Skills;
