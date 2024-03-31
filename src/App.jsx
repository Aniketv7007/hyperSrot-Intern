// App.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

function App({ heading }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskList, setTaskList] = useState([]);

  const handleUpdateFormData = (formData) => {
    setTaskList([...taskList, formData]);
  };

  return (
    <div className="w-full bg-violet-200 min-h-screen">
      <div className="relative flex h-16 items-center bg-violet-200">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start text-2xl">
          Task Board
        </div>
        <img
          className="h-8 w-8 rounded-full bg-white"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="User"
        />
      </div>
      <div className="shadow-md rounded-md bg-violet-200 p-4">
        <div className="flex items-center justify-between mt-4">
          <div className="flex-col sm:flex-row">
            <label htmlFor="assign1" className="mr-2">
              Filter By:
            </label>
            <select
              id="assign1"
              className="border border-gray-400 rounded-md px-2 py-1 mr-4"
            >
              <option value="user1">P0</option>
              <option value="user2">P1</option>
              <option value="user3">P2</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="text"
              id="taskName"
              className="border border-gray-400 rounded-md px-2 py-1 mr-4"
              placeholder="Assignee Name"
            />
            <DatePicker
              id="dueDate"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YY-DD/MM/YY"
              className="border border-gray-400 rounded-md px-2 py-1 mr-4"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="assign" className="mr-2">
            Sort By:
          </label>
          <select
            id="assign"
            className="border border-gray-400 rounded-md h-12 m-2 px-2 py-1 mr-4"
          >
            <option value="user1">P0</option>
            <option value="user2">P1</option>
            <option value="user3">P2</option>
          </select>
        </div>
        <Button onUpdate={handleUpdateFormData} />
      </div>
      <div className="flex flex-wrap justify-around">
        {taskList.map((task, index) => (
          <Card key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
