from odoo import fields, models, api

class SaleOrderLineInherit(models.Model):
    _inherit = "sale.order.line"


    row_counter_column = fields.Char(default="0", string="#")