import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'


describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'Javascript']

    test('Renders skills', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    });

    test("Renders list of skills", () => {
        render(<Skills skills={skills} />)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })

    test("Renders Login", () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    test("Start learning button is not rendered", () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start Learning',
        },
        )
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test("start learning button is eventually displayed", async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        // screen.debug()
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start Learning'
        }, {
            timeout: 2000
        })
        // screen.debug()
        expect(startLearningButton).toBeInTheDocument()
    })
})