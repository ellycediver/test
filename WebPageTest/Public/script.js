/**
 * Created by Eduardo on 9/15/2016.
 */

var Fuck = function(options){
    this.fuckContainer = $('<div>').css('height','100%');

    this.buildFuckPanel();
    $('body').append(this.fuckContainer);
};

Fuck.prototype = {
    buildFuckPanel:function(){
        var data = this.getFuck();
        var fuckPanel = $('<div>').addClass('fuckPanel');
        fuckPanel.css('padding-top','20px').css('padding-left','150px').css('padding-right','150px');
        this.fuckContainer.append(fuckPanel);

    },

    getFuck:function() {
        var $self = this;
        var fuckJson;
        $.get(
            'http://localhost:3031/getFuck',
            function(data) {
                fuckJson = data.body;
                $self.fuckPanel.append(data);
                console.log(data);
            }
        );
        return fuckJson;
    },
};