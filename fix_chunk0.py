import re

with open('src/pages/HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific block
content = content.replace('''            </div>
            </div>
        </div>
    </section>

    {/* SECTION 4: VISUALIZER (SEE IT. LOVE IT. PAINT IT.) */}''', '''            </div>
        </div>
    </section>

    {/* SECTION 4: VISUALIZER (SEE IT. LOVE IT. PAINT IT.) */}''')

with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced chunk 0")
