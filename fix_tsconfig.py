import json

with open('tsconfig.app.json', 'r') as f:
    config = json.load(f)

if 'compilerOptions' not in config:
    config['compilerOptions'] = {}

config['compilerOptions']['noUnusedLocals'] = False
config['compilerOptions']['noUnusedParameters'] = False

with open('tsconfig.app.json', 'w') as f:
    json.dump(config, f, indent=2)

print("Disabled unused locals")
