import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test('renders', () => {
        render(<Application />)
        const pageHeading = screen.getByRole('heading', {
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        })
        expect(sectionHeading).toBeInTheDocument()

        const paraElement = screen.getByText('All fields are mandatory')
        expect(paraElement).toBeInTheDocument()

        const paraElement1 = screen.getByText('fields', { exact: false })
        expect(paraElement1).toBeInTheDocument()

        const paraElement2 = screen.getByText((content) => content.startsWith('All'))
        expect(paraElement2).toBeInTheDocument()

        const imgElement = screen.getByAltText('a person with laptop')
        expect(imgElement).toBeInTheDocument()

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText('fullname')
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue('Rithick')
        expect(nameElement4).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocElement = screen.getByRole('combobox')
        expect(jobLocElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
    })
})