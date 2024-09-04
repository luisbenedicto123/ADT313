import './App.css';
import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';

function App() {

  const UserInformation = {
    firstName: "Luis",
    lastName: "Benedicto",
    section: "IT-3A",
    description: "Regular Student"
  }
  return (
    <div className="App">
      <Name firstName={UserInformation.firstName} lastName={UserInformation.lastName}/>
      <Section section={UserInformation.section} />
      <Description description={UserInformation.description} />
    </div>
  );
}

export default App;
