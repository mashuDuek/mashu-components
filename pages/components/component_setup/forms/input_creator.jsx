import React from 'react';

import Dropdown from '../../../../src/packages/forms/dropdown';
import Input from '../../../../src/packages/forms/input';
import Label from '../../../../src/packages/forms/label';

class InputFields extends React.Component {
    state = { type: '' };

    handleType = (e) => {
        this.setState({ type: e.target.value });
    }

    render() {
        return (
            <div className="label-and-input">
                <Label text="type:"></Label>
                <Dropdown
                    type="dropdown"
                    onChange={this.handleType}
                    options={[
                        { text: 'date', value: 'date' },
                        { text: 'text', value: 'text' },
                        { text: 'textarea', value: 'textarea' },
                    ]}>
                </Dropdown>
            </div>
        )
    }
}

export default InputFields;