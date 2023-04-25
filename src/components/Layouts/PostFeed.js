import { useState } from "react";

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
      <div className="row" style={{ height: "100vh" }}>
        Posts
      </div>
    </div>
  );
};

export default PostFeed;
