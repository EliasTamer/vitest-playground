import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'


// use queryByRole in case the button should not be in the document
// use getByRole in case the button is in the document

describe('UserAccount', () => {

    it('should render user name', () => {
        const user = {
            id: 1,
            isAdmin: false,
            name: "Elias"
        }
        render(<UserAccount user={user}/>)
        expect(screen.getByText(user.name)).toBeInTheDocument();
    })

    it('should not render edit button if user is admin', () => {
        const user = {
            id: 1,
            isAdmin: false,
            name: "Elias"
        }
        render(<UserAccount user={user}/>)
        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()

    })

    it('should render edit button in case the user is an admin', () => {
        const user = {
            id: 1,
            isAdmin: true,
            name: "Elias"
        }
        render(<UserAccount user={user}/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)
    })
})