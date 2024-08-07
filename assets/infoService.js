import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export function getSocialMediaList() {
  return [
    {url: "https://github.com/bhfsilva?tab=repositories", Icon: FiGithub, username: "bhfsilva", socialMediaName: "GitHub"},
    {url: "mailto:bhfs.contato@gmail.com", Icon: FiMail, username: "bhfs.contato@gmail.com", socialMediaName: "Email"},
    {url: "https://linkedin.com/in/bhfsilva", Icon: FiLinkedin, username: "Bruno Henrique", socialMediaName: "Linkedin"}
  ]
}

export function getJobExperienceList() {
  return [
    {
      organizationLogo: "/static/jobs-experiences/MPConsultoria-logo.png",
      organizationName: "MPConsultoria",
      position: "Desenvolvedor Java Júnior",
      startMonthYear: "Julho/2023",
      endMonthYear: null,
      showTaskList: true,
      skills: [
        "Java 11",
        "SpringBoot",
        "IntelliJ IDEA",
        "Angular",
        "MongoDB",
        "Azure Service Bus (mensageria)",
        "WebServices SOAP",
        "Python",
        "Selenium",
        "Figma",
        "Next.JS",
        "Bash",
        "Git",
        "Azure"
      ],
      tasks: [
        "Desenvolvi sites utilizando frameworks Javascript como React.JS e Next.JS;",
        "Acompanhei o desenvolvimento de sites e projetos por um cronograma de atividades feito utilizando a ferramenta Notion;",
        "Criei protótipos de interfaces de websites utilizando a ferramenta Figma;",
        "Apliquei estratégias de ramificação e versionamento de código com GIT;",
        "Participei na criação de uma API e de um software SaaS para obtenção do XML de notas fiscais eletrônicas utilizando Java com SpringBoot para integração com Webservices municipais, desenvolvendo interfaces com Angular e gerenciando dados com MongoDB;",
        "Participei de um projeto de web scraping (raspagem de dados), criando automações com as bibliotecas Selenium e BeautifulSoup em Python;",
        "Integrei aplicações Java e Python utilizando o serviço de mensageria Azure Service Bus;",
        "Refatorei e escrevi a documentação do projeto de web scraping, melhorando a escalabilidade e manutenção do código."
      ]
    },
    {
      organizationLogo: "/static/jobs-experiences/scala-data-center-logo.png",
      organizationName: "Scala Data Centers",
      position: "Estagiário em Redes de Computadores e Monitoração",
      startMonthYear: "Junho/2021",
      endMonthYear: "Maio/2023",
      showTaskList: false,
      skills: [
        "Python",
        "HTML",
        "CSS",
        "Peakflow API",
        "Grafana"
      ],
      tasks: [
        "Criei scripts para configuração de ativos de rede, como switches e roteadores;",
        "Utilizando a linguagem Python, participei do desenvolvimento de um script que, acessando a API da ferramenta Arbor Peakflow, mapeava quais clientes ainda possuíam vínculo com a empresa;",
        "Utilizando HTML e CSS, desenvolvi uma tela de login responsiva para um site interno;",
        "Criei gráficos na ferramenta Grafana que mediam o tráfego de dados de equipamentos;",
        "Elaborei relatórios mensais para medições de informações de clientes."
      ]
    }
  ]
}