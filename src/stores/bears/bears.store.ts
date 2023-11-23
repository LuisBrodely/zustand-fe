import { create } from 'zustand'

interface Bear {
  id: number
  name: string
}

interface BearState {
    blackBears: number
    polarBears: number
    pandaBears: number
    bears: Bear[]

    computed: {
      totalBears: number
    }

    doNothing: () => void

		increaseBlackBears: (by: number) => void
    increasePolarBears: (by: number) => void
    increasePandaBears: (by: number) => void

    addBears: () => void
    clearBears: () => void
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 10,	
	polarBears: 20,
	pandaBears: 5,
  bears: [
    {
      id: 1,
      name: 'Oso #1'  
    }
  ],

  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
    }
  },

  doNothing: () => set((state) => ({ bears:  [...state.bears] })),

  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

  addBears: () => set((state) => ({
    bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${ state.bears.length+1 }` }]
  })),
  clearBears: () => set({ bears: [] }),

}))