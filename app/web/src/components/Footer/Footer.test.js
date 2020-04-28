import { render, cleanup } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })
})
