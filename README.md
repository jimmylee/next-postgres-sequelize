# next-postgres

This is a example of a forum web application with posts, comments and server side rendering.

It is deployed [here](https://guarded-coast-67601.herokuapp.com/).

![screen shot 2017-07-31 at 1 13 27 am](https://user-images.githubusercontent.com/310223/28768733-a04035e4-758d-11e7-889f-513859de2f77.png)

**Library breakdown**

- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Postgres](https://www.postgresql.org/)
- [Sequelize: PostgresSQL ORM](http://docs.sequelizejs.com/)
- [Styled-JSX](https://github.com/zeit/styled-jsx)
- [Passport for local authentication](http://passportjs.org/)
- [Heroku](https://www.heroku.com)
- [Redux](http://redux.js.org/) + [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html)
- [Babel](https://babeljs.io/)

🐨 This code is for you to take! My only hope is that it is helpful. Below are deploy steps where you can deploy your own to [Heroku](https://www.heroku.com).

**Why is this useful?**

- The entire stack is written in JavaScript.
- Test concepts before bringing them over to real work.
- [Server side rendering](https://zeit.co/blog/next2) made simple.
- Speed at Hackathons.

**Mobile apps with JavaScript**

I also built a [React Native](https://facebook.github.io/react-native/) application with [Expo](https://expo.io) that sends network requests to a [deployed version of this application](https://guarded-coast-67601.herokuapp.com/). Below are steps to deploy your own).

- Open it with [Expo Client](https://expo.io/@jimmylee/expo-next-postgres).
- Get [Expo Client](https://expo.io/tools) if you need it.
- View and take the [source code](https://github.com/jimmylee/expo-next-postgres) on GitHub.

## Setup: Prerequisites

- Use [Homebrew](https://brew.sh/).
- Install Postgres: `brew install postgres`.
- Install [Node 6+](https://nodejs.org/en/): `brew install node`.


## Setup: Quick newbies guide to Postgres

- On OSX, to run Postgres: 

```sh
pg_ctl -D /usr/local/var/postgres start
```

- Postgres config is stored in `./config.js`.
- Local database: `testdb`. 
- Username and password as `test`.

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


## Setup: Run locally

In the root directory run these commands:

```sh
npm install
npm install -g sequelize-cli
sequelize db:migrate
npm run dev
```

You can now visit `localhost:8000` in a browser.


## Deploy: Setup Heroku

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



## Deploy: Configure Postgres and environment variables on Heroku

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



## Deploy

```sh
git push heroku master
```

append `--force` if necessary.



## Questions?

Feel free to slang any feels to [@meanjim](https://twitter.com/meanjim).