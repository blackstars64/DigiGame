import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { addCollected } from "../actions/collected.action";
import { updateDigiPoint } from "../actions/user.action";
import DigimonCard from "../components/DigimonCard";
import NotFoundCard from "../components/NotFoundCard";
import "../scss/Collection.scss";

function Collection() {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredDigimons, setFilteredDigimons] = useState([]);
  const { user, collected } = useOutletContext();
  const dispatch = useDispatch();
  const dataDigimon = useSelector((state) => state.digimonReducer);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const isCollected = (digimonId) => {
    return collected.some((data) => data.id === digimonId);
  };

  useEffect(() => {
    setFilteredDigimons(dataDigimon);
  }, [dataDigimon]);

  const handlechange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filtered = dataDigimon.filter((digimon) => {
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

    setFilteredDigimons(filtered.length === 0 ? dataDigimon : filtered);
  };
  return (
    <section className="c-dCollect">
      <h2 className="h1">DigiCollecte</h2>
      <input
        className="textarea"
        placeholder="Search you digimon..."
        type="search"
        id="digimon"
        value={inputSearch}
        onChange={handlechange}
      />
      <div className="c-dCollect-card">
        {filteredDigimons &&
          filteredDigimons.map((digimon) => {
            return isCollected(digimon.id) ? (
              <DigimonCard key={digimon.id} digimon={digimon} />
            ) : (
              <NotFoundCard
                key={digimon.id}
                digimon={digimon}
                user={user}
                dispatch={dispatch}
                addCollected={addCollected}
                updateDigiPoint={updateDigiPoint}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Collection;
