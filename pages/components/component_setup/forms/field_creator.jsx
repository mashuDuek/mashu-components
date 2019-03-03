import React from 'react';
import { merge } from 'lodash';

import Dropdown from '../../../../src/packages/forms/dropdown';
import Label from '../../../../src/packages/forms/label';

import DropdownOptions from './dropdown_options';
import InputFieldCreator from './input_creator';
import TextareaFieldCreator from './textarea_creator';

class FieldCreator extends React.Component {
    state = {
        field: {},
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    };

    handleTagSelect = (e) => {
        const newState = merge({}, this.state);
        newState.field.tag = e.target.value;
        this.setState({ field: newState.field });
    };

    renderDropdownFieldCreator = () => (
        <DropdownOptions
            success={this.props.success}
            removeField={this.props.removeField}
            addOptions={this.props.addField}>
        </DropdownOptions>
    );

    renderInputFieldCreator = () => (
        <InputFieldCreator
            success={this.props.success}
            removeField={this.props.removeField}
            addInput={this.props.addField}>
        </InputFieldCreator>
    );
    
    renderTextareaFieldCreator = () => (
        <TextareaFieldCreator
            success={this.props.success}
            removeField={this.props.removeField}
            addTextarea={this.props.addField}>
        </TextareaFieldCreator>
    );
    
    render () {
        let fieldsToRender = null;
        const { tag } = this.state.field;
        if (tag === 'dropdown') fieldsToRender = this.renderDropdownFieldCreator();
        if (tag === 'textarea') fieldsToRender = this.renderTextareaFieldCreator();
        if (tag === 'input') fieldsToRender = this.renderInputFieldCreator();

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

            </form>
        );
    }
}

export default FieldCreator;