import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe("Greet", () => {
    test('Renders Correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello, greetings/i)
        expect(textElement).toBeInTheDocument()
    })

    describe("Nested", () => {
        test("Rendes With name", () => {
            render(<Greet name="Rithick" />)
            const textElement = screen.getByText("Hello Rithick")
            expect(textElement).toBeInTheDocument()
        })
    })

})
