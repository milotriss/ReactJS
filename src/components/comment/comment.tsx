import "./comment.css";

const Comment = () => {
  return (
    <section className="comment">
      <div className="commentTitle">
        <h1>Trusted by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="commentItems">
        <div className="commentItem">
          <figure>
            <img src="/asset/img/Ellipse 175 (1).png" alt="" />
            <figcaption>
              <div className="commentName">
                <h2>Yessica Christy</h2>
                <span>Shanxi, China</span>
              </div>
              <div className="commentRate">
                <span>4,5</span>
                <i className="fa-solid fa-star"></i>
              </div>
            </figcaption>
          </figure>
          <p>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        <div className="commentItem">
          <figure>
            <img src="/asset/img/Ellipse 175 (2).png" alt="" />
            <figcaption>
              <div className="commentName">
                <h2>Yessica Christy</h2>
                <span>Shanxi, China</span>
              </div>
              <div className="commentRate">
                <span>4,5</span>
                <i className="fa-solid fa-star"></i>
              </div>
            </figcaption>
          </figure>
          <p>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        <div className="commentItem">
          <figure>
            <img src="/asset/img/Ellipse 175.png" alt="" />
            <figcaption>
              <div className="commentName">
                <h2>Yessica Christy</h2>
                <span>Shanxi, China</span>
              </div>
              <div className="commentRate">
                <span>4,5</span>
                <i className="fa-solid fa-star"></i>
              </div>
            </figcaption>
          </figure>
          <p>
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
      </div>
      <div className="commentNav">
        <img src="/asset/img/Group 1300.png" alt="" />
        <div className="commentIcon">
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Comment;
