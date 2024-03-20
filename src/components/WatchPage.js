import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const vId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      {" "}
      <div className="px-4">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + vId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsConatiner />
    </div>
  );
};

export default WatchPage;
