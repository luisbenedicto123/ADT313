import React, { useReducer } from 'react';
import data from './problem8mock_data.json';

// Initial state
const initialState = {
  foods: data,
  selected: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FOOD':
      return { ...state, foods: [...state.foods, action.payload] };
    case 'UPDATE_FOOD':
      return {
        ...state,
        foods: state.foods.map((food) =>
          food.id === action.payload.id ? action.payload : food
        ),
      };
    case 'DELETE_FOOD':
      return {
        ...state,
        foods: state.foods.filter((food) => food.id !== action.payload),
      };
    case 'SELECT_FOOD':
      return { ...state, selected: action.payload };
    case 'CLEAR_SELECTION':
      return { ...state, selected: null };
    default:
      return state;
  }
};

export default function Problem8() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, selected } = state;

  const handleEdit = (food) => {
    dispatch({ type: 'SELECT_FOOD', payload: food });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_FOOD', payload: id });
  };

  const handleSave = () => {
    if (selected) {
      dispatch({ type: 'UPDATE_FOOD', payload: selected });
    } else {
      // Create new food item
      const newFood = {
        id: Date.now(), // Unique ID for each food item
        food_name: '',
        price: '',
        expiration_date: '',
        calories: '',
      };
      dispatch({ type: 'ADD_FOOD', payload: newFood });
    }
    dispatch({ type: 'CLEAR_SELECTION' }); // Clear selection after saving
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR_SELECTION' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (selected) {
      dispatch({
        type: 'SELECT_FOOD',
        payload: { ...selected, [name]: value },
      });
    }
  };

  return (
    <>
      <div>
        <div style={{ display: 'block' }}>
          Food Name:{' '}
          <input
            name="food_name"
            type="text"
            value={selected ? selected.food_name : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Price:{' '}
          <input
            name="price"
            type="text"
            value={selected ? selected.price : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Expiration Date:{' '}
          <input
            name="expiration_date"
            type="text"
            value={selected ? selected.expiration_date : ''}
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'block' }}>
          Calories:{' '}
          <input
            name="calories"
            type="text"
            value={selected ? selected.calories : ''}
            onChange={handleChange}
          />
        </div>

        <button type='button' onClick={handleSave}>Save</button>
        <button type='button' onClick={handleClear}>Clear</button>
      </div>
      <div className='table-container'>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Price</th>
              <th>Expiration Date</th>
              <th>Calories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: 'center' }}>
            {foods.map((food) => (
              <tr key={food.id}>
                <td>{food.food_name}</td>
                <td>{food.price}</td>
                <td>{food.expiration_date}</td>
                <td>{food.calories}</td>
                <td>
                  <button type='button' onClick={() => handleEdit(food)}>Edit</button>
                  <button type='button' onClick={() => handleDelete(food.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}