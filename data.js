export const projectInfo = [
  {
      id: '1',
      date: '2020',
      name:'My-Pokemon-App',
      title: 'Pokedex',
      github: `https://github.com/AlbadDev/My-Pokemon-App`,
      webSite:`https://pokedex-17cda.web.app`,
      description: 'Pokedex is a simple CRUD pokemon web application with beautiful UI design.  This App allows user to create, update, delete or search an specific pokemon . Pokedex is build using the pokemon data API.',
      material: ['React', 'TypeScript', 'MaterialUi', 'Firebase'],
      mvp: ['Fisrt of all the user need to login with our default username and password : " pikachu " ',
            'Data get displayed to the home page where user can see 12 pokemons.',
            'Click to a  pokemon card to see the pokemon details the a different page',
            'User can use the search bar in the top to search an specific pokemon.',
            'You have the ablity to create a new pokemon by cliking to the light red button in the bootom of the app.',
            'To add new pokemon remplace these 3 xxx in the link with any number and validate .',
            'When an information is wrong or empty after you submit the form, an error will throw ',
            'User can edit a pokemon, set new value for it like : name, score, genre, damage.',
            'Posiblity to delete an specific pokemon'
          ],
      inDeep: ['Firebase Authentication API',
        'For a better page navigation, I used react-router .',
              'To take 12 pokemons persistant in our app I used json-server to handle data persistance.',
              'For the pokemon data I use the pokemon data API.',
              'To get the data asynchronously I used axios to fetch the data.',
              'And I used Hooks for easy state data management.',
              'Material-UI to simplfied writing plain css'   
            ],
      mobileScreen: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/ab_login_moto.PNG',
      tabScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/pokedex/homePage.PNG',
      bodyMobileScreen:'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG' ,
      bodyTabScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/pokedex/addPokemon.PNG',
      errorType: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/pokedex/error_type.PNG',
      colors: ['#019788','#EEFFFE','#FBFBFA', '#26A69A','#F44336' ]
    },
  {
      id: '2',
      date: '2020',
      name:'GitHub-Viewer',
      title: 'GitHub-Viewer',
      github: `https://github.com/AlbadDev/Github-Viewer`,
      webSite:`https://github-viewer-78093.web.app/`,
      description: 'A pretty look UI app for displaying GitHub profil informations like : repositorie stats and more. This app include data visualizations of user top languages, starred repositories and allow to sort through user repos by number of stars, forks or size. ',
      material: ['React', 'Sass', 'GitHub'],
      mvp: ['GitHub Viewer start with an search bar input field.',
            'Enter a valid GitHub user name to the search bar and click Enter.',
            "This app get started with a preety look user profil informations : Personal info and all repos info.",
            'A pretty look visualization of graphical representation data like : user most used programming language etc.. .',
            'A clean list of the user public repositories and information of any repos displayed into an individual card.',
            'User can sort all repopositories by size, number of forks, stars by using the dropdown button in the top .'
          ],
      inDeep: ['To get real data from any GitHub account, I use the GitHub data API and Airbnb Polyglot.js.',
                   'I used fetch for data fething and use request code status for error handling',
                   'For data visualization, I used Chart.js.',
                   'Saas (CSS Preprocessor) for styling and React Hook for data management.',
                   'I build the dropdown sort button using the react state hook and html form.'
              ],
      mobileScreen: 'https://raw.githubusercontent.com/AlbadDev/Github-Viewer/master/public/home_mobile.PNG',
      tabScreen: 'https://raw.githubusercontent.com/AlbadDev/Github-Viewer/master/public/albad_home_tab.PNG',
      bodyMobileScreen: 'https://raw.githubusercontent.com/AlbadDev/Github-Viewer/master/public/albad_graph.PNG',
      bodyTabScreen: 'https://raw.githubusercontent.com/AlbadDev/Github-Viewer/master/public/albaddev_project_tab.PNG',
      errorType: 'https://raw.githubusercontent.com/AlbadDev/Github-Viewer/master/public/albad_error_no_user.PNG',
      colors: ['#1b1e23','#1b3ac7','#c9e1fe','#808181','#3c4d40'],
  },
  {
      id: '3',
      date: '2021',
      title: 'Portfolio V1',
      github: `https://github.com/AlbadDev/portfolio_v1`,
      webSite:`https://www.`,
      description: 'My first personal website I build and designed. I learned quite a bit about Nextjs and SEO. Since then, I thing my UI and design web development skills have improved immensely.',
      material: ['Nextjs', 'Sass', 'GitHub'],
      mvp: ['Portfolio V1 is a single page application.',
            'It start with the home page where I introduce my self in shot line.',
            'An About page , where I introduce my self starting with a picture,full name, and more... .',
            'A Work page section, where I have listed some of my recent personal work I have done using my recent stack.',
            'You have the ablity to click in each work name to see the live project in the internet.',
            'For any project, click on the eye icon go in deep the project in a different page to see how it get done  ',
            'My resume page, here I build my resume from scratch and you can also download my white paper resume .'
          ],
      inDeep: ['Next.js is a react framwork to build scalable static and dynamic site for fast web app and better SEO.',
               'For a fast page navigation, next.js give use a better way to deal with routing by using the Link attribute.',
               'I used the asynchronous getStaticProps function and use fetch for data fetching.',
               'I used The getStaticPaths to show project details of any project in a different page.',
               'And for clean and usable icon, I use react-icons.',
               'For my logo I use the Polya font policy.'
            ],
      mobileScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/portfolio/home_page_mobile.png',
      tabScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/portfolio/project_page_tab.png',
      bodyMobileScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/portfolio/project_details_mobile.png',
      bodyTabScreen: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/portfolio/about_page_tab.png',
      errorType: 'https://raw.githubusercontent.com/AlbadDev/portfolio_v1/master/public/image/reposImages/portfolio/project_detail_full_view.png',
      colors: ['#041F20','#14C7C7','#CCD6F6','#8892B0','#00DDAD'],
  },
  {
      id: '4',
      date: '2019',
      title: 'Stark Search',
      github: `https://github.com/AlbadDev/Stark-Search`,
      webSite:`https://www.`,
      description: 'Start from learning vanilla JavaScript fundamentals and Asynchronous request. I build Stark Search app that is a simple search engine that take an input value and display search result fetch from the popular online encyclopedia, Wikipedia. At the end , I use the themed Game of Thrones design.',
      material: ['JavaScript', 'Jquery', 'Html5','Css3'],
      mvp: ['Stark Search start with a search bar input field.',
            'Field the Input with a value and click the search icon or enter.',
            'The result of the search will get displayed in the botton of the search bar, it can be multiple.',
            'Click to each the result and get redirect to the wikipedia page for full information.'],
      inDeep: ['To get a real data from wikipedia, I used the wikipedia data API.',
               'To get the data asynchronouly I used the jquery Ajax function.',
               'Wikipedia data API is free to use and free for developer.'
            ],
      mobileScreen: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG',
      tabScreen: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG',
      bodyMobileScreen: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG',
      bodyTabScreen: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG',
      errorType: 'https://raw.githubusercontent.com/AlbadDev/My-Pokemon-App/master/bulbuzar_iphone.PNG',
      colors: ['#F4F5F4','#232C3F','#FEFFFE','#010100'],   
  }
]