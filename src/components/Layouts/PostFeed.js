import { useState } from "react";
import { posts } from "../constants/constants";
// Creating a Postcard for each post
const PostCard = ({
  index,
  postImage,
  postType,
  postTitle,
  postDate,
  postLocation,
  postUser,
  postIcon,
  postViews,
  postCompany,
  postButton,
  postBody,
}) => {
  return (
    <div className="border border-secondary mb-2">
      {postImage ? (
        <div>
          <img src={postImage} alt="PostImage" />
        </div>
      ) : (
        ""
      )}
      {postType ? <div className="fw-bold">{postType}</div> : ""}
      {postTitle ? (
        <div className="d-flex">
          <div>{postTitle}</div>
          <div>
            <i class="bi bi-three-dots"></i>
          </div>
        </div>
      ) : (
        ""
      )}
      {postBody ? <div>{postBody}</div> : ""}
      <div className="d-flex">
        {postDate ? (
          <div className="d-flex">
            <div>
              <i class="bi bi-calendar2-week"></i>
            </div>
            <div>{postDate}</div>
          </div>
        ) : (
          ""
        )}
        {postCompany ? (
          <div className="d-flex">
            <div>
              <i class="bi bi-briefcase"></i>
            </div>
            <div>{postCompany}</div>
          </div>
        ) : (
          ""
        )}
        {postLocation ? (
          <div className="d-flex">
            <div>
              <i class="bi bi-geo-alt"></i>
            </div>
            <div>{postLocation}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      {postButton ? (
        <div className="">
          <button className="w-100">{postButton}</button>
        </div>
      ) : (
        ""
      )}
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <img src={postIcon} alt="" />
          </div>
          <div>{postUser}</div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <i class="bi bi-eye"></i>
            </div>
            <div>{postViews}</div>
          </div>
          <div>
            <i class="bi bi-share-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostFeed = () => {
  const [spanClass, setSpanClass] = useState([" text-dark border border-dark", "", "", "", ""]);
  const HandleSpanClicK = (a) => {
    if (a === 0) {
      setSpanClass([" text-dark border border-dark", "", "", "", ""]);
    } else if (a === 1) {
      setSpanClass(["", " text-dark border border-dark", "", "", ""]);
    } else if (a === 2) {
      setSpanClass(["", " ", "text-dark border border-dark", "", ""]);
    } else if (a === 3) {
      setSpanClass(["", " ", "", "text-dark border border-dark", ""]);
    } else if (a === 4) {
      setSpanClass(["", " ", "", "", "text-dark border border-dark"]);
    }
  };
  return (
    <div className="container w-75">
      <div className="row mt-4 justify-content-between border border-end-0 border-top-0 border-start-0">
        <div className="col-8 p-0 pt-4 pb-4 cursor-pointer">
          <div>
            <span
              className={`me-4  border-end-0 border-top-0 border-start-0  pb-4 ${spanClass[0]}`}
              onClick={() => {
                HandleSpanClicK(0);
              }}
            >
              All Posts(32)
            </span>
            <span
              className={`me-4 text-secondary border-end-0 border-top-0 border-start-0  pb-4 ${spanClass[1]}`}
              onClick={() => {
                HandleSpanClicK(1);
              }}
            >
              Article
            </span>
            <span
              className={`me-4 text-secondary border-end-0 border-top-0 border-start-0  pb-4 ${spanClass[2]}`}
              onClick={() => {
                HandleSpanClicK(2);
              }}
            >
              Event
            </span>
            <span
              className={`me-4 text-secondary border-end-0 border-top-0 border-start-0  pb-4 ${spanClass[3]}`}
              onClick={() => {
                HandleSpanClicK(3);
              }}
            >
              Education
            </span>
            <span
              className={`me-4 text-secondary border-end-0 border-top-0 border-start-0  pb-4 ${spanClass[4]}`}
              onClick={() => {
                HandleSpanClicK(4);
              }}
            >
              Job
            </span>
          </div>
        </div>
        <div className="col-4 p-0 d-flex align-items-center justify-content-end">
          <div>
            <button
              className="rounded border border-0 p-2 me-2"
              style={{ backgroundColor: "#EDEEF0", fontWeight: "500" }}
            >
              Write a Post <i className="bi bi-caret-down-fill"></i>
            </button>
            <button className="rounded border border-0 p-2 text-light ms-2" style={{ backgroundColor: "#2F6CE5" }}>
              <i className="bi bi-people-fill"></i> Join Group
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 p-0">
          {posts.map((post, index) => (
            <PostCard key={post.postTitle} index={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
