/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';

 class AddCounterColumnController extends ListController {
    setup() {
        super.setup();
        alert("Hello")
    }

}

registry.category("views").add("add_counter_column_temp", {
    ...listView,
    Controller: AddCounterColumnController,
    buttonTemplate: "sale_add_counter_column.ListView.Buttons",
});
