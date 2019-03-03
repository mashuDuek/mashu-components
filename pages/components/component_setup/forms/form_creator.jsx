import React from 'react';
import { merge } from 'lodash';

import FieldCreator from './field_creator';
import Button from '../../../../src/packages/forms/button';
import Input from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';
import { tag } from 'postcss-selector-parser';

class FormCreator extends React.Component {
    state = {
        fieldCount: 1,
        props: { 
            fields: {},
            buttonText: ''
        }
    };

    addField = (field) => (e) => {
        e.preventDefault();
        const { tag, type, label, placeholder, options } = field;
        if (tag === 'dropdown' &&  (label === '' || options[0].text === '')) return;
        if ((tag === 'input' && (type === 'text' || type === ''))
            && (label === '' || placeholder === '')) return;

        const newState = merge({}, this.state);
        const keys = Object.keys(newState.props.fields);
        const newField = Object.assign({}, field, { success: true });
        newState.props.fields[keys.length] = newField;

        this.setState({ 
            fieldCount: this.state.fieldCount, 
            props: newState.props
        });
    };

    incrementFieldCount = () => {
        this.setState({ fieldCount: this.state.fieldCount + 1 });
    };

    removeField = (idx) => (e) => {
        e.stopPropagation();
        e.preventDefault();
        const newState = merge({}, this.state);
        
        delete newState.props.fields[idx];
        
        const newFields = {};
        Object.values(newState.props.fields).forEach((field, i) => {
            newFields[i] = field;
        });

        newState.props.fields = newFields;
        
        this.setState({ 
            props: newState.props, 
            fieldCount: newState.fieldCount - 1 
        });
    };

    handleButtonText = (e) => {
        const newState = merge({}, this.state);
        newState.props.buttonText = e.target.value;
        this.setState({ 
            props: newState.props, 
            fieldCount: this.state.fieldCount 
        });
    };

    renderFieldForm = () => {
        const fieldsToRender = [];
        for (let i = 0; i < this.state.fieldCount; i++) {
            const { fields } = this.state.props;
            const success = (fields[i] && fields[i].success) ? true : false;

            fieldsToRender.push(
                <FieldCreator key={i} 
                    removeField={this.removeField(i)}
                    addField={this.addField.bind(this)} 
                    success={success}>
                </FieldCreator>
            );
        };

        const buttonTextField = (
            <div className="label-and-input submit-button" key="x">
                <Label text="form submit button text:"></Label>
                <Input 
                    onChange={this.handleButtonText} 
                    placeholder="what will your submit button say?">
                </Input>
            </div>
        );

        fieldsToRender.push(buttonTextField);
        return fieldsToRender;
    };

    render() {
        debugger
        const { props } = this.state;
        const fields = Object.values(props.fields);
        const toSubmit = { buttonText: props.buttonText, fields };

        return (
            <div className="form-creator">
                Create-a-Form Form
                {this.renderFieldForm()}
                <Button
                    text="Add Field"
                    onClick={this.incrementFieldCount}>
                </Button>
                <Button 
                    text="Create Form"
                    onClick={this.props.createForm(toSubmit)}>
                </Button>
            </div>
        );
    }
}

export default FormCreator;
