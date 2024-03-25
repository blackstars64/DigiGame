import { Link } from "react-router-dom";
import terriermon from "../assets/terriermon.gif";
import "../scss/Page404.scss";

function Page404() {
  return (
    <section className="page404">
      <h3 className="h1">404</h3>
      <p className="h1">Page not found</p>
      <picture>
        <img className="page404-img" src={terriermon} alt="patamon" />
      </picture>
      <Link to="/home">
        <button className="btn-violet" type="button">
          Go To Home
        </button>
      </Link>
    </section>
  );
}

export default Page404;
