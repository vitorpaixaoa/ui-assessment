import {render, screen} from "@testing-library/react";
import {Header} from "./Header";

const supportContact = {
    name: 'John Smith',
    email: 'john.smith@feefo.com'
};

test('check if the data of contact are displaying well', () => {
    render(<Header supportContact={supportContact}/>);
    const element = screen.getByText(/John Smith/i);
    expect(element).toBeInTheDocument();
});

test('Check if the first letter is correctly displayed', () => {
    const supportContact = {
        name: 'Alan Almeida'
    };

    render(<Header supportContact={supportContact}/>);
    const element = screen.getByText("A");
    expect(element).toBeInTheDocument();
});