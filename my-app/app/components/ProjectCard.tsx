import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string; 
  link: string;
}

const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-lg flex flex-col bg-red-700 items-center">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 text-gray-900 text-center">{title}</h3>
      <p className="text-sm text-white text-center">{description}</p>
      <a
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gray-900 text-red-500 px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform duration-300 ease-in-out text-center"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
