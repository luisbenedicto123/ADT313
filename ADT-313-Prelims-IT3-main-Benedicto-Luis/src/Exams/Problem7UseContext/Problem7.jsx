import { useState } from 'react';
import DataContext from './DataContext';
import Lists from './Problem7Components/Lists';
import SelectedValue from './Problem7Components/Selected';
import data from './problem7_mock_data.json';

export default function Problem7() {
  const [selectedData, setSelectedData] = useState({});

  return (
    <DataContext.Provider value={{ data, selectedData, setSelectedData }}>
      <p>Apply UseContext here</p>

      {/* Display the SelectedValue component */}
      <div style={{ display: 'block' }}>
        <SelectedValue />
      </div>
      <div style={{ display: 'block' }}>
        <Lists />
      </div>
    </DataContext.Provider>
  );
}
