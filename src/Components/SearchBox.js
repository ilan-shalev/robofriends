import React from "react";
//import { robots } from "./robots";

class SearchBox extends React.Component
{
    render(props)
    {
        return (
                <div className='pa2'>
                    <input 
                        type='search' 
                        placeholder='Search Robots'
                        className='pa3 ba b--green bg-light-blue'
                        onChange = {this.props.searchChange}/>
                </div>
        );
    }
}

export default SearchBox;