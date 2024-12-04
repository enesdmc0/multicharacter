import {
  showDeleteModalAtom,
  showMultiOrNewCharacterAtom,
  showNewCharacterModalAtom,
} from "@/components/jotai";
import LeftTitle from "@/components/left-title";
import RightTitle from "@/components/right-title";
import { HOVER_EFFECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Multicharacter() {
  const setShowDeleteModal = useSetAtom(showDeleteModalAtom);
  const showNewCharacterModal = useSetAtom(showNewCharacterModalAtom);
  const setShowMultiOrNewCharacter = useSetAtom(showMultiOrNewCharacterAtom);
  const [test, setTest] = useState(4);

  return (
    <main className="test h-screen w-screen py-10">
      <div className="flex justify-between h-full">
        <div className="flex flex-col  ">
          <div className=" h-20 flex items-center">
            <LeftTitle />
          </div>
          <div className="test1 pl-11 font-medium text-xl text-white uppercase py-4 mt-5 w-[35.625rem]">
            characters used 3/6
          </div>
          <div className="pt-8 space-y-8  flex-1 overflow-x-hidden overflow-y-auto custom-scroll pr-3 ml-3 w-[38.75rem]">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "cursor-pointer test2 h-24 relative",
                    HOVER_EFFECTS
                  )}
                >
                  <div className="bottom-0 left-5 absolute flex items-center space-x-5">
                    <div className="relative w-[6.25rem] h-[7.5rem] ">
                      <Image alt="" src="/img1.png" fill />
                    </div>
                    <div className="mt-6">
                      <p className="uppercase text-color1 font-medium text-xl">
                        samantha noble <br />{" "}
                        <span className="text-white">medic</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {Array(test)
              .fill(0)
              .map((_, i) => (
                <div
                  onClick={() => showNewCharacterModal((prev) => !prev)}
                  key={i}
                  className={cn(
                    " cursor-pointer test2 h-24 relative",
                    HOVER_EFFECTS
                  )}
                >
                  <div className="bottom-0 left-5 absolute flex items-center space-x-5">
                    <div className="relative w-[7.75rem] h-[7.5rem]">
                      <Image alt="" src="/img2.png" fill />
                    </div>
                    <button className="hover:opacity-80 transition-all mt-6 bg-color1 rounded-lg size-10 text-white flex items-center justify-center ">
                      <FaPlus className="size-6" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={() => setTest((prev) => prev + 1)}
            className=" shadow1 ml-3 mt-8 bg-color5 w-fit uppercase text-white rounded-lg text-xl font-medium py-3 px-5"
          >
            + add new character slot
          </button>
        </div>
        <div className="flex-1 relative">
          <Image alt="" src="/girl.png" fill className="object-cover " />
        </div>
        <div className="flex flex-col items-end  justify-between space-y-20 ">
          <div className=" h-20 flex items-center">
            <RightTitle />
          </div>
          <div className="flex flex-col justify-center space-y-4 mr-11">
            <p className="uppercase text-color5 font-medium text-4xl text-center">
              samantha noble <br /> <span className="text-white">medic</span>
            </p>
            <p className="text-color1 font-medium text-4xl uppercase">
              wallet: 1200$
            </p>
            <p className="text-color1 font-medium text-4xl uppercase">
              credit: 3600$
            </p>
          </div>
          <div className="max-w-[20rem] flex flex-col space-y-4 mr-11">
            <button
              className={cn(
                " shadow2 underline  uppercase bg-color1/50 text-color1 rounded-lg text-4xl font-medium py-4",
                HOVER_EFFECTS
              )}
            >
              edit info
            </button>
            <button
              onClick={() => setShowMultiOrNewCharacter((prev) => !prev)}
              className={cn(
                " size-[20rem] bg-white/50 rounded-lg flex items-center justify-center relative",
                HOVER_EFFECTS
              )}
            >
              <svg
                width="4.875rem"
                height="17.375rem"
                viewBox="0 0 78 278"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.3456 0.160733C40.8745 -0.97472 46.7614 4.21501 50.6004 8.80173C53.194 23.2355 60.8206 27.495 53.149 43.3657C53.6433 44.8476 57.3796 43.7827 60.4804 45.6045C66.0912 48.9082 66.47 71.5083 68.4473 77.9232C74.0838 89.4638 73.9362 102.685 78.0063 114.405V122.084C73.9683 132.496 79.4058 138.295 65.8987 147.045C66.1041 157.187 61.3406 174.039 60.8014 182.244C59.9219 195.638 64.1204 214.242 62.7145 227.688C62.1303 233.281 56.4616 245.925 59.5303 250.73C52.1861 264.035 63.5811 280.964 40.0912 277.295C29.4666 272.484 45.394 271.47 42.9609 253.931C46.5945 245.72 46.1066 236.386 44.2384 227.688L45.5159 210.406C44.7712 206.531 42.5115 197.877 42.3317 195.683C41.4715 185.464 41.8053 169.786 41.0542 163.679C40.8873 162.319 38.8587 151.426 38.5056 150.881C38.2295 150.445 36.6888 150.406 36.2779 150.56C35.5589 150.83 32.4453 163.057 32.1372 164.962C29.7105 179.774 32.1564 194.843 27.6754 209.123C27.7974 220.817 27.9066 232.672 25.1268 243.687C25.0819 246.317 26.7125 250.134 26.4043 260.969C26.4043 261.084 25.1396 262.765 25.1268 262.887C24.6068 269.821 29.2354 278.841 14.6112 277.93C0.0576633 277.019 11.7031 269.841 12.3836 266.729C13.3658 262.213 10.8236 255.625 10.4705 250.73C14.4379 248.78 8.71149 233.275 8.55742 223.851C8.44186 216.821 10.8557 205.261 11.1061 198.249C11.793 179.287 9.66161 165.943 7.92186 147.686L0.243836 134.888C1.47643 122.912 -0.699868 111.005 0.243836 99.0478C0.39149 97.1939 2.06063 93.0562 2.15692 92.0106C3.49865 76.8391 4.06359 61.5009 6.61865 46.5668C9.16087 41.1974 16.4794 41.3129 16.8132 40.8061C14.8167 30.8565 20.4083 23.7166 19.9974 22.8826C19.4004 21.6702 17.8725 23.2419 17.7698 23.2034C16.8261 22.8698 27.0335 7.0376 27.6498 6.24214C28.5742 5.04254 33.3569 0.333938 34.3391 0.160733H34.3456ZM55.3767 79.5206C54.5421 86.2884 54.5357 93.4347 58.8819 99.0414C58.1629 104.225 60.4996 106.746 60.7949 108.003C61.2122 109.78 60.0053 110.556 60.1594 111.204C60.2749 111.679 61.9762 113.963 62.0725 114.405C63.1895 119.518 62.8685 125.555 65.5777 131.367C68.6784 127.62 68.3446 125.401 65.8987 121.449C66.4443 111.557 62.6053 101.883 62.7145 92.6456L55.3831 79.527L55.3767 79.5206ZM15.2211 86.5642C12.3001 92.2223 12.9678 98.5667 12.3515 104.802C8.28137 109.684 10.5411 112.192 10.4384 113.764C10.4191 114.027 9.16087 114.809 9.16087 115.047C9.25717 119.941 11.3757 125.093 13.6226 117.606C13.9372 116.561 16.7426 103.635 16.8068 102.884C16.9737 101.081 16.8068 85.6212 15.2147 86.5642H15.2211Z"
                  fill="#8D8D8D"
                />
              </svg>
              <p className="absolute top-0 left-0 h-full w-full flex items-center justify-center underline text-white text-4xl text-center uppercase font-medium">
                change appearance
              </p>
            </button>
            <div className="flex flex-col space-y-3 ">
              <button
                className={cn(
                  " shadow3 rounded-lg text-xl py-4 text-white bg-color1 uppercase",
                  HOVER_EFFECTS
                )}
              >
                spawn
              </button>
              <button
                onClick={() => setShowDeleteModal((prev) => !prev)}
                className={cn(
                  " rounded-lg text-xl py-4 text-color1 border-[0.188rem] border-color1 uppercase",
                  HOVER_EFFECTS
                )}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
