{
    'name': 'Sale Order Inherit',
    'version': '1.0',
    'summary': 'Inherit Sale Order and add custom JS and XML',
    'category': 'Sales',
    'depends': ['base','web','sale'],
    'data': [
        'views/sale_order_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # "sale_order_inherit/static/src/js/add_counter_column.js",
            # "sale_order_inherit/static/src/js/add_counter_column.js",
            # "sale_order_inherit/static/src/xml/add_counter_column.xml",
        ]
        
        
        },






    'installable': True,
}
