import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Mail, Lock, Eye, EyeOff, MapPin } from 'lucide-react';
import GoogleIcon from '../GoogleIcon';

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        await signUpWithEmail(formData.email, formData.password);
      } else {
        await signInWithEmail(formData.email, formData.password);
      }
      onSuccess?.();
    } catch (error) {
      // handled in auth hook
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      onSuccess?.();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header / Branding */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <MapPin className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">NATPAC</h1>
          </div>
          <p className="text-primary-100 text-sm font-medium">
            Travel Data Collection
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-neutral-500 mt-2 text-sm">
              {isSignUp
                ? 'Join us to start logging your trips'
                : 'Sign in to continue logging your trips'}
            </p>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 rounded-xl py-3.5 px-4 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:shadow transition-all duration-200 disabled:opacity-50 mb-6 group"
          >
            <GoogleIcon className="group-hover:scale-110 transition-transform duration-200" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-sm text-neutral-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-10 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-gray-700 placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Switch between Sign In / Sign Up */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
            >
              {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
