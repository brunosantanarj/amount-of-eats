import 'antd/dist/antd.css'
import { AmountContainer } from '../containers'
import * as Styled from './Styled'

function AmountViewPage() {
  return (
    <Styled.Wrapper data-testid="view-page">
      <AmountContainer />
    </Styled.Wrapper>
  )
}

export default AmountViewPage
