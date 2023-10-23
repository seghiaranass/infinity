odoo.define('multiple_modules_inherit.custom_tree_view_behavior', function(require) {
    const { useService } = require("@web/core/utils/hooks");
    const { ListRenderer } = require('@web/views/list/list_renderer');
    const { patch } = require("@web/core/utils/patch");

    patch(ListRenderer.prototype, 'multiple_modules_inherit/static/src/js/custom_tree_view_behavior.js', {
        setup() {
            this._super.apply(this, arguments);
            this.action = useService("action");
        },

        async onCellClicked(record, column, ev) {
            if (record.resModel === 'balance') {  // Check if the model is 'balance'
                if (!this.props.archInfo.noOpen) {
                    ev.preventDefault();  // Prevent default behavior
                    ev.stopPropagation();

                    this.action.doAction({
                        type: 'ir.actions.act_window',
                        res_model: record.resModel,
                        res_id: record.resId,
                        views: [[false, 'form']],
                        target: 'new',
                        context: record.context
                    });
                    
                } else {
                    this._super.apply(this, arguments);  // Call original method if noOpen is set
                }
            } else {
                // If it's not the 'balance' model, fallback to the default behavior
                this._super.apply(this, arguments);
            }
        },
    });
});
