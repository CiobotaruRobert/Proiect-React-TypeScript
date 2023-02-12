import { FormEvent, useState } from "react"
import { AccountForm } from "../../components/MultistepForm/AccountForm"
import { AddressForm } from "../../components/MultistepForm/AddressForm"
import { useMultistepForm } from "../../components/MultistepForm/UseMultistepForm"
import { UserForm } from "../../components/MultistepForm/UserForm"
import ReusableButton from "../../components/ReusableButton"
import { history } from "../../helpers/history"
import { toast } from "../../components/ReusableToastMessage/ToastManager"

type FormData = {
    firstName: string
    lastName: string
    year: string
    street: string
    city: string
    state: string
    zip: string
    email: string
    password: string
  }
  
  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    year: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  }

  export function RegisterForm() {
    const [data, setData] = useState(INITIAL_DATA)
    function updateFields(fields: Partial<FormData>) {
      setData(prev => {
        return { ...prev, ...fields }
      })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
      useMultistepForm([
        <UserForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <AccountForm {...data} updateFields={updateFields} />,
      ])
  
    function onSubmit(e: FormEvent) {
      e.preventDefault()
      if (!isLastStep) return next()
      toast.show({
        id: ' ',
        title: "Account created",
        content: "You have successfully created your account",
        duration: 10000,
      });
    }

    const handleGoingBack = () => {
        return (event: React.MouseEvent) => {
         history.push('/home')
        }
     }
  
    return (
        <>
        <ReusableButton theme="gray" id="goBackButton" onClick={handleGoingBack()}>
            Home
        </ReusableButton>
      <div id="registerForm"
        style={{
          marginLeft:"27rem",
          background: "white",
          border: "1px solid black",
          marginTop: "7rem",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: "relative", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
      </>
    )
  }
  
