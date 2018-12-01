# next-postgres

This is an example of a full stack web application with...

- posts
- comments
- server side rendering.

It is configured to be deployed to [Zeit](https://zeit.co) but I also provide Heroku [deployment steps](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md).

It is code you can use without attribution, please enjoy. 🙏

#### Production Examples:

- [Maurice Kenji Clarke](https://twitter.com/mauricekenji) used the setup to create: [https://indvstry.io/](https://indvstry.io/)
- I used some of the ideas here for a serious project: [Reading Supply](https://reading.supply)

#### Preview:

- [https://next-postgres.herokuapp.com/](https://next-postgres.herokuapp.com/)
- [https://next-postgres-wvpphfoelq.now.sh/](https://next-postgres-wvpphfoelq.now.sh/posts)

### Stack

- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Emotion CSS-in-JS](https://github.com/emotion-js/emotion)
- [Postgres](https://www.postgresql.org/)
- [Sequelize: PostgresSQL ORM](http://docs.sequelizejs.com/)
- [Passport for local authentication](http://passportjs.org/)
- [Redux](http://redux.js.org/)
- [Babel](https://babeljs.io/)

### Why is this useful? Why should I care?

- The UX and UI are garbage, that means everything you do after will be better!
- Client and server are written in JavaScript.
- This is a production ready codebase you can use to test a concept you have.
- [Server side rendering](https://zeit.co/blog/next2) has been made simple.
- Maybe you want to get a head start at a hackathon.

## Setup: Prerequisites

I use [Homebrew](https://brew.sh/) to manage dependencies on a new laptop... You're welcome to use something else.

- Install Postgres: `brew install postgres`.
- Install [Node 10.7.0+](https://nodejs.org/en/): `brew install node`. (Or update your node)

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

I also use a GUI called [TablePlus](https://tableplus.io/) if you don't like command line.

## Setup: Run locally

In the root directory run these commands:

```sh
npm install
npm install -g babel-cli
npm install -g sequelize-cli
sequelize db:migrate
npm run dev
```

Visit `localhost:8000` in a browser to start development locally. You will need postgres running.

## Deploy Heroku (Alternative choice)

To deploy with Heroku, please follow the instructions [here](https://github.com/jimmylee/next-postgres/blob/master/HEROKU.md).

There are very specific details you must pay attention to.

## Deploy Zeit

Deploying with `now-cli` is as simple as

```sh
now
```

Do you have a custom domain? You can use an `alias`

```sh
# after the deploy, alias to your domain, add "alias" to now.json first
now alias
```

Make sure you configure your alias for [zeit.world](https://zeit.world). Also make sure you add the secrets you need or delete the ones you aren't using from `now-secrets.json`.

## Database + Secrets

You can use a service like [https://compose.io](https://compose.io) to get a hosted Postgres database.

Then update production secrets using `now secrets`. You must do this or else your website can't connect to the production database.

```sh
now secrets add production-username   xxxxxxxxxxxxxxx
now secrets add production-password   xxxxxxxxxxxxxxx
now secrets add production-database   xxxxxxxxxxxxxxx
now secrets add production-host       xxxxxxxxxxxxxxx
now secrets add production-port       xxxxxxxxxxxxxxx
now secrets add production-secret     xxxxxxxxxxxxxxx
```

## Questions?

Feel free to slang any feels to [@wwwjim](https://twitter.com/wwwjim).
