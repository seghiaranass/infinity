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
                            // test is only test
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


document.addEventListener("DOMContentLoaded", function () {
    var targetNode = document.querySelector('body');
    var config = { attributes: false, childList: true, subtree: true };
    let is_balance = is_facture = false;
    var processMonths = function() {
        var elements;
        if(is_balance){
             elements = document.querySelectorAll('div[name="created_datetime"]');
             is_balance = false;
        }else if(is_facture){
             elements = document.querySelectorAll('td[name="invoice_date"]');
             is_facture = false;
        }

        processAllTableRows(elements);
        
    };

    var callback = function (mutationsList, observer) {
        is_balance = is_facture = false;
        for (var mutation of mutationsList) {
            if (mutation.addedNodes.length) {
                var isTargetAdded = false;
                mutation.addedNodes.forEach(function(node) {

                    if(node.classList && node.classList.contains('balance_view_created_datetime')){
                        isTargetAdded = true;
                        is_balance = true;
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