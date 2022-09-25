const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const AMERICANTOBRITISH = 'american-to-british';
const BRITISHTOAMERICAN = 'british-to-american';

const translator = new Translator()

suite('Unit Tests', () => {
  
  suite('Translate American -> British', () => {
    
    test('Mangoes are my favorite fruit.', () => {                                       
      assert.equal(
        translator.translate(
          'Mangoes are my favorite fruit.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'Mangoes are my favourite fruit.'
      )
    })

    test('I ate yogurt for breakfast.', () => {                                       
      assert.equal(
        translator.translate(
          'I ate yogurt for breakfast.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'I ate yoghurt for brekkie.'
      )
    })

    test('We had a party at my friend\'s condo.', () => {                                       
      assert.equal(
        translator.translate(
          'We had a party at my friend\'s condo.', 
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'We had a party at my friend\'s flat.'
      )
    })

    test('Can you toss this in the trashcan for me?', () => {                                       
      assert.equal(
        translator.translate(
          'Can you toss this in the trashcan for me?',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'Can you toss this in the bin for me?'
      )
    })

    test('The parking lot was full.', () => {                                       
      assert.equal(
        translator.translate(
          'The parking lot was full.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'The car park was full.'
      )
    })

    test('Like a high tech Rube Goldberg machine.', () => {                                       
      assert.equal(
        translator.translate(
          'Like a high tech Rube Goldberg machine.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'Like a high tech Heath Robinson device.'
      )
    })

    test('To play hooky means to skip class or work.', () => {                                       
      assert.equal(
        translator.translate(
          'To play hooky means to skip class or work.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'To bunk off means to skip class or work.'
      )
    })

    test('No Mr. Bond, I expect you to die.', () => {                                       
      assert.equal(
        translator.translate(
          'No Mr. Bond, I expect you to die.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'No Mr Bond, I expect you to die.'
      )
    })

    test('Dr. Grosh will see you now.', () => {                                       
      assert.equal(
        translator.translate(
          'Dr. Grosh will see you now.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'Dr Grosh will see you now.'
      )
    })

    test('Lunch is at 12:15 today.', () => {                                       
      assert.equal(
        translator.translate(
          'Lunch is at 12:15 today.',
          AMERICANTOBRITISH)
        .unformattedTranslation,
        'Lunch is at 12.15 today.'
      )
    })

  });

  suite('Translate British -> American', () => {
    
    test('We watched the footie match for a while.', () => {                                       
      assert.equal(
        translator.translate(
          'We watched the footie match for a while.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'We watched the soccer match for a while.'
      )
    })

    test('Paracetamol takes up to an hour to work.', () => {                                       
      assert.equal(
        translator.translate(
          'Paracetamol takes up to an hour to work.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'acetaminophen takes up to an hour to work.'
      )
    })

    test('First, caramelise the onions.', () => {                                       
      assert.equal(
        translator.translate(
          'First, caramelise the onions.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'First, caramelize the onions.'
      )
    })

    test('I spent the bank holiday at the funfair.', () => {                                       
      assert.equal(
        translator.translate(
          'I spent the bank holiday at the funfair.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'I spent the public holiday at the carnival.'
      )
    })

    test('I had a bicky then went to the chippy.', () => {                                       
      assert.equal(
        translator.translate(
          'I had a bicky then went to the chippy.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'I had a cookie then went to the fish-and-chip shop.'
      )
    })

    test('I\'ve just got bits and bobs in my bum bag.', () => {                                       
      assert.equal(
        translator.translate(
          'I\'ve just got bits and bobs in my bum bag.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'I\'ve just got odds and ends in my fanny pack.'
      )
    })

    test('The car boot sale at Boxted Airfield was called off.', () => {                                
      assert.equal(
        translator.translate(
          'The car boot sale at Boxted Airfield was called off.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'The swap meet at Boxted Airfield was called off.'
      )
    })

    test('Have you met Mrs Kalyani?', () => {                                
      assert.equal(
        translator.translate(
          'Have you met Mrs Kalyani?',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'Have you met Mrs. Kalyani?'
      )
    })

    test('Prof Joyner of King\'s College, London.', () => {                                
      assert.equal(
        translator.translate(
          'Prof Joyner of King\'s College, London.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'Prof. Joyner of King\'s College, London.'
      )
    })

    test('Tea time is usually around 4 or 4.30.', () => {                                
      assert.equal(
        translator.translate(
          'Tea time is usually around 4 or 4.30.',
          BRITISHTOAMERICAN)
        .unformattedTranslation,
        'Tea time is usually around 4 or 4:30.'
      )
    })
    
  });

  suite('Translation is being highlighted', () => {
    
    test('Mangoes are my favorite fruit.', () => {                                
      assert.equal(
        translator.translate(
          'Mangoes are my favorite fruit.',
          AMERICANTOBRITISH)
        .translation,
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      )
    })

    test('I ate yogurt for breakfast.', () => {                                
      assert.equal(
        translator.translate(
          'I ate yogurt for breakfast.',
          AMERICANTOBRITISH)
        .translation,
        'I ate <span class=\"highlight\">yoghurt</span> for <span class="highlight">brekkie</span>.'
      )
    })

    test('We watched the footie match for a while.', () => {                                
      assert.equal(
        translator.translate(
          'We watched the footie match for a while.',
          BRITISHTOAMERICAN)
        .translation,
        'We watched the <span class="highlight">soccer</span> match for a while.'
      )
    })

    test('Paracetamol takes up to an hour to work.', () => {                                
      assert.equal(
        translator.translate(
          'Paracetamol takes up to an hour to work.',
          BRITISHTOAMERICAN)
        .translation,
        '<span class="highlight">acetaminophen</span> takes up to an hour to work.'
      )
    })
    
  });
  
});
