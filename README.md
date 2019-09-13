# Mystifying Edison

Welcome to this code test provided by Zensum!

This project is supposed to be a web app to display posts and the user who posted them,
however it is riddled with bugs and it is your task to improve this page.

## Quick start

First of all, clone this project or just download the zipped version.

Second, make sure you have a relatively modern version of node installed. This is
tested with node `v11.10.1`, `v10.15.1` and `v8.15.1`. There should be both a yarn and npm lockfile checked in.

Head into your local copy and either run

`npm install` + `npm run start`

or

`yarn` + `yarn start`

This will start the dev server in a browser window.

## Tasks

There are 3 types of tasks and they range from small to large in size.
The three categories are `bug`, `feature` and `creative`.

* `Bug #1 - small`

  When the page is loaded you are presented with an empty search-box, but no posts.
  When investigating in the console there is a cryptic error `TypeError: posts.filter is not a function`.
  Your task is to find out what is going on and get the posts to show.

* `Bug #2 - small/medium`

  The back-end team has complained a bit over the large amount of request to their servers.
  It seems that a new request to load all the posts is fired whenever a user types something in the search box.
  Find a way to make the app go easier on the service.

* `Feature #1 - small`

  The scoping gods have decreed that the post list must be sorted and neat at all times.
  Your task is to sort the posts alphabetically by title.

* `Feature #2 - small/medium`

  Apparently the original creator of this site had an extra-vagant taste in alient fonts,
  and the designers have had enough. After a bit of searching the design team has found a suiting font;
  `IBM Plex Sans`, which can be found over at [google fonts](https://fonts.google.com/).

* `Feature #3 - large`

  People are getting confused about who posted which posts, and just displaying the user id
  on the post isn't helping. Find a way to display the username on the post instead of the user id.

* `Creative`

  Someone left in a rush and didn't finish the user page. This is now your task and you are
  given free reigns on all design choices. Make it however you want it, be creative.

  If you decide not to do `bug #1`, there is a way to reach the user page by going
  directly to `/user/1` which will display the user with id `1`.

## Live demo

Here is a live demo https://mystifying-edison-23da82.netlify.com

And here is the data api that is being used https://jsonplaceholder.typicode.com/
