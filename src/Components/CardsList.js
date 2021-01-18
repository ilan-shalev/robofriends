
import React , {Component} from 'react';
import Card from './Card.js'

class CardsList extends Component
{
    render(props)
    {
        const {robots} = this.props;
        const robotsArray = robots.map((robo, i)=>{
            return (<Card 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>);
        });
        return(
            <div>
                {robotsArray}
            </div>
        )
    }
}

export default CardsList;