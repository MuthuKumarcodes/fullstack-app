const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
// Dummy users data
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "email": "Karley_Dach@jasper.info",
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
    }
  }
];

// API endpoint: GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
