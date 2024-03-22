from odoo import fields, models, api
import logging
from decimal import Decimal, ROUND_HALF_EVEN

_logger = logging.getLogger(__name__)
class AccountMoveInherit(models.Model):
    _inherit = "account.move"
    _order = 'name desc'
    # old_tax_value 
    old_amount_tax = fields.Float(string='Old Tax Amount', readonly=True, help="Stores the old tax amount before it was last updated.")

    def write(self, values):
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        _logger.info(self.amount_tax)
        _logger.info(values)
        _logger.info("end !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        result = super().write(values)
        return result

  