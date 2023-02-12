import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {theme:string, id:string}


const ReusableButton = (props: Props) => {
    return(
        <button {... props}/>
    )
}

export default ReusableButton

