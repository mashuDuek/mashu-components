import React from 'react';

class FieldCreator extends React.Component {
    state = {};

    handleChange = (field) => (e) => {
        this.setState({ [field]: e.target.value });
    }

    render () {
        return (
            <form onSubmit={this.props.addField}>
                <label>html tag:</label>
                <input type="text" onChange={this.handleChange('tag')} placeholder="text">
                </input>
                <label>type:</label>
                <input type="text" onChange={this.handleChange('type')} placeholder="something">
                </input>
                <label>label:</label>
                <input type="text" onChange={this.handleChange('label')} placeholder="Name">
                </input>
                <label>placeholder:</label>
                <input type="text" onChange={this.handleChange('placeholder')} placeholder="placeholder">
                </input>
                <label>required:</label>
                <input type="checkbox" onChange={this.handleChange('required')}>
                </input>
                <button onClick={this.props.addField}>Add</button>
            </form>
        )
    }
}

export default FieldCreator;