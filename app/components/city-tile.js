import Ember from 'ember';

export default Ember.Component.extend({
  areAttractionsShowing: false,

  actions: {
    attractionsShow() {
      this.set('areAttractionsShowing', true);
    },
    attractionsHide() {
      this.set('areAttractionsShowing', false);
    },

    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
