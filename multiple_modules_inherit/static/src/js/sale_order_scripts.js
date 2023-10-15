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
                          let getAllTds = document.querySelectorAll('.sale_order_inherit_table td.counter_column')
                          getAllTds.forEach((td,index)=>{
                            td.textContent = index + 1;
                          })
                    }
                    
                    if(node.classList && node.classList.contains('account_move_inherit_table')){
                          let getAllTds = document.querySelectorAll('.account_move_inherit_table td.counter_column')
                          getAllTds.forEach((td,index)=>{
                            td.textContent = index + 1;
                          })
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