const Filter = ({ filter, handleFilterName }) => {
  return <input type="text" value={filter} onChange={handleFilterName} />;
};

export default Filter;
