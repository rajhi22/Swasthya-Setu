# Swasthya Setu UI MVP

Responsive React + TypeScript prototype for a patient and clinician healthcare portal. All displayed identities and medical records are fictional demo data.

## Run locally

```sh
npm install
npm run dev
```

Use the small **Patient view / Doctor view** switch in the upper right to review both role-specific dashboards. The patient flow includes an eight-step deterministic intake, a clinician-verification summary, and a history timeline.

## Integration seams

`src/services/mockService.ts` is the single source for typed mock records and question definitions. Replace this module with API calls or an adapter when the Express/MongoDB backend is introduced; view components do not depend on hard-coded network calls.

The summary is intentionally labelled AI-assisted and never diagnoses a patient. It requires clinician verification.
