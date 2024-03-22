{
    'name': 'Multiple Modules Inherit',
    'version': '1.0',
    'summary': 'Inherit Multiple Modules and add custom JS and XML',
    'category': 'Sales',
    'depends': ['base','web','sale','account','purchase'],
    'data': [
        # 'views/add_column_number.xml',
        'views/sale.view_order_form.xml',
        'views/navbar_companies.xml',
       


    ],
    'assets': {
        'web.assets_backend': [
            # "multiple_modules_inherit/static/src/js/sale_order_scripts.js",
            "multiple_modules_inherit/static/src/js/many2many_tags_field.js",
            "multiple_modules_inherit/static/src/js/custom_tree_view_behavior.js",
            'multiple_modules_inherit/static/src/xml/sale_order_views.xml',
            # 'multiple_modules_inherit/static/src/xml/navbar_change_color.xml',
            'multiple_modules_inherit/static/src/css/style.css',
            
        ],
            'web.assets_qweb': [
                  "multiple_modules_inherit/static/src/js/many2many_tags_field.js",
                
            ],

        
        
        },


 'depends': ['base','web','account','mail','sale'],  # This is the key addition you should make

    'installable': True,
}
