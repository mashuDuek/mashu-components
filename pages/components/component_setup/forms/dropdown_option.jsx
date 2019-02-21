import React from 'react';
import { merge } from 'lodash';

import Button from '../../../../src/packages/forms/button';
import Label from '../../../../src/packages/forms/label';
import Input from '../../../../src/packages/forms/input';

class DropdownOptions extends React.Component {
    state = { text: "", value: "", options: [], added: false };

    handleChange = (e) => {
        const { value } = e.target;
        const newState = merge({}, this.state);
        this.setState({ 
            options: newState.options, 
            text: value, value, 
            added: false 
        });
    }

    addOption = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const newState = merge({}, this.state);
        newState.options.push({ text: newState.value, value: newState.value });
        this.setState({ 
            options: newState.options, 
            added: true, 
            text: "", 
            value: "" 
        });
    }

    render() {
        const success = this.state.added ? <p>Good!</p> : null;

        return (
            <div>
                <div className="dropdown-option">
                    <Label text="option text:"></Label>
                    <Input
                        onChange={this.handleChange}
                        placeholder="enter text to display"
                        type="text"
                        value={this.state.text}>
                    </Input>
                </div>
                {success}
                <Button 
                    text="add as option"
                    onClick={this.addOption}>
                </Button>
                <Button 
                    text="add field/options to form"
                    onClick={this.props.addOptions(this.state.options)}>
                </Button>
            </div>
        )
    }
}

export default DropdownOptions;