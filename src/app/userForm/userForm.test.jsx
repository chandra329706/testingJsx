import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./userForm";
import '@testing-library/jest-dom';
/*
    1) Test if two inputs and submit button are present.
    2) Test if filling of email and name fields adn clicking on the submti btuton is callign the addUser function and the same data is added.
*/
test('should contain name and email text boxes and submit button', () => {
    // render the compnent
    render(<UserForm />);
    // modifiy the dom
    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const submitButton = screen.getByRole('button', {name: /submit/i});
    // assertions
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test('Filling the input fields and clicking on submit button calls the addUser function correctly', async () => {
    // const users = [];
    // let callBack = (details) => {
    //     users.push(details);
    // }
    const mock = jest.fn();
    // render the compnent
    // render(<UserForm addUser={callBack}/>);
    render(<UserForm addUser={mock}/>);
    // modifiy the dom
    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const submitButton = screen.getByRole('button', {name: /submit/i});
    // assertions
    await user.click(nameInput);
    await user.keyboard('Jane');
    await user.click(emailInput);
    await user.keyboard('jane@mgail.com');
    await user.click(submitButton);
    // expect(users[0]).toEqual({name: 'Jane', email: 'jane@mgail.com'});
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: 'Jane', email: 'jane@mgail.com'});
});