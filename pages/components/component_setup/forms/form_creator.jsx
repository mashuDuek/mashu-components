import React from 'react';
import { merge } from 'lodash';

import FieldCreator from './field_creator';
import FormComp from '../../../../src/packages/forms/regular_form';
import Button from '../../../../src/packages/forms/button';

class FormCreator extends React.Component {
    state = {
        props: { 
            fields: [],
            buttonText: ""
        },
        fieldCount: 1
    };

    addField = (field) => {
        return () => {
            const newState = merge({}, this.state);
            newState.props.fields.push(field)
            this.setState({ 
                fieldCount: this.state.fieldCount, 
                props: newState.props 
            });
        }
    }

    incrementFieldCount = () => {
        this.setState({ fieldCount: this.state.fieldCount + 1 });
    }

    renderFieldForm = () => {
        const fields = []
        for (let i = 0; i < this.state.fieldCount; i++) {
            fields.push(
                <FieldCreator key={i} addField={this.addField.bind(this)}></FieldCreator>
            );
        }
        return fields;
    }

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
        )
    }
}

class NewForm extends React.Component {
    state = { form: null };

    createForm = (form) => () => {
        this.setState({ form });
    };

    renderForm = () => {
        if (!this.state.form) return null;
        return (
            <FormComp 
                fields={this.state.form.fields} 
                buttonText={this.state.form.buttonText}>
            </FormComp>
        );
    };
    
    render() {
        return (
            <div className="form-creator-and-form">
                <FormCreator createForm={this.createForm.bind(this)}></FormCreator>
                {this.renderForm()}
            </div>
        )
    }
}

export default NewForm;
