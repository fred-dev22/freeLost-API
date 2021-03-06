const {
  createObject,
  allObject,
  deleteObjectById,
  objectUpdate,
  findTrouverValider,
  findObjectPerdu,
  findAllValiderObject,
} = require("../queries/object.queries");
const cpUpload = require("../config/cloudinary.config");

exports.getAllObjects = async (req, res, next) => {
  try {
    const objects = await allObject();
    res.status(200).json({
      objects,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    next(err);
  }
};
exports.addNewObject = async (req, res, next) => {
  const body = req.body;
  try {
    const newObject = await createObject(body);
    res.json(newObject);
    app.emit("addObject", newObject);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};

exports.uploadImage = [
  cpUpload,
  async (req, res, next) => {
    try {
      // console.log(req.file);
      // console.log(req.body);
      let images = "";
      req.files.images.forEach((element) => {
        images += element.path + " ";
      });
      res.json({ path: images });
    } catch (e) {
      res.json({ error: [e.message] });
      next(e);
    }
  },
];

// exports.UpdateObject = async (req, res) => {
//   Object.findOneAndUpdate(
//     { _id: req.params.ObjectId },
//     req.body,
//     { new: true },
//     (err, Object) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(Object);
//     }
//   );
// };

exports.deleteObject = async (req, res, next) => {
  try {
    const object = await deleteObjectById(req.params.ObjectId);
    res.json(object);
  } catch (e) {
    res.json({ error: [e.message] });
    next(e);
  }
};
exports.updateObject = async (req, res, next) => {
  const idObject = req.params.ObjectId;
  const body = req.body;
  try {
    const object = await objectUpdate(idObject, body);
    res.status(200).json({
      object,
    });
  } catch (e) {
    next(e);
  }
};
exports.trouverValider = async (req, res, next) => {
  try {
    const object = await findTrouverValider();
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.trouverNonValider = async (req, res, next) => {
  try {
    const object = await findTrouverNonValider();
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.objectPerdu = async (req, res, next) => {
  try {
    const object = await findObjectPerdu();
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.findAllValider = async (req, res, next) => {
  try {
    const object = await findAllValiderObject();
    res.status(200).json({
      object,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
