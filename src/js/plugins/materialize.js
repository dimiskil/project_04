import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

//init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select)

export function getSelectInstance(elem) {
	return M.FormSelect.getInstance(elem)
}

//init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete)

export function getAutocompleteInstance(elem) {
	return M.Autocomplete.getInstance(elem)
}

//init datepickers
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
		showClearBtn: true
});

export function getDatepickersInstance(elem) {
	return M.Datepicker.getInstance(elem)}