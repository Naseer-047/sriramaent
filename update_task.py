import re

with open('C:\\Users\\g4868\\.gemini\\antigravity-ide\\brain\\8f2ad462-fda7-4bf1-9097-4a003fb01b67\\task.md', 'r') as f:
    content = f.read()

content = content.replace('- [/] **Phase 3: Base Setup**', '- [x] **Phase 3: Base Setup**')
content = content.replace('- [ ] **Phase 4: Components & Routing**', '- [/] **Phase 4: Components & Routing**')

with open('C:\\Users\\g4868\\.gemini\\antigravity-ide\\brain\\8f2ad462-fda7-4bf1-9097-4a003fb01b67\\task.md', 'w') as f:
    f.write(content)
