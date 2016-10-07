console.log('have fun !');

var person = {};
// Au moment du clic 

$('button').click(function(){

	var inputs = $('input');
	console.log(inputs);

	for (var i = 0; i < inputs.length; i++) {
		person[$(inputs[i]).attr('name')] = $(inputs[i]).val();
		
	}
	console.log(person);

	greetings = person.first_name + ' ' + person.last_name + ' de ' + person.city;
	console.log(greetings);

	$('#username').text(greetings + ' !');
});