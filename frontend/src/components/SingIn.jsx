import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/user.action";

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
    <section>
      <h2>Sign In</h2>
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input type="email" id="email" name="email" required />
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SingIn;
