const MAX_NAME_LENGTH = 6;

const Person = ({ name, age, hobbies }) => {
  let reply;
  if (age < 18) {
    reply = <h3>you must be 18</h3>;
  } else {
    reply = <h3>please go vote</h3>;
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>
          <b>Name:</b>
          {name.slice(0, MAX_NAME_LENGTH)}
        </li>
        <li>
          <b>Age:</b>
          {age}
        </li>
        <li>
          <b>Hobbies:</b>
          <ul>
            <li>{hobbies}</li>
          </ul>
        </li>
        <b>{reply}</b>
      </ul>
      <hr></hr>
    </div>
  );
};
