const Course = ({ course }) => {
  const total = course.parts.reduce((suma, part) => suma+ part.exercises,0);
  return (
    <div>
      <h1> {course.name} </h1>
      <h4>Content</h4>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {" "}
            {part.name} and <b>{part.exercises}</b>{" "}
          </li>
        ))}
      </ul>

      <p> Total of <b>{total}</b> exercises</p>
    </div>
  );
};

export default Course;
