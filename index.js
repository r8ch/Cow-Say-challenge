const myInfo = require("./information.js");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Helooo! I'm ${myInfo.name} from the ${myInfo.campus} campus`,
    e: "oO",
    T: "U ",
  })
);
