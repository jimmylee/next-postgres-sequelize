# next-postgres

This is a minimal example of a forum web application with posts and comments. 

Uses:

- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Postgres](https://www.postgresql.org/)
- [Styled-JSX](https://github.com/zeit/styled-jsx)
- [Passport with local authentication](http://passportjs.org/)
- [Heroku](https://www.heroku.com)
- [Redux](http://redux.js.org/) + [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html)
- [Babel + Stage-1 + Stage-2 + Stage-3](https://babeljs.io/)

![screen shot 2017-07-19 at 11 52 41 pm](https://user-images.githubusercontent.com/310223/28404296-852923d2-6cdd-11e7-88fb-d51697776866.png)

Getting setup should only take 5 minutes!

Useful for:

- Building 100% JavaScript applications with example code.
- Testing out concepts before bringing them over to real work.
- Getting [server side rendering](https://zeit.co/blog/next2) right.
- Looking like you have cheat codes at a Hackathon.

You can [view the demo on heroku](https://guarded-coast-67601.herokuapp.com/). Below are steps to deploy your own.

#### Also on React Native

I also built a [React Native](https://facebook.github.io/react-native/) application with [Expo](https://expo.io) so that I could have an iOS, Android, and Web Application in 100% JavaScript.

- Open it with [Expo Client](https://expo.io/@jimmylee/expo-next-postgres).
- Get [Expo Client](https://expo.io/tools) if you need it.
- View and take the [source code](https://github.com/jimmylee/expo-next-postgres) on GitHub.

## Prerequisites

- I use [Homebrew](https://brew.sh/). Using it makes it easier to follow these steps.
- Install Postgres: `brew install postgres`.
- Install [Node 6+](https://nodejs.org/en/): `brew install node`.


## Quick newbies guide to Postgres

- On OSX, to run Postgres: 

```sh
pg_ctl -D /usr/local/var/postgres start
```

- There is a file named `./config.js`.
- That file points to a local database named `testdb`. With the username and password as `test`.

### First time Postgres instructions.

```sh
# Enter Postgres console
psql postgres

# Create a new user for yourself
CREATE ROLE yourname WITH LOGIN PASSWORD 'yourname';

# Allow yourself to create databases
ALTER ROLE yourname CREATEDB;

# Exit Postgres console
\q

# Log in as your new user.
psql postgres -U yourname

# Create a database named: testdb.
# If you change this, update config.js
CREATE DATABASE testdb;

# Give your self privileges
GRANT ALL PRIVILEGES ON DATABASE testdb TO yourname;

# List all of your databases
\list

# Connect to your newly created DB as a test
\connect testdb

# Exit Postgres console
\q
```

You wont return here unless you drop tables. You can also use a GUI if you like.



## Running the app locally

While in the root directory of the repo:

```sh
npm install
npm install -g sequelize-cli
sequelize db:migrate
npm run dev
```

You can now visit `localhost:8000` in the browser of your choice.



## Setup Heroku

Install Heroku.

```sh
npm install -g heroku-cli
heroku login
heroku create
```

Heroku will give you a unique address, like ours: `guarded-coast-67601.herokuapp.com`.

Already have a heroku app to deploy to?

```
heroku git:remote -a name-of-your-heroku-app
```



## Setup Postgres and config vars

Go to https://data.heroku.com, add a datastore, pick Postgres.

You will receive `database`, `host`, `password`, `port`, and `username` values. Here is how you set them:

```sh
# Set variables
heroku config:set PRODUCTION_DATABASE=NAME_PROVIDED_FROM_HEROKU
heroku config:set PRODUCTION_HOST=HOST_PROVIDED_FROM_HEROKU
heroku config:set PRODUCTION_PASSWORD=PASSWORD_PROVIDED_FROM_HEROKU
heroku config:set PRODUCTION_PORT=PORT_PROVIDED_FROM_HEROKU
heroku config:set PRODUCTION_USERNAME=USERNAME_PROVIDED_FROM_HEROKU

# See all of your variables
heroku config
```

Set a secret for [cookie-session](https://github.com/expressjs/cookie-session):

```sh
heroku config:set PRODUCTION_SECRET=PICK_A_SECRET
```



## Deploy to Heroku

```sh
git push heroku master
```

append `--force` if necessary.



## Questions?

Feel free to slang any feels to [@meanjim](https://twitter.com/meanjim).