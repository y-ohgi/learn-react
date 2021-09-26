import React, { ChangeEvent } from 'react'
import { atom, RecoilState, RecoilValueReadOnly, selector, useRecoilState, useRecoilValue } from 'recoil'

const CharacterCounter = (): JSX.Element => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

export default CharacterCounter

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

const textState: RecoilState<string> = atom({
  key: 'textState',
  default: '',
})

const charaCountState: RecoilValueReadOnly<number> = selector({
  key: 'charCountState',
  get: ({ get }): number => {
    const text: string = get(textState);

    return text.length
  }
})

const CharacterCount = () => {
  const count = useRecoilValue(charaCountState)
  return <>{count}</>
}
