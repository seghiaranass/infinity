odoo.define('multiple_modules_inherit.open_row_form', function(require){
    const { useService } = require("@web/core/utils/hooks");
    const { ListView } = require("@web/views/list/list_renderer"); // Replace with the correct tree view class in Odoo 16
    const { patch } = require("@web/core/utils/patch");
    const Dialog = require('web.Dialog');

    patch(ListView.prototype, 'multiple_modules_inherit/static/src/js/open_row_form.js', {
        setup(){
            this._super.apply(this,arguments);
            this.action = useService("action");
        },
        _onRowClicked(event) {  // Make sure this is the correct method/event for Odoo 16
            const recordId = event.currentTarget.dataset.id;
            
            new Dialog(this, {
                size: 'medium',
                buttons: [
                    {
                        text: _t("Open Form View"), classes: 'btn-primary', close: true,
                        click: () => {
                            this.action.doAction({
                                type: 'ir.actions.act_window',
                                res_model: this.modelName,  // Adjust accordingly to get the model's name
                                res_id: parseInt(recordId),
                                views: [[false, 'form']],
                                target: 'current',
                            });
                        },
                    },
                    {
                        text: _t("Cancel"), close: true
                    },
                ],
                $content: $('<div>', {
                    text: _t(" If you want to open a form of this click 'Open Form View'. "),
                }),
            }).open();
            
            return this._super.apply(this, arguments);
        }
    });
});
