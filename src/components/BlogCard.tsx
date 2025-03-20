import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, excerpt, thumbnail }) => {
  return (
    <motion.article 
      className="group bg-background border border-primary-purple/20 rounded-lg overflow-hidden hover:border-primary-purple/40 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <time dateTime={date} className="text-sm text-text/60">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h3 className="mt-2 text-xl font-semibold">
          <a 
            href={`/posts/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-primary-blue"
          >
            {title}
          </a>
        </h3>
        <p className="mt-2 text-text/80 line-clamp-2">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );
};

export default BlogCard;