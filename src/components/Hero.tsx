import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const technologies = ['JavaScript', 'SQL', 'Python', 'C#'];

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Full Stack Developer
          </h1>
          <p className="text-lg text-text/80">
            With 3.5 years of experience crafting robust and scalable applications. Specialized in Html/CSS/JavaScript, SQL, Python, and C#.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary-purple hover:bg-primary-purple/90 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/projects"
              className="inline-block px-6 py-3 border border-primary-blue text-primary-blue hover:bg-primary-blue/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-square rounded-full overflow-hidden border-4 border-primary-purple/20">
            <img
              src="/Nicolas_Headshot.png"
              alt="Professional headshot"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
          <motion.div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-purple/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-4">
              {technologies.map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;