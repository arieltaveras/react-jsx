const Tweet = (props) => {
    console.log(props);
    return (
        <ul className="tweet-props">
            <li className="username">Username: {props.username}</li>
            <li className="date">Date of Tweet: {props.date}</li>
            <li className="name">Name: {props.name}</li>
            <li className="tweet">Tweet: {props.message}</li>
        </ul>
    );
};