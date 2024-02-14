import { useState } from "react";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";
import { updateUser } from "../../actions/user.action";
import agumonImg from "../../assets/profile-img/agumon.webp";
import gabumonImg from "../../assets/profile-img/gabumon.webp";
import patamonImg from "../../assets/profile-img/patamon.webp";
import piyomonImg from "../../assets/profile-img/piyomon.webp";
import tailmonImg from "../../assets/profile-img/tailmon.webp";
import vmonImg from "../../assets/profile-img/vmon.webp";

function EditPictureProfile({ user, handlePopupImg }) {
  const [idImage, setIdImage] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateUser(user.id, { idImg: idImage }));
    handlePopupImg();
  };

  return (
    <section>
      <div>
        <button onClick={() => setIdImage(0)} type="button">
          <picture>
            <img src={agumonImg} alt="agumons" />
          </picture>
        </button>
        <button onClick={() => setIdImage(1)} type="button">
          <picture>
            <img src={gabumonImg} alt="gabumon" />
          </picture>
        </button>
        <button onClick={() => setIdImage(2)} type="button">
          <picture>
            <img src={patamonImg} alt="patamon" />
          </picture>
        </button>
        <button onClick={() => setIdImage(3)} type="button">
          <picture>
            <img src={piyomonImg} alt="piyomon" />
          </picture>
        </button>
        <button onClick={() => setIdImage(4)} type="button">
          <picture>
            <img src={tailmonImg} alt="tailmon" />
          </picture>
        </button>
        <button onClick={() => setIdImage(5)} type="button">
          <picture>
            <img src={vmonImg} alt="Vmon" />
          </picture>
        </button>
      </div>
      <hr />
      <button onClick={handleClick} type="button">
        Validate
      </button>
    </section>
  );
}

EditPictureProfile.propTypes = {
  user: propTypes.shape({
    id: propTypes.number,
  }).isRequired,
  handlePopupImg: propTypes.func.isRequired,
};

export default EditPictureProfile;
