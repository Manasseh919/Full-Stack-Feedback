import React from "react";
import Popup from "./Popup";
import Button from "./Button";

function FeedbackItemPopup({ title, setShow, description, votesCount }) {
  return (
    <Popup setShow={setShow} title={""}>
      <div className="p-8 pb-2">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-end bg-gray-100 px-8 py-2  border-b">
        <Button primary>
          <span className="triangle-vote relative "></span>
          Upvote {votesCount}
        </Button>
      </div>
      <div>Comments</div>
    </Popup>
  );
}

export default FeedbackItemPopup;
