import React, { useState } from "react";

function Button({ onUpdate }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
  });

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeForm();
    onUpdate(formData); // Pass the form data to the parent component
    console.log("Form submitted!");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      team: "",
      assignee: "",
    });
  };

  return (
    <div className="form-container content-end">
      <div className="flex justify-end"> {/* This div will align items to the right */}
        {isFormOpen ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={closeForm}
          >
            Close Form
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={openForm}
          >
            Add New Task
          </button>
        )}
      </div>
      {isFormOpen && (
        <div className="form-popup com" id="myForm">
          <form onSubmit={handleSubmit} className="flex-col inline-table">
            <FormInput
              label="Title"
              name="title"
              placeholder="Task1"
              value={formData.title}
              onChange={handleChange}
            />
            <FormInput
              label="Description"
              name="description"
              placeholder="Enter your description"
              value={formData.description}
              onChange={handleChange}
            />
            <FormInput
              label="Team"
              name="team"
              placeholder="Team Name"
              value={formData.team}
              onChange={handleChange}
            />
            <FormInput
              label="Assignee"
              name="assignee"
              placeholder="Eg. Avenger"
              value={formData.assignee}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handleReset}
              className="bg-green-500 text-white px-2 py-1 rounded-md mt-4 inline-grid m-2"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-2 py-1 rounded-md inline-grid m-2"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function FormInput({ label, name, placeholder, value, onChange }) {
  return (
    <label className="m-2">
      <b>{label}:</b>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border border-gray-400 rounded-md px-2 py-1 mt-1"
      />
    </label>
  );
}

export default Button;
