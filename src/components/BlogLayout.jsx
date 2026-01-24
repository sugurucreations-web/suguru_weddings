import React from "react";

const BlogLayout = ({ title, date, author, readTime, image, children }) => {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[480px] w-full">
  <img
    src={image}
    alt={title}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 h-full flex items-end">
    <div className="max-w-5xl mx-auto px-6 pb-16 text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-base opacity-90">
        {date} • By {author} • {readTime}
      </p>
    </div>
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
