import "./LoginForm.css";
import toast from "react-simple-toasts";
import 'react-simple-toasts/dist/style.css';
import '../../../../node_modules/react-simple-toasts/dist/theme/failure.css'
import '../../../../node_modules/react-simple-toasts/dist/theme/success.css'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = document.querySelector<HTMLFormElement>("#login-form");
        if (!form) {
            console.log("Form HtmlElement not found!")
        }
        if (!form?.checkValidity()) {
            form?.reportValidity();
            return;
        }
        const formData = new FormData(form);
        console.log(formData);
        const email = formData.get("email");
        const password = formData.get("password");
        if (email === 'email@gmail.com' && password === 'pass') {
            console.log("Login Successful");
            Cookies.set('authenticated', "true");
            toast('Login Successful', { theme: 'success' });
            navigate('/dashboard');
        } else {
            console.log("Invalid Email Or Password");
            toast('Invalid Email Or Password', { theme: 'failure'});
        }
    };

    return (
        <div className="login-form">
            <h2>Log to Web App</h2>
            <hr/>
            <form id={"login-form"} onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input id="email-input" name="email" type="text" placeholder="email@gmail.com"
                       pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required/>
                <hr/>
                <label htmlFor="password">Password:</label>
                <input id="password-input" name="password" type="password" placeholder="******" required/>
                <hr/>
                <div className="checkbox">
                    <input type="checkbox" id="remember" name="remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button id={"submit-btn"} type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
