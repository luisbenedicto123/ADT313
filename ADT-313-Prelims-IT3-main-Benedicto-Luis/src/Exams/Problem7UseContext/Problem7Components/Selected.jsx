import { useContext } from 'react';
import DataContext from '../DataContext';

export default function SelectedValue() {
  const { selectedData } = useContext(DataContext);

  return (
    <div>
      <h3>Selected Item:</h3>
      {Object.keys(selectedData).length > 0 ? (
        <pre>{JSON.stringify(selectedData, null, 2)}</pre>  {/* Display the object in a readable format */}
      ) : (
        <p>No item selected.</p>
      )}
    </div>
  );
}
