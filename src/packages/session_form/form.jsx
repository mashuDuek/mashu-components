import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../forms/button';
import Label from '../forms/label';

const Form = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 80%;
    border-radius: 3px;
    font-size: medium;
    border: 1px solid lightgray;
    padding: 3px;
`;

const LabelAndInput = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

class NewForm extends React.Component {

    state = {};

    handleChange = (field) => {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        let usernameField = null;
        if (this.props.buttonText === 'sign up') {
            usernameField = (
                <LabelAndInput>
                    <Label text="username:"></Label>
                    <Input
                        required
                        placeholder="eg. NelsonMandela"
                        onChange={this.handleChange('username').bind(this)}>
                    </Input>
                </LabelAndInput>
            );
        };

        let signInLabel = 'username or email:';
        let signInPlaceholder = 'eg. nelson@mandela.com or NelsonMandela';
        if (this.props.buttonText === 'sign up') {
            signInLabel = 'email:';
            signInPlaceholder = 'eg. nelson@mandela.com';
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <LabelAndInput>
                    <Label text={signInLabel}></Label>
                    <Input
                        required
                        placeholder={signInPlaceholder}
                        onChange={this.handleChange('email').bind(this)}>
                    </Input>
                </LabelAndInput>
                {usernameField}
                <LabelAndInput>
                    <Label text="password:"></Label>
                    <Input
                        required
                        placeholder="eg. ********"
                        onChange={this.handleChange('password').bind(this)}>
                    </Input>
                </LabelAndInput>
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}

NewForm.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
};

NewForm.defaultProps = {
    onSubmit: (data) => console.log(data)
};

export default NewForm;