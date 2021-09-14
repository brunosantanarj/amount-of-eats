import styled from 'styled-components'

export const colors = {
  carbo: 'red',
  fat: 'blue',
  protein: 'green',
}

export const Container = styled.div`
  margin-top: 35px;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
`

export const WrapperNutriet = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`

export const Box = styled.div<{ background: string }>`
  width: 20px;
  height: 20px;
  background-color: ${({ background }) => background};
  margin-right: 10px;
`
