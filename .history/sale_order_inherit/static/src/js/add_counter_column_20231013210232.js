/** @odoo-module **/
import { registry } from "@web/core/registry";
import { useInputField } from "@web/views/fields/input_field_hook";
const { Component, useRef } = owl;

export class CounterField extends Component {
    static template = 'FieldCounter'
    setup(){
        super.setup();
        this.input = useRef('inputCounter');
        useInputField({ getValue: () => this.props.value || "", refName: "inputCounter" });
    }
    mounted(){
        if (this.input.el){
            let rowIndex = this.el.closest('tr').rowIndex; // Get row index
            this.input.el.value = rowIndex + 1; // +1 because rowIndex starts from 0
        }
    }
}

registry.category("fields").add("counter_field", CounterField);
