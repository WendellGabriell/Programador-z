import { useState, useEffect } from 'react';
import { Star, Download, Shield, Users, BookOpen, Trophy, Zap, Heart, Check } from 'lucide-react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev: TimeLeft) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo neon-text text-2xl font-bold">
            Programador<span className="text-purple-400"> - Z</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="neon-link hover:text-purple-400 transition-colors">Home</a>
            <a href="#sobre" className="neon-link hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#contato" className="neon-link hover:text-purple-400 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-pulse mb-4">
            <span className="neon-badge px-4 py-2 text-sm font-bold border border-purple-500 rounded-full">
              🔥 MAIS VENDIDO
            </span>
          </div>
          
          <h1 className="neon-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DOMINE A
            <span className="block text-purple-400 animate-pulse">PROGRAMAÇÃO COM IA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            O Guia Definitivo para Criar Sites com IA e Vender Prontos <span className="text-purple-400 font-bold text-3xl">HOJE</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className="neon-card p-4 rounded-lg">
              <img 
                src="/Logo3d.png"
                alt="Capa do Curso Programador-Z"
                className="w-64 h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="text-left max-w-md">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-yellow-400 font-bold">4.9/5</span>
                  <span className="text-gray-400">(2.847 avaliações)</span>
                </div>
                <p className="text-gray-300">Mais de 150 exemplares vendidos</p>
              </div>
              
              <button className="neon-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 w-full">
                <Download className="inline-block mr-2" size={20} />
                COMPRAR AGORA - R$ 97,00
              </button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="neon-card p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 text-purple-400">⏰ PROMOÇÃO TERMINA EM:</h3>
            <div className="flex justify-center gap-4 text-center">
              <div className="neon-counter">
                <div className="text-2xl font-bold text-purple-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">Horas</div>
              </div>
              <div className="neon-counter">
                <div className="text-2xl font-bold text-purple-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">Min</div>
              </div>
              <div className="neon-counter">
                <div className="text-2xl font-bold text-purple-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">Seg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="neon-title text-4xl md:text-5xl font-bold text-center mb-16">
            O QUE VOCÊ VAI <span className="text-purple-400">CONQUISTAR</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Programador em 90 Dias", desc: "Metodologia comprovada para dominar programação rapidamente" },
              { icon: Users, title: "Comunidade Ativa", desc: "Conecte-se com outros programadores e mentores experientes" },
              { icon: Trophy, title: "Projetos Reais", desc: "Construa um portfólio impressionante com projetos práticos" },
              { icon: BookOpen, title: "Conhecimento Atualizado", desc: "As tecnologias mais demandadas pelo mercado atual" },
              { icon: Shield, title: "Carreira Sólida", desc: "Estratégias para conquistar e manter uma carreira em tech" },
              { icon: Heart, title: "Independência Profissional", desc: "Torne-se um profissional valorizado e bem remunerado" }
            ].map((benefit, index) => (
              <div key={index} className="neon-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group">
                <benefit.icon className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" size={48} />
                <h3 className="text-xl font-bold mb-3 text-purple-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="container mx-auto px-6">
          <h2 className="neon-title text-4xl md:text-5xl font-bold text-center mb-16">
            O QUE VOCÊ VAI <span className="text-purple-400">APRENDER</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Fundamentos de programação e lógica de programação",
                "JavaScript moderno e suas principais tecnologias",
                "React.js para criar interfaces incríveis",
                "Node.js para desenvolvimento backend",
                "Banco de dados SQL e NoSQL",
                "Git e GitHub para controle de versão",
                "Como criar projetos do zero ao deploy",
                "Estratégias para conseguir sua primeira vaga"
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 p-4 neon-card rounded-lg hover:bg-purple-900/20 transition-all duration-300">
                  <Check className="text-purple-400 flex-shrink-0" size={24} />
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="neon-title text-4xl md:text-5xl font-bold text-center mb-16">
            DEPOIMENTOS DE <span className="text-purple-400">SUCESSO</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Desenvolvedora Frontend",
                text: "Em apenas 3 meses seguindo o Programador-Z, consegui minha primeira vaga como programadora! Inacreditável!",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Programador Full Stack",
                text: "O Programador-Z mudou completamente minha carreira. Agora trabalho em uma das melhores empresas de tech do país!",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Desenvolvedora Mobile",
                text: "Os conhecimentos do Programador-Z valem muito mais que os R$ 97. Meu salário aumentou 400% no primeiro ano!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="neon-card p-6 rounded-lg hover:scale-105 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-purple-500/30 pt-4">
                  <h4 className="font-bold text-purple-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="neon-title text-4xl md:text-5xl font-bold mb-8">
            INVESTIMENTO <span className="text-purple-400">ESPECIAL</span>
          </h2>
          
          <div className="max-w-md mx-auto neon-card p-8 rounded-lg mb-8">
            <div className="mb-6">
              <span className="text-gray-400 text-lg line-through">De R$ 297,00</span>
              <div className="text-6xl font-bold text-purple-400 mb-2">R$ 97</div>
              <span className="text-gray-300">Pagamento único</span>
            </div>
            
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
              <Shield className="text-green-400 mx-auto mb-2" size={32} />
              <h3 className="font-bold text-green-400 mb-2">GARANTIA DE 30 DIAS</h3>
              <p className="text-sm text-gray-300">100% do seu dinheiro de volta se não ficar satisfeito</p>
            </div>
            
            <button className="neon-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 w-full mb-4">
              🚀 GARANTIR MEU CURSO AGORA
            </button>
            
            <p className="text-sm text-gray-400">Acesso imediato após a compra</p>
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>✓ Download Imediato</span>
            <span>✓ Suporte 24/7</span>
            <span>✓ Atualizações Gratuitas</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 border-t border-purple-500/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="logo neon-text text-2xl font-bold mb-6">
              Programador<span className="text-purple-400"> - Z</span>
            </div>
            
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                YouTube
              </a>
            </div>
            
            <div className="text-sm text-gray-400 space-y-2">
              <p>Email: wendellgverdeiro67@gmail.com</p>
              <p>WhatsApp: (18) 99670-2852</p>
              <p className="mt-6">&copy; 2025 Studio Verdeiro. Todos os direitos reservados. 💜</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;