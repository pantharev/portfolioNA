import React, {useState} from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  siteUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  siteUrl,
}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <motion.article 
      className="bg-background border border-primary-purple/20 rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {isExpanded ? (
          <p className="text-text/80 line-clamp-2 mb-4">{description}</p>
        ) : (
          <p>{description}</p>
        )}
        
        <button onClick={handleToggle}>{isExpanded ? "Read More..." : "Read Less..."}</button>
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-primary-purple/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:text-primary-purple transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Site →
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;