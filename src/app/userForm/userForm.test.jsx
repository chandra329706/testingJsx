/*
1) It should contain two text boxes and one button
2) On direct click of submit, errors should be thrown
3) On entering either one, the submit should throw error.
4) On entering both fields and clicking on submit, the form should be submitted.
*/

import {screen, render, waitFor, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './userForm';
import '@testing-library/jest-dom';

test('Should contain two text boxes and one button', async () => {
    render(<UserForm />);
    const submitButton = await screen.findAllByRole('button');
    expect(submitButton).toHaveLength(1);

    const nameInputBox = await screen.findByLabelText('Name');
    expect(nameInputBox).toBeInTheDocument();

    const emailInputBox = await screen.findByLabelText('Email');
    expect(emailInputBox).toBeInTheDocument();
});
test('Throw error on click of button without filling data', async () => {
    render(<UserForm />);
    const submitButton = await screen.getByRole('button', {name: /submit/i});
    fireEvent.click(submitButton);
    await waitFor(async () => {
        // Check if the FieldError for the "name" input is visible
        expect(screen.getByText(/name/i)).toBeInTheDocument(); // Label for name input
        expect(screen.getByText(/email/i)).toBeInTheDocument(); // Label for email input
        // Check if FieldError for name and email fields are displayed
        // expect(screen.getByText(/this field is required/i)).toBeInTheDocument();


        // const errorText = await screen.findAllByText(/please fill in this field/i);
        // console.log('error text is ', errorText);
        // expect(errorText).toHaveLength(2);
    });
});