import React from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import nextLine_img from "../../assets/icons/next_line.svg";
import styles from "./style.module.css";

const BlogCard = (props) => {
  const { id, image, date, category, title, desc, slug } = props;
  const blogTitle = slug.split('/')[4]

  return (
    <>
      <div key={id} className={styles.blogCard}>
        <div className="imgBox">
          <NavLink to={`/blog/${blogTitle}`}>
            <img src={image} alt="" loading="lazy" className={styles.img} />
          </NavLink>
        </div>

        <div className={styles.blog_content}>
          <div className={styles.info}>
            <Typography variant="subtitle1" color="text.tertiary">
              <sup>{date}</sup>
            </Typography>
            <Typography variant="subtitle1" color="text.tertiary">
              <sup>Category: {category}</sup>
            </Typography>
          </div>

          <div className={styles.content}>
            <Typography
              variant="h5"
              color="text.secondary"
              className={styles.title}
            >
              <NavLink to={`/blog/${blogTitle}`}>{title}</NavLink>
            </Typography>

            <pre>
              <Typography
                variant="body1"
                color="text.tertiary"
                className={styles.desc}
              >
                {desc}
              </Typography>
            </pre>
          </div>

          <button className={styles.read_moreBtn}>
            <NavLink to={`/blog/${blogTitle}`}>
              <Typography variant="button" color={"text.secondary"}>
                Read More
              </Typography>
              <img src={nextLine_img} alt="" />
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
