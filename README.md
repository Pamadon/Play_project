This is an app that allows competitive individuals to schedule games and track their competitive performance.

Technologies: HTML, CSS, JavaScript, Jquery, Express.js, google maps API, google geocoder API, html 5 geolocation, Socket.io, and Mongodb/mongoose.


Plan of attack:

1. Wireframing the project on graph paper
2. Learned how to use and interact with Mongodb
3. Researched how to use multiple rooms/instances in Socket.io
4. Routes and models
5. Integrated Googles maps api for lat/long capture and marker placement
6. created way to add games to database
7. built forms for input
8. added chat function for competitors who have been connected
9. Styled the pages minimally


Install:

- Fork and clone repo
- Run npm install
- Run mongodb - accompanied by a GUI like mongocompass or another comparable option
- Run nodemon to view on localhost:3000


Use cases:

- Friends and family - Individuals who frequently play games with family memebers and yet do not track the win/loss record for the group. They will have the ability to definitvely know who is the best. or simple keep running tallies of scores in various games. They could also use this for shceduling games with family so as not to clog or annoy people with massive text chains and replys
- The competitor - Someone who wants to challenge themselves by playing people of equal skill.
- Lover of games - Someone who just wants to play and is willing to meet other like minded individuals without prior interaction.


Things still to do:

- I wanted to get the multi-room feature to work...Without this feature the site works as a place for me to say where i will be and what game i will be playing.
- I wanted to remove the already made points as the goal was not to remove them but to store them in a played games database. The state change i tried to implement was not succesful in making the pins invisible.
