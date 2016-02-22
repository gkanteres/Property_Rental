import DS from 'ember-data';

export default DS.Model.extend({
  cityName: DS.attr(),
  attractions: DS.attr(),
});
