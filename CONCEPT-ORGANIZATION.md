# Concept Tagging and Knowledge Base Organization

## Overview
This system implements a tagging approach where concepts in Layer-1 (storylines) and Layer-2 (context pages) have tooltips that link to detailed articles organized in Layer-3 (Tri thức).

## Tagging System

### Tags Available:
- **"Nhân quyền"** - Human rights concepts
- **"Chính trị"** - Political concepts
- **"Luật pháp"** - Legal concepts

### Multi-tag Support:
Concepts can have multiple tags and will appear in multiple corresponding sections.

## Knowledge Base Organization

### Under "Tri thức" → "Nhân quyền":
```
/human-rights/
├── definition/ (from concept: 'nhan-quyen')
├── history/ (from concept: 'nhan-quyen')
├── universal-declaration/ (from concept: 'nhan-quyen')
├── equality/ (from concept: 'binh-dang')
├── civil-political-rights/ (from concept: 'quyen-dan-su')
├── political-participation/ (from concept: 'dan-chu')
└── constitutional-rights/ (from concept: 'hien-phap')
```

### Under "Tri thức" → "Chính trị":
```
/politics/
├── government-definition/ (from concept: 'chinh-quyen')
├── government-structure/ (from concept: 'chinh-quyen')
├── state-budget/ (from concept: 'ngan-sach')
├── democracy/ (from concept: 'dan-chu')
├── political-participation/ (from concept: 'quyen-dan-su')
├── constitutional-law/ (from concept: 'hien-phap')
├── public-health-system/ (from concept: 'y-te-cong')
├── corruption/ (from concept: 'tham-nhung')
└── state-enterprises/ (from concept: 'doanh-nghiep-nha-nuoc')
```

### Under "Tri thức" → "Luật pháp":
```
/law/ (when implemented)
├── legal-system/ (from concept: 'phap-luat')
├── constitution/ (from concept: 'hien-phap')
├── tax-law/ (from concept: 'thue', 'thue-thu-nhap')
├── public-finance/ (from concept: 'ngan-sach')
├── anti-corruption/ (from concept: 'tham-nhung')
└── constitutional-rights/ (from concept: 'hien-phap')
```

## Example Implementation

### In Storylines/Context Pages:
```jsx
<ConceptTooltip conceptId="thue">
  Thuế
</ConceptTooltip>
```

### Tooltip Display:
- **Title**: "Thuế"
- **Tag**: "Luật pháp" (colored badge)
- **Definition**: Brief explanation
- **Link**: "Tìm hiểu thêm về luật pháp →" (leads to /law section)

### Multi-tag Example:
```jsx
<ConceptTooltip conceptId="hien-phap">
  Hiến pháp
</ConceptTooltip>
```

**Shows tags**: "Luật pháp", "Chính trị", "Nhân quyền"
**Articles appear in all three sections**:
- `/law/constitution`
- `/politics/constitutional-law`
- `/human-rights/constitutional-rights`

## Benefits:
1. **Contextual Learning**: Concepts link naturally to deeper knowledge
2. **Cross-referencing**: Multi-tagged concepts create knowledge connections
3. **Progressive Disclosure**: From simple storylines to detailed explanations
4. **Organized Navigation**: Clear categorization in "Tri thức" sections