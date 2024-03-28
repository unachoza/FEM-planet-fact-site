import {render, screen} from '@testing-library/react'
import App from './App'

it("should have planets here text ", () => {
    render(<App/>)
    const message = screen.queryByText(/planets here/)
    expect(message).toBeVisible()
})