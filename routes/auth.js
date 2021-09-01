const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with google

// @route <GET />
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


// @desc Google authcallback

// @route <GET />
router.get('/google/callback', 
passport.authenticate('google', {failureRedirect: '/'}),
 (req,res) => {
        res.redirect('/dashboard')
    })

  //@desc Logout user
  // @routes //auth/logout
  
  router.get('/logout', (req,res) => {
      req.logout()
      res.redirect('/')
  })


module.exports = router
