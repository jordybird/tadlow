'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

interface FormErrors {
  email?: string;
}

const GetStartedForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFormErrors((prev) => ({ ...prev, email: 'Email is required.' }));
      return false;
    } else if (!regex.test(email)) {
      setFormErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      return false;
    } else {
      setFormErrors((prev) => {
        const { email, ...rest } = prev;
        return rest;
      });
      return true;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail(formData.email);

    if (isEmailValid) {
      setIsSubmitting(true);
      setSuccessMessage('');
      setErrorMessage('');
      try {
        const response = await fetch('/api/get-started', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setSuccessMessage(data.message || 'Your information has been sent successfully!');
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          phone: '',
          service: '',
          description: '',
        });
        setFormErrors({});
      } catch (error: any) {
        console.error('Error submitting form:', error);
        setErrorMessage(error.message || 'An unexpected error occurred.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const services = [
    { value: 'sports', label: 'Sports Marketing' },
    { value: 'brand', label: 'Brand Development' },
    { value: 'field', label: 'Field Marketing' },
    { value: 'events', label: 'Corporate & Private Events' },
  ];

  const baseInputClasses =
    'w-full p-3 border rounded-lg focus:ring-[#34A56F] focus:ring-1 outline-none text-[#28282B]';
  const selectClasses =
    'w-full p-3 border border-gray-300 rounded-lg focus:ring-[#34A56F] focus:ring-1 outline-none text-[#28282B] bg-white';

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-2/5 bg-[#34A56F] p-8 flex-col justify-between">
        <div className="text-white">
          <h1 className="text-4xl mt-4 font-bold mb-4">Let's setup your marketing strategy</h1>
          <p className="text-lg opacity-90">
            All-in-one solution for your business growth. Transform your brand with our expert marketing services.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg text-white">
          <p className="italic mb-4">
            "Working with them transformed our brand presence. The results exceeded our expectations!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full" />
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm opacity-75">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-3/5 p-6 lg:p-12">
        {/* Back Button - Shown above form on mobile */}
        <button
          onClick={() => router.back()}
          className="flex items-center mb-6 text-[#28282B] focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="text-lg">Back</span>
        </button>

        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#28282B]">Let's get started</h2>

          {/* Success and Error Messages */}
          {successMessage && (
            <div
              className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg"
              role="alert"
            >
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div
              className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#28282B] mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={baseInputClasses}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#28282B] mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={baseInputClasses}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-[#28282B] mb-2">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#28282B] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${baseInputClasses} ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#28282B] mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={baseInputClasses}
                required
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#28282B] mb-2">
                Choice of Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={selectClasses}
                required
              >
                <option value="" className="text-[#28282B]">
                  Select a service
                </option>
                {services.map((service) => (
                  <option
                    key={service.value}
                    value={service.value}
                    className="text-[#28282B] bg-white"
                  >
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-[#28282B] mb-2"
              >
                What are you looking for from us?
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={baseInputClasses}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#34A56F] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#2d8f5f] transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Get Started'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;
