export const plansContent = [
  {
    description: "R$ 210,00",
    title: "Consulta Mensal",
    src: "/monthly-guidance.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Consulta mensal e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <ul className="list-inside list-disc">
          <li>Avaliação completa</li>
          <li>Avaliação de exames</li>
          <li>Suplementação de vitaminas e fitoterápicos (se necessário)</li>
          <li>Plano alimentar</li>
          <li>Ebook de receitas e outros materiais</li>
          <li>Apoio via whatsapp 1 vez por mês</li>
        </ul>
      );
    },
  },
  {
    description: "R$ 630,00",
    title: "Consulta Trimestral",
    src: "/quartely-guidance.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Consulta Trimestral e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <ul className="list-inside list-disc">
          <li>3 consultas + avaliação completa</li>
          <li>Avaliação de exames</li>
          <li>Suplementação de vitaminas e fitoterápicos (se necessário)</li>
          <li>Plano alimentar</li>
          <li>Ebook de receitas e outros materiais</li>
          <li>Apoio via whatsapp a cada 15 dias</li>
        </ul>
      );
    },
  },

  {
    description: "‌R$ 115,50",
    title: "Orientação Nutricional",
    src: "/orientation.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Orientação Nutricional e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <p>Investir em sua saúde é o melhor presente que você pode se dar!</p>
      );
    },
  },
  {
    description: "R$ 262,50",
    title: "Plano Alimentar Semanal",
    src: "/coffe.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse no Plano Alimentar Semanal e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <>
          <p>Plano alimentar com 3 opções para cada refeição!</p>
          <p>Te ajudo com:</p>
          <ul className="list-inside list-disc">
            <li>Emagrecimento</li>
            <li>Ganho de massa</li>
            <li>Diabetes</li>
            <li>Hipertensão</li>
            <li>Colesterol alto</li>
            <li>Constipação</li>
            <li>Outros</li>
          </ul>
        </>
      );
    },
  },
  {
    description: "‌‌‌‌‌R$ 105,00",
    title: "Bioimpedância",
    src: "/weight-scale.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Bioimpedância e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <ul className="list-inside list-disc">
          <li>Exame realizado em consultório</li>
          <li>Balança de última geração</li>
          <li>Avaliação de parâmetros antropométricos (MEDIANA)</li>
          <li>Percentual de gordura</li>
          <li>Percentual de massa magra</li>
          <li>Outros</li>
        </ul>
      );
    },
  },
  {
    description: "‌‌‌‌‌R$ 315,00",
    title: "Lista de Compras",
    src: "/grocery-shopping.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Lista de Compras e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <p>
          Diga adeus às listas perdidas e às compras por impulso!
          <br />
          Esse serviço te ajuda a manter uma alimentação saudável e balanceada.
        </p>
      );
    },
  },
  {
    description: "‌‌‌‌‌R$ 50,00",
    title: "Consulta Social",
    src: "/community.jpg",
    ctaText: "Saiba mais",
    whatsAppMessage:
      "Olá! Tudo bem? Tenho interesse na Consulta Social e gostaria de saber mais sobre como funciona.",
    content: () => {
      return (
        <p>
          Ofereço atendimento nutricional com valor reduzido para tornar o
          serviço acessível a pessoas em situação de vulnerabilidade econômica.
          Essa iniciativa busca promover a saúde e a qualidade de vida,
          fornecendo orientações para prevenir e tratar condições como
          obesidade, diabetes e hipertensão.
          <br /> O valor social cobre os custos mínimos, mantendo a qualidade do
          atendimento e garantindo um cuidado ético e inclusivo para a
          comunidade.
        </p>
      );
    },
  },
];
