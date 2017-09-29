module.exports = {
  getPlanes: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_planes()
      .then(planes => res.status(200).send(planes))
      .catch(error => console.log('error', error))
  },

  addPlane: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.add_plane(req.body)
      .then(planes => res.status(200).send(planes))
      .catch(error => console.log('error', error))
  }
}
