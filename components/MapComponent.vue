
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

            return this.places.filter(place => place.address['postal-code'] === this.selectedFilter);
            }
        },
        uniquePostalCodes() {
        const postalCodes = this.places.map(place => place.address['postal-code']);
        return [...new Set(postalCodes)];
    },
    },
    async created() {
        //const gResponse = await fetch("http://localhost:5000/citysights");
        // const gObject = await gResponse.json();
        this.google_maps_url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-xhrnV-K304RreVro53FFhm6KIjKw3rY";
     //  this.places = await fetch("http://localhost:5000/get-madrid-museum-data");
         this.places =  [
	
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
    {
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/2069-centro-cultural-corrala-museo-artes-tradiciones-populares.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "2069",
		"title": "Centro Cultural La Corrala. Museo de Artes y Tradiciones Populares",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=5c39ef4d7f71c010VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Embajadores"
			},
			"locality": "MADRID",			
			"postal-code": "28005",
			"street-address": "CALLE CARLOS ARNICHES 3"
		},
		"location": {
			"latitude": 40.408827275648434,
			"longitude": -3.7083241323093614
		},
		"organization": {
			"organization-desc": "  Metro: La Latina (línea 5)  Bus: 002, 17, 18, 23, 35, 60.  Bicimad: Estaciones 39 (plaza de la Cebada, 16), 45 (glorieta de la Puerta de Toledo, 1), 44 (calle Mesón de Paredes, 35).",
			"accesibility": "3",
			"schedule": "Lunes a viernes de 10 a 20 horas. Sábados de 10 a 14 horas. Cerrado domingos, festivos y mes de agosto, 24 y 31 diciembre.",
			"services": "Las visitas individuales (grupos inferiores a 7 personas) no necesitan reserva previa. Reservas (Grupos de 8 a 20 personas máximo).",
			"organization-name": "Centro Cultural La Corrala. Museo de Artes y Tradiciones Populares"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/6469186-ermita-san-antonio-florida-museo-.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/MonumentosEdificiosArtisticos",
		"id": "6469186",
		"title": "Ermita de San Antonio de la Florida (Museo)",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=75950204770e7310VgnVCM2000000c205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/CasaCampo"
			},
			"locality": "MADRID",			
			"postal-code": "28008",
			"street-address": "GLORIETA SAN ANTONIO DE LA FLORIDA 5"
		},
		"location": {
			"latitude": 40.425256682855846,
			"longitude": -3.725725718176111
		},
		"organization": {
			"organization-desc": "Ermita dedicada a San Antonio de Padua y pequeño museo. Las pinturas murales que la decoran son de Francisco de Goya. Alberga los restos mortales del artista desde 1919. Para preservar sus pinturas, en 1929 se trasladó el culto a una ermita gemela construida a su lado, dejando el edificio original como museo.  Metro: Príncipe Pío (líneas 5, 10 y ramal Ópera - Príncipe Pío)  Bus: 41, 46 y 75 (Intercambiador Príncipe Pío)  Renfe: Príncipe Pío  BICIMAD: Estación 161 (Paseo de la Florida 8)",
			"accesibility": "2,6",
			"schedule": "General   De martes a domingos de 9:30 a 20 horas.   Verano (del 15 de junio al 15 de septiembre)   De martes a viernes de 9:30 a 14 horas y de 15 a 19 horas. Sábados y domingos de 9:30 a 19 horas.   Cerrado:  lunes (incluidos festivos), 1 y 6 de enero, 1 de mayo, 24, 25 y 31 de diciembre.  Último pase de visita: 20 minutos antes del cierre (el desalojo de las salas comenzará 10 minutos antes) Este horario y la apertura de salas pueden sufrir modificaciones.",
			"services": "Tienda, en la que se pueden adquirir las guías y publicaciones sobre la ermita editadas por el Museo y otros organismos públicos, así como catálogos y publicaciones de instituciones culturales del Ayuntamiento de Madrid.",
			"organization-name": "Ermita de San Antonio de la Florida (Museo)"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/58353-espacio-fundacion-telefonica.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "58353",
		"title": "Espacio Fundación Telefónica",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=87748ed67151c010VgnVCM2000000c205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Universidad"
			},
			"locality": "MADRID",			
			"postal-code": "28004",
			"street-address": "CALLE FUENCARRAL 3"
		},
		"location": {
			"latitude": 40.42042493125648,
			"longitude": -3.701594573150366
		},
		"organization": {
			"organization-desc": "  Metro: Gran Vía (líneas 1 y 5).  Bus: 001, 002, 1, 2, 3, 46, 74, 146.  Bicimad: Estaciones 211 (calle Desengaño, 1), 210 (calle Tres Cruces, 7), 18 (plaza de Pedro Zerolo, 1).      Aparcamientos: Barco 1 (88), Calle Barco; Pedro Zerolo (71), plaza Pedro Zerolo sin número; plaza del Carmen (8).",
			"accesibility": "1",
			"schedule": "Martes, miércoles, jueves y viernes de 11 a 20 horas. Sábados, domingo y festivos, de 11 a 21 horas. Cerrado al público todos los lunes y los días 25 de diciembre y 1 y 6 de enero.",
			"services": "",
			"organization-name": "Espacio Fundación Telefónica"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/103331-casa-encendida-fundacion-montemadrid.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/MonumentosEdificiosArtisticos",
		"id": "103331",
		"title": "La Casa Encendida de la Fundación Montemadrid",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c27f8899fc81c010VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Embajadores"
			},
			"locality": "MADRID",			
			"postal-code": "28012",
			"street-address": "RONDA VALENCIA 2"
		},
		"location": {
			"latitude": 40.40596221830597,
			"longitude": -3.6997720739017033
		},
		"organization": {
			"organization-desc": "Edificio de carácter monumental. De estilo neomudéjar, fue diseñado por el arquitecto Fernando Arbós e inaugurado en el año 1913. Cuenta con más de 6000 metros cuadrados de instalaciones divididas en 4 plantas y una azotea. Centro social y cultural.  Metro: Embajadores (línea 3)  Bus: 119, 27, 34, 36, 41, C03, C2, C1, 148, 60, 75, M1  Cercanías Renfe: Embajadores (línea C5)  Bicimad: Estación 49 (ronda de Atocha, 34)  Aparcamiento: Garaje Amparo (75), calle Amparo",
			"accesibility": "1,4,6",
			"schedule": "De martes a domingo de 10 a 22 horas.",
			"services": "Biblioteca,mediateca, hemeroteca, laboratorio de radio, fotográfico y multimedia Cafetería Terraza &amp;ndash; café bar Ecotienda solidaria Visitas guiadas",
			"organization-name": "La Casa Encendida de la Fundación Montemadrid"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/5873478-museo-abc.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "5873478",
		"title": "Museo ABC",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=f0103fee6537c210VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Universidad"
			},
			"locality": "MADRID",			
			"postal-code": "28015",
			"street-address": "CALLE AMANIEL 29 -31"
		},
		"location": {
			"latitude": 40.42741121610518,
			"longitude": -3.709539260414957
		},
		"organization": {
			"organization-desc": "Centro de arte, dibujo e ilustración.  Metro: San Bernardo (líneas 2, 4), Noviciado (línea 2), Ventura Rodríguez (línea 3), Plaza de España (líneas 3, 10)  Bus: M2, C1, C3, 1, 2, 3, 21, 44, 133, 147, 001, 002   Bicimad: Estación 13 (calle Conde Duque 22)",
			"accesibility": "1",
			"schedule": "Consultar.",
			"services": "",
			"organization-name": "Museo ABC"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/2067-museo-africano-misioneros-combonianos.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "2067",
		"title": "Museo Africano Misioneros Combonianos",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=6ab8ef4d7f71c010VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal/Barrio/SanJuanBautista"
			},
			"locality": "MADRID",			
			"postal-code": "28043",
			"street-address": "CALLE ARTURO SORIA 101"
		},
		"location": {
			"latitude": 40.44946738556641,
			"longitude": -3.651489872602189
		},
		"organization": {
			"organization-desc": "  Bus: 11, 70, 114, 122, 115, 200.",
			"accesibility": "3",
			"schedule": "Grupos con cita previa telefónica o en la su web : de lunes a viernes de 9:30 a 13:30 horas.  Individuales: Visitas guiadas sin cita previa los domingos a las 11:30 horas.",
			"services": "",
			"organization-name": "Museo Africano Misioneros Combonianos"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/2050-museo-arqueologico-nacional.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "2050",
		"title": "Museo Arqueológico Nacional",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=8fd8ef4d7f71c010VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
			},
			"locality": "MADRID",			
			"postal-code": "28001",
			"street-address": "CALLE SERRANO 13"
		},
		"location": {
			"latitude": 40.4232789604228,
			"longitude": -3.6884121235090532
		},
		"organization": {
			"organization-desc": "Fundado en 1867, el MAN se inauguró en 1895 en su actual sede, en el Palacio de Biblioteca y Museos, edificio proyectado por Francisco Jareño y terminado por Antonio Ruiz de Salces.  Metro: Serrano (línea 4), Retiro (línea 2)  Bus: 1, 9, 19, 51, 74  Cercanías Renfe: Recoletos (línea C1, C2, C7, C10 y Regional)  Bicimad: Estaciones 95 (calle Claudio Coello 109), 94 (paseo de Recoletos, 20), 107 (calle Serrano, 8), 106 a y b (calle Serrano, 34).  Aparcamiento: Colón (2), Plaza de Colón",
			"accesibility": "1,6",
			"schedule": "De martes a sábados de 9:30 a 20 horas. Domingos y festivos de 9:30 a 15 horas.   Cerrado   Todos los lunes del año. 1 y 6 de enero, 1 de mayo, 9 de noviembre, 24, 25 y 31 de diciembre.  Más información horarios.",
			"services": "",
			"organization-name": "Museo Arqueológico Nacional"
		}
	},
	{
		"@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/2072-museo-casa-moneda.json",
		"@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/Museos",
		"id": "2072",
		"title": "Museo Casa de la Moneda",
		"relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=12f8ef4d7f71c010VgnVCM1000000b205a0aRCRD",		
		"address": {
			"district": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
			},
			"area": {
				"@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Goya"
			},
			"locality": "MADRID",			
			"postal-code": "28028",
			"street-address": "CALLE DOCTOR ESQUERDO 36"
		},
		"location": {
			"latitude": 40.42260021542579,
			"longitude": -3.669139860245996
		},
		"organization": {
			"organization-desc": "  Metro: O&amp;acute;Donnell (línea 6), Goya (líneas 2 y 4).  Bus: 143, 156, 2, 30, 56, 71, C2  Bicimad: Estación 101 (calle Jorge Juan, 131).",
			"accesibility": "1,4",
			"schedule": "De martes a viernes ininterrumpidamente de 10 a 20 horas. Sábados, domingos y festivos de 10 a 14 horas. Cerrado los lunes (incluidos festivos), y los días 1 y 6 de enero; 24, 25 y 31 de diciembre.",
			"services": "",
			"organization-name": "Museo Casa de la Moneda"
		}
	},
	];
    /*
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
        ];*/
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
                    center: { lat: 40.41748651048573, lng: -3.703641635804624 },
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
        <div class="address">${place.address.locality} - ${place.address['postal-code']} - ${place.address['street-address']}</div>
       <!-- <div class="description">${place.organization['organization-desc']}</div>-->
        <div class="features">
            <span></span>
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
        async addMarkers() {
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
            const iconBase =
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
            /*const icons = {
                parking: {
                    icon: iconBase + "parking_lot_maps.png",
                },
                library: {
                    icon: iconBase + "library_maps.png",
                },
                info: {
                    icon: iconBase + "info-i_maps.png",
                },
            };*/
            const vm = this;
            //this.clearMarkers();
            for (const  place of this.filteredPlaces) {
                const { latitude, longitude } = place.location;
                const position = new google.maps.LatLng(latitude, longitude);
                const content = this.buildContent(place);
                const marker = new AdvancedMarkerElement({
                    position: position,
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
                this.toggleHighlight(marker);
                window.scrollTo({ top: 0, behavior: 'smooth' })
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
            return this.places.filter(place => place.address['postal-code'] === this.selectedFilter);
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
                <option v-for="code in uniquePostalCodes" :key="code" :value="code">{{ code }}</option>
            </select>
        </div>
        <table class="table-fixed border-separate border-spacing-2 border border-slate-500">
            <thead>
            <tr>
            <th class="border border-slate-600">Lugar </th>
            <th class="border border-slate-600">Dirección</th>
            </tr>
        </thead>
            <tr v-for="place in filteredPlaces" :key="place.id" @click="centerMapOnMarker(place)"  class=" hover:bg-sky-700">
                <td class="border border-slate-700">{{ place.title }}</td>
                <td class="border border-slate-700">{{place.address.locality}} - {{place.address['postal-code']}} - {{place.address['street-address']}}</td>
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
