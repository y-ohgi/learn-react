import React from 'react'

import TextInput from '../components/TextInput'
import CharacterCount from '../components/CharacterCount'

const CounterPage = (): JSX.Element => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CounterPage

