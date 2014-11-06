# Transliterate module
Changes cyrillic symbols into latin ones.
There are transliteration exceptions for the folowing languages.

- Bulgarian: http://bg.wikisource.org/wiki/Закон_за_транслитерацията
- Ukrainian: http://zakon1.rada.gov.ua/cgi-bin/laws/main.cgi?nreg=55-2010-%EF

Usage example:
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
result = transliterate(word,'bg'); // You can use also bg_BG as region code
```

Ukrainian transliration
```
transliterate = require('transliteratsia');
result = transliterate(word,'ua'); // You can use also ru_UA as region code
```