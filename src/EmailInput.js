import React from 'react';

class EmailInput extends React.Component {
    constructor(props){
        super(props);
        
        this.state ={
            emailValue: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e);
        this.setState({
            emailValue: e.value
        });
    }

    render(){
        return( 
            <div>
                Email:
                <input
                    type="text"
                    placeholder="Your email adress"
                    value={this.state.emailValue}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default EmailInput;