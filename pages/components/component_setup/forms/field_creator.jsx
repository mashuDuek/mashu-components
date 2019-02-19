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
                </input><br></br>
                <label>type:</label>
                <input type="text" onChange={this.handleChange('type')} placeholder="something">
                </input><br></br>
                <label>label:</label>
                <input type="text" onChange={this.handleChange('label')} placeholder="Name">
                </input><br></br>
                <label>placeholder:</label>
                <input type="text" onChange={this.handleChange('placeholder')} placeholder="placeholder">
                </input><br></br>
                <label>required:</label>
                <input type="checkbox" onChange={this.handleChange('required')}>
                </input>
                <button onClick={this.props.addField}>Add</button>
            </form>
        )
    }
}

export default FieldCreator;