from odoo import fields, models, api

class AccountMoveLineInherit(models.Model):
    _inherit = "account.move.line"


    row_counter_column = fields.Char(default="0", string="#",compute="_compute_row_countner_column_field")

    def _compute_row_countner_column_field(self):
        for index, record in enumerate(self, start=1):
            if record.display_type != 'line_section':
                record.row_counter_column = str(index)
