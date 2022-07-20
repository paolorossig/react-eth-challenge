import data from '../data.json'

export const getData = () => {
  console.log('Getting data...')
  if (!data?.data) throw new Error('No data found')
  return data.data
}
