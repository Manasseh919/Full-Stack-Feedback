import React, { useState } from "react";
import Popup from "./Popup";
import Button from "./Button";
import axios from "axios";

function FeedbackFormPopup({ setShow }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handlCreatePostButtonClick(ev) {
    ev.preventDefault()
    axios.post("/api/feedback", { title, description }).then((res) => {
      console.log(res);
    });
  }

  return (
    <Popup setShow={setShow} title={" Make a Suggestion"}>
      <form className="p-8">
        <label className="mt-4 mb-1 text-slate-700  block">Title</label>
        <input
          className="w-full border rounded-md "
          type="text"
          placeholder="A short descriptive title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label className="mt-4 mb-1  text-slate-700 block">Details</label>

        <textarea
          className="w-full border p-2 rounded-md"
          placeholder="please include any details"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <div className="flex gap-2 mt-2 justify-end">
          <Button>Attach files</Button>
          <Button primary onClick={handlCreatePostButtonClick}>
            Create post
          </Button>
        </div>
      </form>
    </Popup>
  );
}

export default FeedbackFormPopup;
