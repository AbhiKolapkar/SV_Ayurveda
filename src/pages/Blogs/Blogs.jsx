import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { Container } from "@mui/material";
import Scroll from "../../components/Infinite_Scroll/Scroll";
import BlogCard from "../../components/Blog_Card/BlogCard";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const API_URL =
    "https://3809-2405-204-3022-e7fd-19b8-7acd-4502-fb9d.ngrok-free.app/getBlogs";

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
