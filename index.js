transliterate = function(text) {
	var cyrillic = [
		"а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о",
		"п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я",
		"А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", 
		"П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ь", "Ю", "Я",
		"Ї", "ї", "Є", "є", "Ы", "ы", "Ё", "ё", "Э", 'э',
		"ı", "İ", "ğ", "Ğ", "ü", "Ü", "ş", "Ş", "ö", "Ö", "ç", "Ç",
		"Á", "á", "Â", "â", "Ã", "ã", "À", "à", "Ç", "ç", "É", "é", "Ê", "ê", "Í", 
		"í", "Ó", "ó", "Ô", "ô", "Õ", "õ", "Ú", "ú"
	];
	var latin = [
		"a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", 
		"p", "r", "s", "t", "u", "f", "h", "ts", "ch", "sh", "sht", "a", "y", "yu", "ya",
		"A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", 
		"P", "R", "S", "T", "U", "F", "H", "Ts", "Ch", "Sh", "Sht", "A", "Y", "Yu", "Ya",
		"I", "i", "Ye", "ye", "I", "i", "Yo", "yo", "E", "e",
		"i", "I", "g", "G", "u", "U", "s", "S", "o", "O", "c", "C",
		"A", "a", "A", "a", "A", "a", "A", "a", "C", "c", "E", "e", "E", "e", "I",
		"i", "O", "o", "O", "o", "O", "o", "U", "u" 
	];

	var bulgarian_cyrillic = [
		"а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о",
		"п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я",
		"А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", 
		"П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ь", "Ю", "Я"
	];
	var bulgarian_latin = [
		"a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", 
		"p", "r", "s", "t", "u", "f", "h", "ts", "ch", "sh", "sht", "a", "y", "yu", "ya",
		"A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", 
		"P", "R", "S", "T", "U", "F", "H", "Ts", "Ch", "Sh", "Sht", "A", "Y", "Yu", "Ya"
	];

	var russian_cyrillic = [
		"а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о",
		"п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ь", "ю", "я",
		"А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", 
		"П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ь", "Ю", "Я",
		"Ы", "ы", "Ё", "ё", "Э", 'э'
	];
	var russian_latin = [
		"a", "b", "v", "g", "d", "e", "zh", "z", "i", "y", "k", "l", "m", "n", "o", 
		"p", "r", "s", "t", "u", "f", "kh", "ts", "ch", "sh", "shch", "ie", "", "iu", "ia",
		"A", "B", "V", "G", "D", "E", "Zh", "Z", "I", "Y", "K", "L", "M", "N", "O", 
		"P", "R", "S", "T", "U", "F", "Kh", "Ts", "Ch", "Sh", "Shch", "Ie", "", "Iu", "Ia",
		"Y", "y", "E", "e", "E", "e"
	];

	var ukrainian_cyrillic = [
		'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Ґ', 'ґ', 'Д', 'д', 'Е', 'е', 'Є', 'є', 
		'Ж', 'ж', 'З', 'з', 'И', 'и', 'І', 'і', 'Ї', 'ї', 'Й', 'й', 'К', 'к', 'Л', 'л',
		'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у',
		'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ю', 'ю', 'Я', 'я',
		'ь', "'",
	];
	var ukrainian_latin = [
		'A', 'a', 'B', 'b', 'V', 'v', 'H', 'h', 'G', 'g', 'D', 'd', 'E', 'e', 'Ye', 'ie',
		'Zh', 'zh', 'Z', 'z', 'Y', 'y', 'I', 'i', 'Yi', 'i', 'Y', 'i', 'K', 'k', 'L', 'l',
		'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F',
		'f', 'Kh', 'kh', 'Ts', 'ts', 'Ch', 'ch', 'Sh', 'sh', 'Shch', 'shch', 'Yu', 'iu', 'Ya',
		'ia', '', ''
	];

	function str_replace (search, replace, subject, count) {
	    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
	            f = [].concat(search),
	            r = [].concat(replace),
	            s = subject,
	            ra = r instanceof Array, sa = s instanceof Array;
	    s = [].concat(s);
	    if (count) {
	        this.window[count] = 0;
	    }
	
	    for (i=0, sl=s.length; i < sl; i++) {
	        if (s[i] === '') {
	            continue;
	        }
	        for (j=0, fl=f.length; j < fl; j++) {
	            temp = s[i]+'';
	            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
	            s[i] = (temp).split(f[j]).join(repl);
	            if (count && s[i] !== temp) {
	                this.window[count] += (temp.length-s[i].length)/f[j].length;}
	        }
	    }
	    return sa ? s : s[0];
	};
	
	var string = '';
	if (transliterate.region) {
		if (transliterate.region.toLowerCase() == 'ua' || transliterate.region.toLowerCase() == 'ru_ua') {
			string = str_replace(ukrainian_cyrillic, ukrainian_latin, text);
			string = string.replace(new RegExp('Зг','g'),'Zgh').replace(new RegExp('зг','g'),'zgh');
		}
		else if (transliterate.region.toLowerCase() == 'bg' || transliterate.region.toLowerCase() == 'bg_bg') {
			string = str_replace(bulgarian_cyrillic, bulgarian_latin, text);
			string = string.replace(/iya\b/g, 'ia').replace(/IYA\b/g, 'IA');
		}
		else if (transliterate.region.toLowerCase() == 'ru' || transliterate.region.toLowerCase() == 'ru_ru') {
			string = str_replace(russian_cyrillic, russian_latin, text);
		} 
	}
	else {
		string = str_replace(cyrillic, latin, text);
	}
	return string;
};	

module.exports = transliterate
