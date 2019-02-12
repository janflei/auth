import React from 'react';

class DisplayNameInput extends React.Component {
    constructor(props){
        super(props);
        
        this.state ={
            DisplayNameInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e);
        this.setState({
            DisplayNameInput: e.value
        });
    }

    render(){
        return( 
            <div>
                DisplayName:
                <input
                    type="text"
                    placeholder="Your DisplayNameInput"
                    value={this.state.DisplayNameInput}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default DisplayNameInput;