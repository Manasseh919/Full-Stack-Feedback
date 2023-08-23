import React, { useState } from "react";
import Button from "./Button";
import Avatar from "./Avatar";

function FeedbackItemPopupComments() {
  const [commentText, setCommentText] = useState("");
  return (
    <div className="p-8">
      <div className="flex gap-4 mb-8">
        <Avatar/>
        <div>
          <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <div className="text-gray-400 mt-2 text-sm">
          Anonymous &middot; a few seconds ago
        </div>
        </div>
        
      </div>
      <form>
        <textarea
          placeholder="Let us know what you think"
          className="border rounded-md w-full p-2"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-2">
          <Button>Attach files</Button>
          <Button primary disabled={commentText === ""}>
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackItemPopupComments;
