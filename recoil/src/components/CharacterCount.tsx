import React from 'react'
import { useRecoilValue } from 'recoil'

import { charaCountState } from '../lib/recoil/character'


const CharacterCount = (): JSX.Element => {
  const count = useRecoilValue(charaCountState)
  return <>{count}</>
}

export default CharacterCount