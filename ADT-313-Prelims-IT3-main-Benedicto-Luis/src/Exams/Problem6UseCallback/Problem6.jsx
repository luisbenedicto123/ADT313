import { useCallback, useEffect, useState } from 'react';
import data from './MOCK_DATA.json';

export default function Problem6() {
  const [cars, setCars] = useState(data);
  const [selected, setSelected] = useState(null);
  
  // Clear the selected car
  const clearSelection = useCallback(() => {
    setSelected(null);
  }, []);

  // Handle editing a car
  const handleEdit = useCallback((car) => {
    setSelected(car);
  }, []);

  // Handle deleting a car
  const handleDelete = useCallback((vin) => {
    setCars((prevCars) => prevCars.filter(car => car.vin !== vin));
  }, []);

  // Handle saving a new car
  const handleSave = useCallback(() => {
    if (selected && selected.vin) {
      // Update existing car
      setCars((prevCars) =>
        prevCars.map(car => (car.vin === selected.vin ? selected : car))
      );
    } else {
      // Add new car
      const newCar = {
        vin: Date.now().toString(), // Generate a unique VIN for new cars
        make: '',
        model: '',
        year: '',
        color: '',
        ...selected,
      };
      setCars((prevCars) => [...prevCars, newCar]);
    }
    clearSelection();
  }, [selected, clearSelection]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div>
        <div style={{ display: 'block' }}>
          VIN:{' '}
          <input
            type='text'
            name='vin'
            value={selected ? selected.vin : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Make:{' '}
          <input
            type='text'
            name='make'
            value={selected ? selected.make : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Model:{' '}
          <input
            type='text'
            name='model'
            value={selected ? selected.model : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Year:{' '}
          <input
            type='text'
            name='year'
            value={selected ? selected.year : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Color:{' '}
          <input
            type='text'
            name='color'
            value={selected ? selected.color : ''}
            onChange={handleChange}
          />
        </div>
        <button type='button' onClick={handleSave}>Save</button>
        <button type='button' onClick={clearSelection}>Clear</button>
      </div>
      <div className='table-container'>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>VIN</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {cars.map((car) => (
              <tr key={car.vin}>
                <td>{car.vin}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>
                  <button type='button' onClick={() => handleEdit(car)}>Edit</button>
                  <button type='button' onClick={() => handleDelete(car.vin)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}