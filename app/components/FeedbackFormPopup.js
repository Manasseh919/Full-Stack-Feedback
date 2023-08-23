import React from "react";
import Popup from "./Popup";
import Button from "./Button";

function FeedbackFormPopup({ setShow }) {
  return (
    <Popup setShow={setShow} title={" Make a Suggestion"}>
      <form className="p-8">
        <label className="mt-4 mb-1 text-slate-700  block">Title</label>
        <input
          className="w-full border rounded-md "
          type="text"
          placeholder="A short descriptive title"
        />
        <label className="mt-4 mb-1  text-slate-700 block">Details</label>
        <textarea
          className="w-full border p-2 rounded-md"
          placeholder="please include any details"
        ></textarea>
        <div className="flex gap-2 mt-2 justify-end">
          <Button>Attach files</Button>
          <Button primary>Create post</Button>
        </div>
      </form>
    </Popup>
  );
}

export default FeedbackFormPopup;
