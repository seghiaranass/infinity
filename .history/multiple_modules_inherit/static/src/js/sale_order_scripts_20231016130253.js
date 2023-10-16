document.addEventListener("DOMContentLoaded", function() {
    var bodyNode = document.querySelector('body');

    var config = { attributes: false, childList: true, subtree: true };

    var specificObserver; // For nested observation

    var specificCallback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName === "TR") {
                        let getAllTds = node.querySelectorAll('td.counter_column');
                        getAllTds.forEach((td, index) => {
                            td.textContent = index + 1;
                        });
                    }
                });
            }
        }
    };

    var bodyCallback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.classList && node.classList.contains('row_colum_counter_numbre_table')) {
                        // If specific table is detected, start a new observer for this table
                        if (specificObserver) {
                            specificObserver.disconnect(); // Disconnect old one if it exists
                        }
                        specificObserver = new MutationObserver(specificCallback);
                        specificObserver.observe(node, config);
                    }
                });
            }
        }
    };

    var bodyObserver = new MutationObserver(bodyCallback);
    bodyObserver.observe(bodyNode, config);
});
