import { useAuthentication } from '@/features/authentication'
import * as Styled from './Styled'

function AmountViewPage() {
  const { isLoading, token } = useAuthentication()

  if (isLoading) {
    return <h2>Connecting to FatSecret</h2>
  }

  if (!token) {
    return <h2>Application must be authenticated</h2>
  }

  return <Styled.Wrapper>view-page</Styled.Wrapper>
}

export default AmountViewPage
