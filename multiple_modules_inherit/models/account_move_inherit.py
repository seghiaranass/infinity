from odoo import fields, models, api
import logging
from decimal import Decimal, ROUND_HALF_EVEN

_logger = logging.getLogger(__name__)
class AccountMoveInherit(models.Model):
    _inherit = "account.move"
    _order = 'name desc'

    lettrage_date = fields.Date(
        string='Lettrage Date',
        compute='_compute_lettrage_date',
        store=True,  # You may choose not to store this if it's always calculated on the fly
    )


    # @api.depends('move_type', 'line_ids.amount_residual')
    # def _compute_lettrage_date(self):
    #     for move in self:
    #         payments_widget_vals = {}

    #         if move.state == 'posted' and move.is_invoice(include_receipts=True):
    #             reconciled_vals = []
    #             reconciled_partials = move._get_all_reconciled_invoice_partials()
    #             for reconciled_partial in reconciled_partials:
    #                 counterpart_line = reconciled_partial['aml']
    #                 reconciled_vals.append({
    #                     'date': counterpart_line.date,
    #                 })
    #             payments_widget_vals['content'] = reconciled_vals
    #         _logger.info(payments_widget_vals)
    #         if payments_widget_vals['content']:
    #             get_date = payments_widget_vals['content'][0]
    #             move.lettrage_date = get_date['date']
    #         else:
    #             move.lettrage_date = None
    
    @api.depends('move_type', 'line_ids.amount_residual')
    def _compute_lettrage_date(self):
        for move in self:
            payments_widget_vals = {'content': []}  # Initialize 'content' key here

            if move.state == 'posted' and move.is_invoice(include_receipts=True):
                reconciled_vals = []
                reconciled_partials = move._get_all_reconciled_invoice_partials()
                for reconciled_partial in reconciled_partials:
                    counterpart_line = reconciled_partial['aml']
                    reconciled_vals.append({
                        'date': counterpart_line.date,
                    })
                payments_widget_vals['content'] = reconciled_vals

            _logger.info(payments_widget_vals)
            if payments_widget_vals['content']:
                get_date = payments_widget_vals['content'][0]
                move.lettrage_date = get_date['date']
            else:
                move.lettrage_date = None


    # old_tax_value 
    old_amount_tax = fields.Float(string='Old Tax Amount', readonly=True, help="Stores the old tax amount before it was last updated.")
    
    def write(self, values):
        _logger.info("start !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        _logger.info(self.amount_tax)
        _logger.info(values)
        _logger.info("end !@@@@@@@!@!!@@!@#$!@#$!@$@!#$!@$!@#$!@$!@$!@#$!@#$!@#$!@#$!@#$!@#$!@$!@#$@#")
        result = super().write(values)
        return result

  