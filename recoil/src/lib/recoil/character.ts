import { atom, RecoilState, RecoilValueReadOnly, selector } from "recoil";

export const textState: RecoilState<string> = atom({
  key: 'textState',
  default: '',
})

export const charaCountState: RecoilValueReadOnly<number> = selector({
  key: 'charCountState',
  get: ({ get }): number => {
    const text: string = get(textState);

    return text.length
  }
})
