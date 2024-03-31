// components/Card.js
import React from "react";

function Card({ task }) {
  return (
    <div className="m-3 inline-grid rounded-lg">
      <div className="block max-w-[17rem] rounded-lg bg-neutral-50 text-black shadow-secondary-1">
        <div className="border-b-2 border-black/20 px-6 py-3 text-center bg-amber-200 rounded-lg font-semibold">
          {task.title} {/* Display title */}
        </div>
        <div id="cardId" className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">{task.title}</h5> {/* Display title */}
          <p className="text-base bg-slate-100">
            {task.description} {/* Display description */}
          </p>
          <p className="text-base bg-slate-100">
            Team: {task.team} {/* Display team */}
          </p>
          <div className="flex items-center bg-slate-100">
            <label htmlFor="assignee" className="mr-2 ">
              Assignee:
            </label>
            <select id="assignee" className="border border-gray-400 rounded-md px-2 py-1">
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
