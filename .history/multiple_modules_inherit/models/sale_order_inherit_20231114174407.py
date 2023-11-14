from odoo import models, fields,api
import logging
_logger = logging.getLogger(__name__)

class SaleOrderInherit(models.Model):
    _inherit = 'sale.order'

    etude_document = fields.Binary(string='Etude Document')
    etude_filename = fields.Char(string='File Name')

    type_of_sale = fields.Selection([
        ('installation', 'Installation'),
        ('vente_normal', 'Vente Normale'),
        ('location', 'Location')
    ], string='Type of Sale')


    @api.onchange('product_template_id')
    def _product_template_id(self):
        _logger.info("H*********************HHHHHHHHH******************************************")
        _logger.info(self)