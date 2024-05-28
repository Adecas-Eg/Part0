const Course = ({ course }) => {
  const total = course.parts.reduce((suma, part) => {
    if (!part.parts) {
      return suma + part.exercises;
    } else {
      return suma;
    }
  }, 0);

  return (
    <div>
      <h1> {course.name} </h1>
      <h4>Content</h4>
      <ul>
        {course.parts.map((part) => {
          if (!part.parts) {
            return <li key={part.id}>{part.name}</li>;
          } else {
            return null;
          }
        })}
      </ul>
      <p>
        {" "}
        Total of <b>{total}</b> exercises
      </p>
      {course.parts.map((part) => {
        if (part.parts) {
            <h4> {part.name}</h4>
         return part.parts.map((subPart) => <li key={subPart.id}> {subPart.name} and {subPart.exercises}</li>)
        } else {
          return null
        }
      })}
    </div>
  );
};

export default Course;
