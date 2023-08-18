import {atom} from 'jotai'
import {atomWithStorage, loadable} from 'jotai/utils'

export const formStateAtom = atomWithStorage('formState',{

    //* What is your goal
    goal: '',

    //* Body Measurements
    height: 0,
    weight: 0,
    weightGoal: 0,

    //* Diet Preferences
    diet: [],

    //* This is the state of the form
    isLoading: false,
    isComplete: false,
    isFailed: false,
    isSubmitted: false,
    isSubmitting: false,
})


export const PersonalInfoAtom = atomWithStorage('personalInfo',{
    //* State of the user
    name: '',
    email: '',
    age: 0,
    gender: '',
    termsAndConditions: false,
    receiveUpdates: false,

})
