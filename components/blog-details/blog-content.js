import React from "react";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";

const BlogContent = () => {
  return (
    <div>
      <div className="blog-card__image">
        <img src={blogDetailsImage} alt="" />
        <div className="blog-card__date">20 May</div>
      </div>
      <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
        <a href="news-details.html">
          <i className="far fa-user-circle"></i> Admin
        </a>
        <a href="news-details.html">
          <i className="far fa-comments"></i> 2 Comments
        </a>
      </div>
      <h3>Our donation is hope for poor childrens</h3>
      <p>
        There are many variations of passages of available but majority have
        alteration in some by inject humour or random words. There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable. If you are going to use
        a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <p>
        There are many variations of passages of available but majority have
        alteration in some by inject humour or random words. There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable. If you are going to use
        a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
      <div className="blog-details__meta">
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Tags:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">donations</a>
          </li>
          <li>
            <a href="#">savelives</a>
          </li>
        </ul>
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Category:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">childrens</a>
          </li>
        </ul>
      </div>
      <div className="blog-navigations">
        <a href="#">Our donation is hope for poor childrens</a>
        <a href="#">Fundrising for Early Childhood Rise</a>
      </div>
    </div>
  );
};

export default BlogContent;
