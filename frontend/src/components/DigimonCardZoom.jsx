import PropTypes from "prop-types";
import "../scss/DigimonCard.scss";

function DigimonCardZoom({ digimon }) {
  return (
    <section className="dcz-background">
      <div className="c-dcz-p">
        <div className="dcz-c-id">
          <p className="dcz-id">{digimon.id}</p>
        </div>
        <picture className="dcz-c-digiImg">
          <img className="dcz-digiImg" src={digimon.img} alt={digimon.name} />
        </picture>
        <div className="dcz-c-level">
          <p className="dcz-level">{digimon.level}</p>
        </div>
      </div>
      <div className="dcz-c-name">
        <p className="dcz-name">{digimon.name}</p>
      </div>
    </section>
  );
}

DigimonCardZoom.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default DigimonCardZoom;
