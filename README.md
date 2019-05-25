# next-postgres

This is an example of a full stack web application with...

- posts
- comments
- server side rendering.

And you can deploy it to...

- [Google App Engine](https://cloud.google.com/appengine/)
- [Heroku](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md)

Feel free to use without attribution.

#### Production Examples:

- [Maurice Kenji Clarke](https://twitter.com/mauricekenji) used the setup to
  create: [https://indvstry.io/](https://indvstry.io/)
- I used some of the ideas here for a serious project:
  [Reading Supply](https://reading.supply)

#### Preview:

- [https://next-postgres.herokuapp.com/](https://next-postgres.herokuapp.com/)
- [https://next-postgres.appspot.com/](https://next-postgres.appspot.com/)

### Stack

- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Emotion CSS-in-JS](https://github.com/emotion-js/emotion)
- [Postgres](https://www.postgresql.org/)
- [Sequelize: PostgresSQL ORM](http://docs.sequelizejs.com/)
- [Passport for local authentication](http://passportjs.org/)
- [Redux](http://redux.js.org/)
- [Babel](https://babeljs.io/)

### Why is this useful? Why should I care?

- A nice starting point with bad UX/UI so you can change things freely.
- Some "production ready" are concepts baked in for you.
- You'll get server side rendering for free.
- You can move faster at a hackthon.

## Setup: Prerequisites

I use [Homebrew](https://brew.sh/) to manage dependencies on a new laptop...
You're welcome to use something else.

- Install Postgres: `brew install postgres`.
- Install [Node 10.7.0+](https://nodejs.org/en/): `brew install node`. (Or
  update your node)

## Setup: Quick newbies guide to Postgres

- On OSX, to run Postgres in a tab on the default port.

```sh
postgres -D /usr/local/var/postgres -p 5432
```

- Postgres config is stored in `./config.js`.
- Local database: `sampledb`.
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

# Create a database named: sampledb.
# If you change this, update config.js
CREATE DATABASE sampledb;

# Give your self privileges
GRANT ALL PRIVILEGES ON DATABASE sampledb TO yourname;

# List all of your databases
\list

# Connect to your newly created DB as a test
\connect sampledb

# Exit Postgres console
\q
```

I also use a GUI called [TablePlus](https://tableplus.io/) if you don't like
command line.

## Setup: Run locally

In the root directory run these commands:

```sh
npm install
npm install -g babel-cli
npm install -g sequelize-cli
sequelize db:migrate
npm run dev
```

Visit `localhost:8000` in a browser to start development locally. You will need
postgres running.

## Deploy Heroku

To deploy with Heroku, please follow the instructions
[here](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md).

There are very specific details you must pay attention to.

## Deploy Google App Engine

Please set up [Google App Engine](https://cloud.google.com/appengine/) and
download the `Google Cloud SDK` so you can use `gcloud` from the command line.

You will need to add an `app.yaml`. It will look something like this:

```
runtime: nodejs
env: flex

automatic_scaling:
  min_idle_instances: 0
  max_num_instances: 1

health_check:
 enable_health_check: False

resources:
  cpu: 1
  memory_gb: 0.5
  disk_size_gb: 10

env_variables:
  NODE_ENV: production
  PRODUCTION_USERNAME: your-database-username
  PRODUCTION_PASSWORD: your-database-user-password
  PRODUCTION_DATABASE: your-database-name
  PRODUCTION_HOST: your-database-host
  PRODUCTION_PORT: your-database-port
  PRODUCTION_SECRET: your-secret
```

Make sure you add `app.yaml` to the `.gitignore`. You don't want to commit this
file into your project.

Then run `npm run deploy`. This configuration will cost you ~\$40 a month.

## What happened to Zeit's Now service?

Now 2.0 is about serverless everything. And this example doesn't work with Now
2.0

## Questions?

Feel free to slang any feels to [@wwwjim](https://twitter.com/wwwjim).
