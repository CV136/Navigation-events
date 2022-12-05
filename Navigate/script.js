/*

*/
//Select the last child of the <ol> tag and put it at the beginning of the list

const list = document.querySelector('ol')
const a = list.children[4]
const b = list.children[0]

//b.appendChild(a) (wrong, just puts it in second place)

//b.before(a) (works, but prepend is more specific?)

list.prepend(a)

//Move the <h2> of the third section in the second one and vice-versa

const titles = document.querySelectorAll("h2");
const c = titles[1]
const d = titles[2]

c.before(d)

//document.getElementsByTagName("section")[2].firstChild.prepend(c) (doesn't work)

document.getElementsByTagName("section")[2].prepend(c) //works, but does it put it before the div?

//document.getElementsByTagName("div").prepend(c) (doesn't work)

/*const thatOneSec = document.getElementsByTagName("section")[2]
const thatOneDiv = thatOneSec.firstChild
const thatOneP = thatOneDiv.firstChild
thatOneP.prepend(c)
(doesn't work ?)*/

//Delete the last section from the DOM, we don't need it anyways

const toRemove = document.getElementsByTagName("section")[2];

toRemove.parentElement.removeChild(toRemove)

//document.getElementsByTagName("main").removeChild([2]) (doesn't work)




