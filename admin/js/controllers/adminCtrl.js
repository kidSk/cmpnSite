angular.module('adminApp').controller('adminCtrl',
  function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http,$location, $timeout) {

        /**
         * @dashBoardCard
         * md-card
         * view
         */

         $scope.title="Camara Municiapl do Porto Novo"
         


         $scope.dashBoardCard = [{
          name: 'Departamento',
          btnAdd: '#/createDep',
          btnList: '#/departamento/list',
          btnEdit: '#/createDep/{{dep.id}}',
          btnRm: 'Remover',
          img: '../img/dep.svg',
          iconAdd: 'add',
          icon: 'fa fa-bank',
          descricao: 'Adicionar, Editar ou Remover Departamentos'
        }, {
          name: 'Noticias',
          btnAdd: 'adicionarNoticias.php',
          btnEdit: 'Editar',
          btnRm: 'Remover',
          img: '../img/noticia.svg',
          iconAdd: 'add',
          icon: 'fa fa-rss',
          descricao: 'Adicionar, Editar ou Remover Noticias'
        }, {
          name: 'Eventos',
          btnAdd: '#/evento/create',
          btnEdit: 'Editar',
          btnRm: 'Remover',
          img: '../img/event.svg',
          iconAdd: 'add',
          icon: 'fa fa-calendar',
          descricao: 'Adicionar, Editar ou Remover Eventos'
        },

        {
          name: 'Cargos',
          btnAdd: '#/criarCargo',
          btnEdit: 'Editar',
          btnRm: 'Remover',
          img: '../img/event.svg',
          iconAdd: 'add',
          icon: 'fa fa-circle-o-notch',
          descricao: 'Adicionar, Editar ou Remover Cargos'
        },


        ];

/**
 * @navigations
 * @navigatiosMenu
 * @navigations SubMenu
 */


 $scope.navigations = {
            //start pages navigations
            pages: {

              page:[{

                'name': 'paginas',
                'icon': 'fa fa-files-o',

                dep: [

                    //start Departamento subNivel Navigations
                    {
                      'name': 'Departamentos',
                      'icon': 'fa fa-bank',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/departamento/edit/{{dep.id}}'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/departamento/list'
                      }, ]
                    },
                    //end 
                    //start Noticias subNivel Navigations
                    {
                      'name': 'Noticias',
                      'icon': 'fa fa-newspaper-o',


                      depIcon: [{
                        'name': 'Add',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                    //start Eventos e atividades subNivel Navigations
                    {
                      'name': 'Eventos & Atividades ',
                      'icon': 'fa fa-calendar',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                      //start Time Line subNivel Navigations
                      {
                        'name': 'Time Line ',
                        'icon': 'fa fa-clock-o',


                        depIcon: [{
                          'name': 'Perfil',
                          'icon': 'fa fa-user',
                          'link': '#/createDep'
                        }, {
                          'name': 'Noticias',
                          'icon': 'fa fa-newspaper-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Eventos',
                          'icon': 'fa fa-calendar-minus-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Projetos',
                          'icon': 'fa fa-suitcase',
                          'link': '#/createDep'
                        }, {
                          'name': 'Atividades',
                          'icon': 'fa fa-calendar-check-o',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                      //start Eventos e atividades subNivel Navigations
                      {
                        'name': 'Mail Box ',
                        'icon': 'fa fa-envelope',


                        depIcon: [{
                          'name': 'Inbox',
                          'icon': 'fa fa-inbox',
                          'link': '#/createDep'
                        }, {
                          'name': 'Criar Mensagem',
                          'icon': 'fa fa-plus-circle',
                          'link': '#/createDep'
                        }, {
                          'name': 'Lixeira',
                          'icon': 'fa fa-trash',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                    //start Eventos e atividades subNivel Navigations
                    {
                      'name': 'Tarefas ',
                      'icon': 'fa fa-edit',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    }], //end page paginas

                  },
                  //start page Departamentos

                  {

                    'name': 'Departamentos',
                    'icon': 'fa fa-bank',

                    dep: [

                    //start presidente subNivel Navigations
                    {
                      'name': 'Presidente',
                      'icon': 'fa fa-user',


                      depIcon: [{
                        'name': 'Criar Mensagem',
                        'icon': 'fa fa-plus',
                        'link': '#/criarMensagem'
                      }, {
                        'name': 'Editar Perfil',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover Perfil',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar Perfil',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Preview',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                    //start Assembleia subNivel Navigations
                    {
                      'name': 'Assembleia Municipal',
                      'icon': 'fa fa-newspaper-o',


                      depIcon: [{
                        'name': 'Adicionar Elementos',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar Elementos',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover Elementos',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                    //start Direção de Administração e Recursos Humanos subNivel Navigations
                    {
                      'name': 'Administração e Recursos Humanos ',
                      'icon': 'fa fa-calendar',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                      //start Direção de Planeamento, Orçamento e Gestã subNivel Navigations
                      {
                        'name': 'Planeamento, Orçamento e Gestão ',
                        'icon': 'fa fa-clock-o',


                        depIcon: [{
                          'name': 'Perfil',
                          'icon': 'fa fa-user',
                          'link': '#/createDep'
                        }, {
                          'name': 'Noticias',
                          'icon': 'fa fa-newspaper-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Eventos',
                          'icon': 'fa fa-calendar-minus-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Projetos',
                          'icon': 'fa fa-suitcase',
                          'link': '#/createDep'
                        }, {
                          'name': 'Atividades',
                          'icon': 'fa fa-calendar-check-o',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                      //start Direção Ordenamento do Território e Gestão dos Recusros HumanossubNivel Navigations
                      {
                        'name': 'Ordenamento do Território e Gestão dos Recusros Humanos ',
                        'icon': 'fa fa-envelope',


                        depIcon: [{
                          'name': 'Inbox',
                          'icon': 'fa fa-inbox',
                          'link': '#/createDep'
                        }, {
                          'name': 'Criar Mensagem',
                          'icon': 'fa fa-plus-circle',
                          'link': '#/createDep'
                        }, {
                          'name': 'Lixeira',
                          'icon': 'fa fa-trash',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                    //start Direção Promoção dos Setores Económicos e DesportosubNivel Navigations
                    {
                      'name': 'Promoção dos Setores Económicos',
                      'icon': 'fa fa-edit',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },//end 
                    //start Direção Desenvolvimento e Integração Social Navigations
                    {
                      'name': 'Desenvolvimento e Integração Social',
                      'icon': 'fa fa-edit',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },//end
 //start Direção Educação e Formação Profissional Navigations
 {
  'name': 'Educação e Formação Profissional',
  'icon': 'fa fa-edit',


  depIcon: [{
    'name': 'Adicionar',
    'icon': 'fa fa-plus',
    'link': '#/createDep'
  }, {
    'name': 'Editar',
    'icon': 'fa fa-pencil',
    'link': '#/createDep'
  }, {
    'name': 'Remover',
    'icon': 'fa fa-trash-o',
    'link': '#/createDep'
  }, {
    'name': 'Atualizar',
    'icon': 'fa fa-pencil-square-o',
    'link': '#/createDep'
  }, {
    'name': 'Listar',
    'icon': 'fa fa-list',
    'link': '#/createDep'
  }, ]
                    },//end
 //start Direção Indústria , Energia , Água e Saneamento Navigations
 {
  'name': 'Indústria , Energia , Água e Saneamento',
  'icon': 'fa fa-edit',


  depIcon: [{
    'name': 'Adicionar',
    'icon': 'fa fa-plus',
    'link': '#/createDep'
  }, {
    'name': 'Editar',
    'icon': 'fa fa-pencil',
    'link': '#/createDep'
  }, {
    'name': 'Remover',
    'icon': 'fa fa-trash-o',
    'link': '#/createDep'
  }, {
    'name': 'Atualizar',
    'icon': 'fa fa-pencil-square-o',
    'link': '#/createDep'
  }, {
    'name': 'Listar',
    'icon': 'fa fa-list',
    'link': '#/createDep'
  }, ]
                    },//end
 //start Direção Delegações MunicipaisNavigations
 {
  'name': 'Delegações Municipais',
  'icon': 'fa fa-edit',


  depIcon: [{
    'name': 'Adicionar',
    'icon': 'fa fa-plus',
    'link': '#/createDep'
  }, {
    'name': 'Editar',
    'icon': 'fa fa-pencil',
    'link': '#/createDep'
  }, {
    'name': 'Remover',
    'icon': 'fa fa-trash-o',
    'link': '#/createDep'
  }, {
    'name': 'Atualizar',
    'icon': 'fa fa-pencil-square-o',
    'link': '#/createDep'
  }, {
    'name': 'Listar',
    'icon': 'fa fa-list',
    'link': '#/createDep'
  }, ]
                    },//end
 //start Direção Serviço Autónomo de Águas e Saneamento Navigations
 {
  'name': 'Serviço Autónomo de Águas e Saneamento',
  'icon': 'fa fa-edit',


  depIcon: [{
    'name': 'Adicionar',
    'icon': 'fa fa-plus',
    'link': '#/createDep'
  }, {
    'name': 'Editar',
    'icon': 'fa fa-pencil',
    'link': '#/createDep'
  }, {
    'name': 'Remover',
    'icon': 'fa fa-trash-o',
    'link': '#/createDep'
  }, {
    'name': 'Atualizar',
    'icon': 'fa fa-pencil-square-o',
    'link': '#/createDep'
  }, {
    'name': 'Listar',
    'icon': 'fa fa-list',
    'link': '#/createDep'
  },]

   },//end
   ], 

 },
//start services pages
{

  'name': 'Serviços',
  'icon': 'fa fa-files-o',

  dep: [

                    //start Departamento subNivel Navigations
                    {
                      'name': 'Departamentos',
                      'icon': 'fa fa-bank',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                    //start Noticias subNivel Navigations
                    {
                      'name': 'Noticias',
                      'icon': 'fa fa-newspaper-o',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                    //start Eventos e atividades subNivel Navigations
                    {
                      'name': 'Eventos & Atividades ',
                      'icon': 'fa fa-calendar',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    },
                    //end 
                      //start Time Line subNivel Navigations
                      {
                        'name': 'Time Line ',
                        'icon': 'fa fa-clock-o',


                        depIcon: [{
                          'name': 'Perfil',
                          'icon': 'fa fa-user',
                          'link': '#/createDep'
                        }, {
                          'name': 'Noticias',
                          'icon': 'fa fa-newspaper-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Eventos',
                          'icon': 'fa fa-calendar-minus-o',
                          'link': '#/createDep'
                        }, {
                          'name': 'Projetos',
                          'icon': 'fa fa-suitcase',
                          'link': '#/createDep'
                        }, {
                          'name': 'Atividades',
                          'icon': 'fa fa-calendar-check-o',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                      //start Eventos e atividades subNivel Navigations
                      {
                        'name': 'Mail Box ',
                        'icon': 'fa fa-envelope',


                        depIcon: [{
                          'name': 'Inbox',
                          'icon': 'fa fa-inbox',
                          'link': '#/createDep'
                        }, {
                          'name': 'Criar Mensagem',
                          'icon': 'fa fa-plus-circle',
                          'link': '#/createDep'
                        }, {
                          'name': 'Lixeira',
                          'icon': 'fa fa-trash',
                          'link': '#/createDep'
                        }, ]
                      },
                    //end 
                    //start Eventos e atividades subNivel Navigations
                    {
                      'name': 'Tarefas ',
                      'icon': 'fa fa-edit',


                      depIcon: [{
                        'name': 'Adicionar',
                        'icon': 'fa fa-plus',
                        'link': '#/createDep'
                      }, {
                        'name': 'Editar',
                        'icon': 'fa fa-pencil',
                        'link': '#/createDep'
                      }, {
                        'name': 'Remover',
                        'icon': 'fa fa-trash-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Atualizar',
                        'icon': 'fa fa-pencil-square-o',
                        'link': '#/createDep'
                      }, {
                        'name': 'Listar',
                        'icon': 'fa fa-list',
                        'link': '#/createDep'
                      }, ]
                    }], //end page servicos

                  },
], //end page

            }, //end pages navigations






          };//endnavigations








        })



