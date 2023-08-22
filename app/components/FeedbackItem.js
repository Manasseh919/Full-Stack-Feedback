import React from "react";

function FeedbackItem() {
  return (
    <div className="my-8 flex gap-8 items-center">
      <div>
        <h2 className="font-bold">Please Post more videos </h2>
        <p className="text-gray-600 text-sm ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <button className="shadow-sm shadow-gray-200 border rounded-md py-1 px-4 flex items-center gap-1 text-gray-600">
          <span className="triangle-vote relative "></span>
          80
        </button>
      </div>
    </div>
  );
}

export default FeedbackItem;
