import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Sanjay Ratnani",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      replies: [],
    },
    {
      name: "Alice Green",
      text: "The quick brown fox jumps over the lazy dog.",
      replies: [
        {
          name: "Evan Bright",
          text: "Such a classic sentence!",
          replies: [
            {
              name: "Evan Bright",
              text: "Such a classic sentence!",
              replies: [],
            },
            {
              name: "Evan Bright",
              text: "Such a classic sentence!",
              replies: [],
            },
          ],
        },
        {
          name: "Charlie Bond",
          text: "It has all the letters of the alphabet, right?",
          replies: [],
        },
      ],
    },
    {
      name: "Mason Clark",
      text: "To be or not to be, that is the question.",
      replies: [
        {
          name: "Olivia Stone",
          text: "A timeless Shakespeare quote!",
          replies: [],
        },
        {
          name: "Grace Holt",
          text: "I love how deep this quote is.",
          replies: [],
        },
      ],
    },
    {
      name: "Sophia James",
      text: "All that glitters is not gold.",
      replies: [
        { name: "Evan Bright", text: "Such a classic sentence!", replies: [] },
        {
          name: "Charlie Bond",
          text: "It has all the letters of the alphabet, right?",
          replies: [],
        },
        {
          name: "Sanjay Ratnani",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [],
        },
      ],
    },
    {
      name: "James Harris",
      text: "The only way to do great work is to love what you do.",
      replies: [
        { name: "Evan Bright", text: "Such a classic sentence!", replies: [] },
        {
          name: "Charlie Bond",
          text: "It has all the letters of the alphabet, right?",
          replies: [],
        },
        {
          name: "Sanjay Ratnani",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          replies: [],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 my-2 items-center">
        <img className="h-8 w-8" alt="user" src="../usericon.png"></img>
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsLists = ({ comments }) => {
    return comments.map((comment, ind) => (
      <div>
        <Comment data={comment} key={ind} />
        <div className="pl-5 border border-l-black">
          <CommentsLists comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="m-5 p-2">
        <h4 className="text-2xl font-bold">{commentsData.length} Comments:</h4>
        <CommentsLists comments={commentsData} />
      </div>
    </>
  );
};

export default CommentsContainer;
