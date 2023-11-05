import {atom} from 'jotai'
import {atomWithStorage, loadable} from 'jotai/utils'
import { bool, string } from 'yup'

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


export const handleBackArrow = atom(false)


export const PersonalInfoAtom = atomWithStorage('personalInfo',{
    //* State of the user
    name: '',
    email: '',
    emailConfirmation: '',
    age: null as unknown as number,
    gender: '',
    termsAndConditions: false,
    receiveUpdates: false,

    //* Goal
    dietGoal: 'Perder Peso',

    //* Body Measurements
    selectedMesurement: null as unknown as number,
    heightFeet: null as unknown as number,
    heightInches: null as unknown as number,
    weight: null as unknown as number,
    weightGoal: null as unknown as number,

    //* Diet Preferences for CM and KG
    heightCm: null as unknown as number,
    weightKg: null as unknown as number,
    weigthGoalKg: null as unknown as number,

    budget: '',

    weightType: 'libras',
    heightType: 'pies',

    //* Diet Preferences
    dietPreferences: [
        {name: "Soy Vegano (a)", checked: false },
        {name: "Soy Vegetariano (a)", checked: false },
        {name: "Sin Gluten", checked: false },
        {name: "Sin Lactosa", checked: false },
        {name: "Sin Azúcar", checked: false },
    ]
    ,

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