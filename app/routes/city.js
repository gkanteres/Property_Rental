import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
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
