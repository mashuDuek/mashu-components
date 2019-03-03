import React from 'react';

import InputComp from '../../../../src/packages/forms/input';
import TextArea from '../../../../src/packages/forms/textarea';
import Label from '../../../../src/packages/forms/label';
import Button from '../../../../src/packages/forms/button';

class InputCreator extends React.Component {
    state = { 
        placeholder: '',
        label: '',
        submitted: false
    };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value, submitted: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    renderTextarea = () => {
        const { placeholder, submitted, label } = this.state;

        if (!submitted) return null;
        if (placeholder === '') return null;

        const lab = label === '' ? null : <Label text={label}></Label>
        return (
            <div className="users-label-and-input">
                {lab}
                <TextArea
                    placeholder={placeholder}>
                </TextArea>
            </div>
        );
    };

    render() {
            
        return (
            <div className="form-and-input-wrapper">
                Create-a-TextArea Form  
                <form onSubmit={this.handleSubmit}>
                    <div className="label-and-input">
                        <Label text="textarea label:"></Label>
                        <InputComp
                            onChange={this.handleChange('label')}
                            placeholder="enter a label for your textarea"
                            value={this.state.label}>
                        </InputComp>
                    </div>
                    <div className="label-and-input">
                        <Label text="textarea placeholder:"></Label>
                        <InputComp
                            onChange={this.handleChange('placeholder')}
                            placeholder="what will your placeholder say?"
                            value={this.state.placeholder}>
                        </InputComp>
                    </div>
                    <Button text="Create"></Button>
                </form>
                
                {this.renderTextarea()}
            </div>
        )
    }
}

export default InputCreator;