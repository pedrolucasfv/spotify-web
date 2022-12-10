import { render, screen } from '@testing-library/react'

import ConnectApiAux from '.'

describe('<ConnectApiAux />', () => {
  it('should render the heading', () => {
    const { container } = render(<ConnectApiAux />)

    expect(screen.getByRole('heading', { name: /ConnectApiAux/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
