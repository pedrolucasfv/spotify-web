import { render, screen } from '@testing-library/react'

import PlaylistInfo from '.'

describe('<PlaylistInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<PlaylistInfo />)

    expect(screen.getByRole('heading', { name: /PlaylistInfo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
