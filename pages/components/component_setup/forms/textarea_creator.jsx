import React from 'react';

import Input from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';
import Button from '../../../../src/packages/forms/button';

class TextareaCreator extends React.Component {
    state = { tag: 'textarea', placeholder: '', label: '' };

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    }

    successfulAdd = () => {
        if (this.props.success) return <p className="success">Success!</p>;
        return null;
    };


    render() {
        const deletion = this.props.success ?
            <Button text="delete field" onClick={this.props.removeField}>
            </Button> : null;


        return (
            <div className="fields-wrapper">
                <div className="label-and-input">
                    <Label text="field label:"></Label>
                    <Input
                        onChange={this.handleChange('label')}
                        placeholder="enter label"
                        value={this.state.label}
                        required={true}>
                    </Input>
                </div>
                <div className="label-and-input">
                    <Label text="field placeholder:"></Label>
                    <Input
                        onChange={this.handleChange('placeholder')}
                        placeholder="what will your placeholder be?"
                        required={true}>
                    </Input>
                </div>
                <div className="dropdown-options-buttons">
                    {deletion}
                    <Button
                        className="add-to-form-button"
                        text="add to form"
                        onClick={this.props.addTextarea(this.state)}>
                    </Button>
                </div>
            </div>
        );
    }
}

export default TextareaCreator;