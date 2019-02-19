import React from 'react';
import Input from '../../../../src/packages/forms/input';
import Button from '../../../../src/packages/forms/button';
import Label from '../../../../src/packages/forms/label';

class FieldCreator extends React.Component {
    state = {};

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    }

    successfulAdd = () => {
        if (this.props.success) return <p className="success">Success!</p>;
        return null;
    }

    render () {
        return (
            <form onSubmit={this.props.addField(this.state)}>
                <div className="label-and-input">
                    <Label text="html tag:"></Label>
                    <Input 
                        onChange={this.handleChange('tag')} 
                        placeholder="supported: 'input', 'textarea'" 
                        required={true}>
                    </Input>
                </div>
                <div className="label-and-input">
                    <Label text="type:"></Label>
                    <Input 
                        onChange={this.handleChange('type')} 
                        placeholder="supported: 'date', 'number', 'text'" 
                        required={true}>
                    </Input>
                </div>
                <div className="label-and-input">
                    <Label text="label:"></Label>
                    <Input 
                        onChange={this.handleChange('label')} 
                        placeholder="eg. Name:" 
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
                {this.successfulAdd()}
                <Button text="Add"></Button>
            </form>
        )
    }
}

export default FieldCreator;