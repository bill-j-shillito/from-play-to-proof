var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "welcome-sec-intro",
  "level": "1",
  "url": "welcome-sec-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is Mathematical Thinking?",
  "body": " What is Mathematical Thinking?  Stuff will go here.  More stuff will go here.  Even more stuff will go here.  "
},
{
  "id": "welcome-sec-activity",
  "level": "1",
  "url": "welcome-sec-activity.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Game of Geography",
  "body": " The Game of Geography  The game of Geography is played by two or more players. The first player names a place, such as a city, state, or country. The next player must name another place that begins with the last letter of the previous place named. For example, if the first player says \"Alabama,\" the next player might say \"Alaska.\" The game continues in this way, with each player naming a place that starts with the last letter of the place named by the previous player. A player is out of the game if they cannot think of a valid place to name within a reasonable amount of time. The last player remaining in the game is the winner.  Here is an example of a game of Geography played by two players using states in the United States:   Player 1: Iowa  Player 2: Alaska  Player 1: Arizona  Player 2: Arkansas  Player 1: South Carolina  Player 2: Alabama   At this point, Player 1 needs to name a state that begins with \"A\", but all such states have been named! Therefore Player 2 wins.  Try playing the game of Geography with a partner or a small group. You can choose to use states, countries, or cities as your places. Have fun and see how long you can keep the game going!    Play the game of Geography a few times with a partner or small group. You can choose to use states, countries, or cities as your places.  What do you notice about the game? Are there any strategies that seem to work well?  Do you think it is possible for one player to always win the game? Why or why not?  Can you think of any variations of the game that might make it more interesting or challenging?   "
},
{
  "id": "welcome-sec-exercises",
  "level": "1",
  "url": "welcome-sec-exercises.html",
  "type": "Section",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises  Stuff will go here.  More stuff will go here.  Even more stuff will go here.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
