import React from "react";

const CommentForm = () => {
  return (
    <div>
      <h3 className="blog-details__title">Leave a comment</h3>
      <form
        action="assets/inc/sendemail.php"
        className="contact-form-validated contact-page__form form-one mb-80"
      >
        <div className="form-group">
          <div className="form-control">
            <input type="text" name="name" placeholder="Your Name" />
          </div>
          <div className="form-control">
            <input type="text" name="email" placeholder="Email Address" />
          </div>
          <div className="form-control">
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div className="form-control">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="form-control form-control-full">
            <textarea name="message" placeholder="Write a Message"></textarea>
          </div>
          <div className="form-control form-control-full">
            <button type="submit" className="thm-btn ">
              Submit Comment
            </button>
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
};

export default CommentForm;
