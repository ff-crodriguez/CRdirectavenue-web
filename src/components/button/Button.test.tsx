import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/button/Button';
import '@testing-library/jest-dom';
import ButtonProps, { IButtonProps } from '../../types/button/ButtonProps';

describe("Button component testing cases", () => {

    it("Display right button name", () => {

        const buttonProps: IButtonProps = new ButtonProps("Increase");
        render(<Button {...buttonProps} />)

        screen.debug();
        const button: HTMLButtonElement = screen.getByText('Increase');
        expect(button).toBeInTheDocument();
    });

    describe("Button Component", () => {
        it("should increase the counter when the button is clicked", () => {
            const buttonProps: IButtonProps = { name: "Increase", color: "Green" };
            render(<Button {...buttonProps} />);

            const button: HTMLButtonElement = screen.getByText("Increase");
            const countText: HTMLParagraphElement = screen.getByText(/Count is \d+/);
            expect(countText).toHaveTextContent("Count is 0");

            fireEvent.click(button);
            expect(countText).toHaveTextContent("Count is 1");

            fireEvent.click(button);
            expect(countText).toHaveTextContent("Count is 2");
        });
    });


})
