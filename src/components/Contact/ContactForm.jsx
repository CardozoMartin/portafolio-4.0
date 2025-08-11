import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo de cambios en inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí harías la llamada real a tu API
      console.log('Formulario enviado:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
        </svg>
      ),
      label: 'Email',
      value: 'carlos.sanchez@email.com',
      href: 'mailto:carlos.sanchez@email.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/carlos-sanchez',
      href: 'https://linkedin.com/in/carlos-sanchez'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/carlos-sanchez',
      href: 'https://github.com/carlos-sanchez'
    }
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[600px] py-5">
            
            {/* Header Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Ponte en Contacto
                </h1>
                <p className="text-[#9cabba] text-sm font-normal leading-normal">
                  Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones. No dudes en contactarme y exploremos cómo podemos colaborar.
                </p>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mx-4 mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-400 font-medium">¡Mensaje enviado con éxito!</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mx-4 mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-400 font-medium">Error al enviar el mensaje. Inténtalo de nuevo.</span>
                </div>
              </div>
            )}

            {/* Form */}
            <div className="space-y-4">
              {/* Name Input */}
              <div className="flex max-w-full flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 border-none bg-[#283039] h-14 placeholder:text-[#9cabba] p-4 text-base font-normal leading-normal transition-all duration-200 ${
                      errors.name ? 'focus:ring-red-500 border-red-500' : 'focus:ring-[#0d80f2]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1 ml-1">{errors.name}</span>
                  )}
                </label>
              </div>

              {/* Email Input */}
              <div className="flex max-w-full flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 border-none bg-[#283039] h-14 placeholder:text-[#9cabba] p-4 text-base font-normal leading-normal transition-all duration-200 ${
                      errors.email ? 'focus:ring-red-500 border-red-500' : 'focus:ring-[#0d80f2]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 ml-1">{errors.email}</span>
                  )}
                </label>
              </div>

              {/* Subject Input */}
              <div className="flex max-w-full flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 border-none bg-[#283039] h-14 placeholder:text-[#9cabba] p-4 text-base font-normal leading-normal transition-all duration-200 ${
                      errors.subject ? 'focus:ring-red-500 border-red-500' : 'focus:ring-[#0d80f2]'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</span>
                  )}
                </label>
              </div>

              {/* Message Textarea */}
              <div className="flex max-w-full flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    name="message"
                    placeholder="Tu Mensaje *"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 border-none bg-[#283039] min-h-36 placeholder:text-[#9cabba] p-4 text-base font-normal leading-normal transition-all duration-200 ${
                      errors.message ? 'focus:ring-red-500 border-red-500' : 'focus:ring-[#0d80f2]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1 ml-1">{errors.message}</span>
                  )}
                  <div className="text-[#9cabba] text-xs mt-1 ml-1">
                    {formData.message.length}/500 caracteres
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-[#0d80f2] hover:bg-[#0b6ed1] hover:transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <span className="truncate">Enviar Mensaje</span>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8">
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4">
                Información de Contacto
              </h3>
              
              <div className="space-y-1">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 hover:bg-[#1a1f26] transition-colors duration-200 rounded-lg"
                  >
                    <div className="text-white flex items-center justify-center rounded-lg bg-[#283039] shrink-0 size-12">
                      {contact.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">
                        {contact.label}
                      </p>
                      <p className="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-[#1a1f26] rounded-lg border border-[#283039]">
              <h4 className="text-white font-medium mb-2">Tiempo de respuesta</h4>
              <p className="text-[#9cabba] text-sm">
                Normalmente respondo dentro de las primeras 24 horas. Para proyectos urgentes, 
                no dudes en contactarme directamente por email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;