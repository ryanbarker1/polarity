import express from 'express'
import { Profile } from "../models/schemas"

let router = express.Router()

router.get('/api/profiles', function(req, res, next){
  Profile.find().exec((err, profiles) => {
    if(err){
      res.json({success: false, message: "Failed query"})
    }else{
      res.write(JSON.stringify(profiles))
      res.end()
    }
  }) 
  
})

router.post('/api/profiles/create',  function(req, res, next){
  new Profile(req.body).save(err => {
    if(err){
      res.json({success: false, message: "Unable to save profile"})
    }else{
      res.end()
    }
  })
})

router.get('/api/profiles/:id', function(req, res, next){
  Profile.findById(req.params.id, (err, profile) => {
    if(err){
      res.json({success: false, message: "Requested profile not found"})
    }else{
      res.write(JSON.stringify(profile))
      res.end()
    }
  })
})

router.put('/api/profiles/:id/update', function(req, res, next){
  Profile.findById(req.params.id, (err, profiles) => {
    if(err){
      res.json({success: false, message: "profile not found"})
    }else{
      console.log(req.body)
      Object.assign(profile, req.body)
      profile.save(err => {
        if(err){
          res.json({success: false, message: "Unable to update profile"})
        }else{
          res.end()
        }
      })
    }
  })
})

router.delete('/api/profiles/:id/delete',  function(req, res, next){
  console.log(req.headers)
  Profile.findByIdAndRemove(req.params.id, (err) => {
    if(err){
      res.json({success: false, message: "Unable to delete profile or profile is not found"})
    }else{
      res.end()
    }
  })
})
export {router }
