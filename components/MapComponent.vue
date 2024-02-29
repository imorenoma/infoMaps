
<script lang="js">
/* global google */
export default {
    setup: function () {
        return {
            google_maps_url: '',
            map: null,
            markers: []
        }
    },
    data: function () {
        return {
            places: [],
            selectedFilter: 'todos',
            
        }
    },
    computed: {

        filteredPlaces() {
            if (this.selectedFilter === 'todos') {

                return this.places;
            }
            else{

            return this.places.filter(place => place.type === this.selectedFilter);
            }
        },
    },
    async created() {
        //const gResponse = await fetch("http://localhost:5000/citysights");
        // const gObject = await gResponse.json();
        this.google_maps_url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-xhrnV-K304RreVro53FFhm6KIjKw3rY";
        this.myPlaces =  [
	
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/6017808-casa-museo-fuente-rey.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/FundacionesCulturales",
		"id": "6017808",
		"title": "Casa Museo Fuente del Rey",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=5c1260101310f210VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/Aravaca"
			},
			"locality": "MADRID",			
			"postal-code": "28023",
			"street-address": "CALLE FUENTE DEL REY 11"
		},
		"location": {
			"latitude": 40.45546866305681,
			"longitude": -3.7705716814130965
		},
		"organization": {
			"organization-desc": "Fundación AMYC (Arte Moderno y Contemporáneo).   Este museo, situado en Aravaca y conocido también como Casa - Museo Fuente del Rey. Fundación AMYC, ofrece al visitante una colección de más de 250 obras entre pinturas, dibujos y esculturas (198 pinturas, 37 esculturas y 27 dibujos) realizadas desde mediados del siglo XIX hasta principios del XXI. Se exponen piezas de grandes artistas modernistas e impresionistas como Sorolla, Mariano Fortuny, Nonell, Rusiñol, Ramón Casas, Mir, Rendir, Gargallo, Joseph Llimona, Joan Miró, Salvador Dalí, Tapies, Anglada Camarasa o Torres García, entre otros. La colección está formada por los fondos privados del coleccionista y mecenas Francisco Daurella y se muestra en lo que fue su casa. Los más de 3000 metros cuadrados del edificio así como su jardín, han sido rehabilitados para poder acoger las obras en el que es el primer museo de la capital dedicado en exclusiva al arte catalán.  Bus: 161.",
			"accesibility": "3",
			"schedule": "Martes a sábado, de 10 a 19 horas. Lunes, domingos y festivos cerrado. Visitas para grupos de hasta 25 personas dentro de los horarios de apertura. Pueden ser con guía propio o con guía de la Fundación, y la duración de la misma es de una hora, previa reserva telefónica o por email.",
			"services": "",
			"organization-name": "Casa Museo Fuente del Rey"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4847190-casa-museo-lope-vega.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "4847190",
		"title": "Casa Museo Lope de Vega",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=4eff8c46145e8110VgnVCM2000000c205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Cortes"
			},
			"locality": "MADRID",			
			"postal-code": "28014",
			"street-address": "CALLE CERVANTES 11"
		},
		"location": {
			"latitude": 40.41436862259971,
			"longitude": -3.6974667215860615
		},
		"organization": {
			"organization-desc": "'Mi casilla, mi quietud, mi g&amp;uuml;ertecillo y estudio'. Así define su casa Félix Lope de Vega (1562-1635) en una carta dirigida a un amigo. Situada en pleno centro histórico, en el Barrio de las Letras, la Casa Museo Lope de Vega se ubica en el edificio donde el escritor vivió sus últimos 25 años. La recreación de ambientes, cuyo objetivo es que se respire la presencia de Lope, evoca la vida cotidiana del Siglo de Oro y nos acerca a su intimidad. El equipamiento de la casa incorpora obras de arte, mobiliario, enseres y ediciones bibliográficas vinculadas al literato y su tiempo.  Metro: Antón Martín (línea 1), Sevilla (línea 2), Sol (líneas 1, 2 y 3).  Bus: 002, M1, 001, 10, 14, 27, 34, 37, 45, C03, 26, 32, 6, 51,   Cercanías Renfe:  Sol (líneas C3 y C4).   Bicimad: Estaciones 27 (calle Jesús), 52 (plaza de Santa Ana, 10)  Aparcamientos: Cortes (46), plaza de las Cortes; plaza de Santa Ana (77).",
			"accesibility": "0,4",
			"schedule": "De martes a domingo, de 10 a 18 horas.  Cerrado los lunes, días 1 y 6 de enero, 1 de mayo, 9 de noviembre y 24, 25 y 31 de diciembre. El acceso al museo se hace mediante visitas guiadas en grupo. Es imprescindible reservar con antelación, por teléfono o correo electrónico.",
			"services": "",
			"organization-name": "Casa Museo Lope de Vega"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4949641-casita-museo-raton-perez.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "4949641",
		"title": "Casita - Museo del Ratón Pérez",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=990950e86d4ca110VgnVCM2000000c205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Sol"
			},
			"locality": "MADRID",			
			"postal-code": "28013",
			"street-address": "CALLE ARENAL 8 PLANTA 1.ª"
		},
		"location": {
			"latitude": 40.4170597715272,
			"longitude": -3.7055199334442492
		},
		"organization": {
			"organization-desc": "La Casita-Museo de Ratón Pérez, constituye un singular lugar que da la bienvenida a cuantos visitantes allí acuden con el deseo de conocer y encontrarse con este extraordinario, único, madrileño y universal ratón. Se aconseja acudan con la entrada adquirida anticipadamente.   En  taquilla.  Whatsapp (634 74 27 68)  No se reservan entradas por correo electrónico, toda información que necesite sobre entradas podrá hacerlo vía whatsapp. Se aconseja reservar con antelación, ESPECIALMENTE los FINES DE SEMANA. Metro: Sol (líneas: 1, 2 y 3), Ópera (líneas 2, 5 y Ramal Ópera Príncipe Pío), Callao (líneas 3, 5).  Bus: M3.  Cercanías Renfe: Sol (líneas C3, C4, C4a, C4b y Regional).  Bicimad: Estaciones 1 (calle Mayor, 6), 31 (calle Mayor, 16), 25 a y b (Plaza Celenque, 1).  Aparcamientos: El Core Inglés Preciados (93) calle Preciados; Descalzas (20) plaza Descalzas y plaza San Martín; plaza del Carmen (8); plaza Mayor (55).",
			"accesibility": "0",
			"schedule": "Visitas familiares:    Lunes a viernes:  de 11 a 14 y de 17 a 20 horas Sábados domingos y festivos: de  11 a 15 y dec16 a 20 horas (Cerrado 25 de diciembre, 1 y 6 de enero, 1 de mayo)   Visitas escolares:   Información y reservas: Lunes a Viernes 09 a 14 horas. Teléfono exclusivo para atender colegios:  607 67 97 75 (solo se atenderán llamadas de peticiones de colegios o asociaciones)",
			"services": "",
			"organization-name": "Casita - Museo del Ratón Pérez"
		}
	},
	];
        this.places = [
            {
                id:1,
                address: "Otra calle de getafe",
                description: "Un sitio muy divertido",
                price: "Gratis",
                position: { lat: 40.294133014703085, lng: -3.74623766502045 },
                title: "Sitio de ocio A",
                type: "casa",
            },
            {
                id:2,
                address: "Calle Getafe algo",
                description: "Un sitio poco divertido",
                price: "$$",
                position: { lat: 40.29788054770768, lng: -3.741920123159409 },
                title: "Sitio de ocio B",
                type: "biblioteca",
            },
        ];
        // this.places = gObject.places;
        // this.initMap();
    },
    async mounted() {


        await this.initGoogleMaps();

    },
    methods: {
        async initGoogleMaps() {
            try {
                await this.loadGoogleMapsScript();
                this.initMap();
            } catch (error) {
                console.error("Error loading Google Maps: ", error);
            }
        },
        loadGoogleMapsScript(retryCount = 3) {
            return new Promise((resolve, reject) => {
                if (typeof google !== 'undefined' && google.maps) {
                    resolve();
                } else {
                    const script = document.createElement('script');
                    script.src = this.google_maps_url;
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                    script.onload = resolve;
                    script.onerror = () => {
                        if (retryCount > 0) {
                            setTimeout(() => {
                                document.head.removeChild(script); // Remove the failed script
                                this.loadGoogleMapsScript(retryCount - 1).then(resolve).catch(reject);
                            }, 2000);
                        } else {
                            reject(new Error('Failed to load the Google Maps script after multiple attempts'));
                        }
                    };
                }
            });

        },
        async initMap() {
            const { Map } = await google.maps.importLibrary("maps");
            if (typeof google !== 'undefined' && google.maps) {
                this.map = new Map(document.getElementById('googlemap'), {
                    mapId: "844086867c78beb8",
                    center: { lat: 40.30861111, lng: -3.68444444 },
                    zoom: 12
                });
                this.filteredPlaces = this.places;
                this.addMarkers(this.map);
            } else {
                // console.error("Google Maps API is not loaded.");
            }
        },
        buildContent(place) {
            const content = document.createElement("div");

            content.classList.add("place");
            content.innerHTML = `
    <div class="icon" border="1px solid black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <span class="fa-sr-only">${place.type}</span>
    </div>
    <div class="details">
        <div class="price">${place.title}</div>
        <div class="address">${place.address}</div>
        <div class="description">${place.description}</div>
        <div class="features">
       <!-- <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">Precio</span>
            <span>${place.price}</span>
        </div>-->
        </div>
    </div>
    `;
            return content;
        },
        toggleHighlight(markerView) {
            if (markerView.content.classList.contains("highlight")) {
                markerView.content.classList.remove("highlight");
                markerView.zIndex = null;
            } else {
                markerView.content.classList.add("highlight");
                markerView.zIndex = 1;
            }
        },
        async addMarkers(mapa) {
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            const iconBase =
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
            const icons = {
                parking: {
                    icon: iconBase + "parking_lot_maps.png",
                },
                library: {
                    icon: iconBase + "library_maps.png",
                },
                info: {
                    icon: iconBase + "info-i_maps.png",
                },
            };
            const vm = this;
            //this.clearMarkers();
            for (const  place of this.filteredPlaces) {
                const content = this.buildContent(place);
                const marker = new AdvancedMarkerElement({
                    position: place.position,
                    // icon: icons[place.type].icon,
                    map: this.map,
                    content: content,
                    title: place.description
                });
                marker.addListener("click", () => {
                    vm.toggleHighlight(marker, place);
                });
                marker.placeId = place.id;
                this.markers.push(marker);
            }
        },

        centerMapOnMarker(place) {
            console.log("Centrando en el mapa...");
            const marker = this.markers.find(marker => marker.placeId === place.id);
            if (marker) {
                this.map.panTo(marker.position); 
                this.map.setZoom(14); 
                this.toggleHighlight(marker)
            }  else {
        console.error("Marker not found for place with id:", place.id);
    }
        },
        clearMarkers() {
            if (this.markers) {
                for (const marker of this.markers) {
                    marker.setMap(null);
                }
            }
            this.markers = [];
        }
    },
    watch: {
        selectedFilter: function (selectedFilter) {
            if (selectedFilter == 'todos') {
                this.clearMarkers();
                this.addMarkers(this.map);
                return this.places;
            }
            else{
            this.clearMarkers();
            this.addMarkers(this.map);
            return this.places.filter(place => place.type === this.selectedFilter);
    }
        }
    }
}

</script>
<template>
    <div>
        <div id="googlemap" style="height: 600px;"></div>
        <div>
            <!-- Filters -->
            <select v-model="selectedFilter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="todos">Todos</option>
                <option value="casa">Casa</option>
                <option value="biblioteca">Bibliotecas</option>
            </select>
        </div>
        <table class="table-fixed border-separate border-spacing-2 border border-slate-500">
            <thead>
            <tr>
            <th class="border border-slate-600">Título </th>
            <th class="border border-slate-600">Dirección</th>
            </tr>
        </thead>
            <tr v-for="(place, index) in filteredPlaces" :key="index" @click="centerMapOnMarker(place)"  class=" hover:bg-sky-700">
                <td class="border border-slate-700">{{ place.title }}</td>
                <td class="border border-slate-700">{{ place.address }}</td>
            </tr>
        </table>
    </div>
</template>

<style>
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
:root {
    --building-color: #FF9800;
    --house-color: #0288D1;
    --shop-color: #7B1FA2;
    --warehouse-color: #558B2F;
}

/*
 * Optional: Makes the sample page fill the window.
 */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

/*
 * Always set the map height explicitly to define the size of the div element
 * that contains the map.
 */
#map {
    height: 100%;
    width: 100%;
}

/*
 * Property styles in unhighlighted state.
 */
.place {
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50%;
    color: #263238;
    display: flex;
    font-size: 14px;
    gap: 15px;
    height: 30px;
    justify-content: center;
    padding: 4px;
    position: relative;
    position: relative;
    transition: all 0.3s ease-out;
    width: 30px;
}

.place::after {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid #FFFFFF;
    content: "";
    height: 0;
    left: 50%;
    position: absolute;
    top: 95%;
    transform: translate(-50%, 0);
    transition: all 0.3s ease-out;
    width: 0;
    z-index: 1;
}

.place .icon {
    align-items: center;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
}

.place .icon svg {
    height: 20px;
    width: auto;
}

.place .details {
    display: none;
    flex-direction: column;
    flex: 1;
}

.place .address {
    color: #9E9E9E;
    font-size: 10px;
    margin-bottom: 10px;
    margin-top: 5px;
}

.place .features {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.place .features>div {
    align-items: center;
    background: #F5F5F5;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    font-size: 10px;
    gap: 5px;
    padding: 5px;
}

/*
 * Property styles in highlighted state.
 */
.place.highlight {
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    height: 80px;
    padding: 8px 15px;
    width: auto;
}

.place.highlight::after {
    border-top: 9px solid #FFFFFF;
}

.place.highlight .details {
    display: flex;
}

.place.highlight .icon svg {
    width: 50px;
    height: 50px;
}

.place .bed {
    color: #FFA000;
}

.place .bath {
    color: #03A9F4;
}

.place .size {
    color: #388E3C;
}

/*
 * House icon colors.
 */
.place.highlight:has(.fa-house) .icon {
    color: var(--house-color);
}

.place:not(.highlight):has(.fa-house) {
    background-color: var(--house-color);
}

.place:not(.highlight):has(.fa-house)::after {
    border-top: 9px solid var(--house-color);
}

/*
 * Building icon colors.
 */
.place.highlight:has(.fa-building) .icon {
    color: var(--building-color);
}

.place:not(.highlight):has(.fa-building) {
    background-color: var(--building-color);
}

.place:not(.highlight):has(.fa-building)::after {
    border-top: 9px solid var(--building-color);
}

/*
 * Warehouse icon colors.
 */
.place.highlight:has(.fa-warehouse) .icon {
    color: var(--warehouse-color);
}

.place:not(.highlight):has(.fa-warehouse) {
    background-color: var(--warehouse-color);
}

.place:not(.highlight):has(.fa-warehouse)::after {
    border-top: 9px solid var(--warehouse-color);
}

/*
 * Shop icon colors.
 */
.place.highlight:has(.fa-shop) .icon {
    color: var(--shop-color);
}

.place:not(.highlight):has(.fa-shop) {
    background-color: var(--shop-color);
}

.place:not(.highlight):has(.fa-shop)::after {
    border-top: 9px solid var(--shop-color);
}
</style> 
