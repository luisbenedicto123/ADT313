import React, { useState } from 'react';

export default function Problem4() {
 
  const [formData, setFormData] = useState({
    name: '',
    yearLevel: '',
    course: 'BSIT',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      course: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'block' }}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'block' }}>
        <p>Yearlevel:</p>
        <input
          type="radio"
          id="firstYear"
          name="yearLevel"
          value="First Year"
          checked={formData.yearLevel === 'First Year'}
          onChange={handleRadioChange}
        />
        <label htmlFor="firstYear">First Year</label>
        <br />
        <input
          type="radio"
          id="secondYear"
          name="yearLevel"
          value="Second Year"
          checked={formData.yearLevel === 'Second Year'}
          onChange={handleRadioChange}
        />
        <label htmlFor="secondYear">Second Year</label>
        <br />
        <input
          type="radio"
          id="thirdYear"
          name="yearLevel"
          value="Third Year"
          checked={formData.yearLevel === 'Third Year'}
          onChange={handleRadioChange}
        />
        <label htmlFor="thirdYear">Third Year</label>
        <br />
        <input
          type="radio"
          id="fourthYear"
          name="yearLevel"
          value="Fourth Year"
          checked={formData.yearLevel === 'Fourth Year'}
          onChange={handleRadioChange}
        />
        <label htmlFor="fourthYear">Fourth Year</label>
        <br />
        <input
          type="radio"
          id="fifthYear"
          name="yearLevel"
          value="Fifth Year"
          checked={formData.yearLevel === 'Fifth Year'}
          onChange={handleRadioChange}
        />
        <label htmlFor="fifthYear">Fifth Year</label>
        <br />
        <input
          type="radio"
          id="irregular"
          name="yearLevel"
          value="Irregular"
          checked={formData.yearLevel === 'Irregular'}
          onChange={handleRadioChange}
        />
        <label htmlFor="irregular">Irregular</label>
        <br />
      </div>

      <div style={{ display: 'block' }}>
        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleSelectChange}
        >
          <option value="BSCS">BSCS</option>
          <option value="BSIT">BSIT</option>
          <option value="BSCPE">BSCpE</option>
          <option value="ACT">ACT</option>
        </select>
      </div>

      <button type="submit">Submit</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre> 
      </div>
    </form>
  );
}

