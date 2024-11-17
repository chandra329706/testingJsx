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

// test('Validation error should be thrown if input fields are not filled but button clicked', async () => {
//     // render the component
//     render(<UserForm />);
//     // modify the dom / find element
//     const sumbitButton = screen.getByRole('button', {name: /submit/i});

//     await userEvent.click(sumbitButton);
//     // why is this test case not failing even after npa
//     waitFor(() => {
//         const errors = screen.getAllByText(/Please fill out this field./i);
//         expect(errors).toHaveLength(13);
//     });
// });

test('On filling of name and email fields, the button should call the setUsers function', async() => {
    const argsList = [];
    const callBack = ({name, email}) => {
        argsList.push({name, email});
    };
    // Render the component
    render(<UserForm addUsers={callBack}/>);

    // Modify the dom / find element
    const nameInput = screen.getByRole('textbox', {name: /name/i});
    await userEvent.click(nameInput);
    await userEvent.keyboard('Chandra');

    const emailInput = screen.getByRole('textbox', {name: /email/i});
    await userEvent.click(emailInput);
    await userEvent.keyboard('chandra@mgail.com');

    const submitButton = screen.getByRole('button', {name: /submit/i});
    await userEvent.click(submitButton);
    expect(argsList).toHaveLength(1);
    expect(argsList[0]).toEqual({name: 'Chandra', email: 'chandra@mgail.com'});
});