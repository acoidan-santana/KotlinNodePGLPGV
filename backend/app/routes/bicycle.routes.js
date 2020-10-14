module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller.js");
  
    var router = require("express").Router();
  
    // Create a new bicycles
    router.post("/", bicycles.create);
  
    // Retrieve all bicycles
    router.get("/", bicycles.findAll);
  
    // Retrieve all published bicycles
    router.get("/published", bicycles.findAllPublished);
  
    // Retrieve a single bicycles with id
    router.get("/:id", bicycles.findOne);
  
    // Update a bicycles with id
    router.put("/:id", bicycless.update);
  
    // Delete a bicycles with id
    router.delete("/:id", bicycles.delete);
  
    // Delete all bicycles
    router.delete("/", bicycles.deleteAll);
  
    app.use('/api/bicycles', router);
  };