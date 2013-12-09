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
   name: 'New Born - Extra Soft',
   price: 26.00,
   unitCount: 28,
   size: 1,
   minimumWeight: 2,
   maximumWeight: 4,
   manufacturer: 1
 },
 {
   id: 2,
   name: 'Maxi',
   price: 54.00,
   unitCount: 50,
   size: 4,
   minimumWeight: 7,
   maximumWeight: 16,
   manufacturer: 1
 },
 {
   id: 3,
   name: 'Pants Junior',
   price: 50.00,
   unitCount: 30,
   size: 5,
   minimumWeight: 15,
   maximumWeight: 25,
   manufacturer: 1
 },
 {
   id: 4,
   name: 'XL',
   price: 54.00,
   unitCount: 40,
   size: 6,
   minimumWeight: 15,
   maximumWeight: 30,
   manufacturer: 1
 },
 {
   id: 5,
   name: 'Junior',
   price: 54.00,
   unitCount: 44,
   size: 5,
   minimumWeight: 12,
   maximumWeight: 25,
   manufacturer: 1
 },
 {
   id: 6,
   name: 'Midi',
   price: 50.00,
   unitCount: 56,
   size: 3,
   minimumWeight: 5,
   maximumWeight: 9,
   manufacturer: 1
 },
 {
   id: 7,
   name: 'Bleer Midi',
   price: 73.00,
   unitCount: 82,
   size: 3,
   minimumWeight: 5,
   maximumWeight: 9,
   manufacturer: 2
 },
 {
   id: 8,
   name: 'Bleer Maxi',
   price: 75.50,
   unitCount: 70,
   size: 4,
   minimumWeight: 8,
   maximumWeight: 18,
   manufacturer: 2
 },
 {
   id: 9,
   name: 'Junior bleer',
   price: 71.50,
   unitCount: 58,
   size: 5,
   minimumWeight: 12,
   maximumWeight: 25,
   manufacturer: 2
 },
];