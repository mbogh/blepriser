Diapers.Diaper = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  unitCount: DS.attr('number'),
  minimumWeight: DS.attr('number'),
  maximumWeight: DS.attr('number'),

  manufacturer: DS.belongsTo('manufacturer'),

  unitPrice: function() {
    return this.get('price') / this.get('unitCount');
  }.property('price', 'unitCount')
});

Diapers.Diaper.FIXTURES = [
 {
   id: 1,
   name: 'Ble ble ble',
   price: 29.50,
   unitCount: 50,
   minimumWeight: 3,
   maximumWeight: 6,
   manufacturer: 1
 }
];