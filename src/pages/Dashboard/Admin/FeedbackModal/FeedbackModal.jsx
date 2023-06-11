import React from "react";

const FeedbackModal = () => {
  const handleSendFeedback = () => {};
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4 text-gray-600">
            Please provide your feedback
          </h3>
          <textarea className="border-2 border-[#5FC7Ae] rounded-md p-5 focus:outline-[#5FC7Ae] w-full h-40" />
          <div className="modal-action flex justify-between">
            {/* if there is a button in form, it will close the modal */}
            <input
              onClick={handleSendFeedback}
              className="btn"
              type="submit"
              value="SEND"
            />
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default FeedbackModal;
