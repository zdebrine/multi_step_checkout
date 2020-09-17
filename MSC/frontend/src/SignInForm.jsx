import React from 'react';


class SignInForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: null,
            email: null,
            password: null
        }
    }

    handleInputChange = (event) => {
        var stateId = event.target.id;
        var stateValue = event.target.value;
        this.setState({
            [stateId]: stateValue
        });
    }

    onbuttonClick = () => {
        console.log(this.state);
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                <br />
                    <textarea id='name' rows='1' cols='20' onChange={this.handleInputChange.bind(this)} />
                </label>
                <br />
                <br />
                <label>
                    Email:
                <br />
                    <textarea id='email' rows='1' cols='20' onChange={this.handleInputChange.bind(this)} />
                </label>
                <br />
                <br />
                <label>
                    Password:
                <br />
                    <textarea id='password' rows='1' cols='20' onChange={this.handleInputChange.bind(this)} />
                </label>
                <br />
                <br />
                <button onClick={this.onbuttonClick.bind(this)}>SUBMIT</button>
            </form>
        );
    }

}

export default SignInForm;