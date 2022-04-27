/**
 * Type: Function
 * 
 * Description: Is a function that will translate a string into a gibberish 
 * string. This is extremely useful for checking translation texts for user
 * interfaces. It may have its purpose else where too.
 * 
 * Notes:
 * * Will preserve spaces
 * 
 * Author: Corey Lee McLaughlin
 * 
 * @example
 * var text = 'The cow jumped over the moon';
 * gibberish(text);
 * // Returns
 * "flg wce 79pqqa 4hc3 vjg 9mgp"
 * 
 * @param { String } text is the string that we want to translate into gibberish
 * @throws { String } will throw an error if text parameter is not a string
 * @returns { String } will return a gibberish translated string
 */
 function gibberish(text) {
	var generalError = 'gibberish() Error: ';
	if (typeof text != 'string') {
		throw generalError + 'Invalid \'text\' parameter';
	}
	var response = '';
	for (var i = 0; i < text.length; i++) {
		if (text[i] == '%' && text[i + 1] == 's') {
			response += '%s';
			i++;
			continue;
		}
		if (text[i] != ' ') {
			var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
			var randomNumber = Math.floor(Math.random() * characters.length);
			character = characters.substring(randomNumber, randomNumber + 1);
			response += character;
		} else {
			response += ' ';
		}
	}
	return response;
};