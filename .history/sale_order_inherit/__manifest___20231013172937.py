{
    'name': 'Sale Order Inherit',
    'version': '1.0',
    'summary': 'Inherit Sale Order and add custom JS and XML',
    'category': 'Sales',
    'depends': ['sale'],
    'data': [
        'views/sale_order_views.xml',
    ],
    'qweb': ['static/src/xml/custom_template.xml'],
    'js': ['static/src/js/custom_script.js'],
    'installable': True,
}
