import React from "react";
import { useDispatch } from "react-redux";

function ContactCard() {
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <h3 className="text-white font-bold">Contact Me</h3>
      <p className="text-white">
        This message will be sent directly to my WhatsApp
      </p>
      <form className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col items-start ml-4">
          <label
            className="text-[#fbf9ff] text-lg text-left w-10/12 sm:w-full"
            for="name"
            required
          >
            Name <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            className="w-10/12 sm:w-full
            px-3
            py-1.5
            text-lg
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-[#d81e5b] focus:outline-none"
            maxLength="20"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          ></input>
        </div>

        <div className="flex flex-col items-start w-10/12 sm:w-full ml-4">
          <label className="text-[#fbf9ff] text-lg" for="message" required>
            Message <span className="text-red-500 text-xl">*</span>
          </label>
          <textarea
            class="
        form-control
        px-3
        py-1.5
        text-lg
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-[#d81e5b] focus:outline-none sm:w-full
      "
            id="message"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "SEND_MESSAGE",
              payload: {
                name: document.querySelector("#name").value,
                message: document.querySelector("#message").value,
              },
            });
          }}
          className="w-20 rounded h-10 bg-[#d81e5b] text-[#fbf9ff] m-auto hover:scale-110 duration-300"
        >
          Send
        </button>

        <p className="text-gray-400 text-sm">
          You may also call me at
          <a href="tel:+5571993553196">+55 71 9 9355-3196</a>
        </p>
      </form>
    </div>
  );
}

export default ContactCard;
