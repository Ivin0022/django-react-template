import { State } from '@client/store/store'
import { createSlice, configureStore } from '@reduxjs/toolkit'

interface CounterState {
    name: string
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    name: 'shameer',
    value: 0,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        updateName: state => {
            state.name += 'a'
        },
    }
})

export const { incremented, decremented, updateName } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: State) => state.product.value

export default productSlice.reducer
