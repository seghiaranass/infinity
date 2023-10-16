document.addEventListener("DOMContentLoaded", function () {
    var tablesToObserve = document.querySelectorAll('.sale_order_inherit_table');

    var config = { childList: true, subtree: false }; // Only observe direct children

    var callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName === "TR") { // Check if a table row is added
                        // Here, re-execute whatever logic you need for the table rows
                        let getAllTds = document.querySelectorAll('.sale_order_inherit_table td.counter_column');
                        getAllTds.forEach((td, index) => {
                            td.textContent = index + 1;
                        });
                    }
                });
            }
        }
    };

    tablesToObserve.forEach(function(table) {
        var observer = new MutationObserver(callback);
        observer.observe(table, config);
    });
});
