const Hello = (props) => {
  return (
    <div>
      <p>Hellow {props.name}</p>
    </div>
  );
};

const App = () => {
  console.log("hellow world");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const name = "adrian"

  return (
    <div>
      <p>hellow orld</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="George" />
      <Hello name={ name} />
      <Hello name="Castro" />
    </div>
  );
};
export default App;
