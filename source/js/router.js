Diapers.Router.map(function() {
  // put your routes here
});

Diapers.IndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('diaper');
  }
});