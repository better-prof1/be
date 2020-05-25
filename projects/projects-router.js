const express = require('express');


const Projects = require('./projects-model.js');

const router = express.Router();

// /api/users/:id/projects
router.get('/:id/projects', (req, res) => {
  const { id } = req.params;

  Projects.getUsersWithProjects(id)
  .then(users => {
    if (users.length > 0) {
      console.log(user)
      
      res.status(200).json(users);
    } else {
      console.log(user)
      res.status(404).json({ message: 'Could not find project for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get users's projects" });

  });
});

module.exports = router;