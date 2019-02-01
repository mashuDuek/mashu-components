import React from 'react';
import Form from '../../packages/forms/regular_form.jsx';

const fields = [
    { tag: 'textarea', type: 'text', label: 'name', placeholder: 'name', required: true },
    { tag: 'input', type: 'age', label: 'age', placeholder: 'age', required: true },
    { tag: 'input', type: 'date', label: 'date', placeholder: 'dob', required: false }
]

const TestForm = () => (
    <Form
        fields={fields}
        buttonText="Submit Me"
        onSubmit={(data) => console.log(data)}
        >
    </Form>
)

export default TestForm;