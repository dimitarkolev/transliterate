# Transliterate module
Changes cyrillic symbols into latin ones.
There are transliteration exceptions for the folowing languages.

- Bulgarian: http://bg.wikisource.org/wiki/Закон_за_транслитерацията
- Russian: http://www.rg.ru/printable/2013/03/27/pasporta-dok.html
- Ukrainian: http://zakon1.rada.gov.ua/cgi-bin/laws/main.cgi?nreg=55-2010-%EF

Usage example
```
npm install transliteratsia
```

Cyrillic transliration
```
transliterate = require('transliteratsia');
result = transliterate(word);
```

Bulgarian transliration
```
transliterate = require('transliteratsia');
transliterate.region = 'bg'; // You can use also bg_BG as region code
result = transliterate(word); 
```

Russian transliration
```
transliterate = require('transliteratsia');
transliterate.region = 'ru'; // You can use also ru_RU as region code
result = transliterate(word); 
```

Ukrainian transliration
```
transliterate = require('transliteratsia');
transliterate.region = 'ua'; // You can use also ru_UA as region code
result = transliterate(word); 
```

You have to set **transliterate.region** only once. It will keep its value until changed.