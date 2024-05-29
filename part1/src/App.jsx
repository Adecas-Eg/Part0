import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", telefons: "040-123456", id: 1 },
    { name: "Ada Lovelace", telefons: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", telefons: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", telefons: "39-23-6423122", id: 4 },
  ]);
  const [newTelefons, setNewTelefons] = useState("");
  const [newName, setNewName] = useState("");
  const [filterName, setFilterName] = useState(" ");

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
    setNewTelefons("");
    setFilterName("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewTelfons = (event) => {
    setNewTelefons(event.target.value);
  };
  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const personsToShow = filterName
    ? persons.filter((per) => per.name.includes(filterName))
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>

      <input type="text" value={filterName} onChange={handleFilterName} />

      <h2>Add a new</h2>
      <form onSubmit={addPersona}>
        <div>
          name: <input value={newName} onChange={handleNewName} /> <br />
          <br />
          number: <input value={newTelefons} onChange={handleNewTelfons} />
        </div>
        <ul>
          {personsToShow.map((person) => (
            <li key={person.name}> {person.name} </li>
          ))}
        </ul>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {" "}
            {person.name} {person.telefons}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
