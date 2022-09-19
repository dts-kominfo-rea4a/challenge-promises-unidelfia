const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  var ixx = await promiseTheaterIXX();
  var vgc = await promiseTheaterVGC();

  var all = ixx.concat(vgc);

  let count = 0;

  all.forEach(element => {
    if(element.hasil == emosi) count++;
  });

  console.log("emosi: ", emosi, " => ", count)

  return count;
};

module.exports = {
  promiseOutput,
};
