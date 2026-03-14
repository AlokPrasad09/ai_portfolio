import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllBlogPosts } from '../lib/contentLoader';

const excerpt = (text = '', length = 140) => {
  const trimmed = text.trim().replace(/\n+/g, ' ');
  return trimmed.length <= length ? trimmed : `${trimmed.slice(0, length).trim()}…`;
};

const BlogSection = () => {
  const posts = getAllBlogPosts();

  if (!posts.length) {
    return null;
  }

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="blog">
      <h2 className="text-3xl font-bold mb-8 text-center text-text">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <motion.div
            key={post.slug}
            className="bg-card rounded-3xl shadow-md overflow-hidden"
            whileHover={{ y: -6, boxShadow: '0 16px 30px rgba(0, 0, 0, 0.12)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            {post.image ? (
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ) : null}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-text">{post.title}</h3>
              <p className="mb-4 text-xs font-medium text-text/60">
                {post.date ? new Date(post.date).toLocaleDateString() : null}
              </p>
              <p className="mb-6 text-text/80 text-sm leading-relaxed">{excerpt(post.body)}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent/90"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
