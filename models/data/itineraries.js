import 'dotenv/config.js';
import '../../config/database.js';
import Itinerary from '../Itinerary.js';

let itineraries = [
    {
        nameUser: "Owen Lars",
        imageUser: "https://th.bing.com/th/id/OIP.DSzMG9dhxtwhqUUMeCYlAgHaDt?pid=ImgDet&rs=1",
        nameCity: "Seville",
        price: 2,
        time: 2 ,
        hashtags: ["flamenco", "history", "architecture"]
    },
    {
        nameUser: "Obi-Wan Kenobi",
        imageUser: "https://th.bing.com/th/id/OIP.ZXapaq-qBV78mTpXPgKG8AHaJ4?pid=ImgDet&rs=1",
        nameCity: "Seville",
        price: 3,
        time: 1,
        hashtags: ["tapas", "riverwalk", "localvibes"]
    },
    {
        nameUser: "Landonis Balthazar Calrissian",
        imageUser: "https://ucarecdn.com/22a7d97d-1a99-4d25-a8ff-ac594a01ed8f/-/crop/639x639/0,111/-/preview/-/progressive/yes/-/format/auto/-/scale_crop/900x900/",
        nameCity: "Bruges",
        price: 3,
        time: 2,
        hashtags: ["medieval", "canals", "chocolate"]
    },
    {
        nameUser: "Boba Fett",
        imageUser: "https://th.bing.com/th/id/R.95da38e8dc4a7c6f14c23831de9096a6?rik=FxXZsDl0tYiStQ&pid=ImgRaw&r=0",
        nameCity: "Bruges",
        price: 2,
        time: 1,
        hashtags: ["artisan", "crafts", "market"]
    },
    {
        nameUser: "Gial Ackbar",
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/2/29/Admiral_Ackbar_RH.png/revision/latest?cb=20191025144226",
        nameCity: "Istanbul",
        price: 3,
        time: 1,
        hashtags: ["bosphorus", "mosques", "views"]
    },
    {
        nameUser: "Jek Tono Porkins",
        imageUser: "https://yt3.ggpht.com/a/AATXAJyPft5CZAYlZXKK7_cekINre5Nt48wXkaxYOw=s900-c-k-c0xffffffff-no-rj-mo",
        nameCity: "Istanbul",
        price: 4,
        time: 2,
        hashtags: ["bazaar", "shopping", "culture"]
    }
]

Itinerary.insertMany(itineraries);