import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import isEmty from "../utils/isEmpty";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getOneUser } from "../actions/user.action";
import "../scss/Page.scss";
import imgProfile from "../utils/imgProfile";
import { getUserCollecteds } from "../actions/collected.action";

function Page() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const user = useSelector((state) => state.userReducer);
  const collected = useSelector((state) => state.collectedReducer) ?? [];

  useEffect(() => {
    if (token) {
      dispatch(getOneUser(token));
    }
  }, [token]);

  useEffect(() => {
    dispatch(getUserCollecteds(user.id));
  }, [user.id]);

  if (!user) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <section className="page">
      <header>
        <div className="c-page-profile">
          <picture>
            <img
              className="p-img-profile"
              src={imgProfile(user.profile_img)}
              alt="profile"
            />
          </picture>
          <div>
            <p className="p-p-profile">
              {!isEmty(user) ? user.username : "No Connected"}
            </p>
            <p className="p-p-profile">
              DP: {!isEmty(user) ? user.digi_point : "0"}
            </p>
          </div>
        </div>

        <Nav />
      </header>
      <main>
        <Outlet context={{ user, collected }} />
      </main>
      <Footer />
    </section>
  );
}

export default Page;
