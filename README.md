# ColorEase: Color Accessibility Web 🌈✨

## Project Description 📋

**ColorEase** is a tool designed to help developers and designers ensure visual accessibility in their projects by checking color contrast 🎨. The website allows users to verify custom color palettes and check if they comply with the **WCAG (Web Content Accessibility Guidelines)** standards, ensuring that content is readable for people with visual impairments or color blindness 👀.

## Key Features 🔑

- **Color Picker:** Allows users to select and combine colors, automatically checking the contrast level 🎯.
- **Palette Creation:** Allows users to generate a color combination that complies with **WCAG** standards 🖌️.
- **Accessibility Check:** Ensures that color combinations meet accessibility standards ✅.
- **Dark/Light Mode:** Option to toggle the website theme, adjusting the visual experience 🌙☀️.

## Branch Workflow 🧑‍💻🔄

The project follows a well-organized branch structure to keep the code clean, stable, and easy to manage 🧹. Below is the purpose of each branch:

### `main` 🚀
- **Purpose:** This is the main branch of the project. It contains stable and production-ready code. Changes to `main` should be carefully reviewed and tested before merging ⚡.
- **Restrictions:** Development should not be done directly on `main`. All changes must come from Pull Requests from other branches 🔀.

### `dev` 💻
- **Purpose:** This is the development branch where all the ongoing work is done. New features, bug fixes, and updates are first merged into `dev` before being moved to `main` 🛠️.
- **Workflow:** Developers work on the `dev` branch, and once features are complete, they are tested and merged into `main` 🚀.

### `devFeatures` 🔧
- **Purpose:** `devFeatures` branches are used for developing specific features. Each feature should be developed in a separate `devFeatures/` branch ✨.
- **Example name:** `devFeatures/color-picker`, `devFeatures/user-authentication`
- **Workflow:** After the feature is completed and tested, a **Pull Request** is created to merge the `devFeatures` branch into `dev` for further testing and integration 🛠️.
