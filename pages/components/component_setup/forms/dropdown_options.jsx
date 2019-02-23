import React from 'react';
import { merge } from 'lodash';

import Button from '../../../../src/packages/forms/button';
import Label from '../../../../src/packages/forms/label';
import Input from '../../../../src/packages/forms/input';
import { Object } from 'es6-shim';

class DropdownOptions extends React.Component {
    state = { 
        count: 1 ,
        label: '',
        options: {
            0: { text: '', value: '' }
        }
    };

    handleChange = (idx) => {
        return (e) => {
            const newState = merge({}, this.state);
            if (idx === 'label') {
                this.setState({ label: e.target.value, options: newState.options });
            } else {
                newState.options[idx].text = e.target.value;
                newState.options[idx].value = e.target.value;
                this.setState({ 
                    options: newState.options
                });
            }
        }
    }

    removeOption = (idx) => {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            const newState = merge({}, this.state);
            delete newState.options[idx];
            const options = Object.values(newState.options);
            options.forEach((option, i) => {
                newState.options[i] = option;
            })

            this.setState({ options: newState.options, count: newState.count - 1 });
        }
    }

    addOption = (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const newState = merge({}, this.state);
        const idxs = Object.keys(newState.options);
        newState.options[idxs.length] = { text: '', value: '' };
        const { count, options } = newState;
        this.setState({ count: count + 1, options });
    }

    renderOptions = () => {
        const renderOptions = [];
        const { count, options } = this.state;

        for (let i = 0; i < count; i++) {
            const option = options[i];
            renderOptions.push(
                <div className="dropdown-option" key={i}>
                    <Label text="option text:"></Label>
                    <Input
                        onChange={this.handleChange(i)}
                        placeholder="enter text to display"
                        type="text"
                        required={true}
                        value={option.text}>
                    </Input>
                    <Button text="x" onClick={this.removeOption(i)}></Button>
                </div>
            )
        }

        return renderOptions;
    }

    render() {
        const toSendUp = {
            tag: 'dropdown',
            label: this.state.label,
            options: Object.values(this.state.options)
        };

        return (
            <div>
                <div className="label-and-input">
                    <Label text="field label:"></Label>
                    <Input
                        onChange={this.handleChange('label')}
                        placeholder="eg. Name:"
                        required={true}>
                    </Input>
                </div>
                {this.renderOptions()}
                <Button 
                    text="add another"
                    onClick={this.addOption}>
                </Button>
                <Button 
                    text="add to form"
                    onClick={this.props.addOptions(toSendUp)}>
                </Button>
            </div>
        )
    }
}

export default DropdownOptions;