Diapers.IndexController = Ember.ArrayController.extend({
    sortProperties: ['minimumWeight', 'maximumWeight'],
    sortAscending: true,
    weight: -1,
    filteredResult: function() {
        var weight = this.get('weight');

        if (weight == -1) {
            return this.get('model');
        }
        else {
            return this.get('model').filter(function(diaper, index, self) {
                if (diaper.get('minimumWeight') <= weight && weight <= diaper.get('maximumWeight')) { return true; }
            });
        }
    }.property('@each.minimumWeight', '@each.maximumWeight', 'weight')
});