const bookData = [
  {
    id: 1,
    title: 'Hyperion',
    author: 'Dan Simmons',
    genre: ['Science Fiction'],
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405546838i/77566.jpg',
    desc: 'On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike. There are those who worship it. There are those who fear it. And there are those who have vowed to destroy it. In the Valley of the Time Tombs, where huge, brooding structures move backward through time, the Shrike waits for them all. On the eve of Armageddon, with the entire galaxy at war, seven pilgrims set forth on a final voyage to Hyperion seeking the answers to the unsolved riddles of their lives. Each carries a desperate hope—and a terrible secret. And one may hold the fate of humanity in his hands.',
    rating: 10,
    review:
      'Seven pilgrims, each with a story to tell, travelling to Hyperion in the midst of an intergalactic conflict. Who is the Shrike? The traitor? Some characters are more interesting than others, I personnaly love the unlikeable poet Martin Silenius, but also the consul. What science fiction should look like',
  },
  {
    id: 2,
    title: 'Tuf Voyaging',
    author: 'George R.R Martin',
    genre: ['Science Fiction'],
    photo: 'http://georgerrmartin.com/gallery/art/tuf05.jpg',
    desc: "Haviland Tuf is an honest space-trader who likes cats. So how is it that, in competition with the worst villains the universe has to offer, he's become the proud owner of the last seedship of Earth's legendary Ecological Engineering Corps? Never mind, just be thankful that the most powerful weapon in human space is in good hands-hands which now control cellular material for thousands of outlandish creatures. With his unique equipment, Tuf is set to tackle the problems human settlers have created in colonizing far-flung worlds: hosts of hostile monsters, a population hooked on procreation, a dictator who unleashes plagues to get his own way...and in every case the only thing that stands between the colonists and disaster is Tuf's ingenuity - and his reputation as an honest dealer in a universe of rogues...",
    rating: 10,
    review:
      'My first non-TSOIAF from George R.R Martin, this book is brilliant, full of humour, well in advance on its time. Haviland is one of the most interesting character that I had the chance to readHopefully George will spare some time to publish more adventure of Haviland Tuf',
  },
  {
    id: 3,
    title: 'Life Of Pi',
    author: 'Yann Nartel',
    genre: ['Philosophy'],
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg',

    desc: "The protagonist, Piscine Molitor 'Pi' Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.",
    rating: 7,
    review:
      "Interesting survival story, at time slightly boredom but still a decent book. I wouldn't want to be left stranded with a tiger on a boat",
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    genre: ['Philosophy'],
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',

    desc: "To Winston Smith, a young man who works in the Ministry of Truth (Minitru for short), come two people who transform this life completely. One is Julia, whom he meets after she hands him a slip reading, 'I love you.' The other is O'Brien, who tells him, 'We shall meet in the place where there is no darkness.' The way in which Winston is betrayed by the one and, against his own desires and instincts, ultimately betrays the other, makes a story of mounting drama and suspense.",
    rating: 7,
    review:
      "A classic, you heard about it, it's on your reading list but you might think that it's too old to appreciated. So yes, the technologies are different but now more than ever this book is relevant. Clear your browser's cookies use a VPN, Big brother is watching you :)",
  },
  {
    id: 5,
    title: 'A Song of Ice & Fire',
    author: 'George R.R Martin',
    genre: ['Fantasy'],
    photo:
      'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg',

    desc: "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King's Landing. There Eddard Stark of Winterfell rules in Robert's name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse--unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen's brothers Jaime and Tyrion of the powerful and wealthy House Lannister--the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki--whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",
    rating: 10,
    review:
      "A masterpiece, G.R.R Martin is brilliant, the characters are well developed and once you start reading it you can't stop. Even if you have seen Game of Thrones you have to read it as there is so much content in the book. Unfortunately, you come at a point where you have to stop, two more books have to be published to concluded one of the best fantasy saga",
  },
  {
    id: 6,
    title: 'The Fall Of Hyperion',
    author: 'Dan Simmons',
    genre: 'Science Fiction',
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541174620i/77565.jpg',

    desc: 'On the world of Hyperion, the mysterious Time Tombs are opening. And the secrets they contain mean that nothing--nothing anywhere in the universe--will ever be the same',
    rating: 10,
    review:
      'Second book in the Hyperion Cantos, your favourite character are at the end of their journey and ready to fulfill their destiny and meet the Shrike',
  },
  {
    id: 7,
    title: 'Dreamsong Volume 1',
    author: 'George R.R Martin',
    genre: ['Horror', 'Science Fiction', 'Short Stories', 'Fantasy'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7528/9780752890081.jpg',
    desc: "Gathered here in Volume I are the very best of George R.R. Martin's early works, including never-before-published fan pieces, his Hugo, Nebula, and Bram Stoker Award-winning stories plus the original novella The Ice Dragon, from which Martin's New York Times bestselling children's book of the same title originated. A dazzling array that features extensive author commentary, Dreamsongs, Volume I, is the perfect collection for both Martin devotees and a new generation of fans.",
    rating: 9,
    review:
      'Part bibiographical, full of George R.R Martin comments on his life, his works. Perfect introduction to horror stories and some Award-winning works such as: A song for Lya, Nightflyers, ...',
  },
  {
    id: 8,
    title: 'Dreamsong Volume 2',
    author: 'George R.R Martin',
    genre: ['Horror', 'Science Fiction', 'Short Stories', 'Fantasy'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7528/9780752890098.jpg',
    desc: 'Whether writing about werewolves, wizards, or outer space, George R.R. Martin is renowned for his versatility and expansive talent, highlighted in this dazzling collection. Included here, in Volume II, are acclaimed stories such as the World Fantasy Award-winner The Skin Trade; as well as the first novella in the Ice and Fire universe, The Hedge Knight;, plus two never-before-published screenplays. Featuring extensive author commentary, Dreamsongs, Volume II, is an invaluable chronicle of a writer at the height of his creativity — and an unforgettable reading experience for fans old and new.',
    rating: 9,
    review: 'Brilliant as always',
  },

  {
    id: 9,
    title: 'Photo Ark',
    author: 'Joel Satore',
    genre: ['Photo'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4262/9781426217777.jpg',
    desc: "The lush and unique photography in this book represents National Geographic's Photo Ark, a major initiative and lifelong project by photographer Joel Sartore to make portraits of the world's animals-especially those that are endangered. His powerful message, conveyed with humor, compassion, and art: to know these animals is to save them. Sartore is circling the globe, visiting zoos and wildlife rescue centers to create studio portraits of 12,000 species, with an emphasis on those facing extinction. With a goal of photographing every animal in captivity in the world, he has photographed more than 6,000 already and now, thanks to a multi-year partnership with National Geographic, he may reach his goal. This book showcases his animal portraits: from tiny to mammoth, from the Florida grasshopper sparrow to the greater one-horned rhinoceros.",
    rating: 10,
    review:
      'Creating a photo Ark of animals. A great project for a great cause',
  },
  {
    id: 10,
    title: 'History of the world Map by Map',
    author: 'Peter Snow',
    genre: ['History'],
    photo:
      'https://www.booktopia.com.au/covers/big/9780241226148/0000/history-of-the-world-map-by-map.jpg',
    desc: 'Come on a journey through global history, told in 130 maps that each offer a window on a key event. Step into the action and follow Ghengis Khan sweeping through China, Napoleon conquering Europe, or two world wars raging across the globe. See empires rise and fall - from the Egyptians and the Aztecs to the British empire and the Soviet Union.',
    rating: 10,
    review:
      "I've always been interested in Historym this book cover many of our history most important event through maps",
  },
  {
    id: 11,
    title: 'The Millennium Trilogy',
    author: 'Stieg Larson',
    genre: ['Thriller'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8472/9781847245458.jpg',
    desc: " The Girl with the Dragon Tattoo Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared without a trace more than forty years ago. All these years later, her aged uncle continues to try to discover what happened to her. He hires Mikael Blomkvist, a journalist recently sidelined by a libel conviction, to investigate. Blomkvist is aided by the pierced and tattooed computer prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption on their way to discovering the truth of Harriet Vanger’s fate. The Girl Who Played with Fire Mikael Blomkvist, now the crusading publisher of the magazine Millennium, has decided to run a story that will expose an extensive sex trafficking operation. On the eve of its publication, the two reporters responsible for the article are murdered, and the fingerprints found on the murder weapon belong to his friend Lisbeth Salander. Blomkvist, convinced of Salander’s innocence, plunges into an investigation of the murders. Meanwhile, Salander herself is drawn into a murderous game of cat and mouse, which forces her to face her dark past. The Girl Who Kicked the Hornet's Nest Lisbeth Salander lies in critical condition, a bullet wound to her head, in the intensive care unit of a Swedish city hospital. She’s fighting for her life in more ways than one: if and when she recovers, she’ll be taken back to Stockholm to stand trial for three murders. With the help of Mikael Blomkvist, she will not only have to prove her innocence, but also identify and denounce those in authority who have allowed the vulnerable, like herself, to suffer abuse and violence. On her own, she will plot revenge—against the man who tried to kill her, and against the corrupt government institutions that very nearly destroyed her life.",
    rating: 9,
    review:
      'One of the first book that I read in english, a mix between political and thriller',
  },
  {
    id: 12,
    title: 'The corpse reader',
    author: 'Antonio Garrido',
    genre: ['Thriller'],
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384791480i/18800339.jpg',
    desc: 'After his grandfather dies, avid scholar and budding forensic investigator Cí Song begrudgingly gives up his studies to help his family. But when another tragedy strikes, he’s forced to run and also deemed a fugitive. Dishonored, he has no choice but to accept work as a lowly gravedigger, a position that allows him to sharpen his corpse-reading skills. Soon, he can deduce whether a person killed himself—or was murdered.His prowess earns him notoriety, and Cí receives orders to unearth the perpetrator of a horrific series of mutilations and deaths at the Imperial Court. Cí’s gruesome investigation quickly grows complicated thanks to old loyalties and the presence of an alluring, enigmatic woman. But he remains driven by his passion for truth—especially once the killings threaten to take down the Emperor himself. Inspired by Song Cí, considered to be the founding father of CSI-style forensic science, this harrowing novel set during the thirteenth-century Tsong Dynasty draws readers into a multilayered, ingenious plot as disturbing as it is fascinating.',
    rating: 7,
    review:
      "I love history but don't know much about the impressive Chinese culture, so was pleased by the book. On the down side, I quickly guessed who was responsible for Ci problems",
  },
  {
    id: 13,
    title: 'The great dune trilogy',
    author: 'Frank Herbert',
    genre: ['Science Fiction'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5750/9780575070707.jpg',
    desc: "Herbert's evocative, epic tales are set on the desert planet Arrakis, the focus for a complex political and military struggle with galaxy-wide repercussions. This volume includes the titles Dune, Dune Messiah and Children of Dune..",
    rating: 9,
    review: '',
  },
  {
    id: 14,
    title: 'The Complete tales of H.P. Lovecraft',
    author: 'H.P. Lovecraft',
    genre: ['Horror', 'Short Stories'],
    photo:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560930580i/43617306.jpg',
    desc: "Written between the years 1917 and 1935, this collection features Lovecraft's trademark fantastical creatures and supernatural thrills, as well as many horrific and cautionary science-fiction themes that have influenced some of today's writers and filmmakers, including Stephen King, Alan Moore, F. Paul Wilson, Guillermo del Toro, and Neil Gaiman.",
    rating: '',
    review: 'currently reading',
  },
  {
    id: 15,
    title: 'Endymion',
    author: 'Dan Simmons',
    genre: ['Science Fiction'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5535/9780553572940.jpg',
    desc: "Two hundred and seventy-four years after the fall of the WorldWeb in Fall of Hyperion, Raoul Endymion is sent on a quest. Retrieving Aenea from the Sphinx before the Church troops reach her is only the beginning. With help from a blue-skinned android named A. Bettik, Raoul and Aenea travel the river Tethys, pursued by Father Captain Frederico DeSoya, an influential warrior-priest and his troops. The shrike continues to make enigmatic appearances, and while many questions were raised in Hyperion and Fall of Hyperion, still more are raised here. Raoul's quest will continue.",
    rating: 8,
    review: '',
  },
  {
    id: 16,
    title: 'The rise of endymion',
    author: 'Dan Simmons',
    genre: ['Science Fiction'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5535/9780553572988.jpg',
    desc: 'The time of reckoning has arrived. As a final genocidal Crusade threatens to enslave humanity forever, a new messiah has come of age. She is Aenea and she has undergone a strange apprenticeship to those known as the Others. Now her protector, Raul Endymion, one-time shepherd and convicted murderer, must help her deliver her startling message to her growing army of disciples. But first they must embark on a final spectacular mission to discover the underlying meaning of the universe itself. They have been followed on their journey by the mysterious Shrike--monster, angel, killing machine--who is about to reveal the long-held secret of its origin and purpose. And on the planet of Hyperion, where the story first began, the final revelation will be delivered--an apocalyptic message that unlocks the secrets of existence and the fate of humankind in the galaxy.',
    rating: 7,
    review:
      'My least favourite book of the Cantos, still a really good book and a must to read to conclude the serie',
  },
  {
    id: 17,
    title: 'Cloud Atlas',
    author: 'David Mitchell',
    genre: ['Science Fiction'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5293/9781529324983.jpg',
    desc: "Six interlocking lives - one amazing adventure. In a narrative that circles the globe and reaches from the 19th century to a post-apocalyptic future, Cloud Atlas erases the boundaries of time, genre and language to offer an enthralling vision of humanity's will to power, and where it will lead us.",
    rating: 9,
    review:
      'I watched the movie a couple of years ago and I remember that I loved it. The book was definitely a great read',
  },
  {
    id: 18,
    title: 'Super-Power',
    author: 'Ross Garnault',
    genre: ['Non Fiction'],
    photo:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7606/9781760642099.jpg',
    desc: "'The fog of Australian politics on climate change has obscured a fateful reality- Australia has the potential to be an economic superpower of the future post-carbon world.'-Ross Garnaut We have unparalleled renewable energy resources. We also have the necessary scientific skills. Australia could be the natural home for an increasing proportion of global industry. But how do we make this happen?.",
    rating: 8,
    review:
      'This book is at times complex to read, some passages are very technical with extensive data. Is there a country better placed than Australia to lead the transition to a post-carbon world? Without a doubt, no. I wish politics could stop playing politics and trust scientific.',
  },
  {
    id: 19,
    title: 'On the Trail of Genghis Khan',
    author: 'Tim Cope',
    genre: ['Non Fiction'],
    photo:
      'https://timcopejourneys.com/wp-content/uploads/2019/09/paperbackcover-copy.png',
    desc: 'Inspired by a desire to understand the nomadic way of life, Australian adventurer Tim Cope embarked on a remarkable journey: 6,000 miles on horseback across the Eurasian steppe from Mongolia, through Kazakhstan, Russia, and the Ukraine, to Hungary retracing the trail of Genghis Khan. From novice rider to travelling three years in the saddle, – accompanied by his Kazakh dog, Tigon – Tim learnt to fend off wolves and would-be horse-thieves, and grapple with the extremes of the steppe as he crossed sub-zero plateaux, the scorching deserts of Kazakhstan and the high-mountain passes of the Carpathians.',
    rating: 9,
    review: 'An incredible adventure, going in a 6000kms adventure on his own',
  },
  // {
  //   id: 17,
  //   title: 'Cloud Atlas',
  //   author: 'David Mitchell',
  //   genre: ['Science Fiction'],
  //   photo:
  //     'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5293/9781529324983.jpg',
  //   desc: "Six interlocking lives - one amazing adventure. In a narrative that circles the globe and reaches from the 19th century to a post-apocalyptic future, Cloud Atlas erases the boundaries of time, genre and language to offer an enthralling vision of humanity's will to power, and where it will lead us.",
  //   rating: 9,
  //   review:
  //     'I watched the movie a couple of years ago and I remember that I loved it. The book was definitely a great read',
  // },
];

export default bookData;
