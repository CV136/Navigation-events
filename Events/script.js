const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*
Everytime the user clicks on one of the action squares:
Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
Create a new <li> in the log below to state when the action was done
*/



/*
Select the trigger and target (clicking on an actionsquare -> already defined above?)
Create a callback function (the effect -> creation of a new div and a new li) (is it clickOnSquare?)
Create an event listener 
actionSquare.addEventListener('click', clickOnSquare) (?)
*/

const displayedGreenSquare = document.createElement("div");
displayedGreenSquare.classList.add('displayedsquare', 'green');
document.getElementsByClassName('displayedsquare-wrapper')[0].appendChild(displayedGreenSquare); //success! one single non-dynamic square!

const displayedVioletSquare = document.createElement("div");
displayedVioletSquare.classList.add('displayedsquare', 'violet');
document.getElementsByClassName('displayedsquare-wrapper')[0].appendChild(displayedVioletSquare);

const displayedOrangeSquare = document.createElement("div");
displayedOrangeSquare.classList.add('displayedsquare', 'orange');
document.getElementsByClassName('displayedsquare-wrapper')[0].appendChild(displayedOrangeSquare);

/*
const actionTime = document.createElement("li")
ul.appendChild(actionTime)*/

/*"[$getElapsedTime] Created a new $color(/something to fetch the color classes) square" (would that work?)*/
