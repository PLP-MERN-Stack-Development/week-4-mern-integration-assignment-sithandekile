// creating the generic crud controller
const createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = (Model) => async (req, res) => {
  try {
    const docs = await Model.find();
    res.json(docs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) return res.status(404).send();
    res.json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOne = (Model) => async (req, res) => {
  try {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoc) return res.status(404).send();
    res.json(updatedDoc);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOne = (Model) => async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully!' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
};
