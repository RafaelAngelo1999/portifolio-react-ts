import myImage from '../assets/img/my.png';

export interface IProject {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
  stacks: string[];
  linkRepos: string;
  linkDeploy: string;
}

export interface IStack {
  name: string;
  urlSvg: string;
}

export interface IExperiences {
  id: number;
  name: string;
  local: string;
  date: string;
  stacks: string[];
}

export interface IPresentation {
  name: string;
  posts: string[];
  img: string;
  mensage: string;
}

export const PRESENTATION: IPresentation = {
  name: 'Rafael Angelo',
  posts: ['Hello, 👋', 'Meu nome é Rafael', 'Sou desenvolvedor Full-Stack'],
  img: myImage,
  mensage:
    '👋 Sou Rafael Angelo. Sou um profissional que busca constantemente seu crescimento pessoal e profissional. Gosto de trabalhar em equipe, tenho facilidade de comunicação e busco aprender ao máximo com aqueles que possuem mais experiência ⭐. Crio ideias e desenvolvo soluções na forma de software usando minha criatividade e meu conhecimentos técnicos, escrevendo não apenas softwares escaláveis, mas também um código limpo que possibilitará a escalabilidade 💜.',
};

export const PROJETOS: IProject[] = [
  {
    id: 1,
    name: 'Bot Covid19 - Twitter',
    date: '2020',
    image: 'https://i.ibb.co/8rgBQD4/botcovid19-2.png',
    description:
      'BOT desenvolvido para fornecer informações atualizadas de casos de Corona Virus no Brasil, o bot utiliza da api externa COVID-19 Brazil API para fornecerer essas informações',
    stacks: ['TS', 'API'],
    linkRepos: 'https://github.com/RafaelAngelo1999/BOT.Covid19-Twitter',
    linkDeploy: 'https://twitter.com/BOT_COVID_BR',
  },
  {
    id: 2,
    name: 'API Autenticação - JWT',
    date: '2022',
    image: 'https://i.ibb.co/TYsxX2z/AUTH.png',
    description:
      'API de autenticação utilizando JWT para validação da role, tempo de token, e token do usuario, utilizando paradigma DDD e EntityframeWork como ORM.',
    stacks: ['.NET', 'MYSQL'],
    linkRepos: 'https://github.com/RafaelAngelo1999/Authenticator.WebAPI',
    linkDeploy: 'https://authentication-webapi.herokuapp.com/swagger/index.html',
  },
  {
    id: 3,
    name: 'WebCrawler and Scraper',
    date: '2021',
    image: 'https://raw.githubusercontent.com/RafaelAngelo1999/WC.Backend/main/assets/image1.png',
    description:
      'Aplicação para extração de dados das páginas de produtos que analisa e mapeia os principais atributos e métricas e os salva em um banco de dados relacional. (Crawler/Scraper)',
    stacks: ['.NET', 'MYSQL'],
    linkRepos: 'https://github.com/RafaelAngelo1999/WC.Backend',
    linkDeploy: 'https://bit.ly/DashboardWebCrawler',
  },
  {
    id: 4,
    name: 'Formulario de Usuario',
    date: '2022',
    image: 'https://user-images.githubusercontent.com/61028628/172021277-fee40c18-c818-40fe-9bfa-486c3ee0d6b4.png',
    description:
      'Aplicação para simulação de um formulário de cadastro, empregando algumas bibliotecas para facilitar as validações de dados inseridos e o gerenciamento dos estados dos componentes.',
    stacks: ['React'],
    linkRepos: 'https://github.com/RafaelAngelo1999/form-user-add',
    linkDeploy: 'https://rafaelangelo1999.github.io/form-user-add',
  },
  {
    id: 4,
    name: 'Lista de Compras',
    date: '2022',
    image: 'https://raw.githubusercontent.com/RafaelAngelo1999/React.ListaDeCompra/main/src/utils/readme/projeto.png',
    description:
      'Aplicação para gerenciar lista de compras, onde é possível cadastrar itens por categorias já pré cadastradas e gerenciar esses ativos em tempo real',
    stacks: ['React'],
    linkRepos: 'https://github.com/RafaelAngelo1999/React.ListaDeCompra',
    linkDeploy: 'https://rafaelangelo1999.github.io/React.ListaDeCompra',
  },
  {
    id: 5,
    name: 'Indeciso',
    date: '2023',
    image: 'https://raw.githubusercontent.com/RafaelAngelo1999/IndecisoRoulette/main/github/assets/indeciso.png',
    description:
      'Aplicação divertida e prática para ajudar os usuários a tomarem suas decisões. Além da funcionalidade de inserir uma lista de opções e roleta que permite visualizar de forma lúdica',
    stacks: ['React'],
    linkRepos: 'https://github.com/RafaelAngelo1999/IndecisoRoulette',
    linkDeploy: 'https://rafaelangelo1999.github.io/IndecisoRoulette',
  },
  {
    id: 6,
    name: 'Raspadinha de Momentos',
    date: '2023',
    image:
      'https://raw.githubusercontent.com/RafaelAngelo1999/couple-moments-collection/main/github/assets/raspadinha.png',
    description:
      'Aplicação interativa que permita aos casais colecionar e guardar recordações de momentos especiais que compartilharam juntos. Os usuários poderão criar lembranças únicas e significativas, salvá-las e compartilhá-las.',
    stacks: ['React'],
    linkRepos: 'https://github.com/RafaelAngelo1999/couple-moments-collection',
    linkDeploy: 'https://rafaelangelo1999.github.io/couple-moments-collection',
  },
  {
    id: 7,
    name: 'Lista de Compras',
    date: '2022',
    image: 'https://raw.githubusercontent.com/RafaelAngelo1999/React.ListaDeCompra/main/src/utils/readme/projeto.png',
    description:
      'Aplicação para gerenciar lista de compras, onde é possível cadastrar itens por categorias já pré cadastradas e gerenciar esses ativos em tempo real',
    stacks: ['React'],
    linkRepos: 'https://github.com/RafaelAngelo1999/React.ListaDeCompra',
    linkDeploy: 'https://rafaelangelo1999.github.io/React.ListaDeCompra',
  },
];

export const STACKS: IStack[] = [
  {
    name: 'React',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'TS',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'JS',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
  },
  {
    name: 'Angular',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'DotNet',
    urlSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    name: 'Git',
    urlSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'HTML',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  },
  {
    name: 'MySql',
    urlSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'CSHARP',
    urlSvg: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
  },
  {
    name: 'Azure',
    urlSvg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  },
];

export const EXPERIENCESES: IExperiences[] = [
  {
    id: 1,
    name: 'Desenvolvedor FullStack',
    local: 'DTI Digital - Belo Horizonte, MG',
    date: '2021 - Atual',
    stacks: ['.NET', 'C#', 'React', 'DevOps'],
  },
  {
    id: 2,
    name: 'Desenvolvedor FullStack',
    local: 'Grupo Otimiza - Belo Horizonte, MG',
    date: '2020 - 2021',
    stacks: ['Angular', 'TypeScript', '.NET Frame', 'C#', 'SqlServer'],
  },
  {
    id: 3,
    name: 'Estagiario em Desenvolvimento',
    local: 'Grupo Otimiza - Belo Horizonte, MG',
    date: '2019 - 2020',
    stacks: ['Angular', 'TypeScript', '.NET Frame', 'C#', 'SqlServer'],
  },
];
