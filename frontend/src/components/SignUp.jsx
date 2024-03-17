import propTypes from "prop-types";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user.action";
import "../scss/SignUp.scss";

function SignUp({ handleSignIn }) {
  const form = useRef();
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    const postDatas = {
      username: form.current.username.value,
      email: form.current.email.value,
      password: form.current.password.value,
    };
    dispatch(addUser(postDatas));
    form.current.reset();
    handleSignIn();
  };

  return (
    <section className="c-signUp">
      <h2 className="h-signUp">Sign Up</h2>
      <form className="f-signUp" ref={form} onSubmit={(e) => handleForm(e)}>
        <input
          className="textarea input-space"
          type="text"
          id="username"
          placeholder="Username"
          required
        />
        <input
          className="textarea"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="textarea input-space"
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <button className="btn-white" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
}

SignUp.propTypes = {
  handleSignIn: propTypes.func.isRequired,
};

export default SignUp;
