from odoo import models, fields

class SaleOrderLineCustom(models.Model):
    _inherit = 'sale.order.line'

    custom_field = fields.Selection([
        ('available', 'Available'),
        ('not_available', 'Not Available')
    ], string="Availability", default='available', help="Product Availability")
