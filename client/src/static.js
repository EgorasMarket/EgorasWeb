const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    // return "Goodluck"
  };

  module.exports = {
      numberWithCommas,
      
  }
