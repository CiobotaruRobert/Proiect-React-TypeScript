import ReusableButton from "../../components/ReusableButton";
import { useHistory } from 'react-router-dom';


export function HomePage() {
    let history = useHistory();

    const handleLoginPageButton = () => {
       return (event: React.MouseEvent) => {
       history.push('/login')
       }
    }

     const handleRegisterFormPageRedirect = () => {
        return (event: React.MouseEvent) => {
         history.push('/formpage')
        }
     }
 
    return (
        <>
        <div>
        <ReusableButton theme="blue" id="butonLoginPage" onClick={handleLoginPageButton()}>
            Login page
        </ReusableButton>
        <ReusableButton theme="blue" id="butonRegisterPage" onClick={handleRegisterFormPageRedirect()}>
            Register
        </ReusableButton>
        </div>
        </>
    )
    
}