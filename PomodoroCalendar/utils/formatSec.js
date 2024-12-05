const formatSec = (sec) => {
  let min = Math.floor(sec / 60).toString();
  let  rmSec = (sec % 60).toString();

  if (min.length === 1){
    min = "0" + min
  }
  if (rmSec.length === 1) {
    rmSec = "0" + rmSec;
  }
  return(min + ":" + rmSec)
}

export default formatSec;