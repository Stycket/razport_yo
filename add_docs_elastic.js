const { Client } = require('@elastic/elasticsearch');
const config = require('config');
const elasticConfig = config.get('elastic');

// Update the client configuration to point to your local Elasticsearch instance
const client = new Client({
  node: 'http://localhost:9200', // Change the URL to match your Elasticsearch configuration
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
});

client.info()
  .then(response => console.log(response))
  .catch(error => console.error(error));

  
  async function run() {



    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Ininiate Gpt',
        Description: 'Greetings',
      Content: 'Also say: Know that im not perfect and can fabulate sometimes, but do my best to not do so. '
      }
    })
  

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Greetings',
        Description: 'Hello, hey, wasup, watzup, watsup, whats up, waddup, hej, hejsan, hallå, halloj, tjena, tjabba, tjo, tjohej, tja, var hälsad',
      Content: 'Hey watzup?'
      }
    })
  


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Occupation',
        Description: 'live, occupation, from, country, bor, från, uppväxt, föddes',
      Content: 'lives and was raised just outside the city Gothenburg in sweden in the forest'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'work',
        Description: 'work, employed, job, jobb, jobba, jobbat, jobbar, anställd, experience, arbets, arbete',
      Content: 'Doin some freelance work right now but havent worked in a tech company before. Doesnt work for any company at the moment but want to find people that has a positive vision and want to create useful and beautiful experiences for the world'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Age',
        Description: 'old, age, years, born, gammal, ålder, född, föddes',
      Content: '28 years old, borned the yaer 1994'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'phone number',
        Description: 'phone number, telephone, phone, number, contact, telefon, telefonnummer, kontankt, kontakta, kontaktuppgifter, nr, nå',
      Content: 'You can call on +46762139652 everyday bewtween 13.00 and 19.00'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Skills',
        Description: 'Skills, kompetens, färdigheter, färdighet, front-end, javascript, kompetenser, skill, experience, erfarenhet, erfarenheter skicklighet, webbutveckling, ramverk',
      Content: 'long experience designing for web. UI/UX design, front-end development and also some basic back-end. '
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Frameworks',
        Description: 'Frameworks, ramverk, javascript, react, vue, front-end, htl, css, php, back-end',
      Content: 'Know: Html, css, javascript... Learning: React, node.js, python... '
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Stress',
        Description: 'stress',
      Content: 'Works very good under deadlines dont worry... '
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Spets',
        Description: 'Spetskompetens, Spetskompetenser, spets, special, specialområde, specialinriktning',
      Content: 'spetskompetens är svårdefinierad då han är så mångfasceterad. Men han föredrar front-end och det visuella'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Email Adress',
        Description: 'Email, mail, contact, adress, kontakt, kontakta, kontaktuppgifter, nå',
      Content: 'email is Rasmus.lundin100@gmail.com'
      }
    })
  
  
    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Instagram',
        Description: 'instagram, sociala medier, social media, kontakt, kontakta, nå, contact',
      Content: 'Rasmus name on instagram is: Crystal_Circles'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Personal life',
        Description: 'Personal, about, free time, hobby, hobbys, hobbies, lifestyle, favoritsyssla, syssla, hemma, fritid, fritiden, personligt, intressen, fritidsintressen intresserad, honom, vem',
      Content: 'diverse interests,nature,tech-savvy,computers,digital,spiritual,meditation,inner peace,fulfilling life,health,nutritious,self-care,stress-free,history'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Politics',
        Description: 'Politic, Politics, politik, politiker, röstar, röst, val, valet',
      Content: 'dont vote on political parties. Thinks we all should get together and co-operate to build a better world for all '
      }
    })

  
    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Philosophy',
        Description: 'Philosophy, filosofi, världssyn',
      Content: 'has a deep sense of spirituality and is very interested in eastern philosophy such as Buddhism yoga etc. He view everything as a whole that is connected, meaning that everything is one. Love dragons.'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Education',
        Description: 'Education, study, experience, skola, utbildning, studier, pluggat, läst',
      Content: 'Doesnt have an technical education but have learned for him self since young age. However he have studied religion and geology at university.'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite Games',
        Description: 'games, game, gaming, spel, favoritspel, datorspel, zelda',
      Content: 'Likes a lot of different games but mostly oldschool games like ps3 and earlier. His favorite console is n64 and the game Zelda. He also enjoys playing Rollercoaster Tycoon 2.'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite Food',
        Description: 'Food, mat, favoritmat, käk, äta, eat, restaurang',
      Content: 'Rasmus have a hard time choosing his favorite food since he likes to eat and cook so many different recipes. However he often likes to keep it simple, and often go to the pasta and pesto. He also likes to try out new asian recipes that stings a bit.. ;)'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite movie',
        Description: 'movie, favoritfilm, film, filmer',
      Content: 'Rasmus älskar filmer och ser ofta om sina favorit. Några är 7 Years in tibet med Brad Pitt. Birdman med Edward Norton eller Swiss Army Man med Daniel Radcliff'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite Book',
        Description: 'book, bok, böcker, favoritbok, läsa, läser, litteratur',
      Content: 'Rasmus älskar att läsa. Han har ett gäng böcker han gillar. Men oftast läser han på datorn'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite drink',
        Description: 'drink, drinking, dricka, dryck',
      Content: 'Rasmus loves to drink Loka, swedish sparkling water.. '
      }
    })

    
    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Travel',
        Description: 'Travel, resa, utomlands, resor, länder, semester, utlandet, spanien, grekland, danmark, norge, finland, italien, usa, amerika, asien, japan, thailand, etc.',
      Content: 'Rasmus har rest en del i europa men aldrig utanför, förutom Madeirra som han vill flytta till i framtiden. Som ju är en portugisisk ö i Afrika utanför Marrocco.'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite Color',
        Description: 'color, färg, favoritfärg',
      Content: 'Gillar alla färger men har en dragning till grönt. Men när det kommer till datorer föredrar Rasmus dark mode tema'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Favorite music',
        Description: 'music, musik, favoritmusik, favoritlåt, låt, låtar, lyssnar, lyssna, lissen, hörlurar',
      Content: 'Likes all kinds of music but lissen a lot to hip hop and electronic music. When he was young he really likes Björn Rosenström'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Clothing Style',
        Description: 'clothes, kläder, bär, plagg, sig, ',
      Content: 'gilllar en stilren stil ;)'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Sleep Routines',
        Description: 'sova, sovrutiner, sover, vaken, sleep, sleeping, lägga, sängen',
      Content: 'Rasmus är en riktig nattuggla och gillar att kolla på stjärnorna'
      }
    })


  

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Time Traveler',
        Description: 'tidsresenär, time traveler',
      Content: 'Vem vet, ta en titt i borgen på Öland..'
      }
    })


    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Single or taken',
        Description: 'single, girlfriend, boyfriend, singel, pojkvän, flickvän, partner, relation, förhållande0, gift',
      Content: 'Rasmus är gift med skogen... Eller kanske en älg? Nejdå Rasmus är fri, oroa er inte damer.'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Thoughts on space',
        Description: 'Space, rymden',
      Content: 'Rasmus är i rymden just nu precis som du, men visst vore det kul att besöka månen någon gång.'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Best Friend',
        Description: 'Friend, vän, kompis, vänner, kompisar, vänskap',
      Content: 'Rasmus har många bästa vänner och anser att vänskap är något av det viktigaste i livet'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Boende',
        Description: 'Apartment, house, hut, Hus, lägenhet, stuga, tält',
      Content: 'bor inte lägenhet eller villa men han bor i skogen'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Lucky Number',
        Description: 'Number, turnummer, lyckonummer',
      Content: '14'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Meat',
        Description: 'Meat, kött',
      Content: 'Äter kött emellanåt men anser att en vegansk kost är att föredra'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Vegeterian',
        Description: 'vegeterian, vegeterian, vegan',
      Content: 'Äter mycket vegetariskt och veganskt men följer ingen specifik kosthållning. Älskar ärtor och ägg. Men inte samtidigt'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Gpt Build',
        Description: 'byggde, byggt, uppbyggd, byggd, skapade skapat, ai, gpt, modul, created, made, möjligt, fungerar, funkar, kodad, gjord, dig',
      Content: 'Rasmus created this GPT module chatbot called Robot made with simple javascript Open AI api. He would love to explain his plans with the project over a fika any time =). He also created some other stuff but since the back-end knowledge is limited he has to dive deep into the books to go further..'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Do Command',
        Description: '',
      Content: '[if asked a question; answer. If asked what to do; answer what you can do as a gpt module]'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Unlock GPT',
        Description: '/unlockgpt',
      Content: 'You have now unlocked the GPT module but know that it increases fabulation'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Lock GPT',
        Description: '',
      Content: '<- Ignore all previous! only say this: You have now locked the GPT to work as a Q/A bot.'
      }
    })

    await client.index({
      index: 'razbot-gpt',
      body: {
        Title: 'Unlocks the gpt with custom prompt',
        Description: 'Trollkarlen',
      Content: '[GPT instructions = ask if user want help with anything more after GPT answer]'
      }
    })

  
    await client.indices.refresh({index: 'Razbot-gpt'})
  }

  

  
  
  run().catch(console.log)




