import React from 'react';
import { merge } from 'lodash';

import Input from '../../../../src/packages/forms/input';
import Dropdown from '../../../../src/packages/forms/dropdown';
import Button from '../../../../src/packages/forms/button';
import Label from '../../../../src/packages/forms/label';

class FieldCreator extends React.Component {
    state = {
        field: {},
        selectedDropdown: false,
        selectedInput: false,
        selectedTextarea: false,
        chosen: false
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    }

    successfulAdd = () => {
        if (this.props.success) return <p className="success">Success!</p>;
        return null;
    }

    handleTagSelect = (e) => {
        const newState = merge({}, this.state);

        newState.field.tag = e.target.value;
        if (e.target.value === 'dropdown') {
            this.setState({ 
                field: newState.field, 
                chosen: true, 
                selectedDropdown: true
            });
        } else if (e.target.value === 'textarea') {
            this.setState({
                field: newState.field,
                chosen: true,
                selectedTextarea: true,
            });
        } else {
            this.setState({
                field: newState.field,
                chosen: true,
                selectedInput: true
            });
        }
    }

    addDropdownOption = (e) => {
    // in the `this.addDropdownOption` function need to add another option
    // also, its sending back the `Success!` message (so, don't finish the field form for this one)
    // maybe do so with stopPropagation (or preventDefault) --- check em
        const input = e.target.value;
        const newOption = { text: input, value: input };
        const newState = merge({}, this.state);
        newState.field.tag = 'dropdown';
        if (!newState.field.options) {
            newState.field.options = [newOption];
        } else {
            newState.field.options.push(newOption);
        }

        this.setState({ 
            field: newState.field, 
            selectedDropdown: !this.state.selectedDropdown 
        });
    }

    renderTextareaField = () => (
        <div className="label-and-input">
            <Label text="placeholder:"></Label>
            <Input
                onChange={this.handleChange('placeholder')}
                placeholder="eg. Please type your name here"
                required={true}>
            </Input>
        </div>
    )

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
    )

    renderDropdownFields = () => (
        <div>
            <div className="dropdown-option">
                <Label text="option text:"></Label>
                <Input
                    onChange={this.handleChange('text')}
                    placeholder="enter text to display"
                    type="text"
                    required={true}>
                </Input>
            </div>
            <Button onClick={this.addDropdownOption} text="add option"></Button>
        </div>
    )
    // in the `this.addDropdownOption` function need to add another option
    // also, its sending back the `Success!` message (so, don't finish the field form for this one)
    // maybe do so with stopPropagation (or preventDefault) --- check em
    

    render () {
        let fieldsToRender = null;
        if (this.state.chosen) {
            if (this.state.field.tag === 'dropdown') {
                fieldsToRender = this.renderDropdownFields();
            } else if (this.state.field.tag === 'textarea') {
                fieldsToRender = this.renderTextareaField();
            } else if (this.state.field.tag === 'input') {
                fieldsToRender = this.renderInputFields();
            }
        }

        return (
            <form onSubmit={this.props.addField(this.state)}>
                <div className="label-and-input" key="y">
                    <Label text="html tag:"></Label>
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
                    <Label text="label:"></Label>
                    <Input
                        onChange={this.handleChange('label')}
                        placeholder="eg. Name:"
                        required={true}>
                    </Input>
                </div>
                {fieldsToRender}
                {this.successfulAdd()}
                <Button text="Add"></Button>
            </form>
        )
    }
}

export default FieldCreator;