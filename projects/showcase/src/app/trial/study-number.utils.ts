/**
 * @fileoverview Study Number Utilities
 * Utilities for formatting and validating study numbers
 */


/**
 * Formats a study number according to the CTMS trial ID format
 * @param studyNumber The raw study number
 * @returns Formatted study number with mask applied
 */
export function formatStudyNumber(studyNumber: string): string {
  if (!studyNumber) {
    return '';
  }

  // Remove any existing formatting
  const cleanNumber = studyNumber.replace(/[^a-zA-Z0-9]/g, '');
  
  // Apply mask: ****-**** (8 characters with hyphen)
  if (cleanNumber.length >= 8) {
    return `${cleanNumber.substring(0, 4)}-${cleanNumber.substring(4, 8)}`;
  }
  
  // If less than 8 characters, pad with asterisks
  const padded = cleanNumber.padEnd(8, '*');
  return `${padded.substring(0, 4)}-${padded.substring(4, 8)}`;
}

/**
 * Validates a study number format
 * @param studyNumber The study number to validate
 * @returns True if the study number is valid
 */
export function isValidStudyNumber(studyNumber: string): boolean {
  if (!studyNumber) {
    return false;
  }

  // Check if it matches the expected format: ****-****
  const studyNumberRegex = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
  return studyNumberRegex.test(studyNumber);
}

/**
 * Extracts the raw study number from formatted string
 * @param formattedNumber The formatted study number
 * @returns Raw study number without formatting
 */
export function extractRawStudyNumber(formattedNumber: string): string {
  if (!formattedNumber) {
    return '';
  }
  
  return formattedNumber.replace(/[^a-zA-Z0-9]/g, '');
}
