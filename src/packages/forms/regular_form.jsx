import React from 'react';  
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from './input';
import Button from './button';
import TextArea from './textarea';
import Label from './label';

const Form = styled.form``;

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

    fields = () => {
        debugger
        return this.props.fields.map((field, idx) => {
            if (field.tag === 'input') {
                return (
                    <div>
                        <Label text={field.label}></Label>
                        <Input 
                            key={idx}
                            onChange={this.handleChange(field.label).bind(this)}
                            placeholder={field.placeholder}
                            type={field.type}>
                        </Input> 
                    </div>
                )
            } else if (field.tag === 'textarea') {
                return (
                    <div>
                        <Label text={field.label}></Label>
                        <TextArea 
                            key={idx}
                            onChange={this.handleChange(field.label).bind(this)}
                            placeholder={field.placeholder}
                            type={field.type}>
                        </TextArea> 
                    </div>
                )
            }
        });
    }

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