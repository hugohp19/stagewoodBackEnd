# Stagewood - BackEnd

This back-end side of the application have all the logic to process request to the database. It was done using the following technologies: GraphQL, Apollo Server, 
Prisma, MySQL database, AWS RDS, Heroku. Other technologies used: bcryptjs and jsonwebtoken for validation/verification, concurrently to run both sides (server and client) in developer
enviroment, and cloudinary to store users' profile pictures.

Mutations:
login(email, password);
signup(name, username, email, password, picture)

## :memo: Where do I start?

### Step 1: Set-up
- [ ] `Git clone` https://github.com/hugohp19/stagewoodBackEnd.git
- [ ] `cd` into repository
- [ ] `npm install`
- [ ] `npm start`

### Step 2: Main Dependencies
- [ ] `@prisma/client` run command `$ npm install @prisma/client`
- [ ] `apollo-server` run command `$ npm install apollo-server`
- [ ] `bcryptjs` run command `$ npm install bcryptjs`
- [ ] `cloudinary` run command `$ npm install cloudinary`
- [ ] `concurrently` run command `$ npm install concurrently`
- [ ] `jsonwebtoken` run command `$ npm install jsonwebtoken`
- [ ] `graphql` run command `$ npm install graphql
- [ ] `dotenv` run command `$ npm install dotenv`

### Step 3: Available build commands

- `npm start`: runs the apollo server and displays the graphQL playground


### Step 4: API Keys (.env) :key:

| Key Name                    |  Source                  |
| ----------------------------|:-----------------------  |
| DATABASE_URL=               | [:link:][AWS]  |
| APP_SECRET=                 | [:link:][JWT]            |
| CLOUDINARY_URL=             | [:link:][Cloudinary]     |

[AWS]: https://aws.amazon.com/
[JWT]: https://jwt.io/
[Cloudinary]: https://cloudinary.com/


### :memo: Deploying to heroku?

1. `heroku create <app_name>`
2. `git remote -v` -> make sure to have heroku as one of the remotes
3. `git push heroku main`

Other helpfull commands after deployment:
1. `git push heroku main` to redeploy after new changes
2. `heroku logs --tail` to see logs (good for troubleshooting)

<br /><br />
## :computer: Runs on Heroku
:rocket:  https://stagewooddb.herokuapp.com/
