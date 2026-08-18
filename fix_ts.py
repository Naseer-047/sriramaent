import json

def add_ignore(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    if "compilerOptions" not in data:
        data["compilerOptions"] = {}
    data["compilerOptions"]["ignoreDeprecations"] = "6.0"
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

add_ignore('tsconfig.json')
add_ignore('tsconfig.app.json')
