import React , {Component} from 'react';
import 'tachyons';
import './Card.css'

class Card extends Component
{
    render(props)
    {
        const {id, name, email} = this.props;
        return (
            <div id='card' className='tc bg-light-blue dib br4 pa1 ma3 grow bw3 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt='card'/>
                <div>
                    <h2>{name}</h2>
                    <h1>{id}</h1>
                    <p>{email}</p>
                </div>
            </div>
        );  
    }
}

export default Card;


