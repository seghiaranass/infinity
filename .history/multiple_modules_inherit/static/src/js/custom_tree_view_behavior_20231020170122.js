odoo.define('multiple_modules_inherit.custom_tree_view_behavior', function(require) {
    const {_t } = require("web.core");
    const { useService } = require("@web/core/utils/hooks");
    const {ListRenderer } = require('@web/views/list/list_renderer');  // Ensure this is the correct path to ListView in Odoo 16
    const { patch } = require("@web/core/utils/patch");
    const Dialog = require('web.Dialog');

    patch(ListRenderer .prototype, 'multiple_modules_inherit/static/src/js/custom_tree_view_behavior.js', {
        setup() {
            this._super.apply(this, arguments);
            this.action = useService("action");
        },

        async onCellClicked(record, column, ev) {
            if (!this.props.archInfo.noOpen) {
                ev.preventDefault();  // Prevent default behavior
                ev.stopPropagation();
                console.log(this.props.relation)
                console.log(record)
                new Dialog(this, {
                    size: 'medium',
                    buttons: [
                        {
                            text: _t("Open Form View"), classes: 'btn-primary', close: true,
                            click: () => {
                                this.action.doAction({
                                    type: 'ir.actions.act_window',
                                    res_model: record.resModel,
                                    res_id: record.resId,   // Updated this line
                                    views: [[false, 'form']],
                                    target: 'current',
                                    context: record.context
                                });
                                
                            },
                        },
                        {
                            text: _t("Cancel"), close: true
                        },
                    ],
                    $content: $('<div>', {
                        text: _t(" If you want to open a form of this record, click 'Open Form View'. "),
                    }),
                }).open();
            } else {
                this._super.apply(this, arguments);  // Call original method if noOpen is set
            }
        },
    });
});
