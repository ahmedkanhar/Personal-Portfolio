
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component

const ProjectsPage = () => {
  const projects = [
    {
      title: "CountDown Timer",
      description: "Tracks time remaining until an event or specified deadline ends.",
      imageSrc: "/images/project1.jpg", // Path for Next.js images
      link: "https://01-countdown-timer-lno2.vercel.app/",
    },
    {
      title: "Clone PakWheels",
      description: "Pakistan's leading platform for buying, selling, and reviewing vehicles online.",
      imageSrc: "/images/project2.jpg", // Path for Next.js images
      link: "https://nextjs-boilerplate-steel-beta-11.vercel.app/",
    },
    {
      title: "Carpet Store",
      description: "Explore a wide variety of handcrafted and machine-made carpets.",
      imageSrc: "/images/project3.webp", // Path for Next.js images
      link: "https://landing-page-blue-delta.vercel.app/",
    },
    {
      title: "Static Resume",
      description: "This resume demonstrates a professional and innovative web development approach.",
      imageSrc: "/images/project4.png", // Path for Next.js images
      link: "https://hackton-project-milestone-1.vercel.app/",
    },
    {
      title: "Revo Showroom",
      description: "Revo offers a sleek, modern space to explore luxury and performance vehicles.",
      imageSrc: "/images/project5.png", // Path for Next.js images
      link: "https://revo-showroom-github-io.vercel.app/",
    },
    {
      title: "Portfolio Html Css js",
      description: "Portfolio website with help of html css and javascript",
      imageSrc: "/images/project6.png", // Path for Next.js images
      link: "https://my-portfolio-website-indol-eight.vercel.app/",
    },
  ];

  return (
    <>
      {/* Add Header component here */}

      {/* Main Content - Projects Section */}
      <section className="py-12 px-6 bg-indigo-100" id="projects">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </section>


    </>
  );
};

export default ProjectsPage;
