import winCo from '../assets/img/WinCo.jpg';
import bigFive from '../assets/img/Big5.jfif';
import tailgaters from '../assets/img/tailgaters.jfif';
import mountainMikes from '../assets/img/pizza1.jpg'

export const PARTNERS = [
    {
        id: 0,
        name: 'Winco Foods',
        image: winCo,
        featured: false,
        description:
            "Winco is an employee owned company, that has been suppoerting us since the start."
    },
    {
        id: 1,
        name: 'Big 5',
        image: bigFive,
        featured: false,
        description:
            'Big 5 has all the sports equipment you need! Stop into your local store today!'
    },
    {
        id: 2,
        name: 'Tailgaters Spots Bar',
        image: tailgaters,
        featured: false,
        description:
            'Tailgaters offers some of the best food in Brentwood. Stop in after a game and let them know we sent you for a 10% discount!'
    },
    {
        id: 3,
        name: 'Mountain Mikes Pizza',
        image: mountainMikes,
        featured: true,
        description:
            'We all love pizza! Stop into our favorite pizza spot and let them know we sent you.'
    }
];
