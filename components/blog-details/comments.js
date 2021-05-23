import React from "react";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";
const Comments = () => {
  return (
    <div>
      <h3 className="blog-details__title">2 comments</h3>
      <div className="comment-one">
        <div className="comment-one__single">
          <img src={comment1} alt="" />
          <h3>Jessica Brown</h3>
          <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
          <p>
            Lorem Ipsum is simply dummy free text of the available printing and
            typesetting been the industry standard dummy text ever sincer
            condimentum purus.
          </p>
          <a href="#" className="thm-btn ">
            Reply
          </a>
        </div>
        <div className="comment-one__single">
          <img src={comment2} alt="" />
          <h3>Jessica Brown</h3>
          <p className="comment-one__date">20 May, 2020 . 4:00 pm</p>
          <p>
            Lorem Ipsum is simply dummy free text of the available printing and
            typesetting been the industry standard dummy text ever sincer
            condimentum purus.
          </p>
          <a href="#" className="thm-btn ">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comments;
