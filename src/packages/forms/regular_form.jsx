import React from 'react';  
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from './input';
import Button from './button';
import TextArea from './textarea';
import Label from './label';
import List from './list'

const Form = styled.form`
    padding: 20px;
    
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center; 
        align-items: center;
    }

    input, textarea, label {
        margin: 10px;
        width: 80%;
    } 
`;

const LabelsAndFields = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
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

    labels = () => {
        return this.props.fields.map((field, idx) => (
            <Label text={field.label} key={idx}></Label>
        ));
    }

    fields = () => {
        return this.props.fields.map((field, idx) => {
            if (field.tag === 'input') {
                return (
                    <Input 
                        key={idx}
                        onChange={this.handleChange(field.label).bind(this)}
                        placeholder={field.placeholder}
                        type={field.type}>
                    </Input> 
                )
            } else if (field.tag === 'textarea') {
                return (
                    <TextArea 
                        key={idx}
                        onChange={this.handleChange(field.label).bind(this)}
                        placeholder={field.placeholder}
                        type={field.type}>
                    </TextArea> 
                )
            }
        });
    }

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <LabelsAndFields>
                    <List items={this.labels()}></List>
                    <List items={this.fields()}></List>
                </LabelsAndFields>
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}

export default NewForm;