// DataEntryForm.jsx

import React, { useState } from 'react';

function DataEntryForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Data</h2>
      <div>
        <label>
          Sepal Length:
          <input type="text" name="sepal_length" value={formData.sepal_length} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Sepal Width:
          <input type="text" name="sepal_width" value={formData.sepal_width} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Petal Length:
          <input type="text" name="petal_length" value={formData.petal_length} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Petal Width:
          <input type="text" name="petal_width" value={formData.petal_width} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DataEntryForm;
