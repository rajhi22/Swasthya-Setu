import { useState } from 'react';
import { ArrowRight, Eye, EyeOff, Heart, Leaf, LockKeyhole, Mail, ShieldCheck, Stethoscope, UserRound, UsersRound, Zap } from 'lucide-react';
import { useAuth } from '../auth';

const patientEmail = 'aisha.demo@swasthyasetu.local';
const doctorEmail = 'amelia.demo@swasthyasetu.local';

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setLoading(true); setError('');
    try { await login(email, password); } catch { setError('Unable to sign in with those credentials.'); } finally { setLoading(false); }
  };
  const selectRole = (value: string) => { setEmail(value); setError(''); };
  return <main className="login-page">
    <section className="login-intro">
      <div className="login-brand-row"><div className="login-brand"><span className="login-brand-mark"><Heart size={25}/></span><div><strong>Swasthya Setu</strong><small>Your Health, Our Priority</small></div></div><div className="login-promise">Smarter Check-ins<br/>Healthier Tomorrows <Leaf className="login-leaf" size={34}/></div></div>
      <div className="login-copy"><h1>A Healthier Tomorrow,<span>Together</span></h1><p>Swasthya Setu helps patients and doctors connect better with smarter, faster and more organized care.</p><div className="login-features"><div className="login-feature"><span className="login-feature-icon"><Zap size={25}/></span><div><strong>Save Time</strong><span>Complete your health check-in before your visit.</span></div></div><div className="login-feature"><span className="login-feature-icon"><UsersRound size={25}/></span><div><strong>Better Consultations</strong><span>Doctors get the right information every time.</span></div></div><div className="login-feature"><span className="login-feature-icon"><Heart size={25}/></span><div><strong>Healthier Lives</strong><span>Small steps today for a brighter, healthier tomorrow.</span></div></div></div></div>
      <div className="login-illustration" aria-hidden="true"><div className="login-clinic"/><div className="login-people"/></div><p className="login-closing">Technology for people,<br/>not just records.</p>
    </section>
    <section className="login-access"><div className="login-contact-row">New here? <button type="button">Contact Support</button></div><form className="login-card" onSubmit={submit}><p className="login-kicker">WELCOME BACK</p><h2>Sign in to Swasthya Setu</h2><p className="login-subtitle">Continue to your account to access your dashboard</p><label className="login-field"><span>Email</span><span className="login-input-wrap"><Mail size={22}/><input type="email" value={email} onChange={event=>setEmail(event.target.value)} autoComplete="email" required placeholder="name@example.com"/></span></label><label className="login-field"><span>Password</span><span className="login-input-wrap"><LockKeyhole size={22}/><input type={showPassword ? 'text' : 'password'} value={password} onChange={event=>setPassword(event.target.value)} autoComplete="current-password" required/><button className="login-password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={()=>setShowPassword(value=>!value)}>{showPassword ? <EyeOff size={21}/> : <Eye size={21}/>}</button></span></label><button className="login-forgot" type="button">Forgot password?</button>{error && <p className="login-error" role="alert">{error}</p>}<button className="login-submit" disabled={loading}>{loading ? 'Signing in…' : <>Sign in <ArrowRight size={21}/></>}</button><div className="login-divider">Or continue as</div><div className="login-role-actions"><button type="button" onClick={()=>selectRole(patientEmail)}><UserRound size={22}/>Patient</button><button type="button" onClick={()=>selectRole(doctorEmail)}><Stethoscope size={22}/>Doctor</button></div><p className="login-security"><ShieldCheck size={20}/>Your data is secure and protected</p></form><p className="login-footer">Swasthya Setu © 2026 | Healthier People. Stronger Communities.<Leaf size={20}/></p></section>
  </main>;
}
