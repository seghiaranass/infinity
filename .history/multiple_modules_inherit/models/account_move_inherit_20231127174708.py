from odoo import fields, models, api
import logging
_logger = logging.getLogger(__name__)
class AccountMoveInherit(models.Model):
    _inherit = "account.move"


    def write(self, values):
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        _logger.info(self.amount_tax)
        _logger.info(values)
        _logger.info("end !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        result = super().write(values)
        return result

    def button_fix_amount(self):
        _logger.info(self.amount_tax)   
        _logger.info(self.amount_untaxed)   
    # Your custom logic here
    # For example, you might want to fix the amount by creating a write-off
    # or adjusting the invoice in some way
        pass