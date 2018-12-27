/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      required: true,
      columnName: 'transId'
    },
    date: {
      type: 'ref',
      required: true,
      columnName: 'transDate',
      columnType: 'datetime'
    },
    description: {
      type: 'string',
      columnName: 'transDescription'
    },
    amount: {
      type: 'number',
      columnName: 'transAmount'
    },
    createdAt: false,
    updatedAt: false

  },

};