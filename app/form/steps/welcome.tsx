import { useAtom, useSetAtom } from "jotai"
import { formStateAtom } from "../form-state"
import { PersonalInfoAtom } from "../form-state"
import { FormButton } from "@/res/components/button"


export const Welcome = ({handleNext}: any) => {
    const [formState] = useAtom(formStateAtom)
    const [personalInfo] = useAtom(PersonalInfoAtom)
    const setFormState = useSetAtom(formStateAtom)
    
    const doAnything = () => {

        console.log('do anything')
        //setFormState({...formState, name: 'Alejandro', age: formState.age + 1})
        handleNext()
        
    }


    return (
        <div>
        <h1>Welcome {personalInfo.name} {personalInfo.age}</h1>
            <FormButton type="submit" onClick={doAnything}>
                Continuar
            </FormButton>

        </div>
    )
}
