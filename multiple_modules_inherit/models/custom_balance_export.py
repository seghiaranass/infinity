from odoo import models,api
from bs4 import BeautifulSoup

class CustomBalanceExport(models.Model):
    _inherit = 'balance'


    def export_data(self, fields_to_export, raw_data=False):
        # Call super method to get the data to export
        data_to_export = super(CustomBalanceExport, self).export_data(fields_to_export, raw_data)

        # Assuming 'customer_display' is the field you want to parse
        if 'customer_display' in fields_to_export:
            for line in data_to_export:
                # Find the index of 'customer_display' in fields_to_export
                index = fields_to_export.index('customer_display')
                # Parse the HTML content
                soup = BeautifulSoup(line[index], 'html.parser')
                # Extract text or specific elements. Here, we get all text.
                text_content = soup.get_text()
                # Replace the HTML with plain text content
                line[index] = text_content

        return data_to_export
