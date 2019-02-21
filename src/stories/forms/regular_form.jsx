import React from 'react';
import Form from '../../packages/forms/regular_form.jsx';

const fields = [
    { tag: 'dropdown', label: 'sayHi', options: [{ text: 'hello1', value: 'helloe2' }, { text: 'hi', value: 'newway' }] },
    { tag: 'input', type: 'text', label: 'name', placeholder: 'name', required: true },
    { tag: 'textarea', type: 'text', label: 'description', placeholder: 'person description', required: false },
    { tag: 'input', type: 'date', label: 'date', placeholder: 'dob', required: true },
]

const TestForm = () => (
    <Form
        fields={fields}
        buttonText="Submit Me">
    </Form>
)

export default TestForm;