import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  searchParams.get("v");
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="m-auto w-[85%] mt-8">
      <div date-test-id="watch-container" className="flex">
        <div id="primary">
          <iframe
            width="750"
            height="400"
            src={`https://www.youtube.com/embed/` + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen="true"
          ></iframe>
          <CommentsContainer />
        </div>
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
