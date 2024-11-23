

import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-indigo-100 py-16 px-6"> {/* Updated background color */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900"> {/* Changed text color to white for contrast */}
            Hi&rsquo; I&apos;m Ahmed Ali
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-red-900"> {/* Changed text color to white for contrast */}
            Web Developer
          </h2>
           
          <p className="mt-4 text-lg text-black">
  I am a passionate developer with a strong focus on building modern&rsquo; responsive&rsquo; and high-performance web applications. With expertise in both front-end and back-end technologies&rsquo; I specialize in creating seamless user experiences and robust solutions. My experience spans a wide range of industries&rsquo; where I have successfully delivered complex projects on time&rsquo; optimizing both functionality and user engagement.
</p>


          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3  bg-red-900 text-white text-lg font-medium rounded-md hover:bg-gray-900"
          >
            View My Work
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-6">
            <a
              href="https://github.com/ahmedkanhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 transition-colors"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/ahmedkanhar777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 transition-colors"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
            <a
              href="https://facebook.com/masroofhunn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-yellow-500 transition-colors"
            >
              <i className="bx bxl-facebook text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
  <div className="w-[300px] h-[300px] border-[5px] border-red-900 rounded-full bg-indigo-300 overflow-hidden shadow-lg animate-float">
    <Image
      src="/images/image.png" // Replace with your actual image path
      alt="Ahmed Ali"
      width={300}
      height={300}
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
