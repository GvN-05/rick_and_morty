new Vue({
    el: "#main-contenedor",
    data: {
        //#region BANDERAS SECCIONES
        bienvenido: true,
        menu: false,
        tabEp: false,
        tabPe: false,
        //#endregion

        //#region EPISODIOS
        api_episode_url: 'https://rickandmortyapi.com/api/episode/',
        list_episodio: [],
        //#endregion

        //#region PERSONAJES
        api_character_url: 'https://rickandmortyapi.com/api/character/',
        list_personaje: [],
        //#endregion

        //#region BUSCADOR
        busqueda_txt: '',
        busqueda_result: []
        //#endregion
    },
    watch: {
        busqueda_txt: function (val) {
            this.buscar(val)
        }
    },
    methods: {
        //#region BANDERAS SECCIONES
        activarMenu: function() {
            this.menu = true
            this.bienvenido = false
            this.tabEp = true
            this.busqueda_result = this.list_episodio
        },
        activarVentanaPersonaje: function() {
            this.tabPe = true
            this.tabEp = false
            this.busqueda_result = this.list_personaje
        },
        activarVentanaEpisodio: function() {
            this.tabPe = false
            this.tabEp = true
            this.busqueda_result = this.list_episodio
        },
        //#endregion

        //#region EPISODIOS
        episodeDataLoad: function () {
            var self = this
            axios.get(this.api_episode_url).then(
                function (response) {
                    for (let itemData of response.data.results) {
                        self.list_episodio.push({
                            episode: itemData.episode,
                            name: itemData.name,
                            air_date: itemData.air_date,
                            characters: itemData.characters
                        })
                    }
                }
            )
        },

        characterListLoad: function (episode) {
            let resultEpisode = this.list_episodio.filter(
                (value) => {
                    return value.episode.toLowerCase().indexOf(
                        episode.toLowerCase()
                    ) >= 0
                }
            )

            let cast = ''
            let charactersList = resultEpisode[0].characters

            for (let itemCharacter of charactersList) {
                let itemRes = this.list_personaje.filter(
                    (value) => {
                        return value.url.toLowerCase().indexOf(
                            itemCharacter.toLowerCase()
                        ) >= 0
                    }
                )
                cast += itemRes.length > 0 ? itemRes[0].name + '\n' : ''
                
            }
            
            alert (cast);
        },
        //#endregion

        //#region PERSONAJES
        characterDataLoad: function () {
            var self = this
            axios.get(this.api_character_url).then(
                function (response) {
                    for (let itemData of response.data.results) {
                        self.list_personaje.push({
                            name: itemData.name,
                            status: itemData.status,
                            image: itemData.image,
                            url: itemData.url
                        })
                    }
                }
            )
        },
        //#endregion

        //#region BUSQUEDA
        buscar: function(valor_busqueda) {
            
            if (this.tabPe) {
                this.busqueda_result = this.list_personaje.filter(
                    (value) => {
                        var pattern=new RegExp(valor_busqueda.toLowerCase(),"g");
                        if(value.name.toLowerCase().match(pattern))
                            return true
                        else
                            return false
                    }
                )
            }

            if (this.tabEp) {
                this.busqueda_result = this.list_episodio.filter(
                    (value) => {
                        var pattern=new RegExp(valor_busqueda.toLowerCase(),"g");
                        if(value.episode.toLowerCase().match(pattern))
                            return true
                        else
                            return false
                    }
                )
            }
        }
        //#endregion
    },
    beforeMount() {
        this.characterDataLoad()
        this.episodeDataLoad()
    }
})