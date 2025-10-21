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
  "id": "welcome-sec-prereading",
  "level": "1",
  "url": "welcome-sec-prereading.html",
  "type": "Section",
  "number": "1.1",
  "title": "Pre-Reading",
  "body": " Pre-Reading    What is mathematics about, really?  If you're like many students, much of your previous mathematics education has been very procedural. For each topic, you learn some formulas and procedures and mimic those procedures on a number of exercises with a few numbers changed here and there. It gives the impression that mathematics is all about following rules.   That couldn't be further from the truth.   We're going to be more focused on how to explore a new mathematical world you've never seen before, where it may not always be obvious what to do at first glance. Sure, you'll still learn definitions and techniques along the way, but a big emphasis will be on using those techniques to uncover the hidden structure in a problem and get a feel for why it works.    Why games?  As you probably guessed from the title, this book uses games as the main playground to explore mathematical ideas.  Games have a number of benefits:     They have simple, concrete rules.    They have clearly defined goals.    They invite active participation.    They're just plain fun!       How this book is structured  To understand mathematics, you have to DO mathematics.  That's why each chapter of this book is set up in a particular way to encourage active learning:     Pre-Reading  At the beginning of each chapter is a short section that introduces some basic concepts you'll need. At the end of this section, you'll find some Check Your Understanding questions to help you gauge how well you've understood the material.    Activities  Next, each section has a number of activities on which you'll put to use what you've learned from the pre-reading. These activities are in the style of Inquiry-Based Learning (IBL), which means they have a carefully sequenced set of questions designed to give you opportunities to notice patterns and wonder about consequences. These are best done in groups (especially since many of them involve playing games!), so make sure to work through these with a friend.    Exercises  At the end of each section, there are a number of exercises that are meant to help you check your understanding of the concepts from the previous two sections as well as extend what you've learned to new situations. Some of these exercises may involve specific computations, but many will also require you to show why something is true.      "
},
{
  "id": "welcome-sec-activity",
  "level": "1",
  "url": "welcome-sec-activity.html",
  "type": "Section",
  "number": "1.2",
  "title": "Activity",
  "body": " Activity   The Game of Geography  Let's start right in with a game: Geography .  This is a game you may have played when you were younger, perhaps on a long car trip. Players take turns naming places, according to the following rules:   No place may be named twice.    The last letter of each place must be the first letter of the next place. For example, if a player says JAPAN , since this ends in an N , the next player has to name a place whose name begins with N , such as NEPAL .    If you can't name a place, you lose.     Since names of places on its own is way too broad on its own, here's a list of 20 capitals from around the world you can use to play:  Abu Dhabi  Accra  Athens  Dakar  Islamabad  Istanbul  London  Lusaka  Manila  Moscow  Nairobi  New Delhi  Ottawa  Rabat  San Salvador  Santiago  Seoul  Stockholm  Tokyo  Wellington      Play this game with a friend. (You can technically play with more than two players, but it's probably best to stick to two for now.) After playing a few rounds, discuss the following questions:     What do you notice? What do you wonder?      Does the game feel fair? Why or why not?      Does it seem better to go first or second?      Which locations seem to be the bottlenecks of the game?      What's the shortest path from Lusaka to Wellington? What about the longest path?      How many different ways are there to get from London to Abu Dhabi?      Does there seem to be a way to visit every city exactly once? Why or why not?     Hopefully you're already seeing that this game has some rich structure to it! The problem is, with 20 different cities, it's a bit overwhelming to try to exhaustively analyze all the possible ways the game can play out. However, we can start to get a better handle on what's going on by using some of Pólya's problem-solving strategies.    Pólya's Problem-Solving Strategies  George Pólya was a mathematician who wrote extensively about problem-solving. Some of his key strategies include:     Understand the problem: What are you trying to find? What information do you have?    Make a plan: Have you seen a similar problem before? Can you solve a simpler version?    Carry out the plan: Follow your strategy step by step. Check each step.    Look back: Does your answer make sense? Can you solve it another way?        Now suppose we play a much smaller version of this game with only four cities: Accra, Athens, Lusaka, and Seoul.     Draw a diagram that shows all the possible moves in this smaller version of the game.     You might find it helpful to represent each city as a dot and draw arrows from one dot to another to represent possible moves. For example, since Accra ends with an a , you would draw arrows from the Accra dot to the Athens and Lusaka dots, since those are the cities that start with an a .      Is there a way to visit every city exactly once in this smaller version? Why or why not?      If you go first, which city should you start with? Why?      Suppose you add two more cities to this smaller version: Stockholm and Manila. How does this change your diagram? Does it change your answers to any of the previous questions?      "
},
{
  "id": "subsec-geography-2",
  "level": "2",
  "url": "welcome-sec-activity.html#subsec-geography-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Geography "
},
{
  "id": "activity-geography",
  "level": "2",
  "url": "welcome-sec-activity.html#activity-geography",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  Play this game with a friend. (You can technically play with more than two players, but it's probably best to stick to two for now.) After playing a few rounds, discuss the following questions:     What do you notice? What do you wonder?      Does the game feel fair? Why or why not?      Does it seem better to go first or second?      Which locations seem to be the bottlenecks of the game?      What's the shortest path from Lusaka to Wellington? What about the longest path?      How many different ways are there to get from London to Abu Dhabi?      Does there seem to be a way to visit every city exactly once? Why or why not?    "
},
{
  "id": "remark-polya",
  "level": "2",
  "url": "welcome-sec-activity.html#remark-polya",
  "type": "Remark",
  "number": "1.2.1",
  "title": "Pólya’s Problem-Solving Strategies.",
  "body": " Pólya's Problem-Solving Strategies  George Pólya was a mathematician who wrote extensively about problem-solving. Some of his key strategies include:     Understand the problem: What are you trying to find? What information do you have?    Make a plan: Have you seen a similar problem before? Can you solve a simpler version?    Carry out the plan: Follow your strategy step by step. Check each step.    Look back: Does your answer make sense? Can you solve it another way?     "
},
{
  "id": "activity-geography-small",
  "level": "2",
  "url": "welcome-sec-activity.html#activity-geography-small",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Now suppose we play a much smaller version of this game with only four cities: Accra, Athens, Lusaka, and Seoul.     Draw a diagram that shows all the possible moves in this smaller version of the game.     You might find it helpful to represent each city as a dot and draw arrows from one dot to another to represent possible moves. For example, since Accra ends with an a , you would draw arrows from the Accra dot to the Athens and Lusaka dots, since those are the cities that start with an a .      Is there a way to visit every city exactly once in this smaller version? Why or why not?      If you go first, which city should you start with? Why?      Suppose you add two more cities to this smaller version: Stockholm and Manila. How does this change your diagram? Does it change your answers to any of the previous questions?    "
},
{
  "id": "welcome-sec-exercises",
  "level": "1",
  "url": "welcome-sec-exercises.html",
  "type": "Section",
  "number": "1.3",
  "title": "Exercises",
  "body": " Exercises     Draw a diagram that shows all the possible moves in the full version of the Geography game with all 20 cities. (It may take a few tries to get it right don't be afraid to make a few sketches until you find one you're satisfied with.) How does this diagram help you understand the structure of the game?     "
},
{
  "id": "exercises--1",
  "level": "2",
  "url": "welcome-sec-exercises.html#exercises--1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Draw a diagram that shows all the possible moves in the full version of the Geography game with all 20 cities. (It may take a few tries to get it right don't be afraid to make a few sketches until you find one you're satisfied with.) How does this diagram help you understand the structure of the game?   "
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
