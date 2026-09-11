export type Role = 'patient' | 'doctor';
export type Case = { id: string; name: string; initials: string; age: number; gender: string; time: string; complaint: string; description: string; ready: boolean; tone: string };
export type Question = { id: string; title: string; hint?: string; options: string[]; followUp?: Record<string, string> };
