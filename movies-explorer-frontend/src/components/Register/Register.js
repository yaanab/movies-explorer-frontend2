import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <AuthForm 
      title="Добро пожаловать!"
      isNameBlock={false}
      button="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="/signin"
      linkText="Войти"
    />
  );
}

export default Register;