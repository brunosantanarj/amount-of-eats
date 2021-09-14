import { render, screen } from '@testing-library/react'
import { GraphSVG } from '..'

describe('<GraphSVG />', () => {
  it('should render correctly', () => {
    const props = {
      percents: {
        fat: 2,
        carbo: 2,
        protein: 2,
      },
    }

    render(<GraphSVG {...props} />)
    expect(screen.getByRole(/img/).tagName).toEqual('svg')
  })
})
