import React from 'react';  
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './button';
import Label from './label';
import Field from './field';

const Form = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const LabelAndField = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
`;

class NewForm extends React.Component {

    state = {};

    handleChange = (field) => {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    fields = () => (
        this.props.fields.map((field, idx) => (
            <LabelAndField key={idx}>
                <Label text={field.label}></Label>
                <Field 
                    field={field}
                    onChange={this.handleChange(field.label).bind(this)}>
                </Field>
            </LabelAndField>
        ))
    );

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.fields()}
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}

export default NewForm;

// we want to specify which props this Form takes
// using PropTypes
// we also want to use defaultProps to add some 
// sensible data in case user does not supply un-required props
