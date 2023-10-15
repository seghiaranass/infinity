/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';

export class AddCounterColumn2Controller extends ListController {
    setup() {
        super.setup();
        alert("Hello")
    }

}

registry.category("views").add("add_counter_column", {
    ...listView,
    Controller: AddCounterColumn2Controller,
    buttonTemplate: "add_counter_column.ListView.Buttons",
});
