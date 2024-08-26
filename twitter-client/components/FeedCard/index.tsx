import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet, FaUpload } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-800 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Image
            src="https://avatars.githubusercontent.com/u/94473575?v=4"
            alt="user"
            height={50}
            width={50}
          ></Image>
        </div>
        <div className="col-span-10">
          <h5>Sumit Vishwakarma</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum dolore
            consectetur minus, neque cum placeat. Voluptas excepturi fugit
            voluptatibus aliquam. Asperiores sed magnam dolorum ad eos modi,
            nihil voluptas praesentium!
          </p>
          <div className="flex justify-evenly mt-">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <CiHeart />
            </div>
            <div>
              <FaUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
