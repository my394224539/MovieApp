import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({
  primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalizeResponse(store, primaryModelClass, payload) {
    payload.data = {};
    payload.data.imdbID = payload.imdbID;
    payload.data.type = primaryModelClass.modelName;
    payload.data.attributes = {
      Title: payload.Title,
      Year: payload.Year,
      Type: payload.Type,
      Poster: payload.Poster,
      Plot: payload.Plot,
      Actors: payload.Actors,
      Director: payload.Director
    };
    return this._super(...arguments);
  }
});
