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


    @api.onchange('amount_untaxed')
    def _amount_untaxed(self):
        _logger.info("ggggggggggggg**************KKKKKKKKKKKKKKKKKKKKK))))))))))))))))))))))")
    @api.onchange('amount_total')
    def _amount_total(self):
        _logger.info("total ggggggggggggg**************KKKKKKKKKKKKKKKKKKKKK))))))))))))))))))))))")