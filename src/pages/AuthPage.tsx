import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<1 | 2>(1); // 1: Info, 2: OTP
  
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  // OTP State
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    document.body.style.backgroundColor = '#fafafa';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (mode === 'signup' && name.trim().length === 0) {
      alert("Please enter your name.");
      return;
    }
    // Simulate OTP sent
    setStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true');
      window.dispatchEvent(new Event('auth-change'));
      alert("Verification successful! You are now logged in.");
      navigate('/');
    } else {
      alert("Please enter the 6-digit OTP.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px 60px', fontFamily: '"Inter", sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '440px', background: '#fff', borderRadius: '16px', border: '1px solid #eee', padding: '40px 32px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', background: '#f6faee', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#737b2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111', margin: '0 0 8px' }}>
            {step === 1 ? (mode === 'login' ? 'Welcome Back' : 'Create an Account') : 'Verify your Phone'}
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.5 }}>
            {step === 1 
              ? (mode === 'login' ? 'Enter your phone number to login.' : 'Join Sri Ram Enterprises today.')
              : `We've sent a 6-digit code to +91 ${phone}`
            }
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handlePhoneSubmit}>
            {mode === 'signup' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px', color: '#111', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                  required
                />
              </div>
            )}
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>Phone Number</label>
              <div style={{ display: 'flex' }}>
                <span style={{ display: 'flex', alignItems: 'center', padding: '0 16px', background: '#f9f9f9', border: '1px solid #ddd', borderRight: 'none', borderRadius: '8px 0 0 8px', fontSize: '15px', color: '#555', fontWeight: 600 }}>+91</span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  style={{ flex: 1, padding: '12px 16px', borderRadius: '0 8px 8px 0', border: '1px solid #ddd', fontSize: '15px', color: '#111', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                  required
                />
              </div>
            </div>

            <button type="submit" style={{ width: '100%', background: '#111', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
              CONTINUE
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '14px', color: '#555' }}>
              {mode === 'login' ? (
                <>New to Sri Ram Enterprises? <button type="button" onClick={() => setMode('signup')} style={{ background: 'none', border: 'none', color: '#737b2d', fontWeight: 700, cursor: 'pointer', padding: 0 }}>Sign Up</button></>
              ) : (
                <>Already have an account? <button type="button" onClick={() => setMode('login')} style={{ background: 'none', border: 'none', color: '#737b2d', fontWeight: 700, cursor: 'pointer', padding: 0 }}>Login</button></>
              )}
            </div>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { otpRefs.current[index] = el; }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  style={{
                    width: '45px',
                    height: '54px',
                    textAlign: 'center',
                    fontSize: '24px',
                    color: '#111',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    background: '#f9f9f9',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                />
              ))}
            </div>

            <button type="submit" style={{ width: '100%', background: '#111', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '30px', fontSize: '15px', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', marginBottom: '16px' }}>
              VERIFY & LOGIN
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#666' }}>
              Didn't receive the code? <button type="button" onClick={() => alert("OTP Resent!")} style={{ background: 'none', border: 'none', color: '#737b2d', fontWeight: 700, cursor: 'pointer', padding: 0 }}>Resend OTP</button>
              <div style={{ marginTop: '12px' }}>
                <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: '#555', fontSize: '12px', fontWeight: 600, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>Change Phone Number</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
