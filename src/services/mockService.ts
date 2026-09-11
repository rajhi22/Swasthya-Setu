import type { Case, Question } from '../types';
export const doctorCases: Case[] = [
  { id: 'SS-4821', name: 'Marcus Reyes', initials: 'MR', age: 54, gender: 'Male', time: '09:30 AM', complaint: 'Persistent chest tightness', description: 'Shortness of breath during light activity, worsening over 3 days.', ready: true, tone: 'teal' },
  { id: 'SS-5109', name: 'Priya Nair', initials: 'PN', age: 38, gender: 'Female', time: '10:15 AM', complaint: 'Recurring migraine', description: 'Visual aura, increasing frequency over the past week.', ready: true, tone: 'purple' },
  { id: 'SS-7394', name: 'Dev Kapoor', initials: 'DK', age: 29, gender: 'Male', time: '11:00 AM', complaint: 'Persistent fever', description: 'Low-grade fever and fatigue for two days.', ready: false, tone: 'orange' }
];
export const questions: Question[] = [
  { id: 'complaint', title: 'What is the main issue?', hint: 'Choose the option that feels most relevant today.', options: ['Fever', 'Cough', 'Stomach pain', 'Headache', 'Other'] },
  { id: 'duration', title: 'How long have you felt this way?', options: ['Today', '1–3 days', '4–7 days', 'More than a week'] },
  { id: 'severity', title: 'How would you describe the severity?', options: ['Mild', 'Moderate', 'Severe'] },
  { id: 'symptoms', title: 'Are you experiencing any associated symptoms?', hint: 'Select the one most important to mention.', options: ['Fatigue', 'Nausea', 'Breathing difficulty', 'None of these'] },
  { id: 'medications', title: 'Are you currently taking any medicines?', options: ['Yes, regular medication', 'Yes, started recently', 'No', 'Not sure'] },
  { id: 'allergies', title: 'Do you have any known allergies?', options: ['Yes', 'No known allergies', 'Not sure'] },
  { id: 'history', title: 'Is there any relevant health history?', options: ['Long-term condition', 'Recent consultation', 'Previous surgery', 'None to add'] },
  { id: 'flags', title: 'Are any of these happening now?', hint: 'Choose “yes” if this needs urgent attention.', options: ['No warning signs', 'Severe breathing difficulty', 'Fainting or confusion', 'Sudden severe pain'] }
];
