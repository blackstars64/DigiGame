const priceDigimon = (level) => {
  let price;
  switch (level) {
    case "Fresh":
      price = 800;
      break;
    case "In Training":
      price = 1200;
      break;
    case "Rookie":
      price = 2000;
      break;
    case "Champion":
      price = 3000;
      break;
    case "Ultimate":
      price = 4000;
      break;
    case "Mega":
      price = 5000;
      break;
    default:
      console.error("Unexpected digimon level:", level);
  }
  return price;
};

export default priceDigimon;
