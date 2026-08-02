/**
 * ═══════════════════════════════════════════════════════════════
 *  WEDDING WEBSITE — TRANSLATIONS
 *  All visible text in: English · Catalan · Italian · Spanish · French
 *
 *  How to edit:
 *  1. Find the language block (en / ca / it / es / fr).
 *  2. Change the text value between the quotes.
 *  3. Do not change the key names (left side of the colon).
 *  4. Keep the same structure in every language.
 *
 *  English (en) is the fallback — it is used whenever a key is
 *  missing in another language.
 * ═══════════════════════════════════════════════════════════════
 */

const TRANSLATIONS = {

  // ─────────────────────────────────────────────────────────────
  //  ENGLISH
  // ─────────────────────────────────────────────────────────────
  en: {
    langName: 'English',

    langSelect: {
      title:    'Choose your language',
      subtitle: 'You can change this at any time from the menu.',
      confirm:  'Continue',
    },

    nav: {
      about:           'The celebration',
      venue:           'Venue & date',
      schedule:        'Schedule',
      rsvp:            'RSVP',
      accommodation:   'Accommodation',
      recommendations: 'Tips',
      spotify:         'Playlist',
      whatsapp:        'WhatsApp',
      gifts:           'Gifts',
      faq:             'FAQ',
      menu:            'Menu',
      close:           'Close menu',
      event:           'The celebration',
      barcelona:       'Barcelona',
      otherEvents:     'Before & after',
    },

    hero: {
      welcome:  'Come celebrate with us.',
      rsvpBtn:  'RSVP',
      mapBtn:   'Find the venue',
    },

    about: {
      title: 'What kind of celebration is this?',
      intro: 'We want to be upfront about the format so you can come prepared and comfortable — and genuinely enjoy the day.',
      card:  'No seating plan. No formal dress code. No pressure. Just food, drinks, music and a lot of people we care about in one place.',
      items: [
        { icon: '🥂', text: 'It\'s a cocktail-style celebration. No banquet, no assigned seats.' },
        { icon: '👟', text: 'Guests will be standing and moving around — comfortable shoes are a good idea.' },
        { icon: '👗', text: 'There\'s no dress code. Come looking nice, but above all, come comfortable.' },
        { icon: '🤝', text: 'Our families and groups of friends haven\'t all met before. That\'s kind of the point — come ready to mix, chat and have a good time.' },
      ],
    },

    venue: {
      title:          'Venue & date',
      dateLabel:      'Date',
      timeLabel:      'Time',
      addressLabel:   'Venue',
      timeRange:      '{startTime} – {endTime}',
      timeNote:       'The final timetable will be confirmed closer to the date.',
      mapBtn:         'Open in Google Maps',
      transportTitle: 'Getting there',
      transportNote:  'Public transport information coming soon.',
      imageAlt:       'Estació de França, Barcelona',
    },

    schedule: {
      title:       'Schedule',
      provisional: 'All times are provisional.',
      tbc:         'Time TBC',
      items: {
        pre:      { label: 'Pre-drinks',              desc: 'Optional gathering before the celebration starts — details coming soon.' },
        arrival:  { label: 'Guests arrive',           desc: 'Doors open.' },
        welcome:  { label: 'Welcome',                 desc: 'We say hello.' },
        cocktail: { label: 'Cocktail food & drinks',  desc: 'Food and drinks are served throughout the afternoon.' },
        music:    { label: 'Music & celebration',     desc: 'Live music, dancing or something in between.' },
        dj:       { label: 'DJ set',                  desc: 'The evening picks up.' },
        end:      { label: 'Venue closes',            desc: 'Last drinks at the venue.' },
        after:    { label: 'Onwards in Barcelona',    desc: 'No formal plan — keep the evening going wherever it takes you.' },
      },
    },

    event: {
      title:    'The celebration',
      intro:    'Everything you need to know about the day.',
      location: { title: 'Location' },
      schedule: { title: 'Schedule' },
      dresscode:{ title: 'Dress code & vibe' },
      gifts:    { title: 'Gifts' },
      spotify:  { title: 'Playlist' },
    },

    rsvp: {
      title:             'RSVP',
      intro:             'Let us know you\'re coming and add everyone in your group.',
      deadline:          'Please confirm by {date}.',
      confirmAttending:  'Yes, we\'ll be there!',
      attending:    {
        label:   'Will your group be attending?',
        yes:     'Yes, we\'ll be there',
        no:      'Sorry, we can\'t make it',
        unsure:  'Not sure yet',
      },
      mainContact: {
        legend:  'Your details',
        name:    'Full name',
        email:   'Email address',
        phone:   'Phone / WhatsApp number',
      },
      guests: {
        legend:     'Your group',
        intro:      'Add everyone in your party, including yourself.',
        addBtn:     '+ Add person',
        removeBtn:  'Remove',
        namePh:     'Full name',
        attending:  'Attending',
        attYes:     'Yes',
        attNo:      'No',
        attUnsure:  'Not sure',
        isChild:    'Child under 10',
        age:        'Age',
        agePh:      'Years old',
        dietLabel:      'Dietary',
        dietNone:       'No restrictions',
        dietVegetarian: 'Vegetarian',
        dietVegan:      'Vegan',
        dietOther:      'Other',
        dietOtherPh:    'Please specify',
        allergies:      'Allergies',
        allergiesPh:    'e.g. nuts, shellfish, gluten',
        phoneLabel:     'Phone / WhatsApp (optional)',
        phonePh:        '+34 600 000 000',
        phoneHint:      'We\'ll use this to add you to the wedding WhatsApp group and for any important updates.',
      },
      totals: {
        listed:    'People listed',
        attending: 'Attending',
        notGoing:  'Not attending',
        unsure:    'Not sure',
        children:  'Children under 10',
      },
      extra: {
        legend:          'A little more',
        allergies:       'Any food allergies in your group?',
        allergiesPh:     'e.g. nut allergy, gluten-free, vegan',
        dietary:         'Other dietary requirements',
        dietaryPh:       'e.g. vegetarian, kosher, halal',
        accessibility:   'Accessibility or mobility requirements',
        accessibilityPh: 'e.g. wheelchair access, seating needed',
        message:         'Message for Liam & Valentina (optional)',
        messagePh:       'Anything you\'d like to say',
      },
      consent: {
        label: 'I confirm that the information above is correct and that I\'m responding on behalf of my group.',
      },
      privacy: 'The information you share here is used only to organise the wedding.',
      submitBtn:    'Review & send',
      confirmTitle: 'Check your RSVP',
      confirmText:  'Please review your details before sending.',
      confirmBtn:   'Confirm and send',
      backBtn:      'Go back and edit',
      sending:      'Sending…',
      success: {
        title:   'Thank you!',
        message: 'We\'ve received your RSVP. We\'ll be in touch with updates as the date approaches.',
      },
      error: {
        title:   'Something went wrong.',
        message: 'Your RSVP could not be sent. Please try again or contact us directly.',
      },
      devMode: 'RSVP endpoint not configured. Submission logged to console (development mode).',
      changeNote: 'Need to change your RSVP? Just get in touch with Liam or Valentina directly.',
      validation: {
        required:      'This field is required.',
        emailInvalid:  'Please enter a valid email address.',
        noGuests:      'Please add at least one person to your group.',
        mustConsent:   'Please tick the box to confirm your details.',
        ageRequired:   'Please enter the age for each child under 10.',
        nameRequired:  'Please enter a name for each person.',
        noPhone:       'Please provide a phone number for at least one person in your group.',
      },
    },

    barcelona: {
      title: 'Barcelona',
      intro: 'A few things worth knowing to help you plan your time in the city.',
      neighbourhoods: {
        title: 'Where to stay',
        items: [
          { name: 'El Born / Sant Pere', desc: 'Walking distance from the venue. Lively, full of bars and restaurants. Books up fast.' },
          { name: 'Barceloneta & Waterfront', desc: 'Right by the sea, 10–15 min walk to the venue. Great if you want beach access.' },
          { name: 'Eixample', desc: 'Central, well connected by metro. Good range of hotels at different price points.' },
          { name: 'Gràcia', desc: 'Quieter, neighbourhood feel. A bit further out but easy by metro or taxi.' },
        ],
      },
      transport: {
        title: 'Getting around',
        items: [
          'The venue is well served by public transport — metro lines 4 (Barceloneta) and 3 (Drassanes) are both nearby.',
          'The T-Casual 10-trip metro card is the most economical option if you\'re using public transport regularly.',
          'Taxis and Bolt/Cabify are reliable and affordable for late-night journeys.',
          'The city is very walkable in the centre — most areas around the venue are flat.',
        ],
      },
      tips: {
        title: 'Good to know',
        items: [
          'April in Barcelona is busy. Book accommodation as early as you can — prices rise significantly as the date approaches.',
          'The weather in April is mild but evenings can be cool. Bring a light jacket.',
          'Comfortable shoes are a must — both for the event itself and for exploring the city.',
          'Barcelona is generally very safe, but keep an eye on your belongings in busy tourist areas.',
        ],
      },
    },

    otherEvents: {
      title:       'Before & after',
      placeholder: 'We\'re planning a few things around the wedding day — details coming soon.',
    },

    accommodation: {
      title:             'Book accommodation early',
      intro:             'Barcelona is an expensive city and April is a popular time to visit. Prices rise as the date approaches. If you\'re travelling, please book as early as you can.',
      advice:            'You don\'t need to wait for the final timetable before reserving a hotel or apartment. Book now and adjust travel plans later.',
      noRecommendations: 'Specific accommodation recommendations coming soon.',
      areaLabel:         'Area',
      distanceLabel:     'Distance from venue',
      priceLabel:        'Price range',
    },

    recommendations: {
      title: 'Good to know',
      items: {
        shoes:         { icon: '👟', text: 'Wear comfortable shoes. You\'ll be on your feet for most of the celebration.' },
        standing:      { icon: '🧍', text: 'It\'s a cocktail event — guests will mostly be standing and moving around.' },
        walking:       { icon: '🚶', text: 'If you\'re meeting us earlier or heading out later, you may do a fair amount of walking around Barcelona.' },
        jacket:        { icon: '🧥', text: 'Bring a light layer or jacket. Barcelona evenings in April can be cool once the sun goes down.' },
        transport:     { icon: '🚇', text: 'Barcelona public transport is good and connects well to the venue area.' },
        taxi:          { icon: '🚕', text: 'Taxis and ride-hailing apps are useful for getting around later in the evening.' },
        accommodation: { icon: '🏨', text: 'Book accommodation as early as possible. April in Barcelona fills up fast.' },
        noGifts:       { icon: '🎁', text: 'Please do not bring a physical gift. Your presence is all we want.' },
        updates:       { icon: '📱', text: 'Check this website again closer to the date for final schedule and updates.' },
      },
    },

    spotify: {
      title:         'Add a song to the playlist',
      intro:         'Help us build the soundtrack for the afternoon. Add something you\'d genuinely like to hear — but remember that everyone else has to listen to it too.',
      btn:           'Open Spotify playlist',
      notConfigured: 'The playlist link will be added here soon.',
    },

    whatsapp: {
      title: 'Wedding WhatsApp group',
      intro: 'Join the WhatsApp community for updates, practical information and to coordinate plans before and after the wedding.',
      detail:'This is where we\'ll share last-minute updates and where guests can connect with each other. Important information will always be available on this website — joining is optional.',
      btn:   'Join the WhatsApp group',
      notConfigured: 'The WhatsApp link will be added here soon.',
    },

    gifts: {
      title:   'Gifts',
      message: 'No gift is necessary. We know that for many of you travelling to Barcelona is already a generous effort in itself. Being there with us is more than enough, and we are truly grateful for it.',
    },

    additionalEvents: {
      title:      'Before & after',
      comingSoon: 'Details coming soon.',
      rsvpNote:   'RSVP required',
      mapsBtn:    'See on map',
      items: {
        dayBefore: { title: 'The day before', desc: 'Details coming soon.' },
        dayAfter:  { title: 'The day after',  desc: 'Details coming soon.' },
      },
    },

    faq: {
      title: 'Questions',
      items: [
        {
          q: 'Is there a dress code?',
          a: 'No. Come looking nice, but above all, be comfortable. We\'d suggest skipping the heels and anything you wouldn\'t want to stand in for several hours.',
        },
        {
          q: 'Will there be seats?',
          a: 'It\'s a cocktail event, so most guests will be standing and moving around. There will be some seating available, but there are no assigned places.',
        },
        {
          q: 'Can I bring children?',
          a: 'Yes — if your invitation includes children, please bring them. Let us know in your RSVP so we can plan accordingly.',
        },
        {
          q: 'What time does it start?',
          a: 'Doors open at approximately 15:00. The final timetable will be confirmed closer to the date.',
        },
        {
          q: 'When should I book accommodation?',
          a: 'As soon as possible. April in Barcelona is busy and prices increase as the date approaches. You don\'t need to wait for the final programme.',
        },
        {
          q: 'Do I need to bring a gift?',
          a: 'No gift is necessary. For many of you, travelling to Barcelona is already a generous effort — and we\'re truly grateful for that.',
        },
        {
          q: 'Can I add songs to the playlist?',
          a: 'Yes — the Spotify playlist is shared and open for contributions. The link will be on this page.',
        },
        {
          q: 'How will updates be communicated?',
          a: 'Through this website and the WhatsApp group. Check back closer to the date for the confirmed schedule.',
        },
        {
          q: 'What happens after 22:00?',
          a: 'The venue closes at around 22:00. After that, guests are welcome to continue the evening anywhere in Barcelona — no formal plan, just follow wherever the night goes.',
        },
        {
          q: 'Can I change my RSVP later?',
          a: 'Yes — just get in touch with {name1} or {name2} directly and we\'ll update it.',
        },
      ],
    },

    footer: {
      closing:   'We can\'t wait to see you there.',
      privacy:   'RSVP information is collected solely to help organise the wedding.',
      updated:   'Last updated {date}.',
      contactUs: 'Get in touch',
    },

    common: {
      tbc:       'TBC',
      provisional:'Provisional',
      comingSoon: 'Details coming soon.',
      yes:        'Yes',
      no:         'No',
      unsure:     'Not sure',
      enabled:    'Enabled',
      close:      'Close',
    },
  },

  // ─────────────────────────────────────────────────────────────
  //  CATALAN
  // ─────────────────────────────────────────────────────────────
  ca: {
    langName: 'Català',

    langSelect: {
      title:    'Trieu l\'idioma',
      subtitle: 'Podeu canviar-lo en qualsevol moment des del menú.',
      confirm:  'Continuar',
    },

    nav: {
      about:           'La celebració',
      venue:           'Lloc i data',
      schedule:        'Programa',
      rsvp:            'Confirmació',
      accommodation:   'Allotjament',
      recommendations: 'Consells',
      spotify:         'Llista',
      whatsapp:        'WhatsApp',
      gifts:           'Regals',
      faq:             'Preguntes',
      menu:            'Menú',
      close:           'Tancar menú',
      event:           'La celebració',
      barcelona:       'Barcelona',
      otherEvents:     'Abans i després',
    },

    hero: {
      welcome:  'Veniu a celebrar-ho amb nosaltres.',
      rsvpBtn:  'Confirmeu assistència',
      mapBtn:   'Trobar el lloc',
    },

    about: {
      title: 'De quin tipus de celebració es tracta?',
      intro: 'Volem ser clars sobre el format perquè pugueu venir preparats i còmodes, i gaudir de veritat del dia.',
      card:  'Sense plànol de taules. Sense codi de vestimenta. Sense pressió. Menjar, begudes, música i molta gent que estimem reunida en un sol lloc.',
      items: [
        { icon: '🥂', text: 'És una celebració estil còctel. Sense sopar formal, sense lloc assignat.' },
        { icon: '👟', text: 'Els convidats estaran drets i es mouran lliurement — unes sabates còmodes us aniran molt bé.' },
        { icon: '👗', text: 'No hi ha codi de vestimenta. Veniu elegants però, sobretot, còmodes.' },
        { icon: '🤝', text: 'Les nostres famílies i grups d\'amics no es coneixen tots. Precisament d\'això es tracta — veniu a conèixer gent nova, xerrar i gaudir.' },
      ],
    },

    venue: {
      title:          'Lloc i data',
      dateLabel:      'Data',
      timeLabel:      'Hora',
      addressLabel:   'Lloc',
      timeRange:      '{startTime} – {endTime}',
      timeNote:       'El programa definitiu es confirmarà quan s\'acosti la data.',
      mapBtn:         'Obrir a Google Maps',
      transportTitle: 'Com arribar-hi',
      transportNote:  'Informació sobre transport públic properament.',
      imageAlt:       'Estació de França, Barcelona',
    },

    schedule: {
      title:       'Programa',
      provisional: 'Tots els horaris són provisionals.',
      tbc:         'Hora per confirmar',
      items: {
        pre:      { label: 'Preapertura',               desc: 'Quedada opcional abans que comenci la celebració — detalls properament.' },
        arrival:  { label: 'Arribada dels convidats',   desc: 'S\'obren les portes.' },
        welcome:  { label: 'Benvinguda',                desc: 'Us saludem.' },
        cocktail: { label: 'Menjar i begudes',          desc: 'Servei de còctel durant tota la tarda.' },
        music:    { label: 'Música i celebració',       desc: 'Música en directe, ball o alguna cosa entremig.' },
        dj:       { label: 'Sessió de DJ',              desc: 'El vespre s\'anima.' },
        end:      { label: 'Tancament del local',       desc: 'Últimes begudes al local.' },
        after:    { label: 'Continuem per Barcelona',   desc: 'Sense pla fix — la nit continua on vulgui.' },
      },
    },

    event: {
      title:    'La celebració',
      intro:    'Tot el que necessiteu saber sobre el dia.',
      location: { title: 'Lloc' },
      schedule: { title: 'Programa' },
      dresscode:{ title: 'Vestimenta i ambient' },
      gifts:    { title: 'Regals' },
      spotify:  { title: 'Playlist' },
    },

    rsvp: {
      title:            'Confirmeu assistència',
      intro:            'Feu-nos saber que vindreu i afegiu totes les persones del vostre grup.',
      deadline:         'Si us plau, confirmeu abans del {date}.',
      confirmAttending: 'Sí, hi serem!',
      attending: {
        label:   'El vostre grup assistirà?',
        yes:     'Sí, hi serem',
        no:      'Ho sentim, no podrem ser-hi',
        unsure:  'Encara no ho sabem',
      },
      mainContact: {
        legend:  'Les vostres dades',
        name:    'Nom complet',
        email:   'Adreça electrònica',
        phone:   'Telèfon / número de WhatsApp',
      },
      guests: {
        legend:     'El vostre grup',
        intro:      'Afegiu totes les persones del vostre grup, incloent-vos vosaltres.',
        addBtn:     '+ Afegir persona',
        removeBtn:  'Eliminar',
        namePh:     'Nom complet',
        attending:  'Assisteix',
        attYes:     'Sí',
        attNo:      'No',
        attUnsure:  'No ho sé',
        isChild:    'Nen/a menor de 10 anys',
        age:        'Edat',
        agePh:      'Anys',
        dietLabel:      'Alimentació',
        dietNone:       'Sense restriccions',
        dietVegetarian: 'Vegetarià/ana',
        dietVegan:      'Vegà/ana',
        dietOther:      'Altra',
        dietOtherPh:    'Especifiqueu',
        allergies:      'Al·lèrgies',
        allergiesPh:    'p. ex. fruits secs, marisc, gluten',
        phoneLabel:     'Telèfon / WhatsApp (opcional)',
        phonePh:        '+34 600 000 000',
        phoneHint:      'L\'usarem per afegir-vos al grup de WhatsApp del casament i per a qualsevol actualització important.',
      },
      totals: {
        listed:    'Persones al llistat',
        attending: 'Assisteixen',
        notGoing:  'No assisteixen',
        unsure:    'Pendent',
        children:  'Nens/es menors de 10 anys',
      },
      extra: {
        legend:          'Uns quants detalls més',
        allergies:       'Hi ha al·lèrgies alimentàries al vostre grup?',
        allergiesPh:     'p. ex. al·lèrgia als fruits secs, sense gluten, vegà',
        dietary:         'Altres requisits alimentaris',
        dietaryPh:       'p. ex. vegetarià, kosher, halal',
        accessibility:   'Necessitats d\'accessibilitat o mobilitat',
        accessibilityPh: 'p. ex. accés per cadira de rodes, necessitat de seient',
        message:         'Missatge per al Liam i la Valentina (opcional)',
        messagePh:       'El que vulgueu dir-nos',
      },
      consent: {
        label: 'Confirmo que la informació anterior és correcta i que responc en nom del meu grup.',
      },
      privacy:      'La informació que compartiu aquí s\'utilitza únicament per organitzar el casament.',
      submitBtn:    'Revisar i enviar',
      confirmTitle: 'Comproveu la vostra confirmació',
      confirmText:  'Reviseu les dades abans d\'enviar.',
      confirmBtn:   'Confirmar i enviar',
      backBtn:      'Tornar i editar',
      sending:      'Enviant…',
      success: {
        title:   'Gràcies!',
        message: 'Hem rebut la vostra confirmació. Ens posarem en contacte a mesura que s\'acosti la data.',
      },
      error: {
        title:   'Alguna cosa ha fallat.',
        message: 'No hem pogut enviar la confirmació. Torneu-ho a provar o contacteu-nos directament.',
      },
      devMode: 'URL del formulari no configurada. La resposta s\'ha registrat a la consola (mode de desenvolupament).',
      changeNote: 'Necessites canviar la teva confirmació? Posa\'t en contacte directament amb el Liam o la Valentina.',
      validation: {
        required:     'Aquest camp és obligatori.',
        emailInvalid: 'Introduïu una adreça electrònica vàlida.',
        noGuests:     'Afegiu almenys una persona al vostre grup.',
        mustConsent:  'Marqueu la casella per confirmar les vostres dades.',
        ageRequired:  'Introduïu l\'edat de cada nen/a menor de 10 anys.',
        nameRequired: 'Introduïu el nom de cada persona.',
        noPhone:      'Si us plau, proporcioneu el telèfon d\'almenys una persona del vostre grup.',
      },
    },

    barcelona: {
      title: 'Barcelona',
      intro: 'Algunes coses que val la pena saber per ajudar-vos a planificar el temps a la ciutat.',
      neighbourhoods: {
        title: 'On allotjar-se',
        items: [
          { name: 'El Born / Sant Pere', desc: 'A poca distància a peu del local. Animat, ple de bars i restaurants. Es reserva de pressa.' },
          { name: 'Barceloneta i el front marítim', desc: 'Just al costat del mar, a 10–15 minuts a peu del local. Ideal si voleu platja a prop.' },
          { name: 'Eixample', desc: 'Cèntric i ben connectat en metro. Bona oferta d\'hotels a diferents preus.' },
          { name: 'Gràcia', desc: 'Més tranquil, amb ambient de barri. Una mica més lluny, però fàcil en metro o taxi.' },
        ],
      },
      transport: {
        title: 'Com moure\'s',
        items: [
          'El local té molt bon transport públic — les línies de metro L4 (Barceloneta) i L3 (Drassanes) són a prop.',
          'La T-Casual de 10 viatges és l\'opció més econòmica si feu servir el metro sovint.',
          'Els taxis i Bolt/Cabify són fiables i assequibles per als desplaçaments de nit.',
          'El centre és molt caminable — la majoria de zones al voltant del local son planes.',
        ],
      },
      tips: {
        title: 'Coses a tenir en compte',
        items: [
          'L\'abril a Barcelona és temporada alta. Reserveu allotjament el més aviat possible — els preus pugen molt a mesura que s\'acosta la data.',
          'El temps a l\'abril és suau, però els vespres poden ser frescos. Porteu una jaqueta lleugera.',
          'Les sabates còmodes son imprescindibles — tant per a la celebració com per passejar per la ciutat.',
          'Barcelona és generalment molt segura, però vigileu les vostres pertinences a les zones turístiques concorregudes.',
        ],
      },
    },

    otherEvents: {
      title:       'Abans i després',
      placeholder: 'Estem planificant algunes coses al voltant del dia del casament — detalls properament.',
    },

    accommodation: {
      title:             'Reserveu allotjament aviat',
      intro:             'Barcelona és una ciutat cara i l\'abril és una època molt concorreguda. Els preus pugen a mesura que s\'acosta la data. Si viatgeu, reserveu el més aviat possible.',
      advice:            'No cal que espereu el programa definitiu per reservar l\'hotel o el pis. Reserveu ara i ja ajustareu els plans de viatge més endavant.',
      noRecommendations: 'Recomanacions d\'allotjament específiques properament.',
      areaLabel:         'Zona',
      distanceLabel:     'Distància del lloc',
      priceLabel:        'Preu aproximat',
    },

    recommendations: {
      title: 'Coses a tenir en compte',
      items: {
        shoes:         { icon: '👟', text: 'Porteu sabates còmodes. Estareu drets durant la major part de la celebració.' },
        standing:      { icon: '🧍', text: 'És un acte estil còctel — la majoria dels convidats estaran drets i es mouran lliurement.' },
        walking:       { icon: '🚶', text: 'Si quedeu abans o sortiu més tard, és probable que caminareu bastant per Barcelona.' },
        jacket:        { icon: '🧥', text: 'Porteu una jaqueta o capa lleugera. Les tardes d\'abril a Barcelona es refreden quan cau el sol.' },
        transport:     { icon: '🚇', text: 'El transport públic de Barcelona és bo i connecta bé amb la zona del local.' },
        taxi:          { icon: '🚕', text: 'Els taxis i les apps de transport privat són útils per moure\'s a última hora de la nit.' },
        accommodation: { icon: '🏨', text: 'Reserveu allotjament el més aviat possible. L\'abril a Barcelona s\'omple de seguida.' },
        noGifts:       { icon: '🎁', text: 'Si us plau, no porteu cap regal físic. Que hi sigueu és tot el que demanem.' },
        updates:       { icon: '📱', text: 'Consulteu aquest lloc web de nou quan s\'acosti la data per al programa definitiu i les novetats.' },
      },
    },

    spotify: {
      title:         'Afegiu una cançó a la llista',
      intro:         'Ajudeu-nos a crear la banda sonora de la tarda. Afegiu alguna cosa que realment vulgueu escoltar — però recordeu que tothom ho haurà de suportar.',
      btn:           'Obrir la llista de Spotify',
      notConfigured: 'L\'enllaç a la llista s\'afegirà aquí properament.',
    },

    whatsapp: {
      title: 'Grup de WhatsApp del casament',
      intro: 'Uniu-vos a la comunitat de WhatsApp per rebre novetats, informació pràctica i per coordinar plans abans i després del casament.',
      detail:'Aquí és on compartirem les últimes novetats i on els convidats podran connectar entre ells. La informació important sempre estarà disponible en aquest lloc web — unir-se és opcional.',
      btn:   'Unir-se al grup de WhatsApp',
      notConfigured: 'L\'enllaç de WhatsApp s\'afegirà aquí properament.',
    },

    gifts: {
      title:   'Regals',
      message: 'No cal cap regal. Sabem que per a molts de vosaltres viatjar fins a Barcelona ja és tot un esforç. Que hi sigueu amb nosaltres és més que suficient — i us ho agraïm de tot cor.',
    },

    additionalEvents: {
      title:      'Abans i després',
      comingSoon: 'Detalls properament.',
      rsvpNote:   'Cal confirmar assistència',
      mapsBtn:    'Veure al mapa',
      items: {
        dayBefore: { title: 'El dia abans', desc: 'Detalls properament.' },
        dayAfter:  { title: 'L\'endemà',    desc: 'Detalls properament.' },
      },
    },

    faq: {
      title: 'Preguntes freqüents',
      items: [
        {
          q: 'Hi ha codi de vestimenta?',
          a: 'No. Veniu elegants però, sobretot, còmodes. Us recomanem evitar els talons i la roba en la qual no estigueu còmodes durant hores.',
        },
        {
          q: 'Hi haurà seients?',
          a: 'És un acte estil còctel, de manera que la majoria dels convidats estaran drets. Hi haurà alguns seients disponibles, però no hi ha llocs assignats.',
        },
        {
          q: 'Puc portar nens?',
          a: 'Sí — si la vostra invitació inclou nens, porteu-los. Indiqueu-ho a la confirmació perquè puguem planificar-ho.',
        },
        {
          q: 'A quina hora comença?',
          a: 'Les portes obren a les 15:00 aproximadament. El programa definitiu es confirmarà quan s\'acosti la data.',
        },
        {
          q: 'Quan haig de reservar allotjament?',
          a: 'El més aviat possible. L\'abril a Barcelona és molt concorregut i els preus pugen a mesura que s\'acosta la data. No cal esperar el programa definitiu.',
        },
        {
          q: 'Cal que porti un regal?',
          a: 'No cal cap regal. Per a molts de vosaltres viatjar fins aquí ja és un esforç important — i us ho agraïm de tot cor.',
        },
        {
          q: 'Puc afegir cançons a la llista?',
          a: 'Sí — la llista de Spotify és compartida i oberta a contribucions. L\'enllaç estarà en aquesta pàgina.',
        },
        {
          q: 'Com es comunicaran les novetats?',
          a: 'A través d\'aquest lloc web i del grup de WhatsApp. Consulteu la pàgina quan s\'acosti la data per al programa definitiu.',
        },
        {
          q: 'Què passa després de les 22:00?',
          a: 'El local tanca al voltant de les 22:00. Després, els convidats poden continuar la vetllada on vulguin per Barcelona — sense cap pla fix.',
        },
        {
          q: 'Puc canviar la meva confirmació?',
          a: 'Sí — poseu-vos en contacte directament amb el {name1} o la {name2} i ho actualitzarem.',
        },
      ],
    },

    footer: {
      closing:   'Tenim moltes ganes de veure-us.',
      privacy:   'La informació de la confirmació es recull únicament per organitzar el casament.',
      updated:   'Última actualització: {date}.',
      contactUs: 'Contacteu-nos',
    },

    common: {
      tbc:        'Per confirmar',
      provisional:'Provisional',
      comingSoon: 'Detalls properament.',
      yes:        'Sí',
      no:         'No',
      unsure:     'No ho sé',
      enabled:    'Activat',
      close:      'Tancar',
    },
  },

  // ─────────────────────────────────────────────────────────────
  //  ITALIAN
  // ─────────────────────────────────────────────────────────────
  it: {
    langName: 'Italiano',

    langSelect: {
      title:    'Scegli la tua lingua',
      subtitle: 'Puoi cambiare in qualsiasi momento dal menu.',
      confirm:  'Continua',
    },

    nav: {
      about:           'La festa',
      venue:           'Luogo e data',
      schedule:        'Programma',
      rsvp:            'Conferma presenza',
      accommodation:   'Alloggio',
      recommendations: 'Consigli',
      spotify:         'Playlist',
      whatsapp:        'WhatsApp',
      gifts:           'Regali',
      faq:             'Domande',
      menu:            'Menu',
      close:           'Chiudi menu',
      event:           'La festa',
      barcelona:       'Barcellona',
      otherEvents:     'Prima e dopo',
    },

    hero: {
      welcome:  'Venite a festeggiare con noi.',
      rsvpBtn:  'Conferma presenza',
      mapBtn:   'Trova il luogo',
    },

    about: {
      title: 'Che tipo di festa è questa?',
      intro: 'Vogliamo essere chiari sul formato, così potrete venire preparati e a vostro agio — e godervi davvero la giornata.',
      card:  'Nessun piano di posti. Nessun codice d\'abbigliamento. Nessuna pressione. Solo cibo, drink, musica e tante persone care riunite in un posto.',
      items: [
        { icon: '🥂', text: 'È una festa in stile cocktail. Niente banchetto formale, niente posti assegnati.' },
        { icon: '👟', text: 'Gli ospiti saranno in piedi e si sposteranno liberamente — scarpe comode, assolutamente.' },
        { icon: '👗', text: 'Non c\'è un codice d\'abbigliamento. Venite bene ma, soprattutto, comodi.' },
        { icon: '🤝', text: 'Le nostre famiglie e i nostri gruppi di amici non si conoscono tutti. È proprio questo il punto — venite pronti a socializzare, chiacchierare e divertirvi.' },
      ],
    },

    venue: {
      title:          'Luogo e data',
      dateLabel:      'Data',
      timeLabel:      'Orario',
      addressLabel:   'Luogo',
      timeRange:      '{startTime} – {endTime}',
      timeNote:       'Il programma definitivo sarà comunicato in prossimità della data.',
      mapBtn:         'Apri in Google Maps',
      transportTitle: 'Come arrivare',
      transportNote:  'Informazioni sui trasporti pubblici in arrivo.',
      imageAlt:       'Estació de França, Barcellona',
    },

    schedule: {
      title:       'Programma',
      provisional: 'Tutti gli orari sono provvisori.',
      tbc:         'Orario da confermare',
      items: {
        pre:      { label: 'Aperitivo pre-festa',      desc: 'Ritrovo opzionale prima dell\'inizio — dettagli in arrivo.' },
        arrival:  { label: 'Arrivo degli ospiti',      desc: 'Si aprono le porte.' },
        welcome:  { label: 'Benvenuto',                desc: 'Vi diamo il benvenuto.' },
        cocktail: { label: 'Cibo e drink',             desc: 'Servizio cocktail per tutto il pomeriggio.' },
        music:    { label: 'Musica e festa',           desc: 'Musica dal vivo, ballo o qualcosa nel mezzo.' },
        dj:       { label: 'DJ set',                   desc: 'La serata prende il via.' },
        end:      { label: 'Chiusura del locale',      desc: 'Ultimi drink al locale.' },
        after:    { label: 'Avanti a Barcellona',      desc: 'Nessun piano fisso — la notte continua dove vi porta.' },
      },
    },

    event: {
      title:    'La festa',
      intro:    'Tutto quello che dovete sapere sulla giornata.',
      location: { title: 'Luogo' },
      schedule: { title: 'Programma' },
      dresscode:{ title: 'Abbigliamento e atmosfera' },
      gifts:    { title: 'Regali' },
      spotify:  { title: 'Playlist' },
    },

    rsvp: {
      title:            'Conferma presenza',
      intro:            'Fateci sapere che verrete e aggiungete tutti i componenti del vostro gruppo.',
      deadline:         'Vi chiediamo di confermare entro il {date}.',
      confirmAttending: 'Sì, ci saremo!',
      attending: {
        label:   'Il vostro gruppo sarà presente?',
        yes:     'Sì, ci saremo',
        no:      'Purtroppo non possiamo venire',
        unsure:  'Non ancora sicuri',
      },
      mainContact: {
        legend:  'I vostri dati',
        name:    'Nome e cognome',
        email:   'Indirizzo email',
        phone:   'Telefono / numero WhatsApp',
      },
      guests: {
        legend:     'Il vostro gruppo',
        intro:      'Aggiungete tutti i componenti del vostro gruppo, inclusi voi stessi.',
        addBtn:     '+ Aggiungi persona',
        removeBtn:  'Rimuovi',
        namePh:     'Nome e cognome',
        attending:  'Presente',
        attYes:     'Sì',
        attNo:      'No',
        attUnsure:  'Non so',
        isChild:    'Bambino/a sotto i 10 anni',
        age:        'Età',
        agePh:      'Anni',
        dietLabel:      'Alimentazione',
        dietNone:       'Nessuna restrizione',
        dietVegetarian: 'Vegetariano/a',
        dietVegan:      'Vegano/a',
        dietOther:      'Altro',
        dietOtherPh:    'Specificare',
        allergies:      'Allergie',
        allergiesPh:    'es. frutta secca, frutti di mare, glutine',
        phoneLabel:     'Telefono / WhatsApp (opzionale)',
        phonePh:        '+39 320 000 0000',
        phoneHint:      'Lo useremo per aggiungervi al gruppo WhatsApp del matrimonio e per eventuali comunicazioni importanti.',
      },
      totals: {
        listed:    'Persone elencate',
        attending: 'Presenti',
        notGoing:  'Non presenti',
        unsure:    'Incerti',
        children:  'Bambini sotto i 10 anni',
      },
      extra: {
        legend:          'Qualche dettaglio in più',
        allergies:       'Ci sono allergie alimentari nel vostro gruppo?',
        allergiesPh:     'es. allergia alle noci, senza glutine, vegano',
        dietary:         'Altre esigenze alimentari',
        dietaryPh:       'es. vegetariano, kosher, halal',
        accessibility:   'Esigenze di accessibilità o mobilità',
        accessibilityPh: 'es. accesso per sedia a rotelle, necessità di sedere',
        message:         'Messaggio per Liam e Valentina (opzionale)',
        messagePh:       'Qualcosa che vorreste dirci',
      },
      consent: {
        label: 'Confermo che le informazioni indicate sono corrette e che rispondo a nome del mio gruppo.',
      },
      privacy:      'Le informazioni che condividete qui vengono utilizzate esclusivamente per organizzare il matrimonio.',
      submitBtn:    'Rivedi e invia',
      confirmTitle: 'Controlla la tua conferma',
      confirmText:  'Rivedete i dati prima di inviare.',
      confirmBtn:   'Conferma e invia',
      backBtn:      'Torna e modifica',
      sending:      'Invio in corso…',
      success: {
        title:   'Grazie!',
        message: 'Abbiamo ricevuto la vostra conferma. Vi contatteremo con aggiornamenti man mano che si avvicina la data.',
      },
      error: {
        title:   'Qualcosa è andato storto.',
        message: 'Non è stato possibile inviare la conferma. Riprovate o contattateci direttamente.',
      },
      devMode: 'Endpoint RSVP non configurato. I dati sono stati registrati nella console (modalità sviluppo).',
      changeNote: 'Hai bisogno di modificare la tua conferma? Contatta direttamente Liam o Valentina.',
      validation: {
        required:     'Questo campo è obbligatorio.',
        emailInvalid: 'Inserite un indirizzo email valido.',
        noGuests:     'Aggiungete almeno una persona al vostro gruppo.',
        mustConsent:  'Spuntate la casella per confermare i vostri dati.',
        ageRequired:  'Inserite l\'età di ogni bambino/a sotto i 10 anni.',
        nameRequired: 'Inserite il nome di ogni persona.',
        noPhone:      'Per favore, indicate il numero di telefono di almeno una persona del vostro gruppo.',
      },
    },

    barcelona: {
      title: 'Barcellona',
      intro: 'Alcune cose utili da sapere per organizzare il vostro soggiorno in città.',
      neighbourhoods: {
        title: 'Dove alloggiare',
        items: [
          { name: 'El Born / Sant Pere', desc: 'A pochi passi dal locale. Vivace, pieno di bar e ristoranti. Si riempie in fretta.' },
          { name: 'Barceloneta e il lungomare', desc: 'Vicino al mare, a 10–15 minuti a piedi dal locale. Ideale se volete la spiaggia.' },
          { name: 'Eixample', desc: 'Centrale, ben collegato con la metro. Buona scelta di hotel a prezzi diversi.' },
          { name: 'Gràcia', desc: 'Più tranquillo, con un\'atmosfera di quartiere. Un po\' più lontano, ma comodo in metro o taxi.' },
        ],
      },
      transport: {
        title: 'Come spostarsi',
        items: [
          'Il locale è ben servito dai trasporti pubblici — le linee metro L4 (Barceloneta) e L3 (Drassanes) sono nelle vicinanze.',
          'La T-Casual da 10 viaggi è l\'opzione più economica se usate spesso la metro.',
          'Taxi e Bolt/Cabify sono affidabili e convenienti per gli spostamenti serali.',
          'Il centro è molto comodo da girare a piedi — la maggior parte delle zone intorno al locale è pianeggiante.',
        ],
      },
      tips: {
        title: 'Cose da sapere',
        items: [
          'Aprile a Barcellona è un periodo affollato. Prenotate l\'alloggio il prima possibile — i prezzi aumentano significativamente avvicinandosi alla data.',
          'Il clima di aprile è mite, ma le serate possono essere fresche. Portate una giacca leggera.',
          'Le scarpe comode sono indispensabili — sia per la festa che per esplorare la città.',
          'Barcellona è generalmente molto sicura, ma fate attenzione agli effetti personali nelle zone turistiche affollate.',
        ],
      },
    },

    otherEvents: {
      title:       'Prima e dopo',
      placeholder: 'Stiamo organizzando alcune cose intorno al giorno del matrimonio — dettagli in arrivo.',
    },

    accommodation: {
      title:             'Prenotate l\'alloggio presto',
      intro:             'Barcellona è una città cara e aprile è un periodo molto frequentato. I prezzi aumentano man mano che si avvicina la data. Se viaggiate, prenotate il prima possibile.',
      advice:            'Non è necessario aspettare il programma definitivo per prenotare un hotel o appartamento. Prenotate ora e aggiustate i piani di viaggio in seguito.',
      noRecommendations: 'Presto arriveranno consigli specifici su dove alloggiare.',
      areaLabel:         'Zona',
      distanceLabel:     'Distanza dal luogo',
      priceLabel:        'Fascia di prezzo',
    },

    recommendations: {
      title: 'Cose da sapere',
      items: {
        shoes:         { icon: '👟', text: 'Indossate scarpe comode. Sarete in piedi per la maggior parte della festa.' },
        standing:      { icon: '🧍', text: 'È un evento in stile cocktail — la maggior parte degli ospiti starà in piedi e si sposterà liberamente.' },
        walking:       { icon: '🚶', text: 'Se vi incontrate prima o uscite dopo, potreste camminare parecchio per Barcellona.' },
        jacket:        { icon: '🧥', text: 'Portate una giacca o uno strato leggero. Le serate di aprile a Barcellona possono essere fresche dopo il tramonto.' },
        transport:     { icon: '🚇', text: 'I trasporti pubblici di Barcellona sono ottimi e collegano bene la zona del locale.' },
        taxi:          { icon: '🚕', text: 'Taxi e app di ride-hailing sono utili per spostarsi a tarda sera.' },
        accommodation: { icon: '🏨', text: 'Prenotate l\'alloggio il prima possibile. Aprile a Barcellona si riempie in fretta.' },
        noGifts:       { icon: '🎁', text: 'Vi chiediamo di non portare regali fisici. La vostra presenza è tutto quello che vogliamo.' },
        updates:       { icon: '📱', text: 'Tornate su questo sito web quando si avvicina la data per il programma definitivo e gli aggiornamenti.' },
      },
    },

    spotify: {
      title:         'Aggiungi una canzone alla playlist',
      intro:         'Aiutateci a costruire la colonna sonora del pomeriggio. Aggiungete qualcosa che vorreste davvero sentire — ma ricordate che dovranno sentirla tutti.',
      btn:           'Apri la playlist Spotify',
      notConfigured: 'Il link alla playlist sarà aggiunto qui presto.',
    },

    whatsapp: {
      title: 'Gruppo WhatsApp del matrimonio',
      intro: 'Unitevi alla community WhatsApp per aggiornamenti, informazioni pratiche e per coordinare i piani prima e dopo il matrimonio.',
      detail:'Qui condivideremo gli ultimi aggiornamenti e gli ospiti potranno connettersi tra loro. Le informazioni importanti saranno sempre disponibili su questo sito — partecipare è facoltativo.',
      btn:   'Unisciti al gruppo WhatsApp',
      notConfigured: 'Il link WhatsApp sarà aggiunto qui presto.',
    },

    gifts: {
      title:   'Regali',
      message: 'Non è necessario nessun regalo. Sappiamo che per molti di voi viaggiare fino a Barcellona è già un impegno importante. Essere lì con noi è più che sufficiente — e ve ne siamo profondamente grati.',
    },

    additionalEvents: {
      title:      'Prima e dopo',
      comingSoon: 'Dettagli in arrivo.',
      rsvpNote:   'Conferma richiesta',
      mapsBtn:    'Vedi sulla mappa',
      items: {
        dayBefore: { title: 'Il giorno prima',  desc: 'Dettagli in arrivo.' },
        dayAfter:  { title: 'Il giorno dopo',   desc: 'Dettagli in arrivo.' },
      },
    },

    faq: {
      title: 'Domande frequenti',
      items: [
        {
          q: 'C\'è un codice d\'abbigliamento?',
          a: 'No. Venite bene ma, soprattutto, comodi. Vi suggeriamo di evitare i tacchi e qualsiasi cosa in cui non stareste a lungo in piedi.',
        },
        {
          q: 'Ci saranno posti a sedere?',
          a: 'È un evento in stile cocktail, quindi la maggior parte degli ospiti starà in piedi. Ci sarà qualche seduta disponibile, ma nessun posto assegnato.',
        },
        {
          q: 'Posso portare bambini?',
          a: 'Sì — se il vostro invito include bambini, portateli pure. Indicatecelo nella conferma così possiamo organizzarci.',
        },
        {
          q: 'A che ora inizia?',
          a: 'Le porte apriranno alle 15:00 circa. Il programma definitivo sarà comunicato in prossimità della data.',
        },
        {
          q: 'Quando devo prenotare l\'alloggio?',
          a: 'Il prima possibile. Aprile a Barcellona è molto affollato e i prezzi aumentano avvicinandosi alla data. Non è necessario aspettare il programma definitivo.',
        },
        {
          q: 'Devo portare un regalo?',
          a: 'Non è necessario nessun regalo. Per molti di voi viaggiare fin qui è già un impegno importante — e ve ne siamo profondamente grati.',
        },
        {
          q: 'Posso aggiungere canzoni alla playlist?',
          a: 'Sì — la playlist Spotify è condivisa e aperta ai contributi. Il link sarà su questa pagina.',
        },
        {
          q: 'Come saranno comunicati gli aggiornamenti?',
          a: 'Tramite questo sito web e il gruppo WhatsApp. Tornate sulla pagina quando si avvicina la data per il programma definitivo.',
        },
        {
          q: 'Cosa succede dopo le 22:00?',
          a: 'Il locale chiude intorno alle 22:00. Dopo, gli ospiti sono liberi di continuare la serata ovunque a Barcellona — nessun piano fisso.',
        },
        {
          q: 'Posso cambiare la mia conferma?',
          a: 'Sì — contattate direttamente {name1} o {name2} e aggiorneremo tutto.',
        },
      ],
    },

    footer: {
      closing:   'Non vediamo l\'ora di vedervi.',
      privacy:   'Le informazioni di conferma vengono raccolte esclusivamente per organizzare il matrimonio.',
      updated:   'Ultimo aggiornamento: {date}.',
      contactUs: 'Contattaci',
    },

    common: {
      tbc:        'Da confermare',
      provisional:'Provvisorio',
      comingSoon: 'Dettagli in arrivo.',
      yes:        'Sì',
      no:         'No',
      unsure:     'Non so',
      enabled:    'Attivo',
      close:      'Chiudi',
    },
  },

  // ─────────────────────────────────────────────────────────────
  //  SPANISH
  // ─────────────────────────────────────────────────────────────
  es: {
    langName: 'Español',

    langSelect: {
      title:    'Elige tu idioma',
      subtitle: 'Puedes cambiarlo en cualquier momento desde el menú.',
      confirm:  'Continuar',
    },

    nav: {
      about:           'La celebración',
      venue:           'Lugar y fecha',
      schedule:        'Programa',
      rsvp:            'Confirmación',
      accommodation:   'Alojamiento',
      recommendations: 'Consejos',
      spotify:         'Playlist',
      whatsapp:        'WhatsApp',
      gifts:           'Regalos',
      faq:             'Preguntas',
      menu:            'Menú',
      close:           'Cerrar menú',
      event:           'La celebración',
      barcelona:       'Barcelona',
      otherEvents:     'Antes y después',
    },

    hero: {
      welcome:  'Venid a celebrarlo con nosotros.',
      rsvpBtn:  'Confirmar asistencia',
      mapBtn:   'Cómo llegar',
    },

    about: {
      title: '¿Qué tipo de celebración es esta?',
      intro: 'Queremos ser claros sobre el formato para que podáis venir preparados y cómodos — y disfrutar de verdad del día.',
      card:  'Sin plano de mesas. Sin código de vestimenta. Sin presiones. Comida, bebida, música y mucha gente a la que queremos, todos en el mismo lugar.',
      items: [
        { icon: '🥂', text: 'Es una celebración estilo cóctel. Sin cena formal, sin asientos asignados.' },
        { icon: '👟', text: 'Los invitados estarán de pie y se moverán libremente — unos zapatos cómodos son imprescindibles.' },
        { icon: '👗', text: 'No hay código de vestimenta. Venid elegantes pero, sobre todo, cómodos.' },
        { icon: '🤝', text: 'Nuestras familias y grupos de amigos no se conocen entre sí. Ese es precisamente el objetivo — venid a conocer gente, charlar y pasarlo bien.' },
      ],
    },

    venue: {
      title:          'Lugar y fecha',
      dateLabel:      'Fecha',
      timeLabel:      'Horario',
      addressLabel:   'Lugar',
      timeRange:      '{startTime} – {endTime}',
      timeNote:       'El programa definitivo se confirmará cuando se acerque la fecha.',
      mapBtn:         'Abrir en Google Maps',
      transportTitle: 'Cómo llegar',
      transportNote:  'Información sobre transporte público próximamente.',
      imageAlt:       'Estació de França, Barcelona',
    },

    schedule: {
      title:       'Programa',
      provisional: 'Todos los horarios son provisionales.',
      tbc:         'Hora por confirmar',
      items: {
        pre:      { label: 'Antes de la celebración',  desc: 'Quedada opcional antes de que empiece la fiesta — detalles próximamente.' },
        arrival:  { label: 'Llegada de los invitados', desc: 'Se abren las puertas.' },
        welcome:  { label: 'Bienvenida',               desc: 'Os damos la bienvenida.' },
        cocktail: { label: 'Comida y bebidas',         desc: 'Servicio de cóctel durante toda la tarde.' },
        music:    { label: 'Música y celebración',     desc: 'Música en directo, baile o algo en el medio.' },
        dj:       { label: 'Sesión de DJ',             desc: 'La noche se anima.' },
        end:      { label: 'Cierre del local',         desc: 'Últimas copas en el local.' },
        after:    { label: 'A seguir por Barcelona',   desc: 'Sin plan fijo — la noche continúa donde os lleve.' },
      },
    },

    event: {
      title:    'La celebración',
      intro:    'Todo lo que necesitáis saber sobre el día.',
      location: { title: 'Lugar' },
      schedule: { title: 'Programa' },
      dresscode:{ title: 'Vestimenta y ambiente' },
      gifts:    { title: 'Regalos' },
      spotify:  { title: 'Playlist' },
    },

    rsvp: {
      title:            'Confirmación de asistencia',
      intro:            'Hacednos saber que vendréis y añadid a todas las personas de vuestro grupo.',
      deadline:         'Por favor, confirmad antes del {date}.',
      confirmAttending: '¡Sí, allí estaremos!',
      attending: {
        label:   '¿Vuestro grupo asistirá?',
        yes:     'Sí, allí estaremos',
        no:      'Lo sentimos, no podemos ir',
        unsure:  'Todavía no lo sabemos',
      },
      mainContact: {
        legend:  'Vuestros datos',
        name:    'Nombre completo',
        email:   'Correo electrónico',
        phone:   'Teléfono / número de WhatsApp',
      },
      guests: {
        legend:     'Vuestro grupo',
        intro:      'Añadid a todas las personas de vuestro grupo, incluyéndoos a vosotros.',
        addBtn:     '+ Añadir persona',
        removeBtn:  'Eliminar',
        namePh:     'Nombre completo',
        attending:  'Asiste',
        attYes:     'Sí',
        attNo:      'No',
        attUnsure:  'No lo sé',
        isChild:    'Niño/a menor de 10 años',
        age:        'Edad',
        agePh:      'Años',
        dietLabel:      'Alimentación',
        dietNone:       'Sin restricciones',
        dietVegetarian: 'Vegetariano/a',
        dietVegan:      'Vegano/a',
        dietOther:      'Otra',
        dietOtherPh:    'Especifica',
        allergies:      'Alergias',
        allergiesPh:    'ej. frutos secos, marisco, gluten',
        phoneLabel:     'Teléfono / WhatsApp (opcional)',
        phonePh:        '+34 600 000 000',
        phoneHint:      'Lo usaremos para añadiros al grupo de WhatsApp de la boda y para cualquier comunicación importante.',
      },
      totals: {
        listed:    'Personas en el listado',
        attending: 'Asisten',
        notGoing:  'No asisten',
        unsure:    'Sin confirmar',
        children:  'Niños/as menores de 10 años',
      },
      extra: {
        legend:          'Algunos detalles más',
        allergies:       '¿Hay alergias alimentarias en vuestro grupo?',
        allergiesPh:     'ej. alergia a los frutos secos, sin gluten, vegano',
        dietary:         'Otros requisitos alimentarios',
        dietaryPh:       'ej. vegetariano, kosher, halal',
        accessibility:   'Necesidades de accesibilidad o movilidad',
        accessibilityPh: 'ej. acceso para silla de ruedas, necesidad de asiento',
        message:         'Mensaje para Liam y Valentina (opcional)',
        messagePh:       'Lo que queráis decirnos',
      },
      consent: {
        label: 'Confirmo que la información indicada es correcta y que respondo en nombre de mi grupo.',
      },
      privacy:      'La información que compartís aquí se utiliza únicamente para organizar la boda.',
      submitBtn:    'Revisar y enviar',
      confirmTitle: 'Comprueba tu confirmación',
      confirmText:  'Revisad los datos antes de enviar.',
      confirmBtn:   'Confirmar y enviar',
      backBtn:      'Volver y editar',
      sending:      'Enviando…',
      success: {
        title:   '¡Gracias!',
        message: 'Hemos recibido vuestra confirmación. Os mantendremos informados a medida que se acerque la fecha.',
      },
      error: {
        title:   'Algo ha salido mal.',
        message: 'No hemos podido enviar la confirmación. Intentadlo de nuevo o contactad con nosotros directamente.',
      },
      devMode: 'Endpoint de RSVP no configurado. Los datos se han registrado en la consola (modo desarrollo).',
      changeNote: '¿Necesitas cambiar tu confirmación? Ponte en contacto directamente con Liam o Valentina.',
      validation: {
        required:     'Este campo es obligatorio.',
        emailInvalid: 'Introduce una dirección de correo electrónico válida.',
        noGuests:     'Añade al menos una persona a tu grupo.',
        mustConsent:  'Marca la casilla para confirmar tus datos.',
        ageRequired:  'Introduce la edad de cada niño/a menor de 10 años.',
        nameRequired: 'Introduce el nombre de cada persona.',
        noPhone:      'Por favor, proporcionad el teléfono de al menos una persona de vuestro grupo.',
      },
    },

    barcelona: {
      title: 'Barcelona',
      intro: 'Algunas cosas que vale la pena saber para ayudaros a planificar vuestra estancia en la ciudad.',
      neighbourhoods: {
        title: 'Dónde alojarse',
        items: [
          { name: 'El Born / Sant Pere', desc: 'A poca distancia a pie del local. Animado, lleno de bares y restaurantes. Se llena rápido.' },
          { name: 'Barceloneta y el frente marítimo', desc: 'Junto al mar, a 10–15 minutos a pie del local. Ideal si queréis acceso a la playa.' },
          { name: 'Eixample', desc: 'Céntrico y bien comunicado en metro. Buena oferta de hoteles a distintos precios.' },
          { name: 'Gràcia', desc: 'Más tranquilo, con ambiente de barrio. Un poco más lejos, pero fácil en metro o taxi.' },
        ],
      },
      transport: {
        title: 'Cómo moverse',
        items: [
          'El local tiene muy buen transporte público — las líneas de metro L4 (Barceloneta) y L3 (Drassanes) están cerca.',
          'La T-Casual de 10 viajes es la opción más económica si vais a usar el metro con frecuencia.',
          'Los taxis y Bolt/Cabify son fiables y asequibles para los desplazamientos nocturnos.',
          'El centro es muy cómodo para caminar — la mayoría de zonas alrededor del local son llanas.',
        ],
      },
      tips: {
        title: 'Cosas a tener en cuenta',
        items: [
          'Abril en Barcelona es temporada alta. Reservad alojamiento cuanto antes — los precios suben considerablemente a medida que se acerca la fecha.',
          'El tiempo en abril es suave, pero las noches pueden ser frescas. Llevad una chaqueta ligera.',
          'Los zapatos cómodos son imprescindibles — tanto para la celebración como para explorar la ciudad.',
          'Barcelona es generalmente muy segura, pero vigilad vuestras pertenencias en las zonas turísticas concurridas.',
        ],
      },
    },

    otherEvents: {
      title:       'Antes y después',
      placeholder: 'Estamos planeando algunas cosas en torno al día de la boda — detalles próximamente.',
    },

    accommodation: {
      title:             'Reservad alojamiento pronto',
      intro:             'Barcelona es una ciudad cara y abril es una época muy concurrida. Los precios suben a medida que se acerca la fecha. Si viajáis, reservad cuanto antes.',
      advice:            'No es necesario esperar el programa definitivo para reservar el hotel o el apartamento. Reservad ahora y ajustáis los planes de viaje más adelante.',
      noRecommendations: 'Próximamente, recomendaciones de alojamiento específicas.',
      areaLabel:         'Zona',
      distanceLabel:     'Distancia al lugar',
      priceLabel:        'Precio aproximado',
    },

    recommendations: {
      title: 'Cosas a tener en cuenta',
      items: {
        shoes:         { icon: '👟', text: 'Llevad zapatos cómodos. Estaréis de pie durante la mayor parte de la celebración.' },
        standing:      { icon: '🧍', text: 'Es un evento estilo cóctel — la mayoría de los invitados estarán de pie y moviéndose libremente.' },
        walking:       { icon: '🚶', text: 'Si quedáis antes o salís más tarde, es probable que camináis bastante por Barcelona.' },
        jacket:        { icon: '🧥', text: 'Llevad una chaqueta o capa ligera. Las tardes de abril en Barcelona se enfrían cuando cae el sol.' },
        transport:     { icon: '🚇', text: 'El transporte público de Barcelona es bueno y conecta bien con la zona del local.' },
        taxi:          { icon: '🚕', text: 'Los taxis y las apps de transporte son útiles para moverse a última hora de la noche.' },
        accommodation: { icon: '🏨', text: 'Reservad alojamiento cuanto antes. Abril en Barcelona se llena rápido.' },
        noGifts:       { icon: '🎁', text: 'Por favor, no traigáis ningún regalo físico. Que estéis allí es todo lo que pedimos.' },
        updates:       { icon: '📱', text: 'Consultad esta web de nuevo cuando se acerque la fecha para el programa definitivo y novedades.' },
      },
    },

    spotify: {
      title:         'Añade una canción a la playlist',
      intro:         'Ayudadnos a construir la banda sonora de la tarde. Añadid algo que realmente queráis escuchar — pero recordad que todos los demás también tendrán que oírla.',
      btn:           'Abrir playlist de Spotify',
      notConfigured: 'El enlace a la playlist se añadirá aquí próximamente.',
    },

    whatsapp: {
      title: 'Grupo de WhatsApp de la boda',
      intro: 'Uníos a la comunidad de WhatsApp para actualizaciones, información práctica y para coordinar planes antes y después de la boda.',
      detail:'Aquí compartiremos las últimas novedades y los invitados podrán conectar entre sí. La información importante siempre estará disponible en esta web — unirse es opcional.',
      btn:   'Unirse al grupo de WhatsApp',
      notConfigured: 'El enlace de WhatsApp se añadirá aquí próximamente.',
    },

    gifts: {
      title:   'Regalos',
      message: 'No es necesario ningún regalo. Sabemos que para muchos de vosotros viajar hasta Barcelona ya es un esfuerzo considerable. Que estéis allí con nosotros es más que suficiente — y os lo agradecemos de verdad.',
    },

    additionalEvents: {
      title:      'Antes y después',
      comingSoon: 'Detalles próximamente.',
      rsvpNote:   'Confirmación necesaria',
      mapsBtn:    'Ver en el mapa',
      items: {
        dayBefore: { title: 'El día antes', desc: 'Detalles próximamente.' },
        dayAfter:  { title: 'El día después', desc: 'Detalles próximamente.' },
      },
    },

    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Hay código de vestimenta?',
          a: 'No. Venid elegantes pero, sobre todo, cómodos. Os sugerimos evitar los tacones y cualquier ropa en la que no estéis cómodos durante horas de pie.',
        },
        {
          q: '¿Habrá asientos?',
          a: 'Es un evento estilo cóctel, así que la mayoría de los invitados estarán de pie. Habrá algunos asientos disponibles, pero no hay lugares asignados.',
        },
        {
          q: '¿Puedo traer niños?',
          a: 'Sí — si vuestra invitación incluye niños, traedlos. Indicádnoslo en la confirmación para que podamos organizarnos.',
        },
        {
          q: '¿A qué hora empieza?',
          a: 'Las puertas abren a las 15:00 aproximadamente. El programa definitivo se confirmará cuando se acerque la fecha.',
        },
        {
          q: '¿Cuándo debo reservar alojamiento?',
          a: 'Cuanto antes. Abril en Barcelona es muy concurrido y los precios suben a medida que se acerca la fecha. No hace falta esperar el programa definitivo.',
        },
        {
          q: '¿Tengo que llevar un regalo?',
          a: 'No es necesario ningún regalo. Para muchos de vosotros viajar hasta aquí ya es un esfuerzo considerable — y os lo agradecemos de verdad.',
        },
        {
          q: '¿Puedo añadir canciones a la playlist?',
          a: 'Sí — la playlist de Spotify es compartida y está abierta a contribuciones. El enlace estará en esta página.',
        },
        {
          q: '¿Cómo se comunicarán las novedades?',
          a: 'A través de esta web y del grupo de WhatsApp. Consultad la página cuando se acerque la fecha para el programa definitivo.',
        },
        {
          q: '¿Qué pasa después de las 22:00?',
          a: 'El local cierra en torno a las 22:00. Después, los invitados son bienvenidos a continuar la velada donde quieran por Barcelona — sin ningún plan fijo.',
        },
        {
          q: '¿Puedo cambiar mi confirmación?',
          a: 'Sí — poneos en contacto directamente con {name1} o {name2} y lo actualizaremos.',
        },
      ],
    },

    footer: {
      closing:   'Tenemos muchas ganas de veros.',
      privacy:   'La información de confirmación se recoge únicamente para organizar la boda.',
      updated:   'Última actualización: {date}.',
      contactUs: 'Contactadnos',
    },

    common: {
      tbc:        'Por confirmar',
      provisional:'Provisional',
      comingSoon: 'Detalles próximamente.',
      yes:        'Sí',
      no:         'No',
      unsure:     'No lo sé',
      enabled:    'Activado',
      close:      'Cerrar',
    },
  },

  // ─────────────────────────────────────────────────────────────
  //  FRENCH
  // ─────────────────────────────────────────────────────────────
  fr: {
    langName: 'Français',

    langSelect: {
      title:    'Choisissez votre langue',
      subtitle: 'Vous pourrez la modifier à tout moment depuis le menu.',
      confirm:  'Continuer',
    },

    nav: {
      about:           'La fête',
      venue:           'Lieu et date',
      schedule:        'Programme',
      rsvp:            'Confirmation',
      accommodation:   'Hébergement',
      recommendations: 'Conseils',
      spotify:         'Playlist',
      whatsapp:        'WhatsApp',
      gifts:           'Cadeaux',
      faq:             'Questions',
      menu:            'Menu',
      close:           'Fermer le menu',
      event:           'La fête',
      barcelona:       'Barcelone',
      otherEvents:     'Avant et après',
    },

    hero: {
      welcome:  'Venez fêter ça avec nous.',
      rsvpBtn:  'Confirmer ma présence',
      mapBtn:   'Trouver le lieu',
    },

    about: {
      title: 'Quel genre de fête est-ce ?',
      intro: 'On préfère être clairs sur le format pour que vous puissiez arriver préparés et à l\'aise — et vraiment profiter de la journée.',
      card:  'Pas de plan de table. Pas de code vestimentaire. Pas de pression. Juste de la bonne nourriture, des verres, de la musique et plein de gens qu\'on aime, tous réunis.',
      items: [
        { icon: '🥂', text: 'C\'est une célébration façon cocktail. Pas de banquet formel, pas de places assignées.' },
        { icon: '👟', text: 'Les invités seront debout et libres de circuler — des chaussures confortables s\'imposent.' },
        { icon: '👗', text: 'Pas de code vestimentaire. Venez élégants, mais surtout à l\'aise.' },
        { icon: '🤝', text: 'Nos familles et groupes d\'amis ne se connaissent pas tous. C\'est justement l\'idée — venez prêts à vous mélanger, discuter et passer un bon moment.' },
      ],
    },

    venue: {
      title:          'Lieu et date',
      dateLabel:      'Date',
      timeLabel:      'Horaire',
      addressLabel:   'Lieu',
      timeRange:      '{startTime} – {endTime}',
      timeNote:       'Le programme définitif sera confirmé à l\'approche de la date.',
      mapBtn:         'Ouvrir dans Google Maps',
      transportTitle: 'Comment venir',
      transportNote:  'Informations sur les transports en commun à venir.',
      imageAlt:       'Estació de França, Barcelone',
    },

    schedule: {
      title:       'Programme',
      provisional: 'Tous les horaires sont provisoires.',
      tbc:         'Heure à confirmer',
      items: {
        pre:      { label: 'Pré-fête',                  desc: 'Rendez-vous optionnel avant le début — détails à venir.' },
        arrival:  { label: 'Arrivée des invités',       desc: 'Les portes ouvrent.' },
        welcome:  { label: 'Accueil',                   desc: 'On vous souhaite la bienvenue.' },
        cocktail: { label: 'Cocktail et buffet',        desc: 'Nourriture et boissons servis tout l\'après-midi.' },
        music:    { label: 'Musique et fête',           desc: 'Musique live, danse ou un peu des deux.' },
        dj:       { label: 'Set DJ',                    desc: 'La soirée monte en régime.' },
        end:      { label: 'Fermeture du lieu',         desc: 'Derniers verres sur place.' },
        after:    { label: 'On continue à Barcelone',  desc: 'Pas de plan fixe — la nuit continue où elle vous mène.' },
      },
    },

    event: {
      title:    'La fête',
      intro:    'Tout ce que vous devez savoir sur la journée.',
      location: { title: 'Lieu' },
      schedule: { title: 'Programme' },
      dresscode:{ title: 'Tenue et ambiance' },
      gifts:    { title: 'Cadeaux' },
      spotify:  { title: 'Playlist' },
    },

    rsvp: {
      title:            'Confirmation de présence',
      intro:            'Dites-nous que vous serez là et ajoutez toutes les personnes de votre groupe.',
      deadline:         'Merci de confirmer avant le {date}.',
      confirmAttending: 'Oui, on sera là !',
      attending: {
        label:   'Votre groupe sera présent ?',
        yes:     'Oui, on sera là',
        no:      'Désolés, on ne peut pas venir',
        unsure:  'Pas encore certains',
      },
      mainContact: {
        legend:  'Vos coordonnées',
        name:    'Nom complet',
        email:   'Adresse e-mail',
        phone:   'Téléphone / numéro WhatsApp',
      },
      guests: {
        legend:     'Votre groupe',
        intro:      'Ajoutez toutes les personnes de votre groupe, vous inclus.',
        addBtn:     '+ Ajouter une personne',
        removeBtn:  'Supprimer',
        namePh:     'Nom complet',
        attending:  'Présent(e)',
        attYes:     'Oui',
        attNo:      'Non',
        attUnsure:  'Je ne sais pas',
        isChild:    'Enfant de moins de 10 ans',
        age:        'Âge',
        agePh:      'Ans',
        dietLabel:      'Alimentation',
        dietNone:       'Pas de restrictions',
        dietVegetarian: 'Végétarien(ne)',
        dietVegan:      'Vegan',
        dietOther:      'Autre',
        dietOtherPh:    'Précisez',
        allergies:      'Allergies',
        allergiesPh:    'ex. noix, fruits de mer, gluten',
        phoneLabel:     'Téléphone / WhatsApp (optionnel)',
        phonePh:        '+33 6 00 00 00 00',
        phoneHint:      'On l\'utilisera pour vous ajouter au groupe WhatsApp du mariage et pour toute information importante.',
      },
      totals: {
        listed:    'Personnes listées',
        attending: 'Présents',
        notGoing:  'Absents',
        unsure:    'Incertains',
        children:  'Enfants de moins de 10 ans',
      },
      extra: {
        legend:          'Quelques détails supplémentaires',
        allergies:       'Y a-t-il des allergies alimentaires dans votre groupe ?',
        allergiesPh:     'ex. allergie aux noix, sans gluten, vegan',
        dietary:         'Autres contraintes alimentaires',
        dietaryPh:       'ex. végétarien, casher, halal',
        accessibility:   'Besoins d\'accessibilité ou de mobilité',
        accessibilityPh: 'ex. accès fauteuil roulant, besoin de s\'asseoir',
        message:         'Message pour Liam et Valentina (optionnel)',
        messagePh:       'Tout ce que vous souhaitez nous dire',
      },
      consent: {
        label: 'Je confirme que les informations ci-dessus sont exactes et que je réponds au nom de mon groupe.',
      },
      privacy:      'Les informations que vous partagez ici sont utilisées uniquement pour organiser le mariage.',
      submitBtn:    'Vérifier et envoyer',
      confirmTitle: 'Vérifiez votre confirmation',
      confirmText:  'Relisez vos informations avant d\'envoyer.',
      confirmBtn:   'Confirmer et envoyer',
      backBtn:      'Retour pour modifier',
      sending:      'Envoi en cours…',
      success: {
        title:   'Merci !',
        message: 'Nous avons bien reçu votre confirmation. Nous vous tiendrons informés à l\'approche de la date.',
      },
      error: {
        title:   'Quelque chose s\'est mal passé.',
        message: 'Votre confirmation n\'a pas pu être envoyée. Réessayez ou contactez-nous directement.',
      },
      devMode: 'Endpoint RSVP non configuré. Les données ont été enregistrées dans la console (mode développement).',
      changeNote: 'Besoin de modifier ta confirmation ? Contacte directement Liam ou Valentina.',
      validation: {
        required:     'Ce champ est obligatoire.',
        emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
        noGuests:     'Ajoutez au moins une personne à votre groupe.',
        mustConsent:  'Cochez la case pour confirmer vos informations.',
        ageRequired:  'Indiquez l\'âge de chaque enfant de moins de 10 ans.',
        nameRequired: 'Indiquez le nom de chaque personne.',
        noPhone:      'Merci de fournir un numéro de téléphone pour au moins une personne de votre groupe.',
      },
    },

    barcelona: {
      title: 'Barcelone',
      intro: 'Quelques infos utiles pour vous aider à planifier votre séjour en ville.',
      neighbourhoods: {
        title: 'Où séjourner',
        items: [
          { name: 'El Born / Sant Pere', desc: 'À distance de marche du lieu. Animé, plein de bars et de restaurants. Se réserve vite.' },
          { name: 'Barceloneta et le front de mer', desc: 'Juste au bord de la mer, à 10–15 min à pied du lieu. Idéal si vous voulez la plage.' },
          { name: 'Eixample', desc: 'Central, bien desservi par le métro. Bonne gamme d\'hôtels à différents prix.' },
          { name: 'Gràcia', desc: 'Plus calme, ambiance de quartier. Un peu plus loin, mais facile en métro ou taxi.' },
        ],
      },
      transport: {
        title: 'Se déplacer',
        items: [
          'Le lieu est bien desservi par les transports en commun — les lignes de métro L4 (Barceloneta) et L3 (Drassanes) sont à proximité.',
          'La T-Casual 10 voyages est l\'option la plus économique si vous utilisez régulièrement le métro.',
          'Les taxis et Bolt/Cabify sont fiables et abordables pour les trajets en soirée.',
          'Le centre-ville se parcourt très bien à pied — la plupart des zones autour du lieu sont plates.',
        ],
      },
      tips: {
        title: 'Bon à savoir',
        items: [
          'Avril à Barcelone est très fréquenté. Réservez votre hébergement le plus tôt possible — les prix augmentent sensiblement à l\'approche de la date.',
          'Le temps en avril est doux, mais les soirées peuvent être fraîches. Prévoyez une veste légère.',
          'Des chaussures confortables sont indispensables — aussi bien pour la fête que pour se balader en ville.',
          'Barcelone est généralement très sûre, mais restez vigilants avec vos affaires dans les zones touristiques animées.',
        ],
      },
    },

    otherEvents: {
      title:       'Avant et après',
      placeholder: 'On prépare quelques choses autour du jour du mariage — détails à venir.',
    },

    accommodation: {
      title:             'Réservez tôt',
      intro:             'Barcelone est une ville chère et avril est une période très chargée. Les prix augmentent à l\'approche de la date. Si vous voyagez, réservez le plus tôt possible.',
      advice:            'Vous n\'avez pas besoin d\'attendre le programme définitif pour réserver un hôtel ou un appartement. Réservez maintenant et ajustez vos plans de voyage ensuite.',
      noRecommendations: 'Des recommandations d\'hébergement spécifiques arrivent bientôt.',
      areaLabel:         'Quartier',
      distanceLabel:     'Distance du lieu',
      priceLabel:        'Gamme de prix',
    },

    recommendations: {
      title: 'Bon à savoir',
      items: {
        shoes:         { icon: '👟', text: 'Portez des chaussures confortables. Vous serez debout la majeure partie de la fête.' },
        standing:      { icon: '🧍', text: 'C\'est un événement façon cocktail — la plupart des invités seront debout et libres de circuler.' },
        walking:       { icon: '🚶', text: 'Si vous vous retrouvez avant ou sortez après, vous marcherez probablement beaucoup dans Barcelone.' },
        jacket:        { icon: '🧥', text: 'Prenez une veste ou une couche légère. Les soirées d\'avril à Barcelone peuvent être fraîches après le coucher du soleil.' },
        transport:     { icon: '🚇', text: 'Les transports en commun de Barcelone sont bons et desservent bien le quartier du lieu.' },
        taxi:          { icon: '🚕', text: 'Les taxis et les applis de covoiturage sont utiles pour se déplacer en fin de soirée.' },
        accommodation: { icon: '🏨', text: 'Réservez votre hébergement le plus tôt possible. Avril à Barcelone se remplit vite.' },
        noGifts:       { icon: '🎁', text: 'Merci de ne pas apporter de cadeau. Votre présence est tout ce qu\'on vous demande.' },
        updates:       { icon: '📱', text: 'Revenez sur ce site à l\'approche de la date pour le programme définitif et les dernières infos.' },
      },
    },

    spotify: {
      title:         'Ajoutez une chanson à la playlist',
      intro:         'Aidez-nous à construire la bande-son de l\'après-midi. Ajoutez quelque chose que vous aimeriez vraiment entendre — mais souvenez-vous que tout le monde devra l\'écouter aussi.',
      btn:           'Ouvrir la playlist Spotify',
      notConfigured: 'Le lien vers la playlist sera ajouté ici bientôt.',
    },

    whatsapp: {
      title: 'Groupe WhatsApp du mariage',
      intro: 'Rejoignez la communauté WhatsApp pour les actualités, les informations pratiques et pour coordonner les plans avant et après le mariage.',
      detail:'C\'est là qu\'on partagera les dernières infos et que les invités pourront se retrouver entre eux. Les informations importantes seront toujours disponibles sur ce site — rejoindre le groupe est optionnel.',
      btn:   'Rejoindre le groupe WhatsApp',
      notConfigured: 'Le lien WhatsApp sera ajouté ici bientôt.',
    },

    gifts: {
      title:   'Cadeaux',
      message: 'Aucun cadeau n\'est nécessaire. Nous savons que pour beaucoup d\'entre vous, faire le voyage jusqu\'à Barcelone représente déjà un effort généreux. Être là avec nous est plus que suffisant — et nous vous en sommes sincèrement reconnaissants.',
    },

    additionalEvents: {
      title:      'Avant et après',
      comingSoon: 'Détails à venir.',
      rsvpNote:   'Confirmation requise',
      mapsBtn:    'Voir sur la carte',
      items: {
        dayBefore: { title: 'La veille',       desc: 'Détails à venir.' },
        dayAfter:  { title: 'Le lendemain',    desc: 'Détails à venir.' },
      },
    },

    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'Y a-t-il un code vestimentaire ?',
          a: 'Non. Venez élégants mais, surtout, à l\'aise. On vous déconseille les talons et tout ce dans quoi vous ne seriez pas confortables plusieurs heures debout.',
        },
        {
          q: 'Y aura-t-il des places assises ?',
          a: 'C\'est un événement façon cocktail, donc la plupart des invités seront debout. Il y aura quelques assises disponibles, mais pas de places attribuées.',
        },
        {
          q: 'Puis-je amener des enfants ?',
          a: 'Oui — si votre invitation inclut des enfants, amenez-les. Indiquez-le dans votre confirmation pour qu\'on puisse s\'organiser.',
        },
        {
          q: 'À quelle heure ça commence ?',
          a: 'Les portes ouvrent vers 15h00. Le programme définitif sera confirmé à l\'approche de la date.',
        },
        {
          q: 'Quand réserver l\'hébergement ?',
          a: 'Le plus tôt possible. Avril à Barcelone est très chargé et les prix augmentent à l\'approche de la date. Pas besoin d\'attendre le programme définitif.',
        },
        {
          q: 'Faut-il apporter un cadeau ?',
          a: 'Aucun cadeau n\'est nécessaire. Pour beaucoup d\'entre vous, faire le voyage jusqu\'ici est déjà un effort généreux — et nous vous en sommes sincèrement reconnaissants.',
        },
        {
          q: 'Puis-je ajouter des chansons à la playlist ?',
          a: 'Oui — la playlist Spotify est partagée et ouverte aux contributions. Le lien sera sur cette page.',
        },
        {
          q: 'Comment les informations seront-elles communiquées ?',
          a: 'Via ce site et le groupe WhatsApp. Revenez sur la page à l\'approche de la date pour le programme définitif.',
        },
        {
          q: 'Que se passe-t-il après 22h ?',
          a: 'Le lieu ferme aux alentours de 22h. Ensuite, les invités sont libres de continuer la soirée n\'importe où à Barcelone — sans plan fixe.',
        },
        {
          q: 'Puis-je changer ma confirmation ?',
          a: 'Oui — contactez directement {name1} ou {name2} et on mettra à jour.',
        },
      ],
    },

    footer: {
      closing:   'On a hâte de vous voir.',
      privacy:   'Les informations de confirmation sont collectées uniquement pour organiser le mariage.',
      updated:   'Dernière mise à jour : {date}.',
      contactUs: 'Nous contacter',
    },

    common: {
      tbc:        'À confirmer',
      provisional:'Provisoire',
      comingSoon: 'Détails à venir.',
      yes:        'Oui',
      no:         'Non',
      unsure:     'Je ne sais pas',
      enabled:    'Activé',
      close:      'Fermer',
    },
  },
};
