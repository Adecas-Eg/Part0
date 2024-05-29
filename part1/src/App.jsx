import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const [showAll, setShowAll] = useState(true);

  // const notesToShow = showAll
  //   ? notes
  //   : notes.filter((note) => note.important === true);

  // const persons = showAll ? persons

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
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
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
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
      ...
    </div>
  );
};

export default App;
