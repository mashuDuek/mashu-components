import React from 'react';
import Dropdown from '../../packages/forms/dropdown';

const options = [
    { text: "some text", value: "this" },
    { text: "some other", value: "that" },
    { text: "some thing", value: "then" },
    { text: "some one", value: "now", checked: true }
]

export default () => (
    <Dropdown
        onChange={console.log('changed')}
        options={options}>
    </Dropdown>
)