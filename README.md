# Swasthya Setu

Responsive React + TypeScript prototype for a patient and clinician healthcare portal. All displayed identities and medical records are fictional demo data.

## Architecture

```text
React / Vite
    ↓
Express API (/api/v1)
    ↓
Services
    ↓
Mongoose
    ↓
MongoDB
```

## Frontend

```sh
npm install
npm run dev
```

Use the small **Patient view / Doctor view** switch in the upper right to review both role-specific dashboards. The patient flow includes an eight-step deterministic intake, a clinician-verification summary, and a history timeline.

## Integration seams

`src/services/mockService.ts` is the single source for typed mock records and question definitions. Replace this module with API calls or an adapter when the Express/MongoDB backend is introduced; view components do not depend on hard-coded network calls.

The summary is intentionally labelled AI-assisted and never diagnoses a patient. It requires clinician verification.

## Backend setup (Phase 3A–3C)

Copy `server/.env.example` to `server/.env`, configure MongoDB, then run:

```sh
npm run server:dev
```

For a production-style compile/run:

```sh
npm run server:build
npm run server:start
```

Environment variables: `PORT`, `NODE_ENV`, `CLIENT_URL`, and `MONGODB_URI`. `CLIENT_URL` accepts a comma-separated allowlist of frontend origins (for example, `https://swasthya-setu-orcin.vercel.app,http://localhost:5173`).

Authentication requires a server-only `JWT_SECRET`; never place it in a frontend `VITE_*` variable. Development-only demo accounts are created with `npm run seed:demo`: `aisha.demo@swasthyasetu.local` and `amelia.demo@swasthyasetu.local`, both using `SwasthyaDemo!2026`.

For the frontend API layer, copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to the deployed or local `/api/v1` URL. The API client exposes clear errors when the backend is unavailable and does not claim session fallback data is persisted.

Implemented patient endpoints:

- `GET /api/v1/health`
- `GET /api/v1/patients/:patientId`
- `POST|GET /api/v1/patients/:patientId/cases`
- `GET|PATCH /api/v1/patients/:patientId/cases/:caseId`
- `POST|GET /api/v1/patients/:patientId/vitals`
- `PUT|GET /api/v1/patients/:patientId/ayush`
- `GET /api/v1/patients/:patientId/history`

The API generates persistent human-readable IDs (`SS-S001`, etc.) using an atomic MongoDB counter. Authentication and authorization are intentionally not implemented; `patientId` is a temporary request-scoping mechanism, not proof of identity. Doctor APIs, consultation APIs, file storage, OCR, real AI, and production security hardening remain future work.
