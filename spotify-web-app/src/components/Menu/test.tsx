import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    render(<Menu />)

    expect(screen.getByRole('heading', { name: /início/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Buscar/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sua Biblioteca/i })
    ).toBeInTheDocument()
  })
})
