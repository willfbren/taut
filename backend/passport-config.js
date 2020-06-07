const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const knex = require('knex')

function initialize(passport, getUserByUsername) {
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        if (user == null) {
            return done(null, false, { message: 'Username not found' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUser))
    passport.serializeUser((user, done) => {
        done(null, user.id)
     })
    passport.deserializeUser((id, done) => { 
        knex('users').where({id}).first()
        .then(user => done(null, user))
        .catch(err => done(err, null))
    })
}

module.exports = initialize