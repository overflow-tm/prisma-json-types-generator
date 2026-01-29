/** A changes made in the original file to help adjust any future coordinates of texts */
export interface TextDiff {
  start: number;
  end: number;
  text: string;
}
/**
 * Applies multiple text changes to a string efficiently.
 * Uses array-based approach to avoid quadratic string concatenation.
 *
 * @param content The original text content
 * @param changes Array of changes to apply
 * @returns The text with all changes applied
 */
export declare function applyTextChanges(content: string, changes: TextDiff[]): string;
//# sourceMappingURL=text-changes.d.ts.map
