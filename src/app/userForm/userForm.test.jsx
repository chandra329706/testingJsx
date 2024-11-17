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
    // render the component
    render(<UserForm />);
    // modify the dom / find element
    const nameInput = screen.getAllByText(/name/i);
    const emailInput = screen.getAllByText(/email/i);
    const button = screen.getAllByRole('button', {name: /submit/i});
    const button1 = screen.getByRole('button', {name: /submit/i});
    // assertions
    expect(nameInput).toHaveLength(1);
    expect(emailInput).toHaveLength(1);
    expect(button).toHaveLength(1);
    expect(button1).toBeInTheDocument();
});