import './Login.css';
import Background from "../common-components/background/Background.tsx";
import LoginForm from "./login-form/LoginForm.tsx";

function LoginPage() {
    return (
        <Background type={"login"}>
            <LoginForm />
        </Background>
    );
}

export default LoginPage;
