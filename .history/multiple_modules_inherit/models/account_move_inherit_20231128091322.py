from odoo import fields, models, api
import logging
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
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")

        _logger.info(self.amount_tax)   
        _logger.info(self.amount_untaxed)  
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")

    # Your custom logic here
    # For example, you might want to fix the amount by creating a write-off
    # or adjusting the invoice in some way
        pass