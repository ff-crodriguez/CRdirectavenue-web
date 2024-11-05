import { render, screen } from '@testing-library/react';
import Home from "../../pages/home/Home"
import '@testing-library/jest-dom'

describe("Home page user testing cases", () => {
    it("Display home page", () => {
        render(<Home />)
        screen.debug();
        const h1: Element =screen.getByText('Home');
        expect(h1).toBeInTheDocument();
    })

})
