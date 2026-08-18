import re

with open('src/styles/legacy/product-details.css', 'r', encoding='utf-8') as f:
    content = f.read()

# The old block is:
# @media (min-width: 768px) {
#     /* For PC, constrain width for now since user wants Mobile First */
#     .details-page main {
#         max-width: 480px;
#         margin: 0 auto;
#         border-left: 1px solid #eee;
#         border-right: 1px solid #eee;
#     }
# }

content = re.sub(r'@media \(min-width: 768px\) \{[\s\S]*?\}\s*\}', '', content)

with open('src/styles/legacy/product-details.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up old media queries")
