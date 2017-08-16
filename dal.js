const robotsData = require('./data')
const robot= robotsData.users


function getRobots(){
  return robot;
}

function getRobot(robotId){
let chosenRobot={}
for (i=0;i < robot.length ; i++){
  if (robot[i].id === robotId){
    chosenRobot = robot[i];
  }
}
return chosenRobot;
}

module.exports = {
  getRobots: getRobots,
  getRobot: getRobot,
}
