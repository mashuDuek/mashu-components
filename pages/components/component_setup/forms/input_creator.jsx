import React from 'react';

import Dropdown from '../../../../src/packages/forms/dropdown';
import Input from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';
import Button from '../../../../src/packages/forms/button';

class InputFields extends React.Component {
    state = { tag: 'input', type: '', placeholder: '', label: '' };

    renderTextInputFields = () => (
        <div className="label-and-input">
            <Label text="field placeholder:"></Label>
            <Input
                onChange={this.handleChange('placeholder')}
                placeholder="enter placeholder"
                value={this.state.placeholder}
                required={true}>
            </Input>
        </div>
    );

    handleType = (e) => {
        e.target.value === 'date' ? 
            this.setState({ type: e.target.value }) : 
            this.setState({ type: e.target.value, placeholder: '' });
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    };

    render() {
        const textInputs = (
            this.state.type === 'date' ? null : this.renderTextInputFields()
        );

        return (
            <div>
                <div className="label-and-input">
                    <Label text="field type:"></Label>
                    <Dropdown
                        onChange={this.handleType}
                        options={[
                            { text: 'date', value: 'date' },
                            { text: 'text', value: 'text' },
                            { text: 'textarea', value: 'textarea' }
                        ]}>
                    </Dropdown>
                </div>
                <div className="label-and-input">
                    <Label text="field label:"></Label>
                    <Input
                        onChange={this.handleChange('label')}
                        placeholder="enter label"
                        value={this.state.label}
                        required={true}>
                    </Input>
                </div>
                {textInputs}
                <Button 
                    text="add to form" 
                    onClick={this.props.addInput(this.state)}>
                </Button>
            </div>
        )
    }
}

export default InputFields;