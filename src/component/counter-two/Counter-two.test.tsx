import { render, screen } from '@testing-library/react'
import { CounterTwo } from './Counter-two'
import userEvent from '@testing-library/user-event'

describe('Counter test', () => {
    test('render counter', () => {
        render(<CounterTwo count={0} />)
        const testElement = screen.getByText('Counter Two')
        expect(testElement).toBeInTheDocument()
    })

    test('handlers are called', async () => {
        userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        const decrementButton = screen.getByRole('button', { name: 'Decrement' })
        await userEvent.click(incrementButton)
        await userEvent.click(decrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)

    })
})