import agumon from "../assets/profile-img/agumon.webp";
import gabumon from "../assets/profile-img/gabumon.webp";
import patamon from "../assets/profile-img/patamon.webp";
import piyomon from "../assets/profile-img/piyomon.webp";
import tailmon from "../assets/profile-img/tailmon.webp";
import Vmon from "../assets/profile-img/vmon.webp";

export default function imgProfile(idImg) {
  if (idImg === 0) {
    return agumon;
  }
  if (idImg === 1) {
    return gabumon;
  }
  if (idImg === 2) {
    return patamon;
  }
  if (idImg === 3) {
    return piyomon;
  }
  if (idImg === 4) {
    return tailmon;
  }
  if (idImg === 5) {
    return Vmon;
  }

  return agumon;
}
