#!/usr/bin/env python3
"""Merge the three story parts into one continuous narrative"""

import re

# Read all three files
with open('docs/course-tax/characters/sinh-vien/01-thuc-tinh.mdx', 'r', encoding='utf-8') as f:
    part1 = f.read()

with open('docs/course-tax/characters/sinh-vien/02-gap-kho.mdx', 'r', encoding='utf-8') as f:
    part2 = f.read()

with open('docs/course-tax/characters/sinh-vien/03-suy-nghiem.mdx', 'r', encoding='utf-8') as f:
    part3 = f.read()

# Extract frontmatter from part 1
frontmatter_match = re.match(r'---\n(.*?)\n---\n', part1, re.DOTALL)
if frontmatter_match:
    frontmatter = frontmatter_match.group(0)
    part1_content = part1[len(frontmatter):]
else:
    frontmatter = ""
    part1_content = part1

# Extract imports from all parts
import_pattern = r'^import .*?;?\n'
part1_imports = set(re.findall(import_pattern, part1_content, re.MULTILINE))
part2_imports = set(re.findall(import_pattern, part2, re.MULTILINE))
part3_imports = set(re.findall(import_pattern, part3, re.MULTILINE))

# Combine all imports
all_imports = part1_imports | part2_imports | part3_imports

# Remove imports from parts
part1_clean = re.sub(import_pattern, '', part1_content, flags=re.MULTILINE)
part2_clean = re.sub(import_pattern, '', part2, flags=re.MULTILINE)
part3_clean = re.sub(import_pattern, '', part3, flags=re.MULTILINE)

# Remove frontmatter from parts 2 and 3
part2_clean = re.sub(r'^---\n.*?\n---\n', '', part2_clean, flags=re.DOTALL)
part3_clean = re.sub(r'^---\n.*?\n---\n', '', part3_clean, flags=re.DOTALL)

# Remove StoryProgressProvider tags (we'll have one at the top level)
part1_clean = part1_clean.replace('<StoryProgressProvider>', '').replace('</StoryProgressProvider>', '')
part2_clean = part2_clean.replace('<StoryProgressProvider>', '').replace('</StoryProgressProvider>', '')
part3_clean = part3_clean.replace('<StoryProgressProvider>', '').replace('</StoryProgressProvider>', '')

# Remove headers and progress indicators from parts 2 and 3
part2_clean = re.sub(r'^# Phần.*?\n', '', part2_clean, flags=re.MULTILINE)
part2_clean = re.sub(r'<ProgressIndicator.*?/>', '', part2_clean)
part3_clean = re.sub(r'^# Phần.*?\n', '', part3_clean, flags=re.MULTILINE)
part3_clean = re.sub(r'<ProgressIndicator.*?/>', '', part3_clean)

# Remove the "Phần 2" navigation button at the end of part 1
part1_clean = re.sub(
    r'<div style=\{\{ marginTop.*?Phần 2: Gặp khó.*?</div>.*?</div>',
    '',
    part1_clean,
    flags=re.DOTALL
)

# Remove summary boxes at the end of parts 1 and 2
# Replace with smoother transitions
part1_clean = re.sub(
    r'<div style=\{\{.*?textAlign.*?Suy-nghiệm Phần 1.*?</div>\s*</Scene>',
    '</Scene>',
    part1_clean,
    flags=re.DOTALL
)

# Update frontmatter - remove part number
new_frontmatter = frontmatter.replace('title: "Phần 1: Thức tỉnh"', 'title: "Câu chuyện của Sinh viên"')
new_frontmatter = new_frontmatter.replace('description: "Bạn đang đóng thuế mỗi ngày"', 'description: "Hành trình khám phá thuế qua cuộc sống hàng ngày"')

# Update the main title
part1_clean = re.sub(r'# "Bạn Đóng Thuế Mỗi Ngày"', '# Hành Trình Khám Phá Thuế', part1_clean)

# Update progress indicator to total scenes
total_scenes = part1_clean.count('<Scene id=') + part2_clean.count('<Scene id=') + part3_clean.count('<Scene id=')
part1_clean = re.sub(r'<ProgressIndicator totalScenes=\{8\} />', f'<ProgressIndicator totalScenes={{{total_scenes}}} />', part1_clean)

# Combine all parts
combined = f"""{new_frontmatter}
{''.join(sorted(all_imports))}
<StoryProgressProvider>

{part1_clean.strip()}

{part2_clean.strip()}

{part3_clean.strip()}

</StoryProgressProvider>
"""

# Write combined file
with open('docs/course-tax/characters/sinh-vien/story.mdx', 'w', encoding='utf-8') as f:
    f.write(combined)

print("Created combined story file: story.mdx")
print(f"Total scenes: {total_scenes}")
