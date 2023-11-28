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

    custom_state_selection = fields.Selection(
    [
        ('draft', 'Devis'),
        ('sent', 'Sent'),
        ('sale', 'Bon de commande'),
        # Add other states as required
        ('done', 'Done'),
        ('cancel', 'Cancel'),
    ],
    string='Custom State'
)

    @api.onchange('tax_totals')
    def _amount_untaxed(self):
        _logger.info("ggggggggggggg**************KKKKKKKKKKKKKKKKKKKKK))))))))))))))))))))))")
        _logger.info(self)