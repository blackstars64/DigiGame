import PropTypes from "prop-types";

function DigimonCard({ digimon }) {
  return (
    <section className="dc-background">
      <div className="c-dc-p">
        <p className="dc-id">{digimon.id}</p>
        <picture>
          <img src="" alt="" />
        </picture>
        <p className="dc-level">{digimon.level}</p>
      </div>
      <p className="dc-name">{digimon.name}</p>
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
