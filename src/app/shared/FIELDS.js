import ACP2 from '../assets/img/ACP2.jpg';
import ayscfields from '../assets/img/ayscfields.jpg';
import basin from '../assets/img/basin.jpg';
import SLP1 from '../assets/img/SLP1.jfif';
import sunset from '../assets/img/sunset.png';

export const FIELDS = [
    {
        id: 0,
        name: 'Antioch Community Park',
        image: ACP2,
        elevation: 1233,
        featured: false,
        description:
            '801 James Donlon Blvd, Antioch, CA 94509'
    },
    {
        id: 1,
        name: 'Antioch Youth Sports Complex',
        image: ayscfields,
        elevation: 877,
        featured: false,
        description:
            '2200 Wymore Way, Antioch, CA 94509'
    },
    {
        id: 2,
        name: 'Freedom Basin',
        image: basin,
        elevation: 2901,
        featured: false,
        description:
            "2645 O'Hara Ave, Oakley, CA 94561"
    },
    {
        id: 3,
        name: 'Summer Lake Park',
        image: SLP1,
        elevation: 42,
        featured: true,
        description:
            "3150 E Cypress Rd, Oakley, CA 94561"
    },
    {
        id: 4,
        name: 'Sunset Park',
        image: sunset,
        elevation: 42,
        featured: true,
        description:
            "655 Sunset Rd, Brentwood, CA 94513"
    },
];

