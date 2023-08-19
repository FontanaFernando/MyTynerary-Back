import 'dotenv/config.js';
import '../../config/database.js';
import City from '../City.js';

let cities = [
    {
        create_by: "object id 01",
        name: "Venecia",
        image: "https://tourismmedia.italia.it/is/image/mitur/1600X900_venezia_san_marco_gabbiano-2?wid=1600&hei=900&fit=constrain,1&fmt=webp",
        country: "",
        details: ""
    },
    {
        create_by: "object id 02",
        name: "Praga",
        image: "https://viajes.nationalgeographic.com.es/medio/2023/03/02/praga_838db84b_230302140436_1200x630.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 03",
        name: "Paris",
        image: "https://www.viajarafrancia.com/wp-content/uploads/2016/04/Paris-1024x768.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 04",
        name: "Londres",
        image: "https://hips.hearstapps.com/hmg-prod/images/big-ben-puente-westminster-al-atardecer-londres-reino-unido-64185be7af19b.jpg?resize=1200:*",
        country: "",
        details: ""
    },
    {
        create_by: "object id 05",
        name: "Roma",
        image: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 06",
        name: "Lisboa",
        image: "https://images.musement.com/cover/0042/18/lisbon_header-4117128.jpeg?w=1200&h=630&q=95&fit=crop",
        country: "",
        details: ""
    },
    {
        create_by: "object id 07",
        name: "Sevilla",
        image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/kjy3hxvtgbwmcakn2whi",
        country: "",
        details: ""
    },
    {
        create_by: "object id 08",
        name: "Estambul",
        image: "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        country: "",
        details: ""
    },
    {
        create_by: "object id 09",
        name: "Brujas",
        image: "https://img.freepik.com/fotos-premium/brujas-ciudad-brujas-belgica_163782-5807.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 10",
        name: "Edimburgo",
        image: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005854/edimburgo-que-hacer-6.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 11",
        name: "Florencia",
        image: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Italia_Florencia_shutterstock_230424784_Sorin%20Colac_Shutterstock.jpg?itok=Kn8RGDD6",
        country: "",
        details: ""
    },
    {
        create_by: "object id 12",
        name: "Budapest",
        image: "https://a.cdn-hotels.com/gdcs/production125/d1363/31e00c14-4160-4c48-a5fd-0b6d6f6e24c3.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 13",
        name: "Granada",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/granada-ciudades-mas-bonitas-de-europa-1.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 14",
        name: "Viena",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/Viena-Austria-ciudades-mas-bonitas-de-europa-1.jpg",
        country: "",
        details: ""
    },
    {
        create_by: "object id 15",
        name: "Amsterdam",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/amsterdam-ciudades-mas-bonitas-de-europa-2.jpg",
        country: "",
        details: ""
    }
]

City.insertMany(cities);