import 'dotenv/config.js';
import '../../config/database.js';
import Itinerary from '../Itinerary.js';

let itineraries = [
    {
        nameUser: "Owen Lars",
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20180105223041",
        nameCity: "Seville",
        price: 2,
        time: 2 ,
        hashtags: ["flamenco", "history", "architecture"]
    },
    {
        nameUser: "Obi-Wan Kenobi",
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest?cb=20120125222904",
        nameCity: "Seville",
        price: 3,
        time: 1,
        hashtags: ["tapas", "riverwalk", "localvibes"]
    },
    {
        nameUser: "Landonis Balthazar Calrissian",
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/2/29/LandoCalrissian-TROSOCE.png/revision/latest?cb=20200101062018",
        nameCity: "Bruges",
        price: 3,
        time: 2,
        hashtags: ["medieval", "canals", "chocolate"]
    },
    {
        nameUser: "Boba Fett",
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/a/a7/TBBF_Boba_Fett.png/revision/latest?cb=20211209014423",
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
        imageUser: "https://static.wikia.nocookie.net/esstarwars/images/e/eb/JekPorkins-DB.png/revision/latest?cb=20180704201404",
        nameCity: "Istanbul",
        price: 4,
        time: 2,
        hashtags: ["bazaar", "shopping", "culture"]
    }
]

Itinerary.insertMany(itineraries);