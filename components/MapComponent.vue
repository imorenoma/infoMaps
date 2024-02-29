
<script lang="js">
/* global google */
export default {
    setup: function () {
        return {
            google_maps_url: '',
            places: [],
            selectedFilter: 'todos',
            map: null,
            markers: []
        }
    },
    data: function () {

    },
    computed: {

        filteredPlaces() {
            if (this.selectedFilter === 'todos') {
                return this.places;
            }
            return this.places.filter(place => place.type === this.selectedFilter);
        },
    },
    async created() {
        //const gResponse = await fetch("http://localhost:5000/citysights");
        // const gObject = await gResponse.json();
        this.google_maps_url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-xhrnV-K304RreVro53FFhm6KIjKw3rY";
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
    watch: {
        selectedFilter() {
            // Update markers when the filter changes
            this.clearMarkers();
            this.addMarkers(this.map);
        }
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

            for (const  place of this.filteredPlaces) {
                const content = this.buildContent(place);
                const marker = new AdvancedMarkerElement({
                    position: place.position,
                    // icon: icons[place.type].icon,
                    map: mapa,
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

        filterPlaces(type) {
            console.log("Filtrando sitios...");
            // Example filtering function by type
            // You can extend this to filter by other parameters
            const filteredPlaces = this.places.filter(place => place.type === type);
            // Clear existing markers and add new ones based on the filter
            // This is a simplistic approach; optimizations may be needed for performance
            this.clearMarkers();
            //this.places = filteredPlaces;
            this.addMarkers();
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
            console.log("Despejando filtros...");
            if (this.markers) {
                for (const marker of this.markers) {
                    marker.setMap(null); // Removes the marker from the map
                }
            }
            this.markers = []; // Reset the markers array
        }
    },

}
</script>
<template>
    <div>
        <div id="googlemap" style="height: 600px;"></div>
        <div>
            <!-- Filters -->
            <select v-model="selectedFilter">
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
