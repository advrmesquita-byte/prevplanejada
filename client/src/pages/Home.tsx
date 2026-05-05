import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, CheckCircle2, Users, Award, Briefcase } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Professional Legal Advocacy
 * - Color Palette: Deep Blue (#1B3A6B), Gold (#D4AF37), Gray (#808080), White
 * - Typography: Serif for headings (authority), Sans-serif for body (clarity)
 * - Layout: Asymmetric, hierarchical, with strategic whitespace
 * - Interaction: Subtle animations, clear CTAs, trust-building elements
 */

export default function Home() {
  const whatsappNumber = "5585999444105"; // WhatsApp: 85 99944-4105
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre seus serviços de advocacia previdenciária.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/logo-mesquita.png" alt="Mesquita Advocacia" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm">Mesquita</span>
              <span className="text-xs text-yellow-600 font-semibold">Advocacia Previdenciária</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-700 hover:text-blue-700 transition">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-700 transition">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-700 transition">Contato</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Seu Direito Previdenciário é Nossa Prioridade
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Especializado em BPC/LOAS, Aposentadorias e Planejamento Previdenciário. Atendimento online para todo o Brasil.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold gap-2 text-lg px-8 py-6">
                    <MessageCircle size={20} />
                    Fale Conosco
                  </Button>
                </a>
                <a href="#servicos">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-bold gap-2 text-lg px-8 py-6">
                    Conheça os Serviços
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-yellow-400 flex-shrink-0" />
                  <span className="text-blue-100 font-semibold">Especialista em Direito Previdenciário - Pós-Graduação UNIFOR</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-yellow-400 flex-shrink-0" />
                  <span>OAB/CE 40996</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-yellow-400 flex-shrink-0" />
                  <span>Fortaleza, CE</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl p-1 shadow-2xl overflow-hidden">
                <img src="/images/foto1.png" alt="Rodrigo Lopes Mesquita" className="w-full h-96 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition">
              <Users className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600 text-sm text-justify">Cada caso é único. Oferecemos soluções adaptadas à sua situação.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition">
              <Briefcase className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Expertise Comprovada</h3>
              <p className="text-gray-600 text-sm text-justify">Especialista em Direito Previdenciário pela Unifor e com 10 anos de experiência na área.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition">
              <CheckCircle2 className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600 text-sm text-justify">Histórico de sucesso em Aposentadorias, BPC/LOAS e Revisões Previdenciárias.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition">
              <Award className="text-blue-700 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Online em Todo Brasil</h3>
              <p className="text-gray-600 text-sm text-justify">Atendimento 100% online para clientes de qualquer região do país.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-justify">
              Soluções completas em direito previdenciário para garantir seus direitos
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "BPC/LOAS",
                  description: "Benefício de Prestação Continuada para pessoas com deficiência ou idosos em situação de vulnerabilidade.",
                  details: ["Análise de elegibilidade", "Preparação de documentação", "Acompanhamento processual"]
                },
                {
                  title: "Aposentadorias",
                  description: "Orientação completa sobre os diferentes tipos de aposentadoria e estratégias para otimizar seus benefícios.",
                  details: ["Aposentadoria por Idade", "Aposentadoria por Contribuição", "Aposentadoria Especial"]
                },
                {
                  title: "Revisão de Benefícios",
                  description: "Análise de benefícios já concedidos para identificar oportunidades de aumento ou correção.",
                  details: ["Revisão de Cálculos", "Majoração de Benefícios", "Atualização de Dados"]
                },
                {
                  title: "Planejamento Previdenciário",
                  description: "Estratégia personalizada para maximizar seus direitos previdenciários e garantir segurança financeira.",
                  details: ["Análise de Contribuições", "Otimização de Benefícios", "Planejamento Sucessório"]
                }
              ].map((service, index) => (
              <Card key={index} className="p-8 border-l-4 border-l-blue-700 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-justify">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-yellow-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            </div>
            <div className="flex justify-center mt-8">
              <Card className="p-8 border-l-4 border-l-blue-700 hover:shadow-lg transition w-full md:w-1/2 lg:w-1/3">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">Serviços Administrativos</h3>
                <p className="text-gray-600 mb-4 text-justify">Serviços administrativos essenciais para regularizar e otimizar sua situação previdenciária junto ao INSS.</p>
                <ul className="space-y-2">
                  {["Averbação de Tempo de Contribuição", "Ajuste de CNIS", "Regularização de Registros"].map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-yellow-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Rodrigo Lopes Mesquita</h2>
              <p className="text-lg text-gray-700 mb-4 text-justify">
                Advogado especializado em direito previdenciário com foco em soluções práticas e resultados comprovados. Minha missão é garantir que você tenha acesso aos seus direitos previdenciários de forma eficiente e segura.
              </p>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Com experiência de 10 anos na área, ofereço atendimento online para clientes em todo o Brasil, com especial atenção aos casos de BPC/LOAS e planejamento previdenciário.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="text-blue-700 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>OAB/CE 40996</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-blue-700 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Especializado em Direito Previdenciário - Pós-Graduação UNIFOR</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-blue-700 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Fortaleza, Ceará</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-blue-700 flex-shrink-0" size={24} />
                  <span className="text-gray-700"><strong>Atendimento Online - Brasil Todo</strong></span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-1 shadow-xl overflow-hidden">
              <img src="/images/foto2.png" alt="Rodrigo Lopes Mesquita - Escritório" className="w-full h-96 object-cover object-top rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de clientes que conquistaram seus direitos previdenciários
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <Card className="p-8 border-0 shadow-md hover:shadow-lg transition bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  MF
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Maria Ferreira</h3>
                  <p className="text-sm text-gray-600">Aposentada - BPC/LOAS</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4 text-justify">
                "Procurei o Rodrigo quando estava desesperada. Minha mãe idosa precisava do BPC e eu não sabia por onde começar. Ele foi muito atencioso, explicou cada passo do processo e conseguiu a aprovação em menos de 6 meses. Hoje minha mãe tem a segurança que merecia. Recomendo muito!"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </Card>

            {/* Depoimento 2 */}
            <Card className="p-8 border-0 shadow-md hover:shadow-lg transition bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  JC
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">João Carlos</h3>
                  <p className="text-sm text-gray-600">Autônomo - Revisão de Benefício</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4 text-justify">
                "Eu já tinha uma aposentadoria, mas sabia que estava recebendo menos do que deveria. O Rodrigo fez uma análise completa do meu histórico e conseguiu aumentar meu benefício em 40%. O atendimento foi profissional e rápido. Valeu muito a pena!"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Resolver Sua Questão Previdenciária?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-justify">
            Entre em contato agora mesmo. Primeira consulta para avaliar seu caso e apresentar as melhores soluções.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white gap-2 text-lg px-8 py-6">
                <MessageCircle size={20} />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+5585999444105">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 gap-2 text-lg px-8 py-6 font-bold">
                <Phone size={20} />
                (85) 99944-4105
              </Button>
            </a>
            <a href="mailto:rodrigomesquita@prevplanejada.com.br">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 gap-2 text-lg px-8 py-6 font-bold">
                <Mail size={20} />
                E-mail
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Entre em Contato</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-md">
              <MessageCircle className="text-green-500 mx-auto mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                Clique para conversar
              </a>
            </Card>

            <Card className="p-8 text-center border-0 shadow-md">
              <Phone className="text-blue-700 mx-auto mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <a href="tel:+5585999444105" className="text-blue-700 hover:underline">
                (85) 99944-4105
              </a>
            </Card>

            <Card className="p-8 text-center border-0 shadow-md">
              <Mail className="text-yellow-600 mx-auto mb-4" size={40} />
              <h3 className="font-bold text-lg mb-2">E-mail</h3>
              <a href="mailto:rodrigomesquita@prevplanejada.com.br" className="text-blue-700 hover:underline block">
                rodrigomesquita@prevplanejada.com.br
              </a>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Redes Sociais</h3>
            <p className="text-gray-700 mb-4 text-justify">
              Acompanhe dicas e atualizações sobre direito previdenciário no Instagram:
            </p>
            <a href="https://instagram.com/prev.planejada" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2">
                @prev.planejada
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Mesquita Advocacia</h4>
              <p className="text-sm text-justify">Especializado em direito previdenciário com foco em resultados.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="hover:text-white transition">BPC/LOAS</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Aposentadorias</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Revisões</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+5585999444105" className="hover:text-white transition">(85) 99944-4105</a></li>
                <li><a href="mailto:rodrigomesquita@prevplanejada.com.br" className="hover:text-white transition">rodrigomesquita@prevplanejada.com.br</a></li>
                <li><a href="https://instagram.com/prev.planejada" className="hover:text-white transition">@prev.planejada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Localização</h4>
              <p className="text-sm">R. Manuel Castelo Branco, 399<br />Messejana - Fortaleza, CE 60840-015<br />OAB/CE 40996</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Mesquita Advocacia Previdenciária. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40">
        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110">
          <MessageCircle size={28} />
        </div>
      </a>
    </div>
  );
}
