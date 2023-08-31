import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "@mui/material";
import Scroll from "../../components/Infinite_Scroll/Scroll";
import BlogCard from "../../components/Blog_Card/BlogCard";
import { BLOGS_API_URL } from "../../data/apiData";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const API_URL = BLOGS_API_URL;
  console.log(BLOGS_API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBlogsData(data.blogs))
      .catch((err) => {
        throw new Error(err);
      });
  }, [API_URL]);

  return (
    <>
      <section className="section">
        <Title title="Our Blogs" />

        <Container maxWidth="xl">
          <Scroll data={blogsData} Component={BlogCard} />
        </Container>
      </section>
    </>
  );
};

export default Blogs;
