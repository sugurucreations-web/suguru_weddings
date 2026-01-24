import React from "react";

const BlogLayout = ({ title, date, author, readTime, image, children }) => {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[420px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-4xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {title}
          </h1>
          <p className="text-sm opacity-90">
            {date} • By {author} • {readTime}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 prose prose-lg prose-rose">
        {children}
      </div>
    </article>
  );
};

export default BlogLayout;
