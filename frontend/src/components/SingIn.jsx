function SingIn() {
  return (
    <section>
      <h2>Sign In</h2>
      <form>
        <input type="email" id="email" name="email" required />
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SingIn;
