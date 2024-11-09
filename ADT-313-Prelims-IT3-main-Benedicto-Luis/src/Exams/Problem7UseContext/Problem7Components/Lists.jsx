import { useContext } from 'react';
import DataContext from '../DataContext';

export default function Lists() {
  const { data, setSelectedData } = useContext(DataContext);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button onClick={() => setSelectedData(item)}>Select</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
