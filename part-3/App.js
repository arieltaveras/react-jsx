const App = () => (
    <div>
        <Person
        name="Carol"
        age={63}
        hobbies="Gardening, Vacationing" />
        <Person
        name="Jeffery"
        age={17}
        hobbies="Playing Drums, Clubs" />
        <Person
        name="Samantha"
        age={27}
        hobbies="Spelunking, Hiking, Exercising" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))