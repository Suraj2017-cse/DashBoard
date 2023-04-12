// import {HiInboxArrowDown} from 'react-icons/hi';
import {BsFillTagsFill, BsMenuDown} from 'react-icons/bs';
import {AiOutlineLike} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';



const CardData = [
    {
        id: 1,
        bgColor: 'item1',
        icon: <BsMenuDown />,
        name: 'HiInboxArrowDown',
        title: 'Total Revenues',
        number: '$ 2,129,430'
    },
     {
        id: 2,
        bgColor: 'item2',
        icon: <BsFillTagsFill />,
        name: 'BsFillTagsFill',
        title: 'Total Transactions',
        number: '1,520'
    },
     {
        id: 3,
        bgColor: 'item3',
        icon: <AiOutlineLike />,
        name: 'AiOutlineLike',
        title: 'Total Likes',
        number: '9,721'
    },
     {
        id: 4,
        bgColor: 'item4',
        icon: <FiUsers />,
        name: 'FiUsers',
        title: 'Total Users',
        number: '892'
    }
]

export default CardData;