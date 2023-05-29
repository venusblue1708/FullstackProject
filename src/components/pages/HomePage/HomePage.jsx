import React from "react";

import Blog from "../../Blog/Blog";
import BlogStartCarousel from "../../BlogStartCarousel/BlogStartCarousel";

import Reviews from "../../Reviews/Reviews";

const HomePage = () => {
  return (
    <div>
      <BlogStartCarousel />
      <Blog />
      <Reviews />
    </div>
  );
};

export default HomePage;
