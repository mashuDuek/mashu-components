import React from 'react';
import { merge } from 'lodash';

import FieldCreator from './field_creator';
import Button from '../../../../src/packages/forms/button';
import Input from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';

class FormCreator extends React.Component {
    state = {
        fieldCount: 1,
        props: { 
            fields: [],
            buttonText: ""
        }
    };

    addField = (field) => () => {
        const newState = merge({}, this.state);
        newState.props.fields.push(field)
        this.setState({ 
            fieldCount: this.state.fieldCount, 
            props: newState.props,
            success: true
        });
    };

    incrementFieldCount = () => {
        this.setState({ fieldCount: this.state.fieldCount + 1 });
    };

    handleDropdownChoice = (e) => {
        const newState = merge({}, this.state);
        newState.props.field
    }

    handleButtonText = (e) => {
        const newState = merge({}, this.state);
        newState.props.buttonText = e.target.value;
        this.setState({ props: newState.props, fieldCount: this.state.fieldCount });
    };

    renderFieldForm = () => {
        const fields = [];
        for (let i = 0; i < this.state.fieldCount; i++) {
            fields.push(
                <FieldCreator key={i} 
                    addField={this.addField.bind(this)} 
                    success={this.state.success}>
                </FieldCreator>
            );
        };

        const buttonTextField = (
            <div className="label-and-input" key="x">
                <Label text="submit button text:"></Label>
                <Input 
                    onChange={this.handleButtonText} 
                    placeholder="text for form submit button">
                </Input>
            </div>
        );

        fields.push(buttonTextField);
        return fields;
    };

    render() {
        return (
            <div className="form-creator">
                Create-a-Form Form
                <Button onClick={this.incrementFieldCount} text="Add Field"></Button>
                {this.renderFieldForm()}
                <Button 
                    onClick={this.props.createForm(this.state.props)}
                    text="Create Form">
                </Button>
            </div>
        );
    }
}

export default FormCreator;
