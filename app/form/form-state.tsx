import {atom} from 'jotai'
import {atomWithStorage, loadable} from 'jotai/utils'

export const formStateAtom = atomWithStorage('formState',{

    // //* What is your goal
    // goal: '',

    // //* Body Measurements
    // height: 0,
    // weight: 0,
    // weightGoal: 0,

    // //* Diet Preferences
    // diet: [],

    //* This is the state of the form
    activeStep: 0,
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
    age: null as unknown as number,
    gender: '',
    termsAndConditions: false,
    receiveUpdates: false,

    //* Goal
    dietGoal: 'Perder Peso',

    //* Body Measurements
    heightFeet: null as unknown as number,
    heightInches: null as unknown as number,
    weight: null as unknown as number,
    weightGoal: null as unknown as number,
    weightType: 'libras',
    heightType: 'pies',

    //* Diet Preferences
    dietPreferences: [],

})

// export const DietGoalAtom = atomWithStorage('dietGoal', {
//     //* Weight Goal
//     dietGoal: 'Perder Peso',

// })

// export const BodyMeasurementsAtom = atomWithStorage('bodyMeasurements', {
//     //* Weight Goal
//     heightFeet: null as unknown as number,
//     heightInches: null as unknown as number,
//     weight: null as unknown as number,
//     weightGoal: null as unknown as number,
//     weightType: 'libras',
//     heightType: 'pies',

// })

// export const DietPreferencesAtom = atomWithStorage('dietPreferences', {
//     //* Diet Preferences
//     dietPreferences: [],
// })