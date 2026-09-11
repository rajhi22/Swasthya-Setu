import type { Case, DoctorPatientCase, Question } from '../types';
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
export const doctorPatientCases: DoctorPatientCase[] = [
  { id: 'case-1042', patientName: 'Aisha Khan', initials: 'AK', age: 22, sex: 'Female', patientId: 'SS-1042', appointmentTime: '10:30 AM', chiefComplaint: 'Headache', description: 'Patient intake completed and ready for clinical review.', status: 'AI Case Summary Ready', completed: true, caseAnswers: { complaint: 'Headache', duration: '1–3 days', severity: 'Moderate', symptoms: 'Fatigue', medications: 'No', allergies: 'Not sure', history: 'None to add', flags: 'No warning signs' } },
  { id: 'case-4821', patientName: 'Marcus Reyes', initials: 'MR', age: 54, sex: 'Male', patientId: 'SS-4821', appointmentTime: '11:15 AM', chiefComplaint: 'Chest tightness', description: 'Reports shortness of breath during light activity.', status: 'AI Case Summary Ready', completed: true, caseAnswers: { complaint: 'Other', duration: '4–7 days', severity: 'Moderate', symptoms: 'Breathing difficulty', medications: 'Yes, regular medication', allergies: 'No known allergies', history: 'Long-term condition', flags: 'Severe breathing difficulty' } },
  { id: 'case-5109', patientName: 'Priya Nair', initials: 'PN', age: 38, sex: 'Female', patientId: 'SS-5109', appointmentTime: '12:00 PM', chiefComplaint: 'Recurring migraine', description: 'Awaiting review of the submitted intake.', status: 'Pending Review', completed: true, caseAnswers: { complaint: 'Headache', duration: 'More than a week', severity: 'Mild', symptoms: 'Nausea', medications: 'Not sure', allergies: 'No known allergies', history: 'Recent consultation', flags: 'No warning signs' } },
  { id: 'case-7394', patientName: 'Dev Kapoor', initials: 'DK', age: 29, sex: 'Male', patientId: 'SS-7394', appointmentTime: '02:15 PM', chiefComplaint: 'Fever and fatigue', description: 'Patient has begun their health check-in.', status: 'In Progress', completed: false }
];
