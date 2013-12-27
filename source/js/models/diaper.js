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
 {
   id: 10,
   name: 'XL Pants',
   price: 39.95,
   unitCount: 20,
   size: 0,
   minimumWeight: 16,
   maximumWeight: 25,
   manufacturer: 3
 },
 {
   id: 11,
   name: 'Junior Pants',
   price: 39.95,
   unitCount: 22,
   size: 0,
   minimumWeight: 12,
   maximumWeight: 20,
   manufacturer: 3
 },
 {
   id: 12,
   name: 'Maxi',
   price: 39.95,
   unitCount: 31,
   size: 0,
   minimumWeight: 7,
   maximumWeight: 16,
   manufacturer: 3
 },
 {
   id: 13,
   name: 'Midi',
   price: 58.00,
   unitCount: 60,
   size: 0,
   minimumWeight: 5,
   maximumWeight: 8,
   manufacturer: 3
 },
 {
   id: 14,
   name: 'Midi',
   price: 39.95,
   unitCount: 32,
   size: 0,
   minimumWeight: 5,
   maximumWeight: 8,
   manufacturer: 3
 },
 {
   id: 15,
   name: 'Junior',
   price: 39.95,
   unitCount: 28,
   size: 0,
   minimumWeight: 12,
   maximumWeight: 22,
   manufacturer: 3
 },
 {
   id: 16,
   name: 'Baby Soft Premature',
   price: 0.0,
   unitCount: 24,
   size: 0,
   minimumWeight: 0,
   maximumWeight: 2,
   manufacturer: 4
 },
 {
   id: 16,
   name: 'Baby Soft',
   price: 0.0,
   unitCount: 28,
   size: 1,
   minimumWeight: 2,
   maximumWeight: 5,
   manufacturer: 4
 },
 {
   id: 17,
   name: 'Baby Soft',
   price: 0.0,
   unitCount: 36,
   size: 2,
   minimumWeight: 3,
   maximumWeight: 6,
   manufacturer: 4
 },
 {
   id: 18,
   name: 'Baby Soft',
   price: 0.0,
   unitCount: 62,
   size: 3,
   minimumWeight: 4,
   maximumWeight: 9,
   manufacturer: 4
 },
 {
   id: 19,
   name: 'Comfort',
   price: 0.0,
   unitCount: 54,
   size: 4,
   minimumWeight: 7,
   maximumWeight: 14,
   manufacturer: 4
 },
 {
   id: 20,
   name: 'Comfort',
   price: 0.0,
   unitCount: 50,
   size: 5,
   minimumWeight: 10,
   maximumWeight: 16,
   manufacturer: 4
 },
 {
   id: 21,
   name: 'Comfort',
   price: 0.0,
   unitCount: 46,
   size: 6,
   minimumWeight: 12,
   maximumWeight: 22,
   manufacturer: 4
 },
 {
   id: 22,
   name: 'Comfort',
   price: 0.0,
   unitCount: 42,
   size: 7,
   minimumWeight: 15,
   maximumWeight: 30,
   manufacturer: 4
 },
 {
   id: 23,
   name: 'UP&GO',
   price: 0.0,
   unitCount: 46,
   size: 4,
   minimumWeight: 7,
   maximumWeight: 11,
   manufacturer: 4
 },
 {
   id: 24,
   name: 'UP&GO',
   price: 0.0,
   unitCount: 42,
   size: 5,
   minimumWeight: 10,
   maximumWeight: 14,
   manufacturer: 4
 },
 {
   id: 25,
   name: 'UP&GO',
   price: 0.0,
   unitCount: 38,
   size: 6,
   minimumWeight: 13,
   maximumWeight: 20,
   manufacturer: 4
 },
 {
   id: 26,
   name: 'UP&GO',
   price: 0.0,
   unitCount: 34,
   size: 7,
   minimumWeight: 16,
   maximumWeight: 26,
   manufacturer: 4
 },
 {
   id: 27,
   name: 'UP&GO',
   price: 0.0,
   unitCount: 30,
   size: 8,
   minimumWeight: 19,
   maximumWeight: 30,
   manufacturer: 4
 }
];