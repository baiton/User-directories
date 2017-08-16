const express = require('express');
const mustacheExpress = require('mustache-express');
const robotsData = require('./data');
const robotDal = require('./dal');
const robot= robotsData.users;

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

// console.log(robotsData.users)

// If I use localhost:3000/_robots
app.get('/robots', function(req, res){
  const robots = robotDal.getRobots();
  res.render('robots', {robots:robots})
})

// if I use localhost:3000/robot/id
app.get('/robots/:id', function (request, response) {
  const chosenRobot = robotDal.getRobot(request.params.id);
  if (chosenRobot.id) {
    response.render('robotDetails', chosenRobot);
  } else {
    response.send('NO ROBOT!!!');
  }
})



app.set ('port', 3000);

app.listen (3000, function(){
  console.log('Application has started at Port 3000');
});
