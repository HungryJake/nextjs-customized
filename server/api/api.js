const express = require('express');
const apiRouter = new express.Router();

apiRouter.get('/api/ping', (req, res) => {
  res.status(200).json({
    success: true,
    out: 'pong'
  });
});

module.exports = apiRouter;
