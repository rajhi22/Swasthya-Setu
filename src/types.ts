export type Role = 'patient' | 'doctor';
export type Case = { id: string; name: string; initials: string; age: number; gender: string; time: string; complaint: string; description: string; ready: boolean; tone: string };
export type Question = { id: string; title: string; hint?: string; options: string[]; followUp?: Record<string, string> };
export type IntakeAnswers = Partial<Record<Question['id'], string>>;
export type DocumentCategory = 'Prescriptions' | 'Lab Reports' | 'Medical Records' | 'Other';
export type PatientDocument = { id: string; name: string; category: DocumentCategory; type: string; date: string; status: 'Verified' | 'Needs verification' | 'Uploaded' };
export type AyushProfile = { system: string; prakriti: string; vikriti: string; ahaar: string; lifestyle: string; sleep: string; remedies: string };
