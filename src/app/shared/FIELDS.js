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
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    },
    {
        id: 1,
        name: 'Antioch Youth Sports Complex',
        image: ayscfields,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Freedom Basin',
        image: basin,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Summer Lake Park',
        image: SLP1,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    },
    {
        id: 4,
        name: 'Sunset Park',
        image: sunset,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    },
];

