import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <AuthForm 
      title="Добро пожаловать!"
      isNameHidden={true}
      button="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
    />
  );
}

export default Login;