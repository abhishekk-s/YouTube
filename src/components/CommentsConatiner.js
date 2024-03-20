import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "AK",
    text: "Hello World !!",
    replies: [
      {
        name: "AK",
        text: "Hello World !!",
        replies: [
          {
            name: "AK",
            text: "Hello World !!",
            replies: [
              {
                name: "AK",
                text: "Hello World !!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "AK",
        text: "Hello World !!",
        replies: [],
      },
    ],
  },
  {
    name: "AK",
    text: "Hello World !!",
    replies: [
      {
        name: "AK",
        text: "Hello World !!",
        replies: [],
      },
      {
        name: "AK",
        text: "Hello World !!",
        replies: [
          {
            name: "AK",
            text: "Hello World !!",
            replies: [
              {
                name: "AK",
                text: "Hello World !!",
                replies: [
                  {
                    name: "AK",
                    text: "Hello World !!",
                    replies: [],
                  },
                  {
                    name: "AK",
                    text: "Hello World !!",
                    replies: [
                      {
                        name: "AK",
                        text: "Hello World !!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AK",
        text: "Hello World !!",
        replies: [],
      },
    ],
  },
  {
    name: "AK",
    text: "Hello World !!",
    replies: [],
  },
  {
    name: "AK",
    text: "Hello World !!",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className=" ml-5 pl-5 border border-l-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsConatiner = () => {
  return (
    <div className=" p-2 m-5">
      <h1 className="font-bold text-xl">Comments : </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsConatiner;
