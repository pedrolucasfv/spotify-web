import { render, screen } from '@testing-library/react'

import Song from '.'

describe('<Song />', () => {
  it('should render the heading', () => {
    const { container } = render(<Song />)

    expect(screen.getByRole('heading', { name: /Song/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
