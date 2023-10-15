/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';

export class AddCounterColumnController extends ListController {
    setup() {
        super.setup();
        alert("Hello")
    }

}

registry.category("views").add("add_counter_column", {
    ...listView,
    Controller: AddCounterColumnController,
    buttonTemplate: "add_counter_column.ListView.Buttons",
});
