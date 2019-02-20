import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import TextArea from './textarea';
import Dropdown from './dropdown';

const Field = ({ field, onChange }) => {
    switch (field.tag) {
        case 'input': {
            return (
                <Input
                    required={field.required}
                    onChange={onChange}
                    placeholder={field.placeholder}
                    type={field.type}>
                </Input>
            )
        }

        case 'textarea': {
            return (
                <TextArea
                    onChange={onChange}
                    placeholder={field.placeholder}
                    type={field.type}>
                </TextArea>
            )
        }

        case 'dropdown': {
            return (
                <Dropdown
                    options={field.options}
                    onChange={onChange}>
                </Dropdown>
            )
        }
    }
}

Field.propTypes = {
    field: PropTypes.object,
    onChange: PropTypes.func
};

Field.defaultProps = {
    required: false, 
    type: 'text'
};

export default Field;
