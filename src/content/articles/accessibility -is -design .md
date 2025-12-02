
---
isDraft: false
title: Designing for Accessibility - Building Experiences Everyone Can Use
snippet: Why accessibility isn't a feature or an afterthought, but a fundamental aspect of good design that makes products better for everyone.
slug: designing-for-accessibility-guide
author: Amanda Helmer
category: UX Design
readingDuration: 6
pubDate: 2024-11-18
coverAlt: Diverse group of people using various assistive technologies and devices
originalLink: https://remarkable-manchego-411.notion.site/Designing-for-Accessibility-2bd85217984380bc86b0d49016ab1396
cover: https://unsplash.com/photos/white-and-yellow-signage-on-concrete-post-DLwdV3M0bsU
---

# Accessibility is Design

I remember the moment accessibility clicked for me. I was watching my aunt struggle to read a website on her phone—squinting, zooming in, getting frustrated. She didn't have a diagnosed disability. She was just someone in her sixties trying to read text that was too small with contrast that was too low. That's when I realized: accessibility isn't about accommodating edge cases. It's about designing for the full spectrum of human experience.

According to the World Health Organization, over one billion people live with some form of disability. That's roughly 15% of the global population. But here's what most people miss: temporary and situational disabilities affect all of us. A broken arm, bright sunlight on a screen, holding a baby while trying to navigate a website—these are all accessibility challenges.

## The Business Case for Accessibility

Let's address this directly: accessible design is good business. When you design for accessibility, you're not just doing the right thing morally—you're expanding your potential user base, improving SEO, reducing legal risk, and often creating a better experience for everyone.

I've worked on projects where adding proper heading structure for screen readers also improved the visual hierarchy for sighted users. Where adding captions to videos increased engagement across the board because people watch content in sound-sensitive environments. Where keyboard navigation improvements made power users more efficient.

Accessibility and good design aren't separate concerns. They're the same thing.

## Core Principles of Accessible Design

### Perceivable

Information must be presentable to users in ways they can perceive. This means:

**Sufficient color contrast.** Text should have a contrast ratio of at least 4.5:1 with its background. Large text can get away with 3:1. This isn't arbitrary—it's based on how human vision works. I use tools like WebAIM's contrast checker constantly, even for designs I think look fine.

**Text alternatives for images.** Every meaningful image needs alt text. But here's the nuance: alt text isn't about describing what you see. It's about conveying the information or function the image provides. A logo might just need the company name. A complex infographic needs a detailed description or a link to a text equivalent.

**Captions and transcripts.** Video content needs captions. Audio content needs transcripts. This helps people who are deaf or hard of hearing, but also people in noisy environments, non-native speakers, and anyone who prefers reading to listening.

### Operable

Users must be able to operate the interface. This is where many beautiful designs fall apart.

**Keyboard navigation.** Everything that works with a mouse must work with a keyboard. This means logical tab order, visible focus indicators, and no keyboard traps. I test every interface by unplugging my mouse and trying to complete key tasks using only the keyboard.

**Touch targets.** Interactive elements should be at least 44x44 pixels. Smaller targets are hard for everyone to tap, but especially challenging for people with motor impairments or those using devices while in motion.

**Time limits.** If your interface has time limits (like a checkout process), users need to be able to extend or disable them. Not everyone can read, process information, and interact at the same pace.

### Understandable

Information and interface operation must be understandable.

**Clear language.** Write at a conversational level. Avoid jargon unless you're certain your audience knows it. Use short sentences. Break up long paragraphs. This helps people with cognitive disabilities, but also improves comprehension for everyone.

**Consistent navigation.** Navigation should work the same way throughout your site or app. If the search icon is in the top right on one page, it should be there on every page. Consistency reduces cognitive load.

**Error prevention and recovery.** Good forms prevent errors before they happen with clear instructions and validation. Great forms also make it easy to fix errors when they occur, with specific, actionable error messages.

### Robust

Content must be robust enough to work with current and future technologies, including assistive technologies.

This is largely about using semantic HTML and following web standards. Use button elements for buttons, not divs with click handlers. Use proper heading levels. Use ARIA attributes when HTML alone isn't sufficient, but don't overuse them.

## Common Accessibility Pitfalls

Through years of auditing and fixing inaccessible designs, I've seen the same issues repeatedly:

**Relying on color alone to convey information.** If you use red text to indicate an error, also use an icon or text label. Color-blind users might not perceive the difference.

**Automatic carousels.** They're problematic for screen reader users, keyboard users, and anyone who needs more time to read content. If you must use a carousel, ensure it's pausable and controllable.

**Modal dialogs that trap focus.** When a modal opens, focus should move into it. When it closes, focus should return to the trigger element. Tab navigation should stay within the modal.

**Icon-only buttons without labels.** That hamburger menu icon might seem obvious to you, but not everyone knows what it means. Include a visible label or at least a proper aria-label.

## Testing for Accessibility

You can't design for accessibility without testing. Here's my process:

**Automated testing.** Tools like aXe or Lighthouse catch low-hanging fruit like missing alt text or insufficient contrast. But they only catch about 30% of accessibility issues.

**Keyboard testing.** Navigate your entire interface using only the keyboard. Can you reach everything? Is the focus indicator visible? Is the tab order logical?

**Screen reader testing.** Learn to use at least one screen reader. NVDA is free for Windows. VoiceOver comes with macOS and iOS. Listen to how your interface is announced. Does it make sense without seeing the screen?

**Real user testing.** Whenever possible, test with people who actually use assistive technologies. Their insights are invaluable and often reveal issues you'd never anticipate.

## Making Accessibility Part of Your Process

The biggest mistake teams make is treating accessibility as a final checklist item. Build it in from the start:

Include accessibility requirements in your design brief. Consider keyboard and screen reader users when sketching wireframes. Check color contrast while choosing your palette. Write alt text while designing, not after development.

Accessibility isn't extra work—it's part of the work. And when you approach it that way, it becomes second nature.

## The Ripple Effect

Here's what I've learned: when you design with accessibility in mind, you end up creating better products for everyone. Curb cuts were designed for wheelchair users but help people with strollers, delivery carts, and bicycles. Captions help people in noisy environments. Good contrast helps people in bright sunlight.

Accessible design is universal design. And universal design is just good design.


---
