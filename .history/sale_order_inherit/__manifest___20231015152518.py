{
    'name': 'Multiple Modules Inherit',
    'version': '1.0',
    'summary': 'Inherit Multiple Modules and add custom JS and XML',
    'category': 'Sales',
    'depends': ['base','web','sale'],
    'data': [
        'views/sale_order_views.xml',
        # 'views/assets.xml',
    ],
    'assets': {
        'web.assets_backend': [
            "sale_order_inherit/static/src/js/sale_order_scripts.js",
            # "sale_order_inherit/static/src/js/add_counter_column.js",
            # "sale_order_inherit/static/src/xml/add_counter_column.xml",
        ]
        
        
        },




    'installable': True,
}
