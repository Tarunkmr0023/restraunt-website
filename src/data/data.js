import ButterChicken from '../images/ButterChicken.jpg'
import ChickenChangezi from '../images/ChickenChangezi.jpg'
import ChickenFry from '../images/ChickenFry.jpg'
import ChickenTandoori from '../images/ChickenTandoori.jpg'
import ChickenTikka from '../images/ChickenTikka.jpg'
import EggCurry from '../images/EggCurry.jpg'
import TandooriRoti from '../images/TandooriRoti.jpg'
import ChickenSeekhKebab from '../images/ChickenSeekhKebab.jpg'

export const CATEGORIES = ['All', 'Tandoor & Kebabs', 'Curries', 'Fried', 'Breads']

export const MenuList = [
    {
        name: 'Chicken Tandoori',
        category: 'Tandoor & Kebabs',
        tag: 'Bestseller',
        description: "Yogurt-marinated, charcoal-roasted in the tandoor. Smoky outside, juicy inside. Served with laccha onion and mint chutney.",
        image: ChickenTandoori,
        QuarterPrice: 150,
        HalfPrice: 300,
        FullPrice: 600
    },
    {
        name: 'Butter Chicken',
        category: 'Curries',
        tag: 'Bestseller',
        description: "Tender chicken in a silky tomato and makhan gravy. Rich, mild and made for tandoori roti.",
        image: ButterChicken,
        QuarterPrice: 200,
        HalfPrice: 400,
        FullPrice: 800
    },
    {
        name: 'Chicken Tikka',
        category: 'Tandoor & Kebabs',
        tag: 'Chef Pick',
        description: "Boneless chicken marinated in dahi and spices, grilled over charcoal until just charred.",
        image: ChickenTikka,
        QuarterPrice: 200,
        HalfPrice: 400,
        FullPrice: 800
    },
    {
        name: 'Chicken Changezi',
        category: 'Curries',
        tag: 'Spicy',
        description: "Mughlai-style curry with a thick, aromatic masala. Bold and full of flavour.",
        image: ChickenChangezi,
        QuarterPrice: 180,
        HalfPrice: 360,
        FullPrice: 720
    },
    {
        name: 'Chicken Seekh Kebab',
        category: 'Tandoor & Kebabs',
        tag: '',
        description: "Spiced minced chicken shaped on skewers and grilled. Soft, smoky and great as a starter.",
        image: ChickenSeekhKebab,
        QuarterPrice: 100,
        HalfPrice: 200,
        FullPrice: 400
    },
    {
        name: 'Chicken Fry',
        category: 'Fried',
        tag: 'Crunchy',
        description: "Seasoned chicken pieces fried golden and crisp. Hot, crunchy and juicy.",
        image: ChickenFry,
        QuarterPrice: 130,
        HalfPrice: 260,
        FullPrice: 520
    },
    {
        name: 'Egg Curry',
        category: 'Curries',
        tag: '',
        description: "Boiled eggs in an onion-tomato masala with whole spices. Simple, comforting ghar-style curry.",
        image: EggCurry,
        QuarterPrice: 100,
        HalfPrice: 200,
        FullPrice: 400
    }
]

export const RotiMenuList = [
    {
        name: 'Tandoori Roti',
        category: 'Breads',
        description: "Whole wheat flatbread baked fresh in the tandoor.",
        image: TandooriRoti,
        price: 10
    }
]

// Add only genuine customer reviews here; the section stays hidden while this is empty.
export const REVIEWS = []