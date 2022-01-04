# next-postgres

> **January 4th, 2022** ➝ _I recommend you use [www-react-postgres](https://github.com/jimmylee/www-react-postgres) instead because it does not have an `express` server or a need for `babel`, therefore the template has less dependencies. That means there will be less attention cost required._

An example app with...

- Posts
- Comments
- Authentication

With some nice qualities...

- Full stack JavaScript
- Server side rendering

And you can deploy it to...

- [Google App Engine](https://cloud.google.com/appengine/)
- [Heroku](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md)

Feel free to use without attribution!

#### Production Examples:

- [Maurice Kenji Clarke](https://twitter.com/mauricekenji) used the setup to
  create: [https://indvstry.io/](https://indvstry.io/)
- [Parker Ruhstaller](https://github.com/pruhstal) used the setup to create:
  [https://leafist.com/](https://leafist.com/)
- [Jay Graber](https://twitter.com/arcalinea) used the setup to create: [https://happening.net](https://happening.net)
- [Rich C Smith](https://twitter.com/richcsmith) is working on something wicked cool.
- Maybe you?

#### Preview:

- [https://next-postgres.herokuapp.com/](https://next-postgres.herokuapp.com/)
- ~[https://next-postgres.appspot.com/](https://next-postgres.appspot.com/)~ (disabled because of flexible instance cost)

### Stack

- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Emotion CSS-in-JS](https://github.com/emotion-js/emotion)
- [Postgres](https://www.postgresql.org/)
- [Sequelize: PostgresSQL ORM](http://docs.sequelizejs.com/)
- [Passport for local authentication](http://passportjs.org/)
- [Redux](http://redux.js.org/)
- [Babel](https://babeljs.io/)

### Why is this useful? Why should I care?

- Bad UX/UI so you are forced to make it your own!
- Some "production ready" are concepts baked in for you.
- You'll get server side rendering for free.
- You can move a little faster at a competition or hackathon.

## Setup: Prerequisites

I use [Homebrew](https://brew.sh/) to manage dependencies.

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
- Username: `test`.
- Password: `test`.
- Please come up with something better in production.

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

Newbie tip: I use an app called [TablePlus](https://tableplus.io/) for postgres.

## Setup: Run locally

In the root directory run these commands:

```sh
npm install
npm install -g babel-cli
npm install -g sequelize-cli
sequelize db:migrate
npm run dev
```

- Visit `localhost:8000` in a browser to start development locally.
- You will need postgres running.

## Deploy Heroku

To deploy with Heroku, please follow the instructions
[here](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md).

## Deploy Google App Engine

Please set up [Google App Engine](https://cloud.google.com/appengine/) and
download the `Google Cloud SDK` so you can use `gcloud` from the command line.

You will need to add an `app.yaml`. It will look something like this:

```yaml
runtime: nodejs
env: flex

manual_scaling:
  instances: 1

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

Be sure to read the
[documentation](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/configuring-your-app-with-app-yaml)

Make sure you add `app.yaml` to the `.gitignore`. You don't want to commit this
file into your Github repository.

Then run `npm run deploy`. This configuration will cost you ~\$40 a month.

## What happened to Zeit's Now service?

- It is a great service.
- Now 2.0 is about serverless everything
- This example doesn't work with Now 2.0

## Questions?

Feel free to slang any feels to [@wwwjim](https://twitter.com/wwwjim).
