import React, {useState} from 'react';
import './App.css';
import Form from './form'
import Team from './team'

function App() {

  const [team, setTeam] = useState([{
    name: '',
    email: '',
    number: ''
  }]);

  const addTeamMember = (teammate) => {
    setTeam([...team, teammate])
  }


  return (
    <div>
      <Form addTeamMember = {
        (teammate) => addTeamMember(teammate)
      } />
      <Team team ={team}/>
      <form>

        <button>Reset</button>

      </form>
    </div>
  );
}

export default App;
