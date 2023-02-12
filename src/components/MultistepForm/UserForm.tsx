import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string
  lastName: string
  year: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  year,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Account details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Year</label>
      <input
        required
        min={1}
        type="number"
        value={year}
        onChange={e => updateFields({ year: e.target.value })}
      />
    </FormWrapper>
  )
}