from odoo import fields, models, api
import logging
_logger = logging.getLogger(__name__)
class SaleOrderLineInherit(models.Model):
    _inherit = "sale.order.line"


    row_counter_column = fields.Char(default="0", string="#",compute="_compute_row_countner_column_field")

    @api.depends()
    def _compute_row_countner_column_field(self):
        # Fetch all records based on the current view's domain in the correct order
        domain = self.env.context.get('domain', [])
        all_records_ordered = self.search(domain, order='sequence, order_id, id')
        
        # Create a dictionary with record ID to position mapping
        record_position_mapping = {record.id: index + 1 for index, record in enumerate(all_records_ordered)}
        
        for record in self:
            record.row_counter_column = str(record_position_mapping.get(record.id, 0))


    @api.onchange('product_template_id')
    def _product_template_id(self):
        _logger.info("H*********************HHHHHHHHH******************************************")
        _logger.info(self)