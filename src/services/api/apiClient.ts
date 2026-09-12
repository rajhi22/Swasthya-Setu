export class ApiError extends Error { constructor(message:string,public status?:number,public details?:unknown){super(message);this.name='ApiError'} }
export const apiBaseUrl=(import.meta.env.VITE_API_BASE_URL as string|undefined)?.trim().replace(/\/$/,'');
export const demoPatientId=(import.meta.env.VITE_DEMO_PATIENT_ID as string|undefined)?.trim();
export const demoDoctorId=(import.meta.env.VITE_DEMO_DOCTOR_ID as string|undefined)?.trim();
const base=apiBaseUrl;
export const isApiConfigured=Boolean(base);
let accessToken:string|undefined;export const setAccessToken=(value?:string)=>{accessToken=value};
async function request<T>(path:string,init:RequestInit={}):Promise<T>{if(!base)throw new ApiError('Backend API is not configured.');let response:Response;try{response=await fetch(`${base}${path}`,{headers:{'Content-Type':'application/json',...(accessToken?{Authorization:`Bearer ${accessToken}`}:{ }),...init.headers},...init});}catch{throw new ApiError('Unable to connect to the server. Your entered information is still here.')}const body=await response.json().catch(()=>null);if(!response.ok||!body?.success)throw new ApiError(body?.message||'Unable to complete this request.',response.status,body?.details);return body.data as T}
export const api={get:<T>(path:string)=>request<T>(path),post:<T>(path:string,data:unknown)=>request<T>(path,{method:'POST',body:JSON.stringify(data)}),patch:<T>(path:string,data:unknown)=>request<T>(path,{method:'PATCH',body:JSON.stringify(data)}),put:<T>(path:string,data:unknown)=>request<T>(path,{method:'PUT',body:JSON.stringify(data)})};
