window.Diapers = Ember.Application.create();

Diapers.ApplicationAdapter = DS.FixtureAdapter.extend();

Ember.Handlebars.helper('currency', function(value, options) {
  var escaped = Handlebars.Utils.escapeExpression(value);
  return new Handlebars.SafeString(parseFloat(Math.round(escaped * 100) / 100).toFixed(2));
});