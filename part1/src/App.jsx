import { useState } from "react";

const Filter = ({ filter, handleFilterName }) => {
  return <input type="text" value={filter} onChange={handleFilterName} />;
};

const PersonsForm = ({
  name,
  number,
  handleName,
  handleNumber,
  addPersona,
}) => {
  return (
    <div>
      <h2>Add a new</h2>
      <form onSubmit={addPersona}>
        <div>
          name: <input value={name} onChange={handleName} /> <br />
          <br />
          number: <input value={number} onChange={handleNumber} />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {" "}
          {person.name} {person.telefons}{" "}
        </li>
      ))}
    </ul>
  );
};


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

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewTelfons = (event) => {
    setNewTelefons(event.target.value);
  };
  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };
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

  const personsToShow = filterName
    ? persons.filter((per) => per.name.includes(filterName))
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filterName} handleFilterName={handleFilterName} />

      <PersonsForm
        name={newName}
        number={newTelefons}
        handleName={handleNewName}
        handleNumber={handleNewTelfons}
        addPersona={addPersona}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
