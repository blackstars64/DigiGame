import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AddDigimon from "./popups/AddDigimon";
import EditDigimon from "./popups/EditDigimon";
import {
  deleteDigimon,
  addDigimon,
  updateDigimon,
} from "../actions/digimon.action";
import DeleteDigimon from "./popups/DeleteDigimon";
import "../scss/EditDigimons.scss";
import editImg from "../assets/edit.png";
import trashImg from "../assets/trash.png";

function EditDigimons({ digimons }) {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idBeingEdited, setIdBeingEdited] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredDigimons(digimons);
  }, [digimons]);

  const handlechange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filtered = digimons.filter((digimon) => {
      return (
        String(digimon.name)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(digimon.level)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setFilteredDigimons(filtered.length === 0 ? digimons : filtered);
  };

  const handleClick = (id) => {
    setIsEdit(!isEdit);
    setIdBeingEdited(id);
  };

  const handleClickDelete = (id) => {
    setIsDelete(!isDelete);
    setIdBeingEdited(id);
  };

  return (
    <section className="c-e-d">
      <h2 className="h1">Edit Digimons</h2>
      <input
        className="textarea e-d-input"
        type="search"
        value={inputSearch}
        placeholder="Find a digimon"
        onChange={handlechange}
      />
      <div className="c-e-d-btn">
        <button
          className="btn-white e-d-btn"
          onClick={() => {
            setIsAdd(true);
          }}
          type="button"
        >
          Add
        </button>
      </div>
      {isAdd && (
        <AddDigimon
          setIsAdd={setIsAdd}
          dispatch={dispatch}
          addDigimon={addDigimon}
        />
      )}
      <section className="e-d-allCard">
        {filteredDigimons.map((digimon) => {
          return (
            <div key={digimon.id} className="e-d-card">
              <picture>
                <img className="e-d-cardImg" src={digimon.img} alt="pitcture" />
              </picture>
              <div className="e-d-card-c-p">
                <p className="e-d-card-p">{digimon.name}</p>
                <p className="e-d-card-p">{digimon.level}</p>
                <p className="e-d-card-p">Card {digimon.id}</p>
                {isEdit && idBeingEdited === digimon.id && (
                  <EditDigimon
                    digimon={digimon}
                    idBeingEdited={idBeingEdited}
                    setIdBeingEdited={setIdBeingEdited}
                    setIsEdit={setIsEdit}
                    dispatch={dispatch}
                    updateDigimon={updateDigimon}
                  />
                )}
                {isDelete && idBeingEdited === digimon.id && (
                  <DeleteDigimon
                    setIsDelete={setIsDelete}
                    dispatch={dispatch}
                    deleteDigimon={deleteDigimon}
                    digimon={digimon}
                    setIdBeingEdited={setIdBeingEdited}
                  />
                )}
              </div>
              <div className="e-d-card-c-btn">
                <button
                  className="e-d-card-btn"
                  onClick={() => handleClick(digimon.id)}
                  type="button"
                >
                  <picture>
                    <img className="e-d-e-img" src={editImg} alt="edit" />
                  </picture>
                </button>
                <button
                  className="e-d-card-btn"
                  onClick={() => {
                    handleClickDelete(digimon.id);
                  }}
                  type="button"
                >
                  <picture>
                    <img className="e-d-e-img" src={trashImg} alt="trash" />
                  </picture>
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

EditDigimons.propTypes = {
  digimons: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      level: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default EditDigimons;
