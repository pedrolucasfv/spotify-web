import { render, screen } from '@testing-library/react'

import PlaylistPage from '.'

describe('<PlaylistPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<PlaylistPage />)

    expect(
      screen.getByRole('heading', { name: /PlaylistPage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
