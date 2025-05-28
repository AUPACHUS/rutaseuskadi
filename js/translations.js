// Sistema de traducciones centralizado para todas las páginas
const translations = {
    es: {
        // Navegación común
        navPareja: "En pareja",
        navPerros: "Con perros",
        navNinos: "Con niños",
        navEscalada: "Escalada",
        navSkate: "Skate",
        navGastronomia: "Gastronomía",
        navAventura: "Aventura",
        navMTB: "MTB",
        contacto: "Contáctame",
        inicio: "Inicio",
        navComentarios: "Comentarios",
        
        // Títulos principales
        mainTitle: "Rutas por el País Vasco",
        parejaTitle: "Rutas en pareja",
        perrosTitle: "Rutas con perros",
        ninosTitle: "Rutas con niños",
        escaladaTitle: "Rutas de escalada",
        skateTitle: "Rutas de skate",
        gastronomiaTitle: "Rutas gastronómicas",
        aventuraTitle: "Rutas de aventura",
        mtbTitle: "Rutas MTB",
        
        // Página principal (index)
        bienvenida: "Bienvenido a la guía de rutas turísticas del País Vasco.",
        explora: "Explora la belleza natural y cultural de esta región a través de nuestras rutas seleccionadas.",
        busca: "Ya sea que busques aventuras al aire libre, gastronomía local o actividades para toda la familia, aquí encontrarás lo que necesitas.",
        hazclic: "Haz clic en los enlaces de arriba para descubrir rutas específicas según tus intereses.",
        disfruta: "¡Disfruta de tu viaje!",
        contacta: "Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.",
        
        // Página de parejas
        parejaIntro: "Descubre las mejores rutas románticas para disfrutar en pareja por el País Vasco.",
        parejaMainTitle: "El País Vasco en pareja: ideas y rincones románticos",
        parejaMainDesc: "El País Vasco es un destino ideal para parejas, con una mezcla de paisajes espectaculares, pueblos con encanto, gastronomía exquisita y rincones románticos. Aquí tienes algunas ideas para visitar en pareja:",
        
        // Lugares específicos en pareja
        gaztelugatxe: "San Juan de Gaztelugatxe (Bizkaia)",
        gaztelugatxeDesc: "Un lugar mágico con una escalinata de 241 escalones que lleva a una ermita en lo alto de un islote. Las vistas al mar son impresionantes. Ideal para vivir un momento especial, especialmente al atardecer.",
        
        donostia: "San Sebastián / Donostia (Gipuzkoa)",
        donostiaDesc: "La playa de La Concha: Un paseo romántico junto al mar. Monte Igueldo: Sube en el funicular para disfrutar de vistas panorámicas. Parte Vieja: Tapeo en pareja en bares como La Cuchara de San Telmo o Gandarias. Peine del Viento (Chillida Leku): Obra de Eduardo Chillida junto al mar, muy evocadora.",
        
        vitoria: "Vitoria-Gasteiz (Álava)",
        vitoriaDesc: "Casco Medieval: Calles empedradas y plazas llenas de historia. Parque de Salburua: Un entorno natural perfecto para un picnic. Bodegas de la Rioja Alavesa: Visita alguna bodega con cata de vinos (como Marqués de Riscal).",
        
        bermeo: "Bermeo y la Reserva de Urdaibai (Bizkaia)",
        bermeoDesc: "Isla de Izaro: Un lugar tranquilo y pintoresco. Pueblo de Mundaka: Con su famosa ola izquierda y ambiente surfista. Bosque de Oma (Kortezubi): Un museo al aire libre con árboles pintados por Agustín Ibarrola.",
        
        laguardia: "Laguardia (Álava)",
        laguardiaDesc: "Un precioso pueblo medieval amurallado, perfecto para pasear entre bodegas y disfrutar de un atardecer desde sus miradores.",
        
        hondarribia: "Hondarribia (Gipuzkoa)",
        hondarribiaDesc: "Barrio de la Marina: Calles coloridas y ambiente marinero. Paseo junto al Bidasoa: Muy romántico, con vistas a Francia.",
        
        salazar: "Valle de Salazar (Navarra, cerca del País Vasco)",
        salazarDesc: "Selva de Irati: Uno de los bosques más bonitos de España, ideal para una escapada en otoño o primavera.",
        
        zarautz: "Zarautz y Getaria (Gipuzkoa)",
        zarautzDesc: "Zarautz: Playa larga y ambiente relajado. Getaria: Pueblo pesquero con excelentes restaurantes (como Elkano) y el museo Balenciaga.",
        
        flysch: "Flysch de Zumaia (Gipuzkoa)",
        flyschDesc: "Acantilados espectaculares con formaciones rocosas únicas. Un paseo en barco o a pie por la playa de Itzurun es inolvidable.",
        
        balnearios: "Balnearios románticos",
        balneariosDesc: "Balneario de Araxa (Álava) o Balneario de La Perla (San Sebastián): Para un día de relax juntos.",
        
        gastroTitle: "Experiencias gastronómicas para parejas",
        gastroDesc1: "Cena en un asador tradicional (como Asador Etxebarri en Axpe).",
        gastroDesc2: "Degustación de pintxos en San Sebastián.",
        gastroDesc3: "Menú degustación en un restaurante con estrella Michelin (como Azurmendi o Arzak).",
        
        parejaConclusion: "El País Vasco ofrece una combinación perfecta de naturaleza, cultura y gastronomía, ideal para una escapada romántica. ¿Buscas algo más activo, tranquilo o gourmet?",
        parejaFinal: "¡Disfruten del viaje! 💑✨",
        
        // Historia (común)
        historiaEuskadiTitulo: "Euskadi: Tierra de Historia y Cultura",
        historiaEuskadi: "El País Vasco (<strong>Euskadi</strong> en euskera) es una comunidad autónoma con una identidad única, lengua propia y una historia milenaria. Sus paisajes verdes y su cultura ancestral la convierten en un destino especial en Europa.",
        historiaBizkaiaTitulo: "Bizkaia: Corazón Industrial y Marítimo",
        historiaBizkaia: "<strong>Bizkaia</strong> es conocida por su tradición marinera, su industria y su capital, Bilbao. El Puente Colgante de Portugalete y el Museo Guggenheim son símbolos de su modernidad y su historia.",
        historiaGetxoTitulo: "Getxo: Belleza Costera y Patrimonio",
        historiaGetxo: "<strong>Getxo</strong> destaca por sus playas, acantilados y barrios históricos como Algorta. Es un lugar ideal para pasear junto al mar y descubrir la arquitectura señorial de sus palacetes.",
        historiaArtazaTitulo: "Palacio Artaza: Elegancia en Leioa",
        historiaArtaza: "El <strong>Palacio Artaza</strong>, construido a principios del siglo XX, es uno de los edificios más emblemáticos de Leioa y Bizkaia. Rodeado de jardines, fue residencia de la nobleza y hoy es un espacio para eventos y cultura."
        , // Claves para la sección de comentarios
        commentsTitle: "Comentarios",
        loadingComments: "Cargando comentarios...",
        errorLoadingComments: "Error al cargar comentarios. Inténtalo más tarde.",
        noCommentsYet: "Aún no hay comentarios. ¡Sé el primero!",
        addCommentTitle: "Deja tu comentario",
        commentAuthorLabel: "Nombre:",
        commentTextLabel: "Comentario:",
        submitCommentBtn: "Enviar Comentario",

        // Claves para la página de registro y login
        registerPageTitle: "Registro de Usuario",
        loginPageTitle: "Iniciar Sesión",
        registerTitle: "Crear una cuenta",
        usernameLabel: "Nombre de Usuario:",
        emailLabel: "Correo Electrónico:",
        passwordLabel: "Contraseña:",
        registerButton: "Registrarse",
        alreadyAccount: "¿Ya tienes una cuenta?",
        loginLink: "Inicia Sesión aquí",
        fillAllFields: "Por favor, completa todos los campos.",
        passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
        registerError: "Error al registrarse. Inténtalo de nuevo.",
        registerSuccessRedirect: "¡Registro exitoso! Redirigiendo a inicio de sesión..."
    },
    
    eu: {
        // Navegación común
        navPareja: "Bikotean",
        navPerros: "Txakurrekin",
        navNinos: "Haurrekin",
        navEscalada: "Eskalada",
        navSkate: "Skate",
        navGastronomia: "Gastronomia",
        navAventura: "Abentura",
        navMTB: "MTB",
        contacto: "Kontaktatu",
        inicio: "Hasiera",
        navComentarios: "Iruzkinak",
        
        // Títulos principales
        mainTitle: "Euskal Herriko Ibilbideak",
        parejaTitle: "Bikoteko ibilbideak",
        perrosTitle: "Txakurrekin ibilbideak",
        ninosTitle: "Haur ibilbideak",
        escaladaTitle: "Eskalada ibilbideak",
        skateTitle: "Skate ibilbideak",
        gastronomiaTitle: "Gastronomia ibilbideak",
        aventuraTitle: "Abentura ibilbideak",
        mtbTitle: "MTB ibilbideak",
        
        // Página principal
        bienvenida: "Ongi etorri Euskal Herriko ibilbideen gidara.",
        explora: "Eskualde honen edertasun naturala eta kulturala ezagutu gure ibilbide hautatuen bidez.",
        busca: "Aire zabaleko abenturak, tokiko gastronomia edo familia osoarentzako jarduerak bilatzen badituzu, hemen aurkituko duzu behar duzuna.",
        hazclic: "Goiko esteketan klik egin zure interesen araberako ibilbideak ezagutzeko.",
        disfruta: "Gozatu zure bidaiari!",
        contacta: "Galderarik baduzu edo informazio gehiago behar baduzu, jar zaitez gurekin harremanetan.",
        
        // Página de parejas
        parejaIntro: "Euskal Herrian bikotean gozatzeko ibilbide erromantikoenak ezagutu.",
        parejaMainTitle: "Euskal Herria bikotean: ideia eta txoko erromantikoak",
        parejaMainDesc: "Euskal Herria bikoteentzako helmuga ezin hobea da, paisaia ikaragarriak, herri xarmantsuak, gastronomia bikaina eta txoko erromantikoak dituena. Hona hemen bikotean bisitatzeko ideia batzuk:",
        
        // Lugares específicos
        gaztelugatxe: "Gaztelugatxeko Doniene (Bizkaia)",
        gaztelugatxeDesc: "241 oinatzeko eskailerak dituen leku magikoa, itsasarteko goialdeko ermita batera eramaten duena. Itsasoko ikuspegiak paregabeak dira. Momentu berezi bat bizitzeko ezin hobea, batez ere iluntzean.",
        
        donostia: "Donostia (Gipuzkoa)",
        donostiaDesc: "Kontxako hondartza: Itsasertzeko pasealdi erromantikoa. Igeldo mendia: funikularrez igo ikuspegi panoramikoak ikusteko. Alde Zaharra: bikotean pintxo-poteoa Donostian, La Cuchara de San Telmo edo Gandarias bezalako tabernetan. Haizearen Orrazia (Chillida Leku): Eduardo Chillidaren obra itsasaren ondoan, oso gogoangarria.",
        
        vitoria: "Vitoria-Gasteiz (Araba)",
        vitoriaDesc: "Erdi Aroko Alde Zaharra: harrizko kaleak eta historiaz beteta dauden plazak. Salburuko Parkea: piknik bat egiteko ingurune natural ezin hobea. Arabako Errioxa bodegak: ardandegi baten bisita dastaketa batekin (Marqués de Riscal bezalakoa).",
        
        bermeo: "Bermeo eta Urdaibai Erreserba (Bizkaia)",
        bermeoDesc: "Izaro uhartea: leku lasai eta edergarria. Mundakako herria: ezkerreko ola famatuarekin eta surf giroarekin. Omako basoa (Kortezubi): aire zabaleko museoa Agustín Ibarrolak margotutako zuhaitzak dituena.",
        
        laguardia: "Guardia (Araba)",
        laguardiaDesc: "Erdi Aroko herri eder bat murruez inguratua, bodegen artean paseatzeko eta bere begirategietatik iluntzea ikusteko ezin hobea.",
        
        hondarribia: "Hondarribia (Gipuzkoa)",
        hondarribiaDesc: "Arrantzaleen Kalea: kale koloretsuak eta itsas giroa. Bidasoako paseialekua: oso erromantikoa, Frantziarako bisitak dituena.",
        
        salazar: "Salazar Harana (Nafarroa, Euskal Herriaren ondoan)",
        salazarDesc: "Iratiko Oihana: Espainiako baso ederrenetako bat, udazkenean edo udaberrian ihes egiteko ezin hobea.",
        
        zarautz: "Zarautz eta Getaria (Gipuzkoa)",
        zarautzDesc: "Zarautz: hondartza luzea eta giro lasaia. Getaria: arrantzale herria jatetxe bikaineekin (Elkano bezalakoa) eta Balenciaga museoarekin.",
        
        flysch: "Zumaiako Flysch-a (Gipuzkoa)",
        flyschDesc: "Harri-eraketa bereziak dituzten itsaslabar ikusgarriak. Itsasontzi bat edo Itzurungo hondartzako oinez ibiltzea ezinezkoa da.",
        
        balnearios: "Bainuetxe erromantikoak",
        balneariosDesc: "Araxako Bainuetxea (Araba) edo La Perlako Bainuetxea (Donostia): elkarrekin erlaxatzeko egun bat.",
        
        gastroTitle: "Bikoteentzako gastronomia esperientziak",
        gastroDesc1: "Afaria asadore tradizional batean (Axpeko Asador Etxebarri bezalakoa).",
        gastroDesc2: "Pintxoen dastaketa Donostian.",
        gastroDesc3: "Dastaketa menua Michelin izarreko jatetxe batean (Azurmendi edo Arzak bezalakoa).",
        
        parejaConclusion: "Euskal Herriak natura, kultura eta gastronomia uztartzen ditu, ihes erromantiko baterako ezin hobea. Zerbait aktiboago, lasaiago edo gourmet bilatzen duzu?",
        parejaFinal: "Gozatu bidaiari! 💑✨",
        
        // Historia común
        historiaEuskadiTitulo: "Euskadi: Historia eta Kultura Lurra",
        historiaEuskadi: "Euskal Herria (<strong>Euskadi</strong> euskaraz) nortasun berezia, hizkuntza propioa eta historia luzea duen autonomia-erkidegoa da. Bere paisaia berdeek eta kultura zaharrak Europan helmuga berezi bihurtzen dute.",
        historiaBizkaiaTitulo: "Bizkaia: Industria eta Itsas Bihotza",
        historiaBizkaia: "<strong>Bizkaia</strong> bere itsas tradizioagatik, industriagatik eta hiriburua, Bilbo, ezaguna da. Portugaleteko Zubi Zintzilikaria eta Guggenheim Museoa bere modernitatearen eta historiaren ikurrak dira.",
        historiaGetxoTitulo: "Getxo: Kostaldeko Edertasuna eta Ondarea",
        historiaGetxo: "<strong>Getxo</strong> bere hondartzak, labarrak eta Algorta bezalako auzo historikoengatik nabarmentzen da. Itsasertzean paseatzeko eta jauregi dotoreen arkitektura ezagutzeko leku aproposa da.",
        historiaArtazaTitulo: "Artaza Jauregia: Leioako Dotorezia",
        historiaArtaza: "<strong>Artaza Jauregia</strong>, XX. mendearen hasieran eraikia, Leioako eta Bizkaiako eraikin enblematikoenetako bat da. Lorategiz inguratuta, nobleziaren egoitza izan zen eta gaur egun ekitaldi eta kulturarako gunea da."
        , // Iruzkinen atalerako gakoak
        commentsTitle: "Iruzkinak",
        loadingComments: "Iruzkinak kargatzen...",
        errorLoadingComments: "Errorea iruzkinak kargatzean. Saiatu berriro geroago.",
        noCommentsYet: "Oraindik ez dago iruzkinik. Izan zaitez lehena!",
        addCommentTitle: "Utzi zure iruzkina",
        commentAuthorLabel: "Izena:",
        commentTextLabel: "Iruzkina:",
        submitCommentBtn: "Iruzkina Bidali",

        // Claves para la página de registro y login (Euskera)
        registerPageTitle: "Erabiltzaile Erregistroa",
        loginPageTitle: "Saioa Hasi",
        registerTitle: "Sortu kontu bat",
        usernameLabel: "Erabiltzaile Izena:",
        emailLabel: "Posta Elektronikoa:",
        passwordLabel: "Pasahitza:",
        registerButton: "Erregistratu",
        alreadyAccount: "Baduzu kontu bat?",
        loginLink: "Hasi saioa hemen",
        fillAllFields: "Mesedez, bete eremu guztiak.",
        passwordTooShort: "Pasahitzak gutxienez 6 karaktere izan behar ditu.",
        registerError: "Errorea erregistratzean. Saiatu berriro.",
        registerSuccessRedirect: "Erregistroa eginda! Saio hasierara birbideratzen..."
    },
    
    en: {
        // Common navigation
        navPareja: "For couples",
        navPerros: "With dogs",
        navNinos: "With children",
        navEscalada: "Climbing",
        navSkate: "Skate",
        navGastronomia: "Gastronomy",
        navAventura: "Adventure",
        navMTB: "MTB",
        contacto: "Contact me",
        inicio: "Home",
        navComentarios: "Comments",
        
        // Main titles
        mainTitle: "Routes in the Basque Country",
        parejaTitle: "Routes for couples",
        perrosTitle: "Routes with dogs",
        ninosTitle: "Routes with children",
        escaladaTitle: "Climbing routes",
        skateTitle: "Skate routes",
        gastronomiaTitle: "Gastronomic routes",
        aventuraTitle: "Adventure routes",
        mtbTitle: "MTB routes",
        
        // Main page
        bienvenida: "Welcome to the Basque Country tourist routes guide.",
        explora: "Explore the natural and cultural beauty of this region through our selected routes.",
        busca: "Whether you seek outdoor adventures, local gastronomy, or family activities, you'll find what you need here.",
        hazclic: "Click the links above to discover routes according to your interests.",
        disfruta: "Enjoy your trip!",
        contacta: "If you have any questions or need more information, feel free to contact us.",
        
        // Couples page
        parejaIntro: "Discover the best romantic routes to enjoy as a couple in the Basque Country.",
        parejaMainTitle: "The Basque Country for couples: ideas and romantic spots",
        parejaMainDesc: "The Basque Country is an ideal destination for couples, with a mix of spectacular landscapes, charming towns, exquisite gastronomy, and romantic corners. Here are some ideas to visit as a couple:",
        
        // Specific places
        gaztelugatxe: "San Juan de Gaztelugatxe (Bizkaia)",
        gaztelugatxeDesc: "A magical place with a 241-step stairway leading to a hermitage atop an islet. The sea views are breathtaking. Perfect for a special moment, especially at sunset.",
        
        donostia: "San Sebastián / Donostia (Gipuzkoa)",
        donostiaDesc: "La Concha Beach: A romantic walk by the sea. Mount Igueldo: Take the funicular to enjoy panoramic views. Old Town: Couple's pintxo crawl in bars like La Cuchara de San Telmo or Gandarias. Peine del Viento (Chillida Leku): Eduardo Chillida's work by the sea, very evocative.",
        
        vitoria: "Vitoria-Gasteiz (Álava)",
        vitoriaDesc: "Medieval Quarter: Cobbled streets and squares full of history. Salburua Park: A perfect natural setting for a picnic. Rioja Alavesa Wineries: Visit a winery with wine tasting (like Marqués de Riscal).",
        
        bermeo: "Bermeo and Urdaibai Reserve (Bizkaia)",
        bermeoDesc: "Izaro Island: A quiet and picturesque place. Mundaka village: With its famous left-hand wave and surfer atmosphere. Oma Forest (Kortezubi): An open-air museum with trees painted by Agustín Ibarrola.",
        
        laguardia: "Laguardia (Álava)",
        laguardiaDesc: "A beautiful medieval walled town, perfect for strolling among wineries and enjoying a sunset from its viewpoints.",
        
        hondarribia: "Hondarribia (Gipuzkoa)",
        hondarribiaDesc: "Marina Quarter: Colorful streets and maritime atmosphere. Walk along the Bidasoa: Very romantic, with views of France.",
        
        salazar: "Salazar Valley (Navarra, near the Basque Country)",
        salazarDesc: "Irati Forest: One of Spain's most beautiful forests, ideal for an autumn or spring getaway.",
        
        zarautz: "Zarautz and Getaria (Gipuzkoa)",
        zarautzDesc: "Zarautz: Long beach and relaxed atmosphere. Getaria: Fishing village with excellent restaurants (like Elkano) and the Balenciaga museum.",
        
        flysch: "Zumaia Flysch (Gipuzkoa)",
        flyschDesc: "Spectacular cliffs with unique rock formations. A boat trip or walk along Itzurun beach is unforgettable.",
        
        balnearios: "Romantic spas",
        balneariosDesc: "Araxa Spa (Álava) or La Perla Spa (San Sebastián): For a day of relaxation together.",
        
        gastroTitle: "Gastronomic experiences for couples",
        gastroDesc1: "Dinner at a traditional grill restaurant (such as Asador Etxebarri in Axpe).",
        gastroDesc2: "Pintxos tasting in San Sebastián.",
        gastroDesc3: "Tasting menu at a Michelin-starred restaurant (such as Azurmendi or Arzak).",
        
        parejaConclusion: "The Basque Country offers a perfect combination of nature, culture, and gastronomy, ideal for a romantic getaway. Are you looking for something more active, peaceful, or gourmet?",
        parejaFinal: "Enjoy your trip! 💑✨",
        
        // Common history
        historiaEuskadiTitulo: "Euskadi: Land of History and Culture",
        historiaEuskadi: "The Basque Country (<strong>Euskadi</strong> in Basque) is an autonomous community with a unique identity, its own language, and an ancient history. Its green landscapes and ancestral culture make it a special destination in Europe.",
        historiaBizkaiaTitulo: "Bizkaia: Industrial and Maritime Heart",
        historiaBizkaia: "<strong>Bizkaia</strong> is known for its seafaring tradition, industry, and its capital, Bilbao. The Vizcaya Bridge and the Guggenheim Museum are symbols of its modernity and history.",
        historiaGetxoTitulo: "Getxo: Coastal Beauty and Heritage",
        historiaGetxo: "<strong>Getxo</strong> stands out for its beaches, cliffs, and historic neighborhoods like Algorta. It's an ideal place to walk by the sea and discover the stately architecture of its mansions.",
        historiaArtazaTitulo: "Artaza Palace: Elegance in Leioa",
        historiaArtaza: "<strong>Artaza Palace</strong>, built at the beginning of the 20th century, is one of the most emblematic buildings in Leioa and Bizkaia. Surrounded by gardens, it was once a noble residence and today is a venue for events and culture."
        , // Keys for comments section
        commentsTitle: "Comments",
        loadingComments: "Loading comments...",
        errorLoadingComments: "Error loading comments. Please try again later.",
        noCommentsYet: "No comments yet. Be the first!",
        addCommentTitle: "Leave your comment",
        commentAuthorLabel: "Name:",
        commentTextLabel: "Comment:",
        submitCommentBtn: "Submit Comment",

        // Keys for registration and login page (English)
        registerPageTitle: "User Registration",
        loginPageTitle: "Login",
        registerTitle: "Create an account",
        usernameLabel: "Username:",
        emailLabel: "Email:",
        passwordLabel: "Password:",
        registerButton: "Sign Up",
        alreadyAccount: "Already have an account?",
        loginLink: "Login here",
        fillAllFields: "Please fill in all fields.",
        passwordTooShort: "Password must be at least 6 characters long.",
        registerError: "Registration error. Please try again.",
        registerSuccessRedirect: "Registration successful! Redirecting to login..."
    },
    
    // Añadiré más idiomas...
    de: {
        // Navegación común
        navPareja: "Für Paare",
        navPerros: "Mit Hunden",
        navNinos: "Mit Kindern",
        navEscalada: "Klettern",
        navSkate: "Skate",
        navGastronomia: "Gastronomie",
        navAventura: "Abenteuer",
        navMTB: "MTB",
        contacto: "Kontakt",
        inicio: "Start",
        navComentarios: "Kommentare", // Ejemplo, verifica la traducción
        
        // Títulos principales
        mainTitle: "Routen im Baskenland",
        parejaTitle: "Routen für Paare",
        perrosTitle: "TODO: Translate perrosTitle", // Faltante
        ninosTitle: "TODO: Translate ninosTitle", // Faltante
        escaladaTitle: "TODO: Translate escaladaTitle", // Faltante
        skateTitle: "TODO: Translate skateTitle", // Faltante
        gastronomiaTitle: "TODO: Translate gastronomiaTitle", // Faltante
        aventuraTitle: "TODO: Translate aventuraTitle", // Faltante
        mtbTitle: "TODO: Translate mtbTitle", // Faltante
        
        // Página principal (index)
        bienvenida: "Willkommen beim Reiseführer für das Baskenland.",
        explora: "Entdecken Sie die natürliche und kulturelle Schönheit dieser Region mit unseren ausgewählten Routen.",
        busca: "Ob Outdoor-Abenteuer, lokale Gastronomie oder Aktivitäten für die ganze Familie – hier finden Sie, was Sie suchen.",
        hazclic: "Klicken Sie oben auf die Links, um Routen nach Ihren Interessen zu entdecken.",
        disfruta: "Gute Reise!",
        contacta: "Wenn Sie Fragen haben oder weitere Informationen benötigen, kontaktieren Sie uns gerne.",

        // Página de parejas
        parejaIntro: "Entdecken Sie die besten romantischen Routen für Paare im Baskenland.",
        parejaMainTitle: "Das Baskenland für Paare: Ideen und romantische Orte",
        parejaMainDesc: "Das Baskenland ist ein ideales Reiseziel für Paare mit spektakulären Landschaften, charmanten Dörfern, exquisiter Gastronomie und romantischen Ecken. Hier sind einige Ideen für Paare:",
        
        // Lugares específicos en pareja (Faltantes en Alemán)
        gaztelugatxe: "TODO: Translate gaztelugatxe",
        gaztelugatxeDesc: "TODO: Translate gaztelugatxeDesc",
        donostia: "TODO: Translate donostia",
        donostiaDesc: "TODO: Translate donostiaDesc",
        vitoria: "TODO: Translate vitoria",
        vitoriaDesc: "TODO: Translate vitoriaDesc",
        bermeo: "TODO: Translate bermeo",
        bermeoDesc: "TODO: Translate bermeoDesc",
        laguardia: "TODO: Translate laguardia",
        laguardiaDesc: "TODO: Translate laguardiaDesc",
        hondarribia: "TODO: Translate hondarribia",
        hondarribiaDesc: "TODO: Translate hondarribiaDesc",
        salazar: "TODO: Translate salazar",
        salazarDesc: "TODO: Translate salazarDesc",
        zarautz: "TODO: Translate zarautz",
        zarautzDesc: "TODO: Translate zarautzDesc",
        flysch: "TODO: Translate flysch",
        flyschDesc: "TODO: Translate flyschDesc",
        balnearios: "TODO: Translate balnearios",
        balneariosDesc: "TODO: Translate balneariosDesc",
        
        gastroTitle: "TODO: Translate gastroTitle",
        gastroDesc1: "TODO: Translate gastroDesc1",
        gastroDesc2: "TODO: Translate gastroDesc2",
        gastroDesc3: "TODO: Translate gastroDesc3",

        parejaConclusion: "Das Baskenland bietet eine perfekte Kombination aus Natur, Kultur und Gastronomie, ideal für einen romantischen Kurzurlaub.",
        parejaFinal: "Gute Reise! 💑✨",

        // Historia (común) (Faltantes en Alemán)
        historiaEuskadiTitulo: "TODO: Translate historiaEuskadiTitulo",
        historiaEuskadi: "TODO: Translate historiaEuskadi",
        historiaBizkaiaTitulo: "TODO: Translate historiaBizkaiaTitulo",
        historiaBizkaia: "TODO: Translate historiaBizkaia",
        historiaGetxoTitulo: "TODO: Translate historiaGetxoTitulo",
        historiaGetxo: "TODO: Translate historiaGetxo",
        historiaArtazaTitulo: "TODO: Translate historiaArtazaTitulo",
        historiaArtaza: "TODO: Translate historiaArtaza",
        
        // Claves para la sección de comentarios (Faltantes en Alemán)
        commentsTitle: "TODO: Translate commentsTitle",
        loadingComments: "TODO: Translate loadingComments",
        errorLoadingComments: "TODO: Translate errorLoadingComments",
        noCommentsYet: "TODO: Translate noCommentsYet",
        addCommentTitle: "TODO: Translate addCommentTitle",
        commentAuthorLabel: "TODO: Translate commentAuthorLabel",
        commentTextLabel: "TODO: Translate commentTextLabel",
        submitCommentBtn: "TODO: Translate submitCommentBtn",

        // Claves para la página de registro y login (Alemán)
        registerPageTitle: "Benutzerregistrierung",
        loginPageTitle: "Anmelden",
        registerTitle: "Konto erstellen",
        usernameLabel: "Benutzername:",
        emailLabel: "E-Mail:",
        passwordLabel: "Passwort:",
        registerButton: "Registrieren",
        alreadyAccount: "Haben Sie bereits ein Konto?",
        loginLink: "Hier anmelden",
        fillAllFields: "Bitte füllen Sie alle Felder aus.",
        passwordTooShort: "Das Passwort muss mindestens 6 Zeichen lang sein.",
        registerError: "Registrierungsfehler. Bitte versuchen Sie es erneut.",
        registerSuccessRedirect: "Registrierung erfolgreich! Weiterleitung zur Anmeldung..."
    },
    
    fr: {
        // Navegación común
        navPareja: "En couple",
        navPerros: "Avec des chiens",
        navNinos: "Avec des enfants",
        navEscalada: "Escalade",
        navSkate: "Skate",
        navGastronomia: "Gastronomie",
        navAventura: "Aventure",
        navMTB: "VTT",
        contacto: "Contactez-moi",
        inicio: "Accueil",
        navComentarios: "Commentaires", // Ejemplo, verifica la traducción

        // Títulos principales
        mainTitle: "Itinéraires au Pays Basque",
        parejaTitle: "Itinéraires en couple",
        // ... (Añadir TODAS las demás claves de título con "TODO: Translate...")

        // Página principal (index)
        bienvenida: "Bienvenue dans le guide des itinéraires touristiques du Pays Basque.",
        // ... (Añadir explora, busca, hazclic, etc. con "TODO: Translate...")

        // Página de parejas
        parejaIntro: "Découvrez les meilleurs itinéraires romantiques pour les couples au Pays Basque.",
        parejaMainTitle: "Le Pays Basque en couple : idées et coins romantiques",
        // ... (Añadir parejaMainDesc y TODAS las claves de lugares, gastro, etc. con "TODO: Translate...")

        parejaConclusion: "Le Pays Basque offre une combinaison parfaite de nature, culture et gastronomie, idéale pour une escapade romantique.",
        parejaFinal: "Bon voyage ! 💑✨",

        // Historia (común)
        // ... (Añadir TODAS las claves de historia con "TODO: Translate...")
        // Claves para la sección de comentarios
        commentsTitle: "TODO: Translate commentsTitle",
        loadingComments: "TODO: Translate loadingComments",
        errorLoadingComments: "TODO: Translate errorLoadingComments",
        noCommentsYet: "TODO: Translate noCommentsYet",
        addCommentTitle: "TODO: Translate addCommentTitle",
        commentAuthorLabel: "TODO: Translate commentAuthorLabel",
        commentTextLabel: "TODO: Translate commentTextLabel",
        submitCommentBtn: "TODO: Translate submitCommentBtn",
        registerPageTitle: "TODO: Translate registerPageTitle",
        loginPageTitle: "TODO: Translate loginPageTitle",
        // ... y así sucesivamente para todas las nuevas claves en francés
        // ... (Añadir TODAS las claves de comentarios con "TODO: Translate...")
    },
    
    ru: {
        navPareja: "Для пар",
        navPerros: "С собаками",
        navNinos: "С детьми",
        navEscalada: "Скалолазание",
        navSkate: "Скейт",
        navGastronomia: "Гастрономия",
        navAventura: "Приключения",
        navMTB: "MTB",
        contacto: "Связаться",
        inicio: "Главная",
        navComentarios: "Комментарии", // Ejemplo, verifica la traducción

        // Títulos principales
        mainTitle: "Маршруты по Стране Басков",
        parejaTitle: "Маршруты для пар",
        // ... (Añadir TODAS las demás claves de título con "TODO: Translate...")

        // Página principal (index)
        bienvenida: "Добро пожаловать в путеводитель по туристическим маршрутам Страны Басков.",
        // ... (Añadir explora, busca, hazclic, etc. con "TODO: Translate...")

        // Página de parejas
        parejaIntro: "Откройте для себя лучшие романтические маршруты для пар в Стране Басков.",
        // ... (Añadir parejaMainTitle, parejaMainDesc y TODAS las claves de lugares, gastro, etc. con "TODO: Translate...")

        parejaConclusion: "Страна Басков предлагает идеальное сочетание природы, культуры и гастрономии для романтического отдыха.",
        parejaFinal: "Приятного путешествия! 💑✨",

        // Historia (común)
        // ... (Añadir TODAS las claves de historia con "TODO: Translate...")
        // Claves para la sección de comentarios
        commentsTitle: "TODO: Translate commentsTitle",
        // ... y así sucesivamente para todas las nuevas claves en ruso
        registerPageTitle: "TODO: Translate registerPageTitle",
        loginPageTitle: "TODO: Translate loginPageTitle",
        // ... (Añadir TODAS las claves de comentarios con "TODO: Translate...")
    },
    
    ar: {
        navPareja: "للأزواج",
        navPerros: "مع الكلاب", 
        navNinos: "مع الأطفال",
        navEscalada: "تسلق",
        navSkate: "تزلج",
        navGastronomia: "المأكولات",
        navAventura: "مغامرة",
        navMTB: "دراجة جبلية",
        contacto: "اتصل بي",
        inicio: "الرئيسية",
        navComentarios: "تعليقات", // Ejemplo, verifica la traducción

        // Títulos principales
        mainTitle: "مسارات في بلاد الباسك",
        parejaTitle: "مسارات للأزواج",
        // ... (Añadir TODAS las demás claves de título con "TODO: Translate...")

        // Página principal (index)
        bienvenida: "مرحبًا بك في دليل مسارات السياحة في بلاد الباسك.",
        // ... (Añadir explora, busca, hazclic, etc. con "TODO: Translate...")

        // Página de parejas
        parejaIntro: "اكتشف أفضل المسارات الرومانسية للأزواج في بلاد الباسك.",
        // ... (Añadir parejaMainTitle, parejaMainDesc y TODAS las claves de lugares, gastro, etc. con "TODO: Translate...")

        // parejaConclusion: "TODO: Translate parejaConclusion", // Ejemplo
        parejaFinal: "نتمنى لك رحلة سعيدة! 💑✨",

        // Historia (común)
        // ... (Añadir TODAS las claves de historia con "TODO: Translate...")
        // Claves para la sección de comentarios
        commentsTitle: "TODO: Translate commentsTitle",
        // ... y así sucesivamente para todas las nuevas claves en árabe
        registerPageTitle: "TODO: Translate registerPageTitle",
        loginPageTitle: "TODO: Translate loginPageTitle",
        // ... (Añadir TODAS las claves de comentarios con "TODO: Translate...")
    },
    
    zh: {
        navPareja: "情侣路线",
        navPerros: "携犬同行",
        navNinos: "亲子路线", 
        navEscalada: "攀岩",
        navSkate: "滑板",
        navGastronomia: "美食",
        navAventura: "冒险",
        navMTB: "山地车",
        contacto: "联系我",
        inicio: "首页",
        navComentarios: "评论", // Ejemplo, verifica la traducción

        // Títulos principales
        mainTitle: "巴斯克地区路线",
        parejaTitle: "情侣路线",
        // ... (Añadir TODAS las demás claves de título con "TODO: Translate...")

        // Página principal (index)
        bienvenida: "欢迎来到巴斯克地区旅游路线指南。",
        // ... (Añadir explora, busca, hazclic, etc. con "TODO: Translate...")

        // Página de parejas
        parejaIntro: "探索巴斯克地区最佳浪漫情侣路线。",
        // ... (Añadir parejaMainTitle, parejaMainDesc y TODAS las claves de lugares, gastro, etc. con "TODO: Translate...")

        // parejaConclusion: "TODO: Translate parejaConclusion", // Ejemplo
        parejaFinal: "祝您旅途愉快！💑✨",

        // Historia (común)
        // ... (Añadir TODAS las claves de historia con "TODO: Translate...")
        // Claves para la sección de comentarios
        commentsTitle: "TODO: Translate commentsTitle",
        // ... y así sucesivamente para todas las nuevas claves en chino
        registerPageTitle: "TODO: Translate registerPageTitle",
        loginPageTitle: "TODO: Translate loginPageTitle",
        // ... (Añadir TODAS las claves de comentarios con "TODO: Translate...")
    }
};

let currentLanguage;

function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Traducciones no disponibles para el idioma: ${lang}`);
        return;
    }

    currentLanguage = lang;
    window.currentLanguage = lang; // Hacerlo global para otros scripts

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            let translation = translations[lang][key];

            // Si el elemento es un input, button, o textarea, podríamos necesitar cambiar 'value' o 'placeholder'
            if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                if (element.type === 'submit' || element.type === 'button' || element.tagName === 'BUTTON') {
                    // Para botones, el texto puede estar dentro o ser el valor.
                    // Si el data-key está en un botón que contiene texto, se actualizará con textContent.
                    // Si es un input type button/submit, se actualiza el value.
                    // El HTML actual usa textContent para botones.
                    element.textContent = translation;
                } else if (element.placeholder && translations[lang][key]) {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'TEXTAREA' && element.placeholder && translations[lang][key]) {
                 element.placeholder = translation;
            } else {
                // Para la mayoría de los elementos, actualizamos textContent
                // Esto incluye <p>, <a>, <li>, <h2>, etc.
                // También incluye el contenido de <button> si no es un input.
                element.innerHTML = translation; // Usar innerHTML para permitir etiquetas como <strong>
            }

            // Actualizar el atributo title si existe una clave específica para él
            // Por ejemplo, si tienes data-key="myElement" y data-title-key="myElementTitle"
            // O si el mismo data-key se usa para el title (menos común para contenido principal)

        } else {
            console.warn(`Clave de traducción no encontrada: "${key}" para el idioma "${lang}"`);
        }
    });

    // Actualizar el título de la página
    // Asumimos que la clave 'mainTitle' es para el index.html.
    // Para otras páginas, necesitarías una lógica diferente o una clave de título específica.
    const pageTitleKey = document.body.getAttribute('data-page-title-key') || 'mainTitle'; // Default to mainTitle for index
    if (translations[lang][pageTitleKey]) {
        document.title = translations[lang][pageTitleKey];
    }

    // Guardar el idioma seleccionado
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Hacer `translations` y `setLanguage` globalmente accesibles
    window.translations = translations;
    window.setLanguage = setLanguage;

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Cargar el idioma preferido o establecer uno por defecto
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage && translations[preferredLanguage]) {
        setLanguage(preferredLanguage);
    } else {
        setLanguage('es'); // Idioma por defecto
    }
});