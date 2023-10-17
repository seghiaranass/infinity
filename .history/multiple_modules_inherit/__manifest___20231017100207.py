{
    'name': 'Multiple Modules Inherit',
    'version': '1.0',
    'summary': 'Inherit Multiple Modules and add custom JS and XML',
    'category': 'Sales',
    'depends': ['base','web','sale'],
    'data': [
        # 'views/sale_order_views.xml',
       


    ],
    'assets': {
        'web.assets_backend': [
            # "multiple_modules_inherit/static/src/js/sale_order_scripts.js",
             'multiple_modules_inherit/static/src/xml/sale_order_views.xml',
        ]
        
        
        },




    'installable': True,
}
