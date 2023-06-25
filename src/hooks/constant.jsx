
  
  //here we need the timespame
  export const ENDTIME = 1690302001000; //use webiste - https://www.epochconverter.com/
  export const GOAL = 2500000;
  export const totalRaised = 550000;
  
  export const formatPrice = (num, precision = 2) => {
    try {
      return new Intl.NumberFormat("ja-JP", {
        maximumFractionDigits: precision,
      }).format(num);
    } catch (err) {
      console.log(err.message);
      return 0;
    }
  };
  