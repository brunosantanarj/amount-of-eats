import { formatDateToPT } from '.'

describe('formatDateToPT', () => {
  it('date should has dd/mm/aaaa pattern', () => {
    expect(formatDateToPT(new Date('2021-09-14T16:12:46+00:00'))).toEqual(
      '14/09/2021'
    )
  })
})
