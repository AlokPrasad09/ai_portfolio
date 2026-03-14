import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../lib/contentLoader';
import { marked } from 'marked';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="text-text/70 mb-8">The requested blog post could not be found.</p>
        <Link to="/" className="text-accent hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-text">{post.title}</h1>
      <p className="text-sm text-text/60 mb-10">
        {post.date ? new Date(post.date).toLocaleDateString() : null}
      </p>
      {post.image ? (
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
      <article
        className="space-y-6 max-w-none text-text"
        dangerouslySetInnerHTML={{ __html: marked.parse(post.body || '') }}
      />
      <div className="mt-12">
        <Link to="/" className="text-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  );
};

export default BlogPost;
