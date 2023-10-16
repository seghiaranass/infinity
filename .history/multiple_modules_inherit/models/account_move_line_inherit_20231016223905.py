from odoo import fields, models, api

class AccountMoveLineInherit(models.Model):
    _inherit = "account.move.line"


    row_counter_column = fields.Char(default="0", string="#",compute="_compute_row_countner_column_field")
    counter = 0
    @api.depends()
    def _compute_row_countner_column_field(self):
        # Filter out section lines
        non_section_records = self.filtered(lambda r: r.display_type != 'line_section')
        
        # Enumerate over the non-section records
        for index, record in enumerate(non_section_records, start=1):
            counter +=1
            record.row_counter_column = str(counter)

        # Assign a default value for section lines or any other lines you filtered out
        for record in (self - non_section_records):
            record.row_counter_column = "0"  # or any other default value you see fit
