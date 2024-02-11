import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import isEmty from "../utils/isEmpty";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getOneUser } from "../actions/user.action";

function Page() {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getOneUser(token));
  }, [dispatch, token]);
  return (
    <>
      <header>
        <div>
          <picture>
            <img src="" alt="" />
          </picture>
          <div>
            <p>{!isEmty(user) ? user.username : "No Connected"}</p>
            <p>DP: {!isEmty(user) ? user.digi_point : "0"}</p>
          </div>
        </div>

        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Page;
