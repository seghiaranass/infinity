from odoo import fields, models, api

class AccountMoveLineInherit(models.Model):
    _inherit = "account.move"


    row_counter_column = fields.Char(default="0", string="#")