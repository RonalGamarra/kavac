/**
*--------------------------------------------------------------------------
* App Scripts
*--------------------------------------------------------------------------
*
* Scripts a compilar por la aplicación
*/

/** Requerimiento del paquete bootstrap 4 para el diseño de la aplicación */
require('./bootstrap');

/** @type {object} Requerimiento del paquete vue para la reactividad de la aplicación */
window.Vue = require('vue');

/** Requerimiento del paquete vue-table-2 para la representación de consultas en tablas con vue */
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(ClientTable);

/**
 * Componente genérico para el uso de listas desplegables con select2 y selects dependientes
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('select2', require('./components/SelectsComponent.vue'));

/**
 * Componente para la gestión de estados civiles
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('marital-status', require('./components/MaritalStatusComponent.vue'));

/**
 * Componente para la gestión de profesiones
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('professions', require('./components/ProfessionsComponent.vue'));

/**
 * Componente para la gestión de tipos de instituciones
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('institution-types', require('./components/InstitutionTypesComponent.vue'));

/**
 * Componente para la configuración y gestión de sectores de instituciones
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('institution-sectors', require('./components/InstitutionSectorsComponent.vue'));

/**
 * Componente para la gestión de Países
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('countries', require('./components/CountriesComponent.vue'));

/**
 * Componente para la gestión de Estados
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('estates', require('./components/EstatesComponent.vue'));

/**
 * Componente para la gestión de Municipio
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('municipalities', require('./components/MunicipalitiesComponent.vue'));

/**
 * Componente para la gestión de Ciudades
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('cities', require('./components/CitiesComponent.vue'));

/**
 * Componente para la gestión de Parroquias
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('parishes', require('./components/ParishesComponent.vue'));

/**
 * Componente para la gestión de estatus de documentos
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('document-status', require('./components/DocumentStatusComponent.vue'));

/**
 * Componente para la gestión de impuestos
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('taxes', require('./components/TaxesComponent.vue'));

/**
 * Componente para la gestión de unidades tributarias
 *
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 */
Vue.component('tax-units', require('./components/TaxUnitsComponent.vue'));

/**
 * Componente para la gestión de departamentos
 *
 * @author Ing. Roldan Vargas (rvargas@cenditel.gob.ve / roldandvg@gmail.com)
 */
Vue.component('departments', require('./components/DepartmentsComponent.vue'));

/**
 * Componente para la gestión de monedas
 *
 * @author Ing. Roldan Vargas (rvargas@cenditel.gob.ve / roldandvg@gmail.com)
 */
Vue.component('currencies', require('./components/CurrenciesComponent.vue'));

/** Incorpora requerimientos de componentes de los módulos de la aplicación */
require('./modules');

/**
 * Opciones de configuración global para utilizar en todos los componentes vuejs de la aplicación
 * 
 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
 * @param  {object} methods Métodos generales a implementar en CRUDS
 */
Vue.mixin({
	data() {
		return {
			/**
			 * Opciones generales a implementar en tablas
			 * @type {JSON}
			 */
			table_options: {
				pagination: { edge: true },
				texts: {
                    filter: "Buscar:",
                    filterBy: 'Buscar por {column}',
                    //count:'Página {page}',
                    count: ' ',
                    first: 'PRIMERO',
                    last: 'ÚLTIMO',
                    limit: 'Registros',
                    //page: 'Página:',
                    noResults: 'No existen registros',

				},
			},
		}
	},
	props: [
		'route_list', 'route_create', 'route_edit', 'route_update', 'route_delete', 'route_show'
	],
	methods: {
		/**
		 * Inicializa los registros base del formulario
		 *
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param {string} url 		Ruta que obtiene los datos a ser mostrado en listados
		 * @param {string} modal_id Identificador del modal a mostrar con la información solicitada
		 */
		initRecords(url, modal_id) {
			this.errors = [];
			this.reset();
			const vm = this;

			axios.get(url).then(response => {
				if (typeof(response.data.records) !== "undefined") {
					vm.records = response.data.records;
				}
				if ($("#" + modal_id).length) {
					$("#" + modal_id).modal('show');
				}
			}).catch(error => {
				if (typeof(error.response) !== "undefined") {
					if (error.response.status == 403) {
						vm.showMessage(
							'custom', 'Acceso Denegado', 'danger', 'screen-error', error.response.data.message
						);
					}
					else {
						console.log(error.response);
					}
				}
			});
		},
		/**
		 * Método que obtiene los registros a mostrar
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {string} url Ruta que obtiene todos los registros solicitados
		 */
		readRecords(url) {
			const vm = this;
			axios.get('/' + url).then(response => {
				if (typeof(response.data.records) !== "undefined") {
					vm.records = response.data.records;
				}
			});
		},
		/**
		 * Método que permite mostrar una ventana emergente con la información registrada 
		 * y la nueva a registrar
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param {string} modal_id Identificador de la ventana modal
		 * @param {string} url 		Ruta para acceder a los datos solicitados
		 * @param {object} event 	Objeto que gestiona los eventos
		 */
		addRecord(modal_id, url, event) {
			event.preventDefault();
			this.initRecords(url, modal_id);
		},
		/**
		 * Método que permite crear o actualizar un registro
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {string} url Ruta de la acción a ejecutar para la creación o actualización de datos
		 */
		createRecord(url) {
			const vm = this;
			if (this.record.id) {
				this.updateRecord(url);
			}
			else {
				var fields = {};
				for (var index in this.record) {
					fields[index] = this.record[index];
				}
				axios.post('/' + url, fields).then(response => {
					vm.reset();
					vm.readRecords(url);
					vm.showMessage('store');
				}).catch(error => {
					vm.errors = [];

					if (typeof(error.response) !="undefined") {
						for (var index in error.response.data.errors) {
							if (error.response.data.errors[index]) {
								vm.errors.push(error.response.data.errors[index][0]);
							}
						}
					}
				});
			}
			
		},
		/**
		 * Redirecciona al formulario de actualización de datos
		 * 
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {integer} id Identificador del registro a actualizar
		 */
		editForm(id) {
			location.href = (this.route_edit.indexOf("{id}") >= 0) 
							? this.route_edit.replace("{id}", id) 
							: this.route_edit + '/' + id;
		},
		/**
		 * Método que carga el formulario con los datos a modificar
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {integer} index Identificador del registro a ser modificado
		 * @param {object} event   Objeto que gestiona los eventos
		 */
		initUpdate(index, event) {
			this.errors = [];
			this.record = this.records[index - 1];

			event.preventDefault();
		},
		/**
		 * Método que permite actualizar información
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {string} url Ruta de la acci´on que modificará los datos
		 */
		updateRecord(url) {
			const vm = this;
			var fields = {};
			for (var index in this.record) {
				fields[index] = this.record[index];
			}
			axios.patch('/' + url + '/' + this.record.id, fields).then(response => {
				vm.readRecords(url);
				vm.reset();
				vm.showMessage('update');
			}).catch(error => {
				vm.errors = [];

				if (typeof(error.response) !="undefined") {
					for (var index in error.response.data.errors) {
						if (error.response.data.errors[index]) {
							vm.errors.push(error.response.data.errors[index][0]);
						}
					}
				}
			});
	    },
	    /**
	     * Método que muestra datos de un registro seleccionado
	     *
	     * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
	     * @param  {integer} id Identificador del registro a mostrar
	     */
	    showRecord(id) {
	    	if (typeof(this.route_show) !== "undefined" && this.route_show) {
	    		if (this.route_show.indexOf("{id}") >= 0) {
					location.href = this.route_show.replace("{id}", id);
				}
				else {
					location.href = this.route_show + '/' + id;
				}
	    	}
	    },
		/**
		 * Método para la eliminación de registros
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {integer} index Elemento seleccionado para su eliminación
		 * @param  {string}  url   Ruta que ejecuta la acción para eliminar un registro
		 */
    	deleteRecord(index, url) {
    		var url = (url)?url:this.route_delete;
    		var records = this.records;
    		var confirmated = false;
    		var index = index - 1;
    		const vm = this;

    		bootbox.confirm({
    			title: "Eliminar registro?",
    			message: "Esta seguro de eliminar este registro?",
    			buttons: {
    				cancel: {
    					label: '<i class="fa fa-times"></i> Cancelar'
    				},
    				confirm: {
    					label: '<i class="fa fa-check"></i> Confirmar'
    				}
    			},
    			callback: function (result) {
    				if (result) {
    					confirmated = true;			
						axios.delete(url + '/' + records[index].id).then(response => {
							records.splice(index, 1);
							vm.showMessage('destroy');
						}).catch(error => {});
    				}
    			}
    		});

    		if (confirmated) {
    			this.records = records;
    			this.showMessage('destroy');
    		}
		},
		/**
		 * Método que muestra un mensaje al usuario sobre el resultado de una acción
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {string} type      	Tipo de mensaje a mostrar
		 * @param  {string} msg_title 	Título del mensaje (opcional)
		 * @param  {string} msg_class 	Clase CSS a utilizar en el mensaje (opcional)
		 * @param  {string} msg_icon  	Ícono a mostrar en el mensaje (opcional)
		 * @param  {string} custom_text Texto personalizado para el mensaje (opcional)
		 */
		showMessage(type, msg_title, msg_class, msg_icon, custom_text) {
			msg_title = (typeof(msg_title) == "undefined" || !msg_title)?'Éxito':msg_title;
		    msg_class = (typeof(msg_class) == "undefined" || !msg_class)?'growl-success':'growl-'+msg_class;
		    msg_icon = (typeof(msg_icon) == "undefined" || !msg_icon)?'screen-ok':msg_icon;
		    custom_text = (typeof(custom_text)!=="undefined")?custom_text:'';

		    var msg_text;
		    if (type=='store') {
		    	msg_text = 'Registro almacenado con éxito';
		    }
		    else if (type=='update') {
		    	msg_text = 'Registro actualizado con éxito';
		    }
		    else if (type=='destroy') {
		    	msg_text = 'Registro eliminado con éxito';
		    }
		    else if (type=='custom') {
		    	msg_text = custom_text;
		    }

		    /** @type {object} Muestra el correspondiente mensaje al usuario */
		    $.gritter.add({
		        title: msg_title,
		        text: msg_text,
		        class_name: msg_class,
		        image: "/images/" + msg_icon + ".png",
		        sticky: false,
		        time: 1500
		    });
		},
		/**
		 * Método que obtiene los países registrados
		 * 
		 * @author  Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 */
		getCountries() {
			const vm = this;
			axios.get('/get-countries').then(response => {
				vm.countries = response.data;
			});
		},
		/**
		 * Obtiene los Estados del Pais seleccionado
		 * 
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 */
		getEstates() {
			const vm = this;
			if (this.record.country_id) {
				axios.get('/get-estates/' + this.record.country_id).then(response => {
					vm.estates = response.data;
				});
			}
		},
		/**
		 * Obtiene los Municipios del Estado seleccionado
		 * 
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 */
		getMunicipalities() {
			const vm = this;
			if (this.record.estate_id) {
				axios.get('/get-municipalities/' + this.record.estate_id).then(response => {
					vm.municipalities = response.data;
				});
			}
		},
		/**
		 * Obtiene los Municipios del Estado seleccionado
		 * 
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 */
		getCities() {
			const vm = this;
			if (this.record.estate_id) {
				axios.get('/get-cities/' + this.record.estate_id).then(response => {
					vm.cities = response.data;
				});
			}
		},
		/**
		 * Obtiene un arreglo con las instituciones registradas
		 *
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {integer} id Identificador de la institución a buscar, este parámetro es opcional
		 */
		getInstitutions(id) {
			const vm = this;
			var institution_id = (typeof(id)!=="undefined")?'/'+id:'';
			axios.get('/get-institutions' + institution_id).then(response => {
				vm.institutions = response.data;
			});
		},
		/**
		 * Obtiene un arreglo con las monedas registradas
		 *
		 * @author Ing. Roldan Vargas <rvargas@cenditel.gob.ve | roldandvg@gmail.com>
		 * @param  {integer} id Identificador de la moneda a buscar, este parámetro es opcional
		 */
		getCurrencies(id) {
			const vm = this;
			var currency_id = (typeof(id)!=="undefined")?'/'+id:'';
			axios.get('/get-currencies' + currency_id).then(response => {
				vm.currencies = response.data;
			});
		},
		/*loadRelationalSelect(parent_id, target_url) {
			var parent_id = (typeof(parent_id) !== "undefined")?parent_id:false;
			var target_url = (typeof(target_url) !== "undefined")?target_url:false;

			if (parent_id) {
				axios.get('/' + target_url + '/' + parent_id).then(response => {
					this.estates = response.data;
				});
			}
		}*/
    },
    mounted() {
    	$('.bootstrap-switch').on('change', function() {
    		console.log($(this).val());
    	});
    }
});

/** @type {object} Constante que crea el elemento Vue */
const app = new Vue({
    el: '#app',
});
