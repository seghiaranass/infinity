from odoo import models, fields

class SaleOrderInherit(models.Model):
    _inherit = 'sale.order'

    etude_document = fields.Binary(string='Etude Document')
    etude_filename = fields.Char(string='File Name')
