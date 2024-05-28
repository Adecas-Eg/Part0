const Course =({course}) => {
    return (
        <div>
            <h1> {course.name} </h1>
            <h4>Content</h4>
            <ul>
                {course.parts.map((part) => 
                <li key={part.id}> {part.name} and <b>{part.exercises}</b> </li>)}
            </ul>

            
        </div>
    )
}

export default Course;