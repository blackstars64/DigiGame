import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/user.action";
import "../scss/SingIn.scss";

function SingIn() {
  const form = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postDatas = {
      email: form.current.email.value,
      password: form.current.password.value,
    };

    dispatch(login(postDatas));
    form.current.reset();
    navigate("/home");
  };
  return (
    <section className="c-signIn">
      <h2 className="h-signIn">Sign In</h2>
      <form className="f-signIn" ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input
          className="textarea"
          type="email"
          id="email"
          name="email"
          placeholder="example@hotmail.com"
          required
        />
        <input
          className="textarea"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="btn-violet" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SingIn;
