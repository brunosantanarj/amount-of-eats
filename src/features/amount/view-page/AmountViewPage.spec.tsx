import { render, screen } from '@testing-library/react'
import AmountViewPage from './AmountViewPage'

describe('<AmountViewPage />', () => {
  it('should render correctly main tag', () => {
    render(<AmountViewPage />)
    expect(screen.getByTestId(/view-page/).tagName).toEqual('MAIN')
  })
})
