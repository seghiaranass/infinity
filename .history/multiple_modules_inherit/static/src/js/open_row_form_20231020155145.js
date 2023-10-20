odoo.define("multiple_modules_inherit",function(require){
    var ListRenderer = require('web.ListRenderer');

    ListRenderer.include({
        _onRowClicked: function (event) {
            event.stopPropagation();
    
            var self = this;
            var id = $(event.currentTarget).data('id');
            
            if (id) {
                this.trigger_up('open_record', {
                    id: id,
                    on_saved: function () {
                        self.unselectRow();
                    }
                });
            }
        },
    });
    
})