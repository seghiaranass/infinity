odoo.define('multiple_modules_inherit.custom_tree_view_behavior', function(require) {
    const {_t } = require("web.core");
    const { useService } = require("@web/core/utils/hooks");
    const ListView = require('@web/views/list/list_renderer');  // Ensure this is the correct path to ListView in Odoo 16
    const { patch } = require("@web/core/utils/patch");
    const Dialog = require('web.Dialog');

    patch(ListView.prototype, 'multiple_modules_inherit/static/src/js/custom_tree_view_behavior.js', {
        setup() {
            this._super.apply(this, arguments);
            this.action = useService("action");
        },

       
    });
});
