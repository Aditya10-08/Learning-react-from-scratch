import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = (props) => {
  return (
    <>
        <div className="card h-[330px] w-[290px] border border-zinc-400 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            {/* Top */}
            <div className="top flex items-center justify-between mb-4">
              <img
                className="rounded-full h-10 w-10 object-cover p-1 border border-zinc-400"
                src={props.logo}
                alt="brandLogos"
              />

              <button className="flex items-center gap-1 border border-zinc-400 px-3 py-1 rounded-xl text-[14px] hover:bg-black cursor-pointer hover:text-white transition">
                Save <Bookmark size={16} />
              </button>
            </div>

            {/* Center */}
            <div className="center mt-3">
              <h3 className="text-zinc-700 font-semibold flex items-center justify-start gap-2">
                {props.company} <span className="text-xs text-zinc-500">{props.posted}</span>
              </h3>

              <h2 className="text-[20px] font-bold text-zinc-900 mt-1">
                {props.position}
              </h2>

              <div className="flex gap-3 mt-3 text-xs font-semibold">
                <span className="bg-zinc-200 text-zinc-700 px-3 py-1 rounded-lg">
                  {props.tag1}
                </span>
                <span className="bg-zinc-200 text-zinc-700 px-3 py-1 rounded-lg">
                  {props.tag2}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="bottom flex items-center justify-between mt-4 border-t-zinc-400 border-t pt-4">
            <div>
              <h3 className="font-bold text-md">{props.salary}</h3>
              <p className="text-xs text-zinc-600">{props.location}</p>
            </div>

            <button className="bg-black text-xs font-semibold text-white px-4  py-2 rounded-xl hover:bg-zinc-800 transition cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
    </>
  )
}

export default Card