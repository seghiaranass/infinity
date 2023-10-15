/** @odoo-module **/
import { FormRenderer } from "@web/views/form/form_renderer";
const Dialog = require('web.Dialog');
export class ComSaleOrderRender extends FormRenderer {
   setup() {
       super.setup();
       const theTable = document.querySelector('div[name="order_line"] table');
       console.log(theTable);
   }
   _MoreOptions(){
                   var dialog = new Dialog(null, {
                       title: "js class blog",
                       size: 'medium',
                       $content: $('<div/>', {
                           html: 'hai'
                       }),
                       buttons: [{
                           text: "Close",
                           close: true
                       }]
                   });
                   dialog.open();
   }
}

import { formView } from '@web/views/form/form_view';
import { registry } from "@web/core/registry";
// import { ComSaleOrderRender } from '@js_class_blog/js/formrender';
console.log('SaleOrderRender',ComSaleOrderRender)
export const JsClassBlog = {
   ...formView,
   Renderer: ComSaleOrderRender,
};
registry.category("views").add("sale_order_blog", JsClassBlog);