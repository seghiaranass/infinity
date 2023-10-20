const {_t } = require("web.core")
// import { _t } from 'web.core';
const { useService } = require("@web/core/utils/hooks");
import { useService } from "@web/core/utils/hooks";
import { Many2ManyTagsFieldColorEditable } from "@web/views/fields/many2many_tags/many2many_tags_field";
import { patch } from "@web/core/utils/patch";
const Dialog = require('web.Dialog');

patch(Many2ManyTagsFieldColorEditable.prototype, '/multiple_modules_inherit/static/src/js/many2many_tags_field.js',{
    setup(){
        this._super.apply(this,arguments);
        this.action = useService("action");
    },
    onBadgeClick(ev, record) {
        var copytext = ev.target.innerText;
        var buttons = [
            {
                text: _t("Ok"),
                classes: 'btn-primary',
                close: true,
            },
        ];
        new Dialog(self, {
            size: 'medium',
            buttons: [
                {
                    text: _t("Open Form View"), classes: 'btn-primary', close: true,
                    click: () => {
                        this.action.doAction({
                            type: 'ir.actions.act_window',
                            res_model: this.props.relation,
                            res_id: record.data.id,
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
                text: _t(" If you want to open a form view click 'Open Form View'. "),
            }),
        }).open();
        return this._super.apply(this, arguments);
    }
 })