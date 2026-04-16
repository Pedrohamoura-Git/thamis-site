/**
 * Detects which section is closest to the top of the viewport
 * @param sectionIds - Array of section element IDs to check
 * @param defaultSection - Default section if none are found
 * @returns The ID of the section closest to the top of the viewport
 */
export const getSectionInView = (
  sectionIds: string[],
  defaultSection: string = "home"
): string => {
  let closestSection = defaultSection;
  let closestDistance = Infinity;

  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      // Only consider sections that are visible (bottom > 0)
      if (distance < closestDistance && rect.bottom > 0) {
        closestDistance = distance;
        closestSection = sectionId;
      }
    }
  }

  return closestSection;
};
