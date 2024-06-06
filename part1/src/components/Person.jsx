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
export default Persons;
