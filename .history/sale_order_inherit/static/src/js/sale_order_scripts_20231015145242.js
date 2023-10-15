document.addEventListener("DOMContentLoaded", function () {
    var targetNode = document.querySelector('body');
    var config = { attributes: false, childList: true, subtree: true };


    var callback = function (mutationsList, observer) {
        is_balance = is_facture = false;
        for (var mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                var isTargetAdded = false;
                mutation.addedNodes.forEach(function(node) {

                    if(node.classList && node.classList.contains('sale_order_inherit_table')){
                          let getAllTds = document.querySelectorAll('.sale_order_inherit_table .counter_column span')
                          console.log(getAllTds);
                    }


                });

                if (isTargetAdded) {
                    processMonths();
                }
            }
        }
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
});