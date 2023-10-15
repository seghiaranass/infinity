from odoo import fields, models, api

class AccountMoveInherit(models.Model):
    _inherit = "account.move"


    row_counter_column = fields.Char(default="0", string="#")