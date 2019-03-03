import React from 'react';

import InputComp from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';
import Button from '../../../../src/packages/forms/button';

class ButtonCreator extends React.Component {
    state = { text: '', submitted: false };

    handleText = (e) => {
        this.setState({ text: e.target.value, submitted: false });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    renderButton = () => {
        if (!this.state.submitted) return null;
        return (
            <Button text={this.state.text}></Button>
        );
    };

    render() {
        return (
            <div className="form-and-button">
                Create-a-Button Form
                <form onSubmit={this.handleSubmit}>
                    <div className="label-and-input">
                        <Label text="button text:"></Label>
                        <InputComp
                            required={true}
                            value={this.state.text}
                            placeholder="enter button text"
                            onChange={this.handleText}>
                        </InputComp>
                    </div>
                    <Button text="Create Button"></Button>
                </form>
                {this.renderButton()}
            </div>
        );
    }
}

export default ButtonCreator;