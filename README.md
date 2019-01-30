HTML, CSS and JS tutorial. Learn Javascript + p5.js by creating rain graphics!

Learn HTML + CSS with the tutorial below
https://hackclub.com/workshops/personal_website (Try this first)
https://www.w3schools.com/html/default.asp (Use this for reference)

Essentially:
HTML codes for the structure of the page. Eg. the titles, the text
CSS codes for the styling of the page.

Plus, Javascript codes for the responsiveness of the page. If you have buttons on a webpage that makes something happen, Javascript is involved:
https://www.w3schools.com/js/

Javascript has a library of p5.js which helps create a controllable canvas on the page. Here is a typical structure of an HTML file.
```
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
    ... PAGE CONTENT ...
  </body>
</html>
```

As p5.js is a library and not part of 'normal' javascript, we have to import it with the <script> command. We also have to import the javascript file, the javascript file will contain the code which controls the graphics of the page.
  
Basic Javascript

Variables:
```var h = 0;```
This declares a variable

Task: Create an animation of a rain falling down continuously.
https://p5js.org/get-started/
