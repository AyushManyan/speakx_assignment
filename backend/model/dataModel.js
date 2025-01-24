const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  text: String,
  showInOption: Boolean,
  isAnswer: Boolean
});

const optionSchema = new Schema({
  text: String,
  isCorrectAnswer: Boolean
});

const dataSchema = new Schema({
  _id: {
    type: String
  },
  type: {
    type: String,
    enum: ['ANAGRAM', 'MCQ', 'READ_ALONG']
  },
  anagramType: {
    type: String,
    enum: ['WORD', 'SENTENCE'],
    default: null
  },
  blocks: {
    type: [blockSchema],
    default: null
  },
  options: {
    type: [optionSchema],
    default: null
  },
  siblingId: {
    type: String,
    default: null
  },
  solution: {
    type: String,
    default: null
  },
  title: String
});

// create model
const Data = mongoose.model('Data', dataSchema);
module.exports = Data;