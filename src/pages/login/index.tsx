// app/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, signInWithGoogle } from '../../../lib/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      router.push('http://localhost:3000'); // Redirigir a localhost:3000
    } catch (error) {
      alert('Error al iniciar sesión: ' + (error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('http://localhost:3000'); // Redirigir a localhost:3000
    } catch (error) {
      alert('Error al iniciar sesión con Google: ' + (error as Error).message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Iniciar Sesión
        </button>
      </form>
{/* 
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Iniciar Sesión con Google
      </button> */}
    </div>
  );
};

export default LoginPage;