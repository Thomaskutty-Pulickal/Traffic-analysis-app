function startStream(req, res) {
    res.status(200).json({ message: 'Stream started' });
  }
  
  module.exports = { startStream };
  