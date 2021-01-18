import React from 'react';
import CardsList from '../Components/CardsList';
import './App.css'
import SearchBox from '../Components/SearchBox.js'
import Scroll from '../Components/Scroll.js'

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            robots : [],
            SearchText: ""
        }
    }

    render()
    {
        const filteredRobos = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.SearchText.toLowerCase()));
        if(this.state.robots.length  < filteredRobos.length)
            return <h1>Loading</h1>;
        else
        return (
            <div className ='tc'>
                <h1 id='logo'>ROBO FRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <CardsList robots = {filteredRobos}/>
                </Scroll>
            </div>);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState( { SearchText: event.target.value } );
    }
}

export default App; 