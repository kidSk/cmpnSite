angular.module("cmpnApp").directive('mdCmpnNavBar', function($mdSidenav) {
    return {
        templateUrl: "views/cmpnNavBar.html",

        link: function(scope, Element, Attrs, ctrl) {
            scope.openSideNav = function() {

                $mdSidenav('left').open()

            };
            scope.closeSideNav = function() {

                $mdSidenav('left').close()


            };


            scope.clean = function(){
               scope.showSearch = !scope.showSearch
               scope.procurar=null

           };

           scope.items = [
           {name: 'Pagina Principal', icon: 'home',link:'#/'},
           {name: 'Sobre', icon: 'info'},
           {name: 'Departamentos', icon: 'business',link:'#/departamentos'},
           {name: 'Projetos', icon: 'work'},
           {name: 'Galeria', icon: 'camera_alt'},
           {name: 'Contactos', icon: 'mail'},


           ];


           scope.navigations ={
               sidenav: {
                sections: [{
                    name: 'Home',
                    icon: 'home',
                    color: 'md-primary',
                    expand: false,
                }


                , {
                    name: 'Sobre',
                    icon: 'info',
                    color: 'Red',
                    expand: false,

                    actions: [{
                        name: 'Concelho',
                        icon: 'location_city',
                        link: 'Action 4',
                        nC: 'Historia Concelho do Porto Novo'
                    }, {
                        name: 'Camara Municipal',
                        icon: 'account_balance',
                        link: 'Action 5',
                        nC: 'Breve Historia'
                    },]

                }, {
                    name: 'Departamentos',
                    icon: 'business',
                    color: 'Verde',
                    expand: false,
                    actions: [{
                        name: 'A.M',
                        icon: 'settings',
                        link: 'equipaAssembleia.php',
                        nC: 'Assembleia Municipal'
                    }, {
                        name: 'G.P',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: 'Gabinete Presidente'
                    }, {
                        name: 'D.A.R.H',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção de Administração e Recursos Humanos'
                    }, {
                        name: 'D.P.O.G',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção de Planeamento, Orçamento e Gestão'
                    }, {
                        name: 'D.O.T.G.R.N',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção Ordenamento do Território e Gestão dos Recusros Humanos'
                    }, {
                        name: 'D.J.C.D',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção juventude, Cultura e Desporto'
                    }, {
                        name: 'D.P.S.E',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção Promoção dos Setores Económicos'
                    }, {
                        name: 'D.D.I.S',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção Desenvolvimento e Integração Social'
                    }, {
                        name: 'D.E.F.P',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção Educação e Formação Profissional'
                    }, {
                        name: 'D.I.E.A.S',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Direção Indústria , Energia , Água e Saneamento'
                    }, {
                        name: 'D.M',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Delegações Municipais'
                    }, {
                        name: 'S.A.A.S',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: 'Serviço Autónomo de Águas e Saneamento'
                    }]
                },

                {
                    name: 'Projetos',
                    icon: 'work',
                    color: 'Blue',
                    expand: false,
                    actions: [{
                        name: 'Action 4',
                        icon: 'settings',
                        link: 'Action 4',
                        nC: ''
                    }, {
                        name: 'Action 5',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    }, {
                        name: 'Action 6',
                        icon: 'settings',
                        link: 'Action 6',
                        nC: ''
                    }]
                },
                {
                    name: 'Atividades',
                    icon: 'camera_alt',
                    color: '',
                    expand: false,
                    actions: [{
                        name: 'Desportivas',
                        icon: 'settings',
                        link: 'Action 4',
                        nC: ''
                    }, {
                        name: 'Ambientais',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    }, {
                        name: 'Culturais',
                        icon: 'settings',
                        link: 'Action 6',
                    }, {
                        name: 'Educativas',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    },{
                        name: 'Economicas',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    }, {
                        name: 'Infrastruturação',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    }, {
                        name: 'Coesao Social',
                        icon: 'settings',
                        link: 'Action 5',
                        nC: ''
                    },]
                },
                {
                    name: 'Galeria',
                    icon: 'camera',
                    color: 'Green',
                    expand: false,
                    actions: [{
                        name: 'Eventos',
                        icon: 'event_available',
                        link: 'Action 4',
                        nC: ''
                    }, {
                        name: 'Atividades',
                        icon: 'filter_tilt_shift',
                        link: 'Action 5',
                        nC: ''
                    }, {
                        name: 'Outros',
                        icon: 'center_focus_strong',
                        link: 'Action 6',
                        nC: ''
                    }]
                },

                {
                    name: 'Contatos',
                    icon: 'contacts',
                    color: 'Orange',
                    expand: false,
                    actions: [{
                        name: 'Enviar Email',
                        icon: 'email',
                        link: 'Action 4',
                        nC: ''
                    }, {
                        name: 'Contatos Uteis',
                        icon: 'contact_phone',
                        link: 'Action 5',
                        nC: ''
                    }, ]
                },

                ]
            },





        };
    }
};
});