'use strict';

/* Task 1 */

const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];

const tasks = Array.from(document.querySelectorAll('section[id^="task"]'));
tasks.unshift(0);

tasks.forEach(sec => console.log(`Added new: ${sec.id}`));

console.log("Tasks:", tasks);

let songsList =  function createNumListFromArray(array, parent) {
  let ol = document.createElement("ol");
  for(let i=0; i < array.length; i++) {
    let li = document.createElement("li");
    let songName = document.createElement("cite");
    let songAuthor = document.createElement("span");

    li.appendChild(songName);
    li.appendChild(songAuthor);
    ol.appendChild(li);

    songAuthor.innerText = (array[i].author).toLowerCase();
    songName.innerText = (array[i].song).toLowerCase();
    songAuthor.classList.add("author");
  }
  parent.appendChild(ol);
  ol.classList.add("songs-list");
};

//console.log(tasks[0]);

//const task1 = document.querySelector("#task1");
//console.log(task1);

songsList(playList, tasks[1]);

/* Task 2 */
const btnModalOpen = document.getElementById("btnModalOpen");
const modal = document.querySelector("dialog#info");
const btnModalClose = document.getElementById("btnModalClose");

btnModalOpen.addEventListener("click", () => {
  modal.showModal();
});

btnModalClose.addEventListener("click", () => {
  modal.close();
});

/* Task 3 */
const btnlightsToggle = document.getElementById("btnlightsToggle");
const lights = document.querySelectorAll(".lights .lights__list-item");

function changeLights () {

}

btnlightsToggle.addEventListener("click", () => {
  
});


