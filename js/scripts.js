var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
	
	if(!countryName.length) countryName = 'Poland';

	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
 	countriesList.empty();
 	resp.forEach(function(item) {
   		$('<li>').append('<h1 class="countryNames">' + item.name + '</h1>').appendTo(countriesList);
   		$('<li>').text(item.nativeName).appendTo(countriesList).before('<h3 class="headings"> Native Name: </h3>');
   		$('<li>').text(item.languages).appendTo(countriesList).before('<h3 class="headings"> Languages: </h3>');
   		$('<li>').text(item.capital).appendTo(countriesList).before('<h3 class="headings"> Capital: </h3>');
   		$('<li>').text(item.population).appendTo(countriesList).before('<h3 class="headings"> Population: </h3>');
   		$('<li>').text(item.region).appendTo(countriesList).before('<h3 class="headings"> Region: </h3>');
   		$('<li>').text(item.currencies).appendTo(countriesList).before('<h3 class="headings"> Currencies: </h3>');
	});
} 
