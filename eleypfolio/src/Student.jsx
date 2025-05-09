import propTypes from "prop-types";


export default function Student(props) {
  return (
    <div className="student">
        <p className="std__info">Name: {props.name}</p>
        <p className="std__info">Age: {props.age}</p>
        <p className="std__info">Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}