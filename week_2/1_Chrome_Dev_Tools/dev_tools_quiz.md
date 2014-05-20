#### Include an inline screenshot of your codeschool's points from the profile page:

[Code School Screenshot](http://github.com/jochambo/phase_0_unit_1/week_2/1_Chrome_Dev_Tools/imgs/report-card.png)

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  
  * Realtime editing of HTML and CSS - 
  >Elements let's you review everything organized into one DOM tree and allows edits of any objects or properties in the tree.
  
  * Javascript Debugging - 
  >Sources w/ Console:  The Console is used for logging diagnostic info.  View JavaScript files in the sources tab and run scripts with the ability to set breakpoints and pause the script while it is running.

  * Performance Optimization - 
  >Network shows resource requests, Audits suggests optimizations for a page. Timeline gives you an overview of when and how much time is spent in loading and processing resources, Profiles lets you review memory usage, CPU usage, and Javascript execution time.

* What's the quick key for your OS to spawn the Dev Tools inspector? 
>Command-Option-i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) - 
  >It's #0B0F11.
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
>The text is actually contained in a .gif image and included in the CSS background property.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  >The slideshow image of Time's Square (92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png).
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.  
  >URL: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png 316KB 500px x 210px

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated? 
>Optimize the images to reduce their size by 885.9KiB (39% reduction).