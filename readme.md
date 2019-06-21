# Octopus Code Test

1. Clone the repo with `git clone git@github.com:platypotomus/octopus.git`
2. `cd octopus`

## To Start Django Server
1. `cd server`
2.  Install packages `pip install django djangorestframework`
3. `./manage.py makemigrations octopus`
4. `./manage.py migrate`
5. Seed the database with `python manage.py loaddata lightbulb`
6. Run the server with `./manage.py runserver`.

## To Start React Client
1. `cd ../client`
2. Install packages `npm install`
3. Run the client with `npm start`
4. Run the tests with `npm test`

---

My approach to this code test was to build a quick but solid back end from which to build my front end app. Starting with functionality first, I implemented the app without Redux, then added it near the end. I used React-Chart.js for the first time to build the chart. For testing, I took a BDD approach, but if I had more time, I would have done TDD instead. I used SCSS with Bootstrap's Reactstrap to style the app.

If I had more time, I would have done more research into using GraphQL and Apollo with Django. I have used GraphQL with Apollo with Node, but never in this setting. I researched into it but decided to drop it due to time. I also would have made my app functional, to allow the user to actually toggle the quantity, add the item to their basket, and maybe have stock control too. I also would have liked to have tested the app more, however I have never done testing with Redux before, so decided to leave it this time due to time.

---

## Technologies Used

### Back End
> Python
> Django
> SQLite

### Front End
> HTML5
> SCSS
> Bootstrap/Reactstrap
> ReactJS
> Redux
> React-Redux
> Redux-Thunk
> Axios
> React-Chart.js
> Babel
> Webpack

### Testing
> Mocha
> Chai
> JSDOM
> Enzyme

