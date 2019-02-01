import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';
import TextArea from './textarea';

export default ({ field, onChange }) => {
    switch (field.tag) {
        case 'input': {
            return (
                <Input
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
    }
}
