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

export default PersonsForm;
