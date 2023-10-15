from odoo import fields, models, api

class AccountMove(models.Model):
    _inherit = "sale.order"


    row_counter_column = fields.Char(default="0", string="#")