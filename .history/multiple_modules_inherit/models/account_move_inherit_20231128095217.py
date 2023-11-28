from odoo import fields, models, api
import logging
from decimal import Decimal, ROUND_HALF_EVEN

_logger = logging.getLogger(__name__)
class AccountMoveInherit(models.Model):
    _inherit = "account.move"

    # old_tax_value 
    old_amount_tax = fields.Float(string='Old Tax Amount', readonly=True, help="Stores the old tax amount before it was last updated.")

    def write(self, values):
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        _logger.info(self.amount_tax)
        _logger.info(values)
        _logger.info("end !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        result = super().write(values)
        return result

    def button_fix_amount(self):
        pass
        # #    
        # # _logger.info(self.amount_untaxed)  
        # untaxed_amount = Decimal(str(self.amount_untaxed))
        # self.old_amount_tax = self.amount_tax
        # new_tax_amount = (untaxed_amount * Decimal('0.20')).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN)

        # _logger.info(")))))))))))))))(((((((((((((((((((((((())))))))))))))))))))))))")
        # _logger.info(new_tax_amount)
        
        # return self.write({'amount_tax': new_tax_amount})