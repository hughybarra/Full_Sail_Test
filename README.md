
FULL SAIL TEST
============

Instructions
Please code the following PSD. When you're done, upload your work to a
GitHub repository and send me the url.

[link to document](http://media.fullsail.com/platinum/sample-for-markup.zip)

You may use any frameworks or libraries to aid in your development. Try to
make it responsive (use your best judgement for the design) and don¹t
worry about making the form functional.

If you have any questions about intended functionality (or additional
questions about the position), please feel free to email me.

##Technology stack 
For this assignment I used several technologies, frameworks, and plugins. Below is a list of everything that I used. 


* HTML5
* Javascript 
* PHP
* Jquery
* BXslider javascript plugin
* CSS
* Less Css

I was not sure how precise you wanted me to stick with the PDF you gave me. I decided to go with a full page responsive layout that takes up 100% of the screen realestate so it was kind of hard to stick to the diagram. That being said I had fun and built the site as closely to the PSD as possible and made it responsive. 

##The Slider  
I decided to use [BXslider](http://www.bxslider.com/) I have never used it before so I experimented around a little bit with it. Those guys rock, They have great documentation and their stuff works really well. 

I did however run into a couple of issues when resizing the browser. Sometimes the slider would crash and you would have to refresh the page. Other than that the slider works great and is fully responsive.

Oh and for some reason this plugin does not work in FireFox. So the slider breaks when you view it in FireFox

Found a fix for the fire fox bug! 
[original post](http://stackoverflow.com/questions/11358558/twitter-bootstrap-repsonsive-layout-breaks-in-firefox)

``You should try these things:``

``1. Upgrade the firefox version you are using.``

``2. Delete the cookies from your browser.``

``3. Install firebug and developers toolbar to inspect the page and the problem might be in the``

``.css check agains it , in the firebug by removing some properties.``

## Some of my Issues. 


Ran into a chrome bug. I was having issues styling the form select options box.
It was not working but I managed to find a fix. For some reason in Chrome the select box likes to ignore CSS styling. I had to prefix webkit stuff to get it to work.

I was having issues with the areas of focus image. It keeps sliding around like a crazy person and I could not come up with any way to keep it perfectly centered in the middle. I think I need a bit more practice with Get Bootstrap because I could not for the life of me keep that image perfectly centered. 

I derped and accidentally left off a closing tag which broke my entire layout for a good 30 minutes. That was fun.

Other than that I think the project was a success. I got to practice building a responsive site using bootstrap and I go to try out a new plugin. 


