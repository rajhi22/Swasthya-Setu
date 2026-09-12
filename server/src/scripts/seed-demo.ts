import mongoose from 'mongoose';
import { env } from '../config/env.js';
import { DoctorProfile } from '../models/doctor-profile.model.js';
import { PatientProfile } from '../models/patient-profile.model.js';
import { User } from '../models/user.model.js';
import { hashPassword } from '../utils/password.js';

const patientSeed = {
  email: 'aisha.demo@swasthyasetu.local',
  name: 'Aisha Khan',
  patientId: 'DEMO-PATIENT-AISHA',
  age: 26,
  sex: 'Female' as const,
};

const doctorSeed = {
  email: 'amelia.demo@swasthyasetu.local',
  name: 'Dr. Amelia Hayes',
  doctorId: 'DEMO-DOCTOR-AMELIA',
  specialization: 'General Medicine',
};

async function findOrCreateUser(seed: { email: string; name: string }, role: 'patient' | 'doctor') {
  const existing = await User.findOne({ email: seed.email }).select('+passwordHash');
  if (existing) {
    if (existing.role !== role) throw new Error('Demo user email is already assigned to a different role.');
    if (!existing.passwordHash) { existing.passwordHash=await hashPassword('SwasthyaDemo!2026'); await existing.save(); }
    console.info(`Reused demo ${role} user.`);
    return existing;
  }
  const created = await User.create({ ...seed, role, passwordHash: await hashPassword('SwasthyaDemo!2026') });
  console.info(`Created demo ${role} user.`);
  return created;
}

async function seed() {
  if (env.nodeEnv === 'production') throw new Error('Demo seeding is disabled in production.');

  await mongoose.connect(env.mongoUri, { serverSelectionTimeoutMS: 10_000 });
  console.info('MongoDB connected for demo seeding.');
  const patientUser = await findOrCreateUser(patientSeed, 'patient');
  const doctorUser = await findOrCreateUser(doctorSeed, 'doctor');

  let patient = await PatientProfile.findOne({ patientId: patientSeed.patientId });
  if (!patient) {
    patient = await PatientProfile.create({ user: patientUser._id, patientId: patientSeed.patientId, age: patientSeed.age, sex: patientSeed.sex });
    console.info('Created demo patient profile.');
  } else {
    if (String(patient.user)!==String(patientUser._id)) { patient.user=patientUser._id; await patient.save(); }
    console.info('Reused demo patient profile.');
  }

  let doctor = await DoctorProfile.findOne({ doctorId: doctorSeed.doctorId });
  if (!doctor) {
    doctor = await DoctorProfile.create({ user: doctorUser._id, doctorId: doctorSeed.doctorId, displayName: doctorSeed.name, specialization: doctorSeed.specialization });
    console.info('Created demo doctor profile.');
  } else {
    if (String(doctor.user)!==String(doctorUser._id)) { doctor.user=doctorUser._id; await doctor.save(); }
    console.info('Reused demo doctor profile.');
  }

  console.info(`patientId: ${patient.patientId}`);
  console.info(`doctorId: ${doctor.doctorId}`);
}

seed()
  .catch(() => {
    console.error('Demo seed failed. Check the development database configuration and existing demo records.');
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
