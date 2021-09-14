import { render, screen } from '@testing-library/react'
import { SubtitleGraph } from '..'

describe('<GraphSVG />', () => {
  it('should render correctly', () => {
    const props = {
      percents: {
        fat: 2,
        carbo: 2,
        protein: 2,
      },
      nutrients: {
        fat: 2,
        carbo: 2,
        protein: 2,
      },
    }

    render(<SubtitleGraph {...props} />)
    expect(screen.getByTestId(/fat/).tagName).toEqual('DIV')
  })
})
