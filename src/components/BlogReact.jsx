import React from 'react';
import blogElemets from '../../public/blog.json';

export const BlogReact = () => {
  return (
    <div>
      <div class='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div class='mb-12 space-y-2 text-center'>
          <h2 class='text-3xl font-bold md:text-4xl text-primary'>
            Latest Articles
          </h2>
          <p class='lg:mx-auto lg:w-6/12 text-gray-300'>
            We publish articles and guides on a regular basis. Check them out
            below!
          </p>
        </div>
        <div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {blogElemets.map((blog) => (
            <div class='group p-6 sm:p-8 border shadow-none border-gray-700 bg-black bg-opacity-50 shadow-gray-600/10'>
              <div class='relative overflow-hidden'>
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  loading='lazy'
                  width='1000'
                  height='667'
                  class='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
                />
              </div>
              <div class='mt-6 relative'>
                <h3 class='text-2xl font-semibold text-primary'>
                  {blog.title}
                </h3>
                {blog.datePublished && (
                  <p class='mt-3 mb-2 text-gray-300'>
                    Posted on: {blog.datePublished}
                  </p>
                )}

                <p class='mt-3 mb-8 text-gray-300'>{blog.description}</p>

                <span class='text-gray-300 hover:text-primary'>
                  {blog.link !== null ? (
                    <a class='inline-block' target='_blank' href={blog.link}>
                      Read
                    </a>
                  ) : (
                    <p>Coming Soon</p>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
