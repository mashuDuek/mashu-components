import React from 'react';
import Form from '../../packages/forms/regular_form.jsx';

const fields = [
    { tag: 'input', type: 'text', label: 'name', placeholder: 'name', required: true },
    { tag: 'input', type: 'number', label: 'age', placeholder: 'age', required: false },
    { tag: 'textarea', type: 'text', label: 'description', placeholder: 'person description', required: false },
    { tag: 'input', type: 'date', label: 'date', placeholder: 'dob', required: true }
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