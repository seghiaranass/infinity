odoo.define('sale_add_counter_column.ListView.Buttons', function (require) {
    "use strict";

    var ListRenderer = require('web.ListRenderer');

    ListRenderer.include({
        /**
         * @override
         */
        _renderHeader: function () {
            alert("Hello world")
            var $header = this._super.apply(this, arguments);
            // Add a new header for your custom column
            $header.children().eq(0).append($('<th>', {
                text: 'Custom Column',
            }));
            return $header;
        },
        /**
         * @override
         */
        _renderBody: function () {
            var $body = this._super.apply(this, arguments);
            // Add content for your custom column in each row
            $body.children().each(function () {
                $(this).append($('<td>', {
                    text: 'Custom Data', // Add your custom data/logic here
                }));
            });
            return $body;
        },
    });
});
