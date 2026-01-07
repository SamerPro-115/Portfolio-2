import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      await emailjs.send(
        'service_rkv4miq',     
        'template_t3niway',   
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        '4RMueB5KLxcm6MLb9'      
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
    
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setShowError(true);
      
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

 return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background patterns remain the same */}
      
      <div className="max-w-4xl mx-auto" id='contact'>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <Card className="bg-black border-2 border-accent">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-xl md:text-3xl text-white flex items-center justify-center gap-3">
              <Mail className="w-8 h-8" />
              {t('contact.form.cardTitle')}
            </CardTitle>
            <CardDescription className="text-lg" style={{color: "rgb(187, 187, 187)"}}>
              {t('contact.form.cardDescription')}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Success Alert */}
            {showSuccess && (
              <Alert className="mb-6 bg-green-900/50 border-green-700/50 text-green-100">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription className="font-medium">
                  {t('contact.alerts.success')}
                </AlertDescription>
              </Alert>
            )}

            {/* Error Alert */}
            {showError && (
              <Alert className="mb-6 bg-red-900/50 border-red-700/50 text-red-100">
                <AlertDescription className="font-medium">
                  {t('contact.alerts.error')}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-base font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t('contact.form.nameLabel')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-primary-foreground border-gray-600/50 text-white focus:border-white focus:ring-white/20 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-base font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {t('contact.form.emailLabel')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-primary-foreground border-gray-600/50 text-white focus:border-white focus:ring-white/20 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white text-base font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t('contact.form.messageLabel')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-primary-foreground border-gray-600/50 text-white focus:border-white focus:ring-white/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-white text-black hover:bg-gray-200 font-semibold text-lg transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('contact.form.sendingButton')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {t('contact.form.sendButton')}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-sm" style={{color: "rgb(187, 187, 187)"}}>
            {t('contact.footer.preferEmail')}{' '}
            <a 
              href="mailto:newsamer123@gmail.com" 
              className="text-white hover:text-gray-200 underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t('contact.footer.email')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}