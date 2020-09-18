import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: '1',
            name: null,
            email: null,
            password: null,
            address_line_1: null,
            address_line_2: null,
            city: null,
            state: null,
            zip_code: null,
            card_number: null,
            expiration: null, 
            cvv: null,
            billing_zip: null
        }
    }

    onFormSubmit = (step) => {
        // if the step passed in equals 1
        if (step === '1') {
            var url = '/customer'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(response => response.json)
                .then(() => {
                    this.setState({
                        currentStep: '1',
                        name: null,
                        email: null,
                        password: null,
                        address_line_1: null,
                        address_line_2: null,
                        city: null,
                        state: null,
                        zip_code: null,
                        card_number: null,
                        expiration: null, 
                        cvv: null,
                        billing_zip: null
                    });
                });
        }
    }

    handleInputChange = (event) => {
        var stateId = event.target.id;
        var stateValue = event.target.value;
        this.setState({
            [stateId]: stateValue
        });
    }
    clearForm = (formNum) => { 
        var formToclear = 'form' + (formNum - 1);
        if (formNum === '1') {
            formToclear = 'form3';
        }
        document.getElementById(formToclear).reset();
      }
      

    onbuttonClick = (event) => {
        var key = event.target.id;
        var step = event.target.name;
        event.preventDefault();
        this.setState({
            [key]: step
        });
        this.clearForm(step);
        this.onFormSubmit(step);
    }

    render() {
        var step = this.state.currentStep;
        if (step === '1') {
            return (
                <>
                    <div>
                        <form id='form1'>
                            <label>
                                Name:
                <br />
                                <textarea id='name' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Email:
                <br />
                                <textarea id='email' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Password:
                <br />
                                <textarea id='password' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <button onClick={this.onbuttonClick} id='currentStep' name='2'>SUBMIT</button>
                        </form>
                    </div>
                </>
            );
        } 
        if (step === '2') {
            return (
                <>
                    <div>
                        <form id='form2'>
                            <label>
                                Address line 1:
                 <br />
                                <textarea id='address_line_1' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Address line 2:
                 <br />
                                <textarea id='address_line_2' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                City:
                 <br />
                                <textarea id='city' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                State:
                 <br />
                                <textarea id='state' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Zip:
                 <br />
                                <textarea id='zip_code' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <button onClick={this.onbuttonClick} id='currentStep' name='3'>SUBMIT</button>
                        </form>
                    </div>
                </>
            );
        }  else if (step === '3') {
            return (
                <>
                    <div>
                        <form id='form3'>
                            <label>
                                Card #:
                 <br />
                                <textarea id='card_number' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Expiration:
                 <br />
                                <textarea id='expiration' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                cvv:
                 <br />
                                <textarea id='cvv' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <label>
                                Billing Zip:
                 <br />
                                <textarea id='billing_zip' rows='1' cols='20' onChange={this.handleInputChange} />
                            </label>
                            <br />
                            <br />
                            <button onClick={this.onbuttonClick} id='currentStep' name='1'>SUBMIT</button>
                        </form>
                    </div>
                </>
            );
        }
    }
}



export default App;