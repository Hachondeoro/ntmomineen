import React from "react";
import Link from "next/link";

const BlogCard = ({ image, title, date, text, link, commentCount, author }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__inner">
        <div className="blog-card__image">
          <img src={image} alt="" />
          <div className="blog-card__date">{date}</div>
        </div>
        <div className="blog-card__content">
          <div className="blog-card__meta">
            <Link href={link}>
              <a>
                <i className="far fa-user-circle"></i> {author}
              </a>
            </Link>
            <Link href={link}>
              <a>
                <i className="far fa-comments"></i> {commentCount}
              </a>
            </Link>
          </div>
          <h3>
            <Link href={link}>
              <a>{title}</a>
            </Link>
          </h3>
          <p>{text}</p>
          <Link href={link}>
            <a className="blog-card__more">
              <i className="far fa-angle-right"></i>Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
