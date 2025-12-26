import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  Clock1,
  BarChart,
  Globe,
  Smartphone,
} from "lucide-react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-fuchsia-500 selection:text-white min-h-screen">
      
      {/* HEADER PRINCIPAL */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-400 hover:text-fuchsia-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-white/10 transition"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      {/* --- CONTEÚDO PRINCIPAL DO SITE --- */}
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-20 relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Acelere sua presença online com uma landing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
                {" "}
                simples e eficaz
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 text-slate-300 max-w-2xl text-lg leading-relaxed"
            >
              Transforme visitantes em clientes com nossa plataforma intuitiva. 
              Construa, lance e escale seu negócio digital sem precisar tocar em 
              uma linha de código complexa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
              >
                Comece Agora <ArrowRight className="size-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition"
              >
                Ver Recursos
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                { title: "Velocidade", icon: <Zap className="size-5 text-emerald-400" />, desc: "Carregamento instantâneo para reter seus usuários." },
                { title: "Segurança", icon: <Shield className="size-5 text-sky-400" />, desc: "Seus dados protegidos com criptografia de ponta." },
                { title: "Conversão", icon: <Star className="size-5 text-amber-400" />, desc: "Foco total em transformar visitantes em clientes." }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div className="font-semibold">{item.title}</div>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold">Tudo o que você precisa</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">
            Nossa suíte de ferramentas foi desenhada para cobrir todas as etapas
            do seu crescimento, desde a atração até a fidelização do cliente.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Design Responsivo",
                desc: "Seu site perfeito em celulares, tablets e desktops automaticamente.",
                icon: <Smartphone className="size-5 text-fuchsia-400" />,
              },
              {
                title: "Analytics Avançado",
                desc: "Acompanhe métricas vitais e tome decisões baseadas em dados.",
                icon: <BarChart className="size-5 text-amber-400" />,
              },
              {
                title: "Hospedagem Rápida",
                desc: "Servidores otimizados garantem 99.9% de uptime para você.",
                icon: <Zap className="size-5 text-emerald-400" />,
              },
              {
                title: "Proteção de Dados",
                desc: "Certificados SSL gratuitos e proteção contra ataques DDoS.",
                icon: <Shield className="size-5 text-sky-400" />,
              },
              {
                title: "SEO Otimizado",
                desc: "Ferramentas integradas para você aparecer no topo do Google.",
                icon: <Globe className="size-5 text-fuchsia-400" />,
              },
              {
                title: "Suporte Premium",
                desc: "Nossa equipe de especialistas está pronta para ajudar 24/7.",
                icon: <Star className="size-5 text-amber-400" />,
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {f.icon}
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-slate-400 mt-2">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold">Quem usou, aprovou</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                text: "A melhor plataforma que já utilizei. Minhas vendas dobraram em apenas um mês após a migração.",
                author: "Carlos Silva",
                role: "CEO da TechStart"
              },
              {
                text: "O suporte é incrível. Tive uma dúvida no domingo à noite e fui atendida em menos de 10 minutos.",
                author: "Ana Pereira",
                role: "Marketing Digital"
              },
              {
                text: "Interface limpa, rápida e intuitiva. Finalmente consegui colocar meu portfólio no ar com qualidade.",
                author: "João Souza",
                role: "Desenvolvedor Freelancer"
              }
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-slate-300 italic">
                    "{t.text}"
                  </p>
                </div>
                <footer className="mt-4 text-sm text-slate-400">
                  <strong className="text-slate-200 block">{t.author}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Preço */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 mb-20">
          <h2 className="text-3xl font-bold">Plano único, sem complicação</h2>
          <p className="text-slate-300 mt-6 max-w-2xl">
            Acreditamos na transparência. Tenha acesso a todas as funcionalidades
            por um preço justo, sem taxas ocultas ou surpresas no final do mês.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
            <div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1">
                    <Check className="size-4 text-emerald-400" />
                  </div>
                  <span>Projetos e domínios ilimitados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1">
                    <Check className="size-4 text-emerald-400" />
                  </div>
                  <span>Analytics e relatórios avançados</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1">
                    <Check className="size-4 text-emerald-400" />
                  </div>
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1">
                    <Check className="size-4 text-emerald-400" />
                  </div>
                  <span>Certificado SSL Gratuito</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 ">
              <div className="text-sm text-slate-400 font-medium">Acesso Vitalício</div>
              <div className="text-5xl font-extrabold mt-2 tracking-tight">R$ 169,99</div>
              <div className="text-sm text-amber-300 mt-4 flex items-center gap-2 bg-amber-500/10 w-fit px-3 py-1 rounded-full border border-amber-500/20">
                <Clock1 className="size-3" />
                <p className="font-medium">Oferta por tempo limitado!</p>
              </div>
              <button
                className="mt-6 w-full cursor-pointer hover:bg-fuchsia-500 rounded-xl bg-fuchsia-600 px-6 py-4 font-bold text-white transition-all shadow-lg shadow-fuchsia-900/20"
              >
                Garantir Minha Vaga
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">Garantia de 7 dias ou seu dinheiro de volta.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Minha Marca. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#" className="text-slate-400 hover:text-white transition">Termos de Uso</a>
             <a href="#" className="text-slate-400 hover:text-white transition">Política de Privacidade</a>
          </div>
        </div>
      </footer>


      {open && (
        <div className="fixed inset-0 z-50 md:hidden">

          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="fixed right-0 top-0 h-full w-64 bg-slate-950 border-l border-white/10 p-6 shadow-2xl shadow-black overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="size-6 text-fuchsia-400" />
                <span className="font-semibold text-white">Minha Marca</span>
              </div>
              <button
                className="p-2 rounded-lg hover:bg-white/10 text-slate-200"
                onClick={() => setOpen(false)}
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-fuchsia-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a 
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center rounded-xl bg-fuchsia-600 py-3 font-semibold text-white hover:bg-fuchsia-700 transition"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;