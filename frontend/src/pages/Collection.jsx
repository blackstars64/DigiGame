import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { addCollected } from "../actions/collected.action";
import { updateDigiPoint } from "../actions/user.action";
import DigimonCard from "../components/DigimonCard";
import NotFoundCard from "../components/NotFoundCard";

function Collection() {
  const { user, collected } = useOutletContext();
  const dispatch = useDispatch();
  const dataDigimon = useSelector((state) => state.digimonReducer);

  const isCollected = (digimonId) => {
    return collected.some((data) => data.id === digimonId);
  };
  return (
    <section>
      <h2 className="h1">DigiCollecte</h2>
      <input className="textarea" type="search" id="digimon" />
      <div className="c-dCollect-card">
        {dataDigimon &&
          dataDigimon.map((digimon) => {
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
