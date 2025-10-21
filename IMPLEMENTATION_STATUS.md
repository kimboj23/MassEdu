# Implementation Status: Bidirectional Learning Architecture

## ✅ Completed Components

### 1. Content Graph Data Structure
**File:** `src/data/contentGraph.js`

- Complete relationship mapping between lessons, stories, and modules
- Concept-centric indexing
- Helper functions for querying relationships
- Supports bidirectional navigation

**Key Features:**
- Maps all concepts (VAT, progressive tax, social contract, etc.)
- Links lessons ↔ stories ↔ modules
- Provides context for each connection
- Tracks learning outcomes

### 2. Learning Components
**Location:** `src/components/Learning/`

#### Components Created:
- **BidirectionalLink**: Smart links with hover previews
- **LearnMore**: Story → Lesson connections
- **StoryExample**: Lesson → Story connections
- **BacklinkHint**: Subtle indicators in choice buttons
- **StoryCallout**: Call-to-action boxes in lessons

**Features:**
- Hover previews with context
- Type-specific styling (lesson/story/module/concept)
- Learning outcomes display
- Progress tracking
- Mobile responsive

### 3. Interactive Components
**Location:** `src/components/Interactive/`

#### NumberSlider (Brett Victor Style)
- Drag to change numbers
- Real-time calculations (e.g., VAT)
- Touch-friendly
- Keyboard navigation
- ComparisonSlider for side-by-side comparisons
- Visual feedback and animations

#### ThoughtBubble
- Sequential animation system
- Multiple variants (insight, question, warning, success)
- Dismissible option
- RevealBubble for user-triggered insights
- ThinkingDots animation
- HighlightThought for inline expansions

#### ChoiceButtons (Story Navigation)
- Interactive choice system with branching
- Progress tracking via Context API
- localStorage persistence
- Multiple layouts (vertical/horizontal/grid)
- Choice variants (primary, learn, skip)
- Points system
- QuickChoice for inline decisions
- TimedChoice with countdown
- ProgressIndicator
- ChoiceReview for summary

### 4. First Lesson with Full Integration
**File:** `docs/course-tax/lessons/01-ban-dang-dong-thue-gi.mdx`

**Integrated Features:**
- Interactive NumberSlider for VAT calculation
- ComparisonSlider for fairness comparison
- StoryCallout linking to character story
- Multiple StoryExample links at key moments
- Tooltips for concepts
- Card-based next steps
- Full source citations

**Content Coverage:**
- What is tax?
- VAT explanation with interactive examples
- Direct vs indirect taxes
- Fairness comparison
- Tax ID requirements
- Income thresholds

---

## 📋 Next Steps

### High Priority

1. **Segment sinh-vien Story** (Current .md file needs to be split)
   - Create `docs/course-tax/characters/sinh-vien/` folder
   - Split into 3 scene files:
     - `01-thuc-tinh.mdx` (Phần 1: Thức tỉnh)
     - `02-Gặp-khó.mdx` (Phần 2: Gặp-khó)
     - `03-ket-thuc.mdx` (Phần 3: Suy-nghiệm)
   - Add backlinks to lessons at key moments
   - Integrate interactive components

2. **Update Sidebar Configuration**
   - File: `sidebars-course-tax.js`
   - Add Lessons section
   - Update Characters section (remove Giang/Khanh, add Sinh viên)
   - Add Modules section
   - Add proper icons and structure

3. **Create Remaining Lessons**
   - `02-tai-sao-dong-thue.mdx` (Social contract)
   - `03-tien-thue-di-dau.mdx` (Budget allocation)
   - `04-nguyen-tac-thu-thue.mdx` (Tax principles)
   - `05-thue-va-minh-bach.mdx` (Transparency)
   - `06-thue-va-chinh-tri.mdx` (Politics)

4. **Create Deep-Dive Modules**
   - `module-b-tax-id.mdx`
   - `module-c-progressive-tax.mdx`
   - `module-d-freelance-vs-employee.mdx`
   - `module-e-tax-fairness.mdx`

### Medium Priority

5. **Additional Interactive Components**
   - IncomeCalculator widget (for Module B)
   - BudgetGame component (for Lesson 3)
   - ConceptGraph visualization
   - ContextualSidebar

6. **Character Profile Pages**
   - Create character intro pages
   - Link to their storylines
   - Show challenges and learning path

7. **Concept Hub Pages**
   - `/course-tax/concepts/[concept-id]` pages
   - Show all related content
   - Visual concept map

### Low Priority

8. **Polish & Optimization**
   - Animation refinements
   - Mobile UX improvements
   - Loading states
   - Error handling
   - Analytics integration

9. **Archive Old Content**
   - Move Giang/Khanh folders to archive
   - Update character data
   - Clean up old routes

---

## 🔧 How to Use the Components

### In Lessons (MDX):

```mdx
import { LearnMore, StoryExample, StoryCallout } from '@site/src/components/Learning';
import { NumberSlider, ComparisonSlider } from '@site/src/components/Interactive';

// Link to story
<StoryExample
  character="sinh-vien"
  scene="01-thuc-tinh#canh-2a"
  context="Xem sinh viên mua bánh mì"
/>

// Interactive number
<NumberSlider
  initialValue={25000}
  calculation={(v) => v * 0.1}
  calculationLabel="Thuế VAT"
/>

// Call-to-action box
<StoryCallout
  character="sinh-vien"
  scenes={['01-thuc-tinh']}
/>
```

### In Stories (MDX):

```mdx
import { LearnMore, BacklinkHint } from '@site/src/components/Learning';
import { ThoughtBubble, ChoiceButtons, Choice } from '@site/src/components/Interactive';

// Thought bubble
<ThoughtBubble sequence={1} icon="💡" variant="insight">
  Khoảng 2.273 đồng là thuế VAT!
</ThoughtBubble>

// Link to lesson
<LearnMore
  lesson="01-ban-dang-dong-thue-gi"
  context="Tìm hiểu thêm về thuế VAT"
/>

// Interactive choices
<ChoiceButtons sceneId="canh-2a">
  <Choice value="learn" nextScene="#canh-2a-1" lesson="01-ban-dang-dong-thue-gi">
    🤔 "Thuế VAT là gì? Giải thích đi"
    <BacklinkHint lesson="01-ban-dang-dong-thue-gi" />
  </Choice>
  <Choice value="skip" nextScene="#canh-3">
    🤷 "Thôi kệ, đói bụng quá"
  </Choice>
</ChoiceButtons>
```

---

## 📊 Component Architecture

```
src/
├── data/
│   └── contentGraph.js          # Central relationship database
│
├── components/
│   ├── Learning/                # Bidirectional connection components
│   │   ├── BidirectionalLink.js
│   │   ├── learning.module.css
│   │   └── index.js
│   │
│   └── Interactive/             # Story interaction components
│       ├── NumberSlider.js
│       ├── ThoughtBubble.js
│       ├── ChoiceButtons.js
│       ├── interactive.module.css
│       └── index.js
│
docs/
└── course-tax/
    ├── lessons/                 # Theory/curriculum
    │   └── 01-ban-dang-dong-thue-gi.mdx
    │
    ├── characters/              # Story/experience
    │   ├── sinh-vien/
    │   │   ├── 01-thuc-tinh.mdx (TODO)
    │   │   ├── 02-Gặp-khó.mdx (TODO)
    │   │   └── 03-ket-thuc.mdx (TODO)
    │   └── 01-sinh-vien.md (source - needs segmentation)
    │
    └── modules/                 # Deep dives
        └── (TODO: create module files)
```

---

## ✨ Key Innovations

1. **Brett Victor-Inspired NumberSlider**
   - Hover-to-reveal drag handle
   - Real-time calculation display
   - Intuitive interaction model

2. **Sequential ThoughtBubbles**
   - Staggered animations
   - Multiple variants for different contexts
   - Dismissible and expandable options

3. **Persistent Story Progress**
   - Uses React Context + localStorage
   - Tracks user choices
   - Allows replay functionality

4. **Content Graph System**
   - Single source of truth for relationships
   - Enables smart navigation
   - Powers discovery features

5. **Bidirectional Links**
   - Hover previews with context
   - Smart routing
   - Learning outcome display

---

## 🎯 User Journeys Supported

### Journey A: Theory-First
1. Start at Lesson 1
2. Read about VAT concept
3. See StoryExample callout
4. Click to jump to sinh-vien story scene
5. Experience interactive narrative
6. Return to lesson or continue story

### Journey B: Story-First
1. Start at sinh-vien story
2. Experience interactive scenes
3. Encounter VAT discovery
4. Choose "Learn more" option
5. See LearnMore link to lesson
6. Jump to lesson or continue story

### Journey C: Non-Linear
1. Search for "VAT"
2. See results from lessons, stories, modules
3. View concept graph
4. Navigate to any entry point

---

## 🔗 Integration Points

Every lesson has:
- Related story scenes
- Concept tags
- Interactive examples
- Next steps (stories or lessons)

Every story scene has:
- Related lesson links
- Concept tooltips
- Interactive choices
- Module deep-dives

All connected through:
- contentGraph.js
- Bidirectional components
- Consistent navigation patterns

---

## 📝 Notes for Next Developer

1. **Component Naming**: Follow pattern of noun-based names (e.g., ThoughtBubble, not ShowThought)

2. **MDX Imports**: Always import from component index files for cleaner code

3. **Content Graph**: Update contentGraph.js when adding new lessons/stories/modules

4. **Styling**: Use CSS Modules for scoped styles, follow existing patterns

5. **Mobile First**: All components are mobile-responsive, test on small screens

6. **Accessibility**: Components include ARIA labels and keyboard navigation

7. **Progress Tracking**: Use StoryProgressContext for any new choice-based components

---

## 🚀 Ready to Continue

The foundation is complete! The architecture supports:
- ✅ Bidirectional learning flows
- ✅ Interactive story experiences
- ✅ Rich concept connections
- ✅ Progress tracking
- ✅ Mobile responsiveness

Next immediate task: **Segment the sinh-vien story into 3 scene files with integrated components**.
