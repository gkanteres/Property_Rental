import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('city');
 },

 actions: {
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },

    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});
