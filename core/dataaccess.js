const debugDatabase = require('debug')('app:database');
const mongoose = require('mongoose');

module.exports.insert = (model, res) => {
    const response = model.save()
        .then(response => {
            debugDatabase('Saved successful', response);
            return res.status(201).send(response);
        })
        .catch(err => {
            debugDatabase('Save unsuccessful', err);
            return res.status(500).send('Internal Server Error', err);
        });

    return response;
}

module.exports.getAll = (model, res) => {

    const response = model.find()
        .then(response => {
            debugDatabase(`Get All successful. Model: ${Object.prototype.toString.call(model)}, response: ${response}`);
            return res.status(200).send(response);
        })
        .catch(err => {
            debugDatabase('Get All unsuccessful', Object.prototype.toString.call(model), err);
            return { error: err };
        });

    return response;
}

module.exports.get = (model, filter, res) => {
    const id = mongoose.Types.ObjectId(filter);
    const response = model.find(id)
        .then(response => {
            debugDatabase('Get successful', model, response);
            return res.status(201).send(response);
        })
        .catch(err => {
            debugDatabase('Get unsuccessful', model, err);
            return { error: err };
        });

    return response;
}

module.exports.delete = (model, filter, res) => {
    const id = mongoose.Types.ObjectId(filter);
    const response = model.findByIdAndRemove(id)
        .then(response => {
            debugDatabase('Delete successful', model, response);
            return res.status(201).send(response);
        })
        .catch(err => {
            debugDatabase('Delete unsuccessful', model, err);
            return { error: err };
        });

    return response;
}

module.exports.update = (model, filter, updateModel, res) => {
    const id = mongoose.Types.ObjectId(filter);
    const response = model.findByIdAndUpdate(id, updateModel, { new: true })
        .then(response => {
            debugDatabase('Updated successful', response);
            return res.status(200).send(response);
        })
        .catch(err => {
            debugDatabase('Update unsuccessful', err);
            return res.status(500).send('Internal Server Error', err);
        });

    return response;
}
