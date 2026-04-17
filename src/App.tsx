/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Droplets, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Car, 
  MapPin, 
  Instagram, 
  Phone, 
  Menu, 
  X,
  CreditCard,
  ChefHat,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

const IMAGES = {
  hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg__RQe05-wBc2cegResiGD6chAyUfGJ7t2hHSMitxE-4gnZNHyYlubtd9oIRyRlilcAgiTvm6Y5dE7mTIX6Rwql6fN_n20FM7zPJrHpwZ1PsjXaadXgX7WN61mxUPjxbZLT_BHd4cIP24JUxJ1EWdZ5i_hULrdbxaDSFHdeeu6FOc3gpWyStZGYKpTkY4/s16000/hero.PNG",
  about: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC5fU707POKVZYZPWENILN_rA2TtMBpUw2K7ajpbJEFkl-BqbvB8FESLwlXM9V85dFDnFogovEoVadEOCugA8ZG984EU-3sA7ZL0hhL5aBxA73mblJ6XTixMnOFyDQPWD62oM0wHAPzdnsn5A2SiiMmmPp2tDOnEIpTrdesDJSCLA0qrroi2Mzlxdh9z4/w640-h426/sobre.png",
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY6AS5jzpIXDzweGqVeQjdkm0QaNS2Bwtpt_9O3VIZBYg_vZLG35rRURo2Ksmr8F_Mrl6RhD9Y_uLhIQdA2Aypyqj8YyQb6MBRqnBdzTgpNMKBpkukxl84LQcpIk_Dr9lklNsaE928H3-9IIsbXn72t83Li4kFy6IiIhuQPPoEkJv7sEdnoJ02NiVJscE/s320/logo%20dourada%20metalizada%20fundo%20transparente.png"
};

const WHATSAPP_LINK = "https://wa.me/556792843637";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2, duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-gold-500/30 selection:text-gold-200">
      {/* Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-dark py-3" : "glass-dark py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={IMAGES.logo} 
              alt="SOFISTICAR" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-neutral-400">
            <a href="#servicos" className="hover:text-gold-500 transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-gold-500 transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-gold-500 transition-colors">Sobre</a>
            <a 
              href={WHATSAPP_LINK} 
              className="px-6 py-2 rounded-full font-bold transition-all animate-metallic-shine border-2 border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-white"
            >
              Orçamento
            </a>
          </div>

          <button 
            className="md:hidden text-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black p-6 flex flex-col gap-4 text-center border-t border-white/5"
          >
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white">Serviços</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white">Diferenciais</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white">Sobre</a>
            <a href={WHATSAPP_LINK} className="bg-gold-500 text-neutral-950 py-3 rounded-xl font-bold animate-metallic-shine">Solicitar Orçamento</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-40 pb-20 md:pt-24 md:pb-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={IMAGES.hero} 
            alt="Car Detailing" 
            className="w-full h-full object-cover object-[25%_center] md:object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">
              Estética Automotiva
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] md:leading-tight">
              A Excelência que seu <br />
              <span className="gold-text-shine font-display italic">Veículo Merece.</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
              Elevando o conceito de limpeza automotiva em Campo Grande. 
              Cuidado técnico, precisão e acabamento impecável para clientes exigentes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-neutral-950 font-bold rounded-full hover:bg-gold-400 transition-all flex items-center justify-center gap-2 group animate-metallic-shine"
              >
                Agende sua Lavagem
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#servicos"
                className="w-full sm:w-auto px-10 py-4 glass-dark text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-12 md:py-20 border-y border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Veículos Atendidos", value: "2.5k+" },
              { label: "Anos de Experiência", value: "8+" },
              { label: "Clientes Satisfeitos", value: "98%" },
              { label: "Produtos Importados", value: "20+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i *0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gold-text-shine mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="font-display text-4xl md:text-5xl font-bold mb-4">
              Serviços <span className="gold-text-shine italic">Especializados</span>
            </motion.h2>
            <motion.p {...fadeIn} className="text-neutral-500 max-w-xl mx-auto">
              Tratamentos exclusivos desenvolvidos para preservar a estética e valorizar o seu patrimônio.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Droplets className="text-gold-500" size={32} />, 
                title: "Lavagem Detalhada", 
                desc: "Remoção técnica de impurezas com produtos de pH neutro e secagem segura." 
              },
              { 
                icon: <Sparkles className="text-gold-500" size={32} />, 
                title: "Polimento Técnico", 
                desc: "Correção de pintura, brilho intenso e proteção duradoura contra as intempéries." 
              },
              { 
                icon: <ShieldCheck className="text-gold-500" size={32} />, 
                title: "Higienização Interna", 
                desc: "Limpeza profunda de estofados, painel e carpetes com eliminação de bactérias." 
              },
              { 
                icon: <Car className="text-gold-500" size={32} />, 
                title: "Buscamos e Levamos", 
                desc: "Conveniência absoluta: retiramos seu veículo no local desejado com segurança." 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl glass transition-all hover:bg-gold-500/5 hover:-translate-y-1"
              >
                <div className="mb-6 p-4 rounded-2xl bg-gold-500/10 w-fit group-hover:scale-110 transition-transform icon-shine-container">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest transition-opacity">
                  Saiba Mais <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Differentials */}
      <section id="diferenciais" className="py-16 md:py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Por que escolher a <span className="gold-text-shine italic">Sofisticar?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Main Card */}
            <motion.div 
              {...fadeIn}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden glass group"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="p-10 h-full flex flex-col items-center justify-center text-center relative z-10">
                <div className="icon-shine-container mb-6 p-3 bg-gold-500/10 rounded-xl w-fit">
                  <ChefHat className="text-gold-500" size={48} />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Maestria Técnica em Cada Detalhe</h3>
                <p className="text-neutral-400 max-w-lg mb-8">
                  Nossa equipe é treinada nos mais altos padrões de estética automotiva. Não apenas lavamos, restauramos a alma do seu veículo com precisão artesanal.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {["Precisão", "Qualidade", "Confiança"].map(t => (
                    <span key={t} className="px-4 py-1.5 rounded-full border border-gold-500/30 text-gold-500 text-[10px] font-bold uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small Cards */}
            <motion.div {...fadeIn} className="p-8 rounded-3xl glass flex flex-col justify-center">
              <div className="icon-shine-container mb-4 w-fit">
                <Clock className="text-gold-500" size={32} />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Pontualidade Britânica</h4>
              <p className="text-neutral-500 text-sm uppercase tracking-tighter">Entregamos seu carro no tempo certo, todas as vezes.</p>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-3xl glass flex flex-col justify-center border-gold-500/30">
              <div className="icon-shine-container mb-4 w-fit">
                <CreditCard className="text-gold-500" size={32} />
              </div>
              <h4 className="font-display text-xl font-bold mb-2">Facilidade no Pagamento</h4>
              <p className="text-neutral-500 text-sm italic">Aceitamos todos os cartões e facilitamos seu orçamento.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Header Content for Mobile (Image will be inserted after title) */}
            <div className="lg:contents">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="gold-text-shine font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Legado & Paixão</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Mais que Estética, <br />um <span className="gold-text-shine">Compromisso</span> com a Perfeição.
                </h2>

                {/* Image for Mobile Only */}
                <div className="lg:hidden mb-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 border-2 border-gold-500 rounded-3xl" />
                    <img 
                      src={IMAGES.about} 
                      alt="Sobre a Sofisticar" 
                      className="relative z-10 rounded-3xl w-full p-2"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                <div className="space-y-6 text-neutral-400 leading-relaxed font-sans">
                  <p>
                    A <strong>Sofisticar</strong> nasceu em Campo Grande com o objetivo de redefinir o setor de cuidados automotivos. Entendemos que um veículo não é apenas um meio de transporte, mas um reflexo do seu estilo e uma extensão do seu patrimônio.
                  </p>
                  <p className="hidden lg:block">
                    Utilizamos as técnicas mais modernas de <strong>Detalhamento Automotivo</strong>, combinando produtos de alta performance com a dedicação artesanal de nossos profissionais. Cada curva, cada vinco e cada detalhe recebe nossa atenção total.
                  </p>
                  <div className="pt-6 flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xl font-display font-bold text-white tracking-widest uppercase">Campo Grande</span>
                      <span className="text-xs text-neutral-500 tracking-[0.2em] font-medium uppercase">Mato Grosso do Sul</span>
                    </div>
                    <div className="h-12 w-[1px] bg-white/10" />
                    <img src={IMAGES.logo} alt="Logo" className="h-8 opacity-50 grayscale" />
                  </div>
                </div>
              </motion.div>

              {/* Image for Desktop Only */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block relative"
              >
                <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-[40px] translate-x-4 translate-y-4" />
                <img 
                  src={IMAGES.about} 
                  alt="Sobre a Sofisticar" 
                  className="relative z-10 rounded-[32px] w-full shadow-2xl shadow-gold-500/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-2">Relatos de Confiabilidade</h2>
            <div className="flex items-center justify-center gap-1 text-gold-500 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "O polimento técnico da Sofisticar salvou a pintura do meu carro. Brilho incrível e atendimento de primeira.", author: "Ricardo Silva", car: "BMW 320i" },
              { text: "A facilidade de buscarem o carro no meu trabalho é o diferencial que eu precisava. Super recomendo!", author: "Patrícia Mendes", car: "Jeep Compass" },
              { text: "Higienização interna impecável. O carro voltou com cheiro de novo e sem uma mancha sequer.", author: "Marcelo Dutra", car: "Range Rover" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl relative"
              >
                <Quote className="absolute top-4 right-8 text-gold-500/20" size={48} />
                <p className="text-neutral-400 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-display font-bold text-white uppercase tracking-widest text-sm">{t.author}</div>
                  <div className="text-xs text-gold-500 font-medium">{t.car}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              Pronto para sentir a <br />
              <span className="gold-text-shine italic">Experiência Sofisticar?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              Garanta agora o melhor tratamento para o seu veículo. Atendimento premium e garantia de satisfação absoluta.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-gold-500 text-neutral-950 font-bold rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-gold-500/20 animate-metallic-shine"
              >
                <Phone size={20} /> Falar com Especialista
              </a>
              <a 
                href="https://www.instagram.com/sofisticar_lava_car"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-12 py-5 glass-dark text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                <Instagram size={20} /> Seguir no Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-12 mb-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img 
                src={IMAGES.logo} 
                alt="Logo SOFISTICAR" 
                className="h-16 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
              <p className="text-neutral-500 text-sm max-w-xs transition-colors hover:text-neutral-400">
                A excelência em estética automotiva em Campo Grande. 
                Paixão por detalhes, compromisso com a qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full md:w-auto">
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Localização</span>
                <div className="flex items-start justify-center md:justify-start gap-2 text-neutral-500 text-sm">
                  <MapPin size={18} className="text-gold-500 shrink-0" />
                  <p>Av. Hiroshima 725, Carandá Bosque<br />Campo Grande - MS, 79032-050</p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Contato</span>
                <div className="flex items-start justify-center md:justify-start gap-2 text-neutral-500 text-sm">
                  <Phone size={18} className="text-gold-500 shrink-0" />
                  <p>+55 (67) 9284-3637</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">
            <div className="text-neutral-600 text-[10px] uppercase tracking-widest text-center">
              © 2026 SOFISTICAR - Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
