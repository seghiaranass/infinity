document.addEventListener("DOMContentLoaded", function () {
    var targetNode = document.querySelector('.row_colum_counter_numbre_table');

    // Check if targetNode exists before proceeding
    if (!targetNode) {
        console.error('The target node does not exist.');
        return; // Exit if the node doesn't exist
    }

    var config = { attributes: false, childList: true, subtree: true };

    var callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(function(node) {

                    // No need to check twice for the same class name
                    if(node.classList && node.classList.contains('row_colum_counter_numbre_table')){
                        let getAllTds = node.querySelectorAll('td.counter_column');  // Directly search within the mutated node
                        getAllTds.forEach((td, index) => {
                            td.textContent = index + 1;
                        });
                    }
                });
            }
        }
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
});
