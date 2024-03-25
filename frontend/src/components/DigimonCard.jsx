import PropTypes from "prop-types";
import "../scss/DigimonCard.scss";

function DigimonCard({ digimon }) {
  return (
    <section className="dc-background">
      <div className="c-dc-p">
        <div className="dc-c-id">
          <p className="dc-id">{digimon.id}</p>
        </div>
        <picture className="dc-c-digiImg">
          <img className="dc-digiImg" src={digimon.img} alt={digimon.name} />
        </picture>
        <div className="dc-c-level">
          <p className="dc-level">{digimon.level}</p>
        </div>
      </div>
      <div className="dc-c-name">
        <p className="dc-name">{digimon.name}</p>
      </div>
    </section>
  );
}

DigimonCard.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default DigimonCard;
