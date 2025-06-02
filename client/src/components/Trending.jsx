import React from "react";

export default function Trending(props){
  return (
    <div class="bg-transparent rounded overflow-hidden flex-shrink-0 w-56">
         <img src={props.img} alt={props.name} class="w-full"/>

          <div class="w-full flex justify-between items-center gap-4 py-2 ">
               <p class="text-5xl text-neutral-700 font-bold">{props.rank}</p>
              <div class="flex w-full  flex-col gap-0 mt-2 ">
                   <p class="text-xl font-medium text-neutral-200 mb-0">{props.name}</p>
                  <div class="flex gap-0 items-center ">
                    <p class="text-neutral-200 bg-neutral-900 px-2 py-1 mr-1 rounded text-sm">{props.genre}</p>
                    <span class="text-4xl text-neutral-500 w-4" >&#183;</span>
                    <p class="text-neutral-400 text-sm">{props.runTime} mins</p>
                  </div>  
              </div>
          </div>

  </div>
  )
}