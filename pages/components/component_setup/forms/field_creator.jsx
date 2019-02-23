import React from 'react';
import { merge } from 'lodash';

import Input from '../../../../src/packages/forms/input';
import Dropdown from '../../../../src/packages/forms/dropdown';
import Button from '../../../../src/packages/forms/button';
import Label from '../../../../src/packages/forms/label';

import DropdownOptions from './dropdown_options';

class FieldCreator extends React.Component {
    state = {
        field: {},
        chosen: false
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    };

    successfulAdd = () => {
        if (this.props.success) return <p className="success">Success!</p>;
        return null;
    };

    handleTagSelect = (e) => {
        const newState = merge({}, this.state);
        newState.field.tag = e.target.value;
        this.setState({ field: newState.field, chosen: true });
    };

    renderDropdownFields = () => (
        <DropdownOptions
            addOptions={this.props.addField}>
        </DropdownOptions>
    );

    renderTextareaField = () => (
        <div className="label-and-input">
            <Label text="placeholder:"></Label>
            <Input
                onChange={this.handleChange('placeholder')}
                placeholder="eg. Please type your name here"
                required={true}>
            </Input>
        </div>
    );

    renderInputFields = () => (
        <div>
            <div className="label-and-input">
                <Label text="type:"></Label>
                <Input
                    onChange={this.handleChange('type')}
                    placeholder="supported: 'date', 'number', 'text'"
                    required={true}>
                </Input>
            </div>
            <div className="label-and-input">
                <Label text="placeholder:"></Label>
                <Input
                    onChange={this.handleChange('placeholder')}
                    placeholder="eg. Please type your name here"
                    required={true}>
                </Input>
            </div>
        </div>
    );
    
    render () {
        let fieldsToRender = null;
        if (this.state.chosen) {
            if (this.state.field.tag === 'dropdown') {
                fieldsToRender = this.renderDropdownFields();
            } else if (this.state.field.tag === 'textarea') {
                fieldsToRender = this.renderTextareaField();
            } else if (this.state.field.tag === 'input') {
                fieldsToRender = this.renderInputFields();
            };
        };

        return (
            <form>
                <div className="label-and-input" key="y">
                    <Label text="field html tag:"></Label>
                    <Dropdown 
                        onChange={this.handleTagSelect}
                        options={[
                            { value: 'select one', text: 'select one'   },
                            { value: 'input', text: 'input'             },
                            { value: 'textarea', text: 'textarea'       },
                            { value: 'dropdown', text: 'dropdown'       },
                        ]}>
                    </Dropdown>
                </div>
                <div className="label-and-input">
                    <Label text="field label:"></Label>
                    <Input
                        onChange={this.handleChange('label')}
                        placeholder="eg. Name:"
                        required={true}>
                    </Input>
                </div>
                {fieldsToRender}
                {this.successfulAdd()}
            </form>
        )
    }
}

export default FieldCreator;