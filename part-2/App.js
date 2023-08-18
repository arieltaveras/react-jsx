const App = () => (
    <div>
        <Tweet 
        username="RealBartSimpson"
        name="Bart Simpson"
        date="08/16/2023"
        message="Eat my shorts Principle Skinner!!!" />
        <Tweet 
        username="ChefGordonRamsey"
        name="Gordon Ramsey"
        date="08/10/2023"
        message="Just had the most amazing duck!" />
        <Tweet 
        username="IamIronMan"
        name="Anthony Stark"
        date="08/12/2023"
        message="Made a new Element...FREE ENERGY FOR ALL!" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))