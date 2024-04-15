import React, { useState } from 'react';
import projects from "../data/projects.json"
function ProjectForm() {
  const [formData, setFormData] = useState({
    name:  "",
    githubUrl:  "",
    cover:  "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData)
    console.table(projects)
  };
  

  return (
    <form onSubmit={handleSubmit} className=" w-2/3 flex justify-center flex-col items-center gap-4">
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="githubUrl" className="block font-medium text-gray-700">
          GitHub URL
        </label>
        <input
          type="text"
          id="githubUrl"
          name="githubUrl"
          value={formData.githubUrl}
          onChange={handleChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="cover" className="block font-medium text-gray-700">
          Cover Image
        </label>
        <input
          type="text"
          id="cover"
          name="cover"
          value={formData.cover}
          onChange={handleChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Update Project
      </button>
    </form>
  );
}

export default ProjectForm;
