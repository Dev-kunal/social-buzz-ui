"use client";
import React, { useState } from "react";
import { POSTS } from "../utils/data";
import Options from "../assets/Options";
import CommentsIcon from "../assets/CommentsIcon";
import Modal from "../components/Modal";
import Signup from "../signup/page";

export default function Posts(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPost] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="text-[#C5C7CA] w-1/2 mx-auto p-6">
        <div className="">
          <h2 className="text-xl text-[#b5b5b5]">Hello Jane</h2>
          <p className="text-[#7F8084]">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>

          <div className="bg-[#27292d] border-2 border-[#3b3c40] p-4 rounded-md mt-4">
            <span className="mb-4">Create post</span>
            <div className="p-4 bg-[#131319] rounded-md mt-3 mb-4">
              <div className="flex items-center">
                <div className="size-10 bg-[#242525] p-2 flex justify-center items-center rounded-full">
                  <span>📜</span>
                </div>

                <input
                  onChange={(e) => setPost(e.target.value)}
                  value={post}
                  type="text"
                  id="text"
                  className="bg-transparent border border-none text-white text-sm outline-none rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  placeholder="How are you feeling today?"
                  required
                />
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() => openModal(true)}
                type="button"
                className="text-white bg-[#4a96ff] font-normal rounded-md text-xs py-3 px-8 tracking-wider"
              >
                Post
              </button>
            </div>
          </div>

          {POSTS.map(
            ({
              id,
              username,
              message,
              noOfComments,
              lastActive,
              postEmoji,
              avatar,
            }) => (
              <div
                key={id}
                className="bg-[#27292d] border-2 border-[#3b3c40] p-4 rounded-md mt-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex gap-3 items-center">
                      <img
                        className="size-10 rounded-full"
                        src={avatar}
                        alt="u"
                      />
                      <div className="flex-col">
                        <span className="text-[#b5b5b5] font-light block">
                          {username}
                        </span>
                        <span className="text-[#b5b5b5a9] block text-xs">
                          {lastActive}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Options />
                  </div>
                </div>

                <div className="p-4 bg-[#131319] rounded-md mt-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-[#242525] p-2 flex justify-center items-center rounded-full">
                      <span>{postEmoji}</span>
                    </div>
                    <span className="text-[#7F8084]">{message}</span>
                  </div>
                </div>
                <div className="px-2 text-[#7F8084] inline-flex gap-2 items-center justify-center">
                  <CommentsIcon />
                  <span>{noOfComments} comments</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Signup />
      </Modal>
    </>
  );
}
