import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas",telefons: "321321312-31" }]);
  const [newTelefons,     setNewTelefons] = useState("");
  const [newName, setNewName] = useState("");

  const [showAll, setShowAll] = useState(true);

  // const notesToShow = showAll
  //   ? notes
  //   : notes.filter((note) => note.important === true);

  // const persons = showAll ? persons


  
  const addPersona = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      telefons: newTelefons,
    };
    if (persons.some((person) => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
    setNewName("");
    console.log(persons);
  };


  const handleNewName = (event) => {
    setNewName(event.target.value);
    console.log(newName, event.target.value);
  };
  const handleNewTelfons = (event) => {
    setNewTelefons(event.target.value);
    console.log(newTelefons, event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersona}>
        <div>
          name: <input value={newName} onChange={handleNewName} /> <br />
          <br />
          number: <input value={newTelefons} onChange={handleNewTelfons} />

        </div>
        <ul>
          {persons.map((person) => (
            <li key={person.name}> {person.name} </li>
          ))}
        </ul>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map((person) => (
            <li key={person.name}> {person.name} {person.telefons} </li>
          ))}
        </ul>
    </div>
  );
};

export default App;
