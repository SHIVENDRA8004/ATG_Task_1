import { useState } from "react";
import { posts, groups } from "../constants/constants";
// Creating a Postcard for each post
const PostCard = ({
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
    <div className="border border- mb-4 rounded">
      {postImage ? (
        <div>
          <img src={postImage} className="w-100" alt="PostImage" />
        </div>
      ) : (
        ""
      )}
      <div className="p-4">
        {postType ? <div className="fw-bold pb-2">{postType}</div> : ""}
        {postTitle ? (
          <div className="d-flex justify-content-between fs-4 fw-bold">
            <div className="w-75">{postTitle}</div>
            <div>
              <i className="bi bi-three-dots cursor-pointer"></i>
            </div>
          </div>
        ) : (
          ""
        )}
        {postBody ? <div className="pb-2 pt-2 text-secondary fs-5">{postBody}</div> : ""}
        <div className="d-flex fw-bold pt-2 pb-2">
          {postDate ? (
            <div className="d-flex w-25">
              <div>
                <i class="bi bi-calendar2-week pe-2"></i>
              </div>
              <div>{postDate}</div>
            </div>
          ) : (
            ""
          )}
          {postCompany ? (
            <div className="d-flex">
              <div>
                <i class="bi bi-briefcase pe-2"></i>
              </div>
              <div>{postCompany}</div>
            </div>
          ) : (
            ""
          )}
          {postLocation ? (
            <div className="d-flex ps-5 w-25">
              <div>
                <i class="bi bi-geo-alt pe-2"></i>
              </div>
              <div>{postLocation}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        {postButton ? (
          <div className="mb-4 mt-2">
            <button className={`w-100 rounded border border-1 border-secondary bg-light p-2 text-success fw-bold `}>
              {postButton}
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <div>
              <img className="pe-2" src={postIcon} alt="" />
            </div>
            <div className="fw-bold">{postUser}</div>
          </div>
          <div className="d-flex justify-content-between align-items-center w-25">
            <div className="d-flex">
              <div>
                <i class="bi bi-eye pe-2"></i>
              </div>
              <div>{postViews} Views</div>
            </div>
            <div>
              <i class="bi bi-share-fill p-1 ps-2 pe-2 rounded " style={{ backgroundColor: "#EDEEF0" }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Created a GroupCard for each group
const GroupCard = ({ groupIcon, groupName, groupStatus }) => {
  return (
    <div className="d-flex align-items-center justify-content-between pt-4">
      <div className="d-flex align-items-center">
        <div className="pe-2">
          <img src={groupIcon} alt="Group1" />
        </div>
        <div style={{ fontWeight: "500", fontSize: "14px" }}>{groupName}</div>
      </div>
      {groupStatus === "Followed" ? (
        <button className="rounded-pill border-0 p-1 ps-3 pe-3 bg-dark text-light">{groupStatus}</button>
      ) : (
        <button className="rounded-pill border-0 p-1 ps-3 pe-3 " style={{ backgroundColor: "#EDEEF0" }}>
          {groupStatus}
        </button>
      )}
    </div>
  );
};

const PostFeed = () => {
  const user = JSON.parse(localStorage.getItem("AtgUser"));
  const [joinGroup, setJoinGroup] = useState(false);
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
              className="rounded border border-1 p-2 me-2"
              style={{ backgroundColor: "#EDEEF0", fontWeight: "500" }}
            >
              Write a Post <i className="bi bi-caret-down-fill"></i>
            </button>
            {joinGroup ? (
              <button
                className="rounded border border-1 p-2 text-secondary ms-2 "
                style={{ backgroundColor: "#EDEEF0", fontWeight: "500" }}
                onClick={() => setJoinGroup(false)}
              >
                <i class="bi bi-box-arrow-in-right pe-1 "></i> Leave Group
              </button>
            ) : (
              <button
                className="rounded border border-0 p-2 text-light ms-2"
                style={{ backgroundColor: "#2F6CE5", fontWeight: "500" }}
                onClick={() => setJoinGroup(true)}
              >
                <i className="bi bi-people-fill pe-1"></i> Join Group
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-8 p-0">
          {posts.map((post) => (
            <PostCard key={post.postTitle} {...post} />
          ))}
        </div>
        <div className="col-4 p-0 d-flex justify-content-center h-25">
          <div className=" h-25">
            <div className="d-flex justify-content-between w-75 m-4 ms-auto me-0 border border-end-0 border-top-0 border-start-0 border-secondary-1">
              <div className="d-flex ">
                <div>
                  <i class="bi bi-geo-alt pe-2"></i>
                </div>
                <input className="border border-0 focus" type="location" placeholder="Noida,India" />
              </div>
              <div>
                <i class="bi bi-pencil-fill"></i>
              </div>
            </div>
            <div className="d-flex w-75 ms-auto pt-2 pb-2" style={{ fontSize: "12px" }}>
              <div>
                <i class="bi bi-exclamation-circle pe-2"></i>
              </div>
              <div className="text-center ">
                Your location will help us serve better and extend a personalised experience.
              </div>
            </div>
            {user ? (
              <div>
                <div className="d-flex fw-bold w-75 ms-auto pt-4">
                  <div>
                    <i class="bi bi-hand-thumbs-up pe-2"></i>
                  </div>
                  <div>RECOMMENDED GROUPS</div>
                </div>
                <div className=" w-75 ms-auto ">
                  {groups.map((group) => (
                    <GroupCard key={group.groupName} {...group} />
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeed;
