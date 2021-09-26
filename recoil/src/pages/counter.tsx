import React from 'react'

import CharacterTextInput from '../components/CharacterTextInput'
import CharacterCount from '../components/CharacterCount'

const CounterPage = (): JSX.Element => {
  return (
    <div>
      <CharacterTextInput />
      <CharacterCount />
    </div>
  )
}

export default CounterPage

