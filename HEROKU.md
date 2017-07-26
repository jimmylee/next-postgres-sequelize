## Heroku Deploys: Changes

#### No 1.
Copy and paste these scripts over the existing `build`, `migrate`, and `heroku-postbuild` commands.

* The most important thing is that Heroku needs to run `npm install -g babel-cli` on their end.
* `"heroku-postbuild"` only works with Heroku deploys.

```
  "scripts": {
    "build": "NODE_ENV=production npm install -g babel-cli && next build && npm run migrate",
    "migrate": "NODE_ENV=production npm install -g sequelize-cli && sequelize db:migrate",
    "heroku-postbuild": "NODE_ENV=production npm run build"
  }
```

#### No 2.
No `"devDependencies"`, Heroku needs all dependencies to be in the object `"dependencies"`.


## Heroku Deploys: Setup

Install Heroku.

```sh
npm install -g heroku
heroku login
heroku create
```

Heroku will give you a unique address, like ours: `https://next-postgres.herokuapp.com/`.

Already have a heroku app to deploy to?

```
heroku git:remote -a name-of-your-heroku-app
```

## Heroku Deploys: Configure Postgres and environment variables on Heroku

Go to https://data.heroku.com, add a datastore, pick Postgres.

You will receive `database`, `host`, `password`, `port`, and `username` values. Here is how you set them:

```sh
# Set variables
heroku config:set PRODUCTION_DATABASE=xxxxxxxxxxxxxxx
heroku config:set PRODUCTION_HOST=xxxxxxxxxxxxxxx
heroku config:set PRODUCTION_PASSWORD=xxxxxxxxxxxxxxx
heroku config:set PRODUCTION_PORT=xxxxxxxxxxxxxxx
heroku config:set PRODUCTION_USERNAME=xxxxxxxxxxxxxxx

# See all of your variables
heroku config
```

Please preview your config values at this point in your terminal to make sure you've set them.

Set a secret for [cookie-session](https://github.com/expressjs/cookie-session):

```sh
heroku config:set PRODUCTION_SECRET=xxxxxxxxxxxxxxx
```

Make sure there is a `DATABASE_URL`. If not, you will have to find it and set it:

```sh
heroku config:set DATABASE_URL=postgres://xxxxxxxxxxxxxxx.compute-1.amazonaws.com:xxxx/xxxxxxxxxxxxxxx
```


## Heroku Deploys: Last step

```sh
git push heroku master
```

append `--force` if necessary.



