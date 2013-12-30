Diapers.IndexView = Ember.View.extend({
    didInsertElement: function(){
        $(document).ready(function() {
            $('#weight-slider').slider();
            $('#weight-slider').on('slide', function(e) {
                var valueString = 'Uh det ved jeg ikke, vis alle bleer.';
                if (e.value > -1) { valueString = e.value + ' kg'};
                $("#weight-value").text(valueString);
                this.set('weight', e.value);
            });
        });
    }
});