
// visualizazione database esistenti

db
prova
show databases
prova                72.00 KiB
sample_airbnb        52.21 MiB
sample_analytics      9.21 MiB
sample_geospatial     2.01 MiB
sample_guides        40.00 KiB
sample_mflix         49.64 MiB
sample_restaurants    7.25 MiB
sample_supplies       2.02 MiB
sample_training      57.02 MiB
sample_weatherdata    2.80 MiB
admin               336.00 KiB
local                 7.04 GiB
db use esercitazione14022023

// creazione collezione

db.createCollection('books')
{ ok: 1 }
db popularMovies.insertOne( {
    title: "Spare: by Prince Harry, The Duke of Sussex",
    author: "Prince Harry, The Duke of Sussex",
    genre: ["History, Biography"],
    language: "English",
    publisher: "Bantam",
    price: "£14.00"
  })

// inserimento primo documento

  db.books.insertOne({
    title: 'Spare: by Prince Harry, The Duke of Sussex',
      author: 'Prince Harry, The Duke of Sussex',
      genre: ['History, Biography'],
      language: 'English',
      publisher: 'Bantam',
      price: '£14.00'
  })
  {
    acknowledged: true,
    insertedId: ObjectId("63ebaccd4af67f305717cfcd")
  }

// inserimento per la seconda volta del primo documento, verifico assegnazione di un id diverso

  db.books.insertOne({
    title: 'Spare: by Prince Harry, The Duke of Sussex',
    author: 'Prince Harry, The Duke of Sussex',
    genre: ['History, Biography'],
    language: 'English',
    publisher: 'Bantam',
    price: '£14.00'
     })
    {
      acknowledged: true,
      insertedId: ObjectId("63ebaf114af67f305717cfce")
    }

// elimino il primo elemento

    db.posts.deleteOne({title:"Spare: by Prince Harry, The Duke of Sussex"})
{
  acknowledged: true,
  deletedCount: 0
}

// inserimento di un altro documento

db.books.insertOne({title: 'Bored of Lunch: The Healthy Slow Cooker Book',
author: 'Nathan Anthony ',
genre: ['Cook'],
language: 'English',
publisher: 'Ebury Press',
price: '£8.49'})
{
  acknowledged: true,
  insertedId: ObjectId("63ebb20c4af67f305717cfcf")
}
// inserimento del resto dei documenti

db.books.insertMany( [ {
  title: 'Atomic Habits: the life-changing million-copy',
  author: 'James Clear ',
  genre: ['Art, Business Carrers'],
  language: 'English',
  publisher: 'Random House Business',
  price: '£9.00'
    },
    {
  title: 'It Ends With Us',
  author: 'Colleen Hoover ',
  genre: ['Travel and Tourism, Social Science, New adult Romance'],
  language: 'English',
  publisher: 'Simon & Schuster UK',
  price: '£4.50'
    },
    {
  title: '8 Rules of Love',
  author: 'Jay Shetty ',
  genre: ['Course in Miracles, Divorce & Separation'],
  language: 'English',
  publisher: 'Thorsons',
  price: '£10.00'
    },
    {
  title: 'Why Has Nobody Told Me This Before?',
  author: 'Dr Julie Smith ',
  genre: ['Medical Science A-Z,General Medical Issues Guide'],
  language: 'English',
  publisher: 'Michael Joseph',
  price: '£8.00'
   }
  ])
  {
    acknowledged: true,
    insertedIds: {
      '0': ObjectId("63ebb25e4af67f305717cfd0"),
      '1': ObjectId("63ebb25e4af67f305717cfd1"),
      '2': ObjectId("63ebb25e4af67f305717cfd2"),
      '3': ObjectId("63ebb25e4af67f305717cfd3")
    }
  }

// ricerca e visualizzazione di un elemnto specifico

  db.books.findOne({title:"Spare: by Prince Harry, The Duke of Sussex"})
{
  _id: ObjectId("63ebaccd4af67f305717cfcd"),
  title: 'Spare: by Prince Harry, The Duke of Sussex',
  author: 'Prince Harry, The Duke of Sussex',
  genre: [
    'History, Biography'
  ],
  language: 'English',
  publisher: 'Bantam',
  price: '£14.00'
}

// aggiornamento di una proprietà del documento

db.books.updateOne({
  title:
  "Atomic Habits: the life-changing million-copy"},
  {
    $set:{
      author:"James Clear Leroy "
    }
  })
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
  }
