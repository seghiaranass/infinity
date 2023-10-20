odoo.define('multiple_modules_inherit.custom_tree_view_behavior', function(require) {
    const {_t } = require("web.core");
    const { useService } = require("@web/core/utils/hooks");
    const {ListRenderer } = require('@web/views/list/list_renderer');
    const { patch } = require("@web/core/utils/patch");
    const Dialog = require('web.Dialog');

    patch(ListRenderer.prototype, 'multiple_modules_inherit/static/src/js/custom_tree_view_behavior.js', {
        setup() {
            this._super.apply(this, arguments);
            this.action = useService("action");
        },

        async onCellClicked(record, column, ev) {
            if (!this.props.archInfo.noOpen && record.resModel === "balance") {
                ev.preventDefault();  
                ev.stopPropagation();

                // Construct the URL for the iframe
                const formViewURL = `/web#id=${record.resId}&view_type=form&model=${record.resModel}`;

                new Dialog(this, {
                    size: 'large',
                    title: _t("Record Form"),
                    buttons: [{ text: _t("Close"), close: true }],
                    $content: $('<iframe>', {
                        src: formViewURL,
                        width: '100%',
                        height: '500px',   // You can adjust the height as needed
                        frameborder: '0'
                    })
                }).open();
            } else {
                this._super.apply(this, arguments);
            }
        },
    });
});
