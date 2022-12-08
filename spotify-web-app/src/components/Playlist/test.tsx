import { render, screen } from '@testing-library/react'

import Playlist from '.'

describe('<Playlist />', () => {
  it('should render the heading', () => {
    const { container } = render(<Playlist />)

    expect(screen.getByRole('heading', { name: /Playlist/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
