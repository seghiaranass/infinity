odoo.define('your_module_name.custom_tree_view_behavior', function(require) {
    const ListView = require('@web/views/list/list_view');  // Ensure this is the correct path to ListView in Odoo 16
    const Dialog = require('web.Dialog');
    const {_t} = require("web.core");
    const { useService } = require("@web/core/utils/hooks");

    const CustomListView = ListView.extend({
        onCellClicked(record, column, ev) {
            this._super.apply(this, arguments);  // Call original method

            if (!this.props.archInfo.noOpen) {
                // Prevent default behavior
                ev.preventDefault();
                ev.stopPropagation();

                const actionService = useService("action");

                new Dialog(this, {
                    size: 'medium',
                    buttons: [
                        {
                            text: _t("Open Form View"), classes: 'btn-primary', close: true,
                            click: () => {
                                actionService.doAction({
                                    type: 'ir.actions.act_window',
                                    res_model: this.props.list.model,
                                    res_id: record.id,
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
                        text: _t(" If you want to open a form of this record, click 'Open Form View'. "),
                    }),
                }).open();
            }
        },
    });

    return {
        CustomListView: CustomListView,
    };
});
