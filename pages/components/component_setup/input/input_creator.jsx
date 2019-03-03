import React from 'react';

import InputComp from '../../../../src/packages/forms/input';
import Dropdown from '../../../../src/packages/forms/dropdown';
import Label from '../../../../src/packages/forms/label';
import Button from '../../../../src/packages/forms/button';

class InputCreator extends React.Component {
    state = { 
        placeholder: '', 
        required: false,
        type: 'date',
        label: '',
        submitted: false
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    }

    handleType = (e) => {
        this.setState({ type: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    renderInput = () => {
        const { 
            type, 
            placeholder, 
            required, 
            submitted,
            label 
        } = this.state;

        if (!submitted) return null;
        if (type === 'text' && placeholder === '') return null;

        const lab = label === '' ? null : <Label text={label}></Label>
        return (
            <div className="users-label-and-input">
                {lab}
                <InputComp
                    required={required}
                    type={type}
                    placeholder={placeholder}>
                </InputComp>
            </div>
        );
    };

    renderPlaceholder = () => (
        this.state.type === 'date' ? null :
            (
                <div className="label-and-input">
                    <Label text="input placeholder:"></Label>
                    <InputComp
                        onChange={this.handleChange('placeholder')}
                        placeholder="what will your placeholder say?"
                        value={this.state.placeholder}>
                    </InputComp>
                </div>
            )
    )

    render() {
            
        return (
            <div className="form-and-input-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="label-and-input">
                        <Label text="input label:"></Label>
                        <InputComp
                            onChange={this.handleChange('label')}
                            placeholder="enter a label for your input"
                            value={this.state.label}>
                        </InputComp>
                    </div>
                    <div className="label-and-input">
                        <Label text="input type:"></Label>
                        <Dropdown
                            onChange={this.handleType}
                            options={[
                                { text: 'date', value: 'date' },
                                { text: 'text', value: 'text' }
                            ]}>
                        </Dropdown>
                    </div>
                    {this.renderPlaceholder()}
                    <Button text="Create"></Button>
                </form>
                
                {this.renderInput()}
            </div>
        )
    }
}

export default InputCreator;

// Input.propTypes = {
//     required: PropTypes.bool,
//     type: PropTypes.string,
//     placeholder: PropTypes.string.isRequired,
//     onChange: PropTypes.func,
//     value: PropTypes.string
// };