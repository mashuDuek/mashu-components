import React from 'react';
import { merge } from 'lodash';

import Input from '../../../../src/packages/forms/input';
import Dropdown from '../../../../src/packages/forms/dropdown';
import Label from '../../../../src/packages/forms/label';

import DropdownOptions from './dropdown_options';
import InputFieldCreator from './input_creator';
import TextareaFieldCreator from './textarea_creator';

class FieldCreator extends React.Component {
    state = {
        field: {},
        chosen: false
    };

    successfulAdd = () => {
        if (this.props.success) return <p className="success">Success!</p>;
        return null;
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    };

    handleTagSelect = (e) => {
        const newState = merge({}, this.state);
        newState.field.tag = e.target.value;
        this.setState({ field: newState.field, chosen: true });
    };

    renderDropdownFieldCreator = () => (
        <DropdownOptions
            addOptions={this.props.addField}>
        </DropdownOptions>
    );

    renderInputFieldCreator = () => (
        <InputFieldCreator
            addInput={this.props.addField}>
        </InputFieldCreator>
    );

    renderTextareaFieldCreator = () => (
        <TextareaFieldCreator
            addTextarea={this.props.addField}>
        </TextareaFieldCreator>
    );
    
    render () {
        let fieldsToRender = null;
        if (this.state.chosen) {
            if (this.state.field.tag === 'dropdown') {
                fieldsToRender = this.renderDropdownFieldCreator();
            } else if (this.state.field.tag === 'textarea') {
                fieldsToRender = this.renderTextareaFieldCreator();
            } else if (this.state.field.tag === 'input') {
                fieldsToRender = this.renderInputFieldCreator();
            };
        };

        return (
            <form>
                <div className="label-and-input" key="y">
                    <Label text="field html tag:"></Label>
                    <Dropdown 
                        onChange={this.handleTagSelect}
                        options={[
                            { value: 'input', text: 'input'       },
                            { value: 'textarea', text: 'textarea' },
                            { value: 'dropdown', text: 'dropdown' }
                        ]}>
                    </Dropdown>
                </div>

                {fieldsToRender}
                {this.successfulAdd()}
            </form>
        );
    }
}

export default FieldCreator;