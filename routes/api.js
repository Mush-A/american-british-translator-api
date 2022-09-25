'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  app.route('/api/translate')
    .post((req, res) => {

      if (typeof req.body.text === "undefined" || typeof req.body.locale === "undefined") {
        return res.json({ error: 'Required field(s) missing' });
      }

      if (req.body.text == "") {
        return res.json({ error:"No text to translate"} );
      }
      
      if (req.body.locale !== 'british-to-american' && req.body.locale !== 'american-to-british') {
        return res.json( {error: 'Invalid value for locale field'} );
      }

      const translator = new Translator(req.body.text, req.body.locale);
      
      const translation = translator
                          .spelling()
                          .titles()
                          .time()
                          .americanOnly()
                          .britishOnly()
                          .build()

      if (!translation.translated) {
        return res.json({
          text: translation.text,
          translation: 'Everything looks good to me!'
        })
      }
      
      return res.json({
        text: translation.text,
        translation: translation.translation
      })
    });
};
