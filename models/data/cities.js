import 'dotenv/config.js';
import '../../config/database.js';
import City from '../City.js';

let cities = [
    {
        name: "Venice",
        image: "https://tourismmedia.italia.it/is/image/mitur/1600X900_venezia_san_marco_gabbiano-2?wid=1600&hei=900&fit=constrain,1&fmt=webp",
        country: "Italy",
        details: "Venice is a unique city built on a set of islands known for its canals, Renaissance architecture, and rich history."
    },
    {
        name: "Prague",
        image: "https://viajes.nationalgeographic.com.es/medio/2023/03/02/praga_838db84b_230302140436_1200x630.jpg",
        country: "Czech Republic",
        details: "Prague, the capital of the Czech Republic, stands out for its beautiful castle, medieval old town, and Bohemian charm."
    },
    {
        name: "Paris",
        image: "https://www.viajarafrancia.com/wp-content/uploads/2016/04/Paris-1024x768.jpg",
        country: "France",
        details: "Paris, the City of Light, is famous for its culture, history, iconic monuments like the Eiffel Tower, and exquisite cuisine."
    },
    {
        name: "London",
        image: "https://hips.hearstapps.com/hmg-prod/images/big-ben-puente-westminster-al-atardecer-londres-reino-unido-64185be7af19b.jpg?resize=1200:*",
        country: "United Kingdom",
        details: "London, the capital of the United Kingdom, blends tradition with modernity, hosting everything from Buckingham Palace to Tate Modern."
    },
    {
        name: "Rome",
        image: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
        country: "Italy",
        details: "Rome, the Eternal City, offers an immersion into Roman history with landmarks like the Colosseum and the Sistine Chapel."
    },
    {
        name: "Lisbon",
        image: "https://images.musement.com/cover/0042/18/lisbon_header-4117128.jpeg?w=1200&h=630&q=95&fit=crop",
        country: "Portugal",
        details: "Lisbon, the capital of Portugal, captivates with its nostalgic atmosphere, steep streets, fado music, and the view from Graça viewpoint."
    },
    {
        name: "Seville",
        image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/kjy3hxvtgbwmcakn2whi",
        country: "Spain",
        details: "Seville is a Spanish city full of passion, famous for its Mudéjar architecture, gothic cathedral, and lively Feria de Abril."
    },
    {
        name: "Istanbul",
        image: "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        country: "Turkey",
        details: "Istanbul is a transcontinental city bridging Europe and Asia, showcasing the grandeur of Hagia Sophia and the Blue Mosque."
    },
    {
        name: "Bruges",
        image: "https://img.freepik.com/fotos-premium/brujas-ciudad-brujas-belgica_163782-5807.jpg",
        country: "Belgium",
        details: "Bruges, in Belgium, is a medieval gem with serene canals, Gothic architecture, and a romantic atmosphere perfect for strolling."
    },
    {
        name: "Edinburgh",
        image: "https://media.iatiseguros.com/wp-content/uploads/2018/08/04005854/edimburgo-que-hacer-6.jpg",
        country: "United Kingdom",
        details: "Edinburgh, the capital of Scotland, is famous for its castle on the hill, the Fringe Festival, and history embedded in every corner."
    },
    {
        name: "Florence",
        image: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Italia_Florencia_shutterstock_230424784_Sorin%20Colac_Shutterstock.jpg?itok=Kn8RGDD6",
        country: "Italy",
        details: "Florence, the birthplace of the Italian Renaissance, hosts masterpieces like Michelangelo's David and the impressive Duomo."
    },
    {
        name: "Budapest",
        image: "https://a.cdn-hotels.com/gdcs/production125/d1363/31e00c14-4160-4c48-a5fd-0b6d6f6e24c3.jpg",
        country: "Hungary",
        details: "Budapest, divided by the Danube, captivates with its thermal baths, illuminated Parliament, and the majestic Buda Castle."
    },
    {
        name: "Granada",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/granada-ciudades-mas-bonitas-de-europa-1.jpg",
        country: "Spain",
        details: "Granada, in southern Spain, is famous for the Alhambra, a Moorish palace with stunning gardens and intricate decoration."
    },
    {
        name: "Vienna",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/Viena-Austria-ciudades-mas-bonitas-de-europa-1.jpg",
        country: "Austria",
        details: "Vienna, the capital of Austria, stands out for its classical music, imperial palaces, and sophisticated cultural atmosphere."
    },
    {
        name: "Amsterdam",
        image: "https://losviajesdedomi.com/wp-content/uploads/2021/07/amsterdam-ciudades-mas-bonitas-de-europa-2.jpg",
        country: "Netherlands",
        details: "Amsterdam is known for its canals, bicycles, and diverse art scene including the Van Gogh Museum and the Anne Frank House."
    }
]

City.insertMany(cities);