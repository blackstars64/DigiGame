import { toast } from "react-toastify";
import propTypes from "prop-types";
import priceDigimon from "../utils/priceDigimon";

function NotFoundCard({
  digimon,
  user,
  dispatch,
  addCollected,
  updateDigiPoint,
}) {
  const handleBuy = (digimonData) => {
    const digiBuy = {
      userId: user.id,
      digimonId: digimonData.id,
    };

    const digiData = {
      id: digimonData.id,
      name: digimonData.name,
      img: digimonData.img,
      level: digimonData.level,
    };

    if (
      user.digi_point < priceDigimon(digimonData.level) ||
      user.digi_point === 0 ||
      user.digi_point === null
    ) {
      toast.error("You don't have enough DigiPoint to buy this Digimon.");
      return;
    }
    dispatch(
      updateDigiPoint(user.id, {
        digiPoint: user.digi_point - priceDigimon(digimonData.level),
      })
    );
    dispatch(addCollected(digiBuy, digiData));
    toast.success("You have successfully bought this Digimon.");
  };

  return (
    <section className="nfound">
      <p className="nfound-id">{digimon.id}</p>
      <p className="nfound-name">{digimon.name}</p>
      <p className="nfound-dp">{priceDigimon(digimon.level)}DP</p>
      <button
        type="button"
        className="nfound-buy"
        onClick={() => handleBuy(digimon)}
      >
        Buy
      </button>
    </section>
  );
}

NotFoundCard.propTypes = {
  digimon: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    img: propTypes.string,
    level: propTypes.string,
  }).isRequired,
  user: propTypes.shape({
    id: propTypes.number,
    username: propTypes.string,
    email: propTypes.string,
    digi_point: propTypes.number,
  }).isRequired,
  dispatch: propTypes.func.isRequired,
  addCollected: propTypes.func.isRequired,
  updateDigiPoint: propTypes.func.isRequired,
};

export default NotFoundCard;
