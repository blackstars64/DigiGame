import propTypes from "prop-types";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user.action";

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
    <section>
      <h2>Sign Up</h2>
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" id="username" placeholder="Username" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

SignUp.propTypes = {
  handleSignIn: propTypes.func.isRequired,
};

export default SignUp;
