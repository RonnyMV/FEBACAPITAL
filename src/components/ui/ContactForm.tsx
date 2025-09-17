'use client';

import React, { useState } from 'react';
import { formatPhoneNumber, validatePhoneNumber } from '@/utils/phoneFormatter';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false
  });


  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
      case 'phone':
        return !validatePhoneNumber(value) && value.length > 0 ? 'Telefone deve ter 10 ou 11 dígitos' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) && value.length > 0 ? 'Por favor, preencher corretamente' : '';
      case 'message':
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const formattedValue = name === 'phone' ? formatPhoneNumber(value) : value;
    
    setFormData({
      ...formData,
      [name]: formattedValue
    });

    if (touched[name as keyof typeof touched]) {
      setErrors({
        ...errors,
        [name]: validateField(name, formattedValue)
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const formattedValue = name === 'phone' ? formatPhoneNumber(value) : value;
    
    setTouched({
      ...touched,
      [name]: true
    });
    setErrors({
      ...errors,
      [name]: validateField(name, formattedValue)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTouched = { name: true, phone: true, email: true, message: true };
    setTouched(newTouched);
    
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    setErrors(newErrors);
    
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulated API call - replace with actual endpoint when needed
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment below to use PHP backend:
      /*
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      */
      
      setIsSent(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        setErrors({ name: '', phone: '', email: '', message: '' });
        setTouched({ name: false, phone: false, email: false, message: false });
        setIsSent(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ 
        name: '', 
        phone: '', 
        email: '', 
        message: 'Erro ao enviar formulário. Tente novamente.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-white rounded-lg p-8 shadow-lg'>
      <h3 className='text-2xl font-bold text-gray-900 mb-6'>
        Fale agora mesmo com a Liva
      </h3>
      
      <form onSubmit={handleSubmit} className='space-y-4 '>
        <div className='relative'>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.name && !errors.name && formData.name ? 'form-input--valid' : ''} ${touched.name && errors.name ? 'form-input--invalid' : ''}`}
            required
          />
          {touched.name && !errors.name && formData.name && (
            <svg className='form-success-icon' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
          )}
          {touched.name && errors.name && (
            <div className='form-error'>{errors.name}</div>
          )}
        </div>
        
        <div className='relative'>
          <input
            type='tel'
            name='phone'
            placeholder='Telefone'
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.phone && !errors.phone && formData.phone ? 'form-input--valid' : ''} ${touched.phone && errors.phone ? 'form-input--invalid' : ''}`}
            required
          />
          {touched.phone && !errors.phone && formData.phone && (
            <svg className='form-success-icon' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
          )}
          {touched.phone && errors.phone && (
            <div className='form-error'>{errors.phone}</div>
          )}
        </div>
        
        <div className='relative'>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.email && !errors.email && formData.email ? 'form-input--valid' : ''} ${touched.email && errors.email ? 'form-input--invalid' : ''}`}
            required
          />
          {touched.email && !errors.email && formData.email && (
            <svg className='form-success-icon' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
          )}
          {touched.email && errors.email && (
            <div className='form-error'>{errors.email}</div>
          )}
        </div>
        
        <div className='relative'>
          <textarea
            name='message'
            placeholder='Mensagem'
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
            className={`form-input resize-none ${touched.message && !errors.message && formData.message ? 'form-input--valid' : ''} ${touched.message && errors.message ? 'form-input--invalid' : ''}`}
            required
          />
          {touched.message && errors.message && (
            <div className='form-error'>{errors.message}</div>
          )}
        </div>
        
        <button
          type='submit'
          disabled={isSubmitting || isSent}
          className={`w-full btn-submit ${isSent ? 'btn-submit--sent' : ''}`}
        >
          {isSent ? 'MENSAGEM ENVIADA' : isSubmitting ? 'ENVIANDO MENSAGEM' : 'ENVIAR MENSAGEM'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
