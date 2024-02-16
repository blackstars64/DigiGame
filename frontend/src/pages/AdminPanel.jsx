import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Page404 from "./Page404";

function AdminPanel() {
  const user = useSelector((state) => state.userReducer);
  if (!user) {
    return <h2 className="loading">Loading...</h2>;
  }

  const token = sessionStorage.getItem("token");

  if (!token) {
    const navigate = useNavigate();
    navigate("/");
  }

  const decoded = jwtDecode(token);

  return (
    <div>
      {decoded.isAdmin === 1 && user.is_admin === 1 ? (
        <section>
          <h2>Admin Panel</h2>
          <div>
            <p>Number of Users: 5</p>
            <p>Number of Digimons: 198</p>
          </div>
          <div>
            <button type="button">Edit Users</button>
            <button type="button">Edit Digimons</button>
            <button type="button">Edit Messages</button>
          </div>
        </section>
      ) : (
        <Page404 />
      )}
    </div>
  );
}

export default AdminPanel;
