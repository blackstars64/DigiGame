import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Page404 from "./Page404";
import isEmpty from "../utils/isEmpty";
import EditUsers from "../components/EditUsers";
import EditMessages from "../components/EditMessages";
import EditDigimons from "../components/EditDigimons";
import "../scss/AdminPanel.scss";

function AdminPanel() {
  const [editSection, setEditSection] = useState("null");
  const user = useSelector((state) => state.userReducer);
  const allUsers = useSelector((state) => state.allUsersReducer);
  const digimons = useSelector((state) => state.digimonReducer);
  const fullUsers = useSelector((state) => state.fullUsersReducer);
  const fullDigimons = useSelector((state) => state.fullDigionsReducer);
  if (!user) {
    return <h2 className="loading">Loading...</h2>;
  }

  const token = sessionStorage.getItem("token");

  if (!token) {
    const navigate = useNavigate();
    navigate("/");
  }
  const decoded = jwtDecode(token);

  if (editSection === "users") {
    return <EditUsers allUsers={allUsers} />;
  }
  if (editSection === "digimons") {
    return <EditDigimons digimons={digimons} />;
  }
  if (editSection === "messages") {
    return <EditMessages />;
  }

  if (editSection === "null") {
    return (
      <div className="c-adminP">
        {decoded.isAdmin === 1 && user.is_admin === 1 ? (
          <section className="c-adminP-b">
            <h2 className="h1">Admin Panel</h2>
            <div className="c-adminP-stat">
              <p className="adminP-p">
                Number of Users:
                <span className="adminP-span">
                  {!isEmpty(fullUsers.id) ? fullUsers.id : "0"}
                </span>
              </p>
              <p className="adminP-p">
                Number of Digimons:
                <span className="adminP-span">
                  {!isEmpty(fullDigimons.id) ? fullDigimons.id : "0"}
                </span>
              </p>
            </div>
            <div className="adminP-c-btn">
              <button
                className="btn-white adminP-btn"
                onClick={() => setEditSection("users")}
                type="button"
              >
                Edit Users
              </button>
              <button
                className="btn-white adminP-btn"
                onClick={() => setEditSection("digimons")}
                type="button"
              >
                Edit Digimons
              </button>
              <button
                className="btn-white adminP-btn"
                onClick={() => setEditSection("messages")}
                type="button"
              >
                Edit Messages
              </button>
            </div>
          </section>
        ) : (
          <Page404 />
        )}
      </div>
    );
  }
}

export default AdminPanel;
