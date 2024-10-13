import './login.css';

function LoginPage() {
    return (
        <div className={"login-background"}>
            <div className={"login-form"}>
                <h2>Log to Web App</h2>
                <hr/>
                <form>
                    <label>E-mail:</label>
                    <input id='email-input' name='email' type='text'/>
                    <label>Password:</label>
                    <input id='password-input' name='password' type='password'/>

                </form>
                <button>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
