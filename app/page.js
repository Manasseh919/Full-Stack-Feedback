"use client";
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackFormPopup from "./components/FeedbackFormPopup";
import Button from "./components/Button";
import FeedbackItemPopup from "./components/FeedbackItemPopup";

export default function Home() {
  const [showFeedbackPopupForm, setShowFeedbackPopupForm] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);
  function openFeedPopupForm() {
    setShowFeedbackPopupForm(true);
  }

  function openFeedbackPopuItem(feedback) {
    setShowFeedbackPopupItem(feedback);
  }
  const feedbacks = [
    {
      title: "Please Post more videos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a galley of type and",
      votesCount: 80,
    },
    {
      title: "Please Post more videos 4",
      description:
        "This is going to be awesome build for my chuech",
      votesCount: 30,
    },
  ];

  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
        <h1 className="font-bold text-xl">Mann Feedback App</h1>
        <p className="text-opacity-90 text-slate-700">
          Help me decide what i should build next or how can I improve
        </p>
      </div>
      <div className="bg-gray-100 px-8 py-4 flex border-b">
        <div className="grow"></div>
        <div>
          <Button primary onClick={openFeedPopupForm}>
            Make a suggestion
          </Button>
        </div>
      </div>
      <div className="px-8 ">
        {feedbacks.map((feedback) => (
          <FeedbackItem  {...feedback} onOpen={()=>openFeedbackPopuItem(feedback)} />
        ))}
      </div>
      {showFeedbackPopupForm && (
        <FeedbackFormPopup setShow={setShowFeedbackPopupForm} />
      )}
      {showFeedbackPopupItem && (
        <FeedbackItemPopup {...showFeedbackPopupItem} setShow={setShowFeedbackPopupItem}/>
      )}
    </main>
  );
}
