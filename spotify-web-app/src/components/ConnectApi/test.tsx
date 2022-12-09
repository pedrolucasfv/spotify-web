import { render, screen } from '@testing-library/react'

import ConnectApi from '.'

describe('<ConnectApi />', () => {
  it('should render the heading', () => {
    const { container } = render(<ConnectApi />)

    expect(screen.getByRole('heading', { name: /ConnectApi/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
