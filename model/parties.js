Parties = new Mongo.Collection("parties");

Parties.allow({

  insert: function (userId, party) {

    return (userId && party.owner === userId) || "cKvmum7AWEejH3eZt" === userId;

  },

  update: function (userId, party, fields, modifier) {

    return (userId && party.owner === userId) || "cKvmum7AWEejH3eZt" === userId;

  },

  remove: function (userId, party) {

    return (userId && party.owner === userId) || 'cKvmum7AWEejH3eZt' === userId;

  }

});