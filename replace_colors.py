import os
import re

file_path = r'd:\.IMAS\ashimScholars\src\app\dashboard\page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    '#1B5E20': '#00642F', # Dark Green replacements
    '#2c693a': '#00642F', # Sidebar BG
    '#2b6635': '#00642F', # Selection Text
    '#facc15': '#FFD500', # Outline Yellow
    '#FBC02D': '#FFD500', # Button Yellow
    '#F9A825': '#E6C000', # Darker Yellow
    '#8bc99c': '#8CC63F', # Icon Green
    '#9ed3ac': '#8CC63F', # Header Green
    '#A9D1B3': '#C6F099', # Very Light Green
    '#f4ebd8': '#FFFFFF', # Logo Background
}

for old_color, new_color in replacements.items():
    content = content.replace(old_color, new_color)

# Make sure yellow button text stands out
content = content.replace('text-white shadow-md z-10', 'text-white shadow-md z-10')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Colors updated successfully in page.tsx")
