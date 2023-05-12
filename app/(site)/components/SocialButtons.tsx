
import {IconType} from 'react-icons';

interface SocialButtonType {
    icon: IconType;
    onClick: () => void;
}
const SocialButtons: React.FC<SocialButtonType> = ({
    icon: Icon,
    onClick
}) => {

    return (
        <button 
            onClick={onClick}
            type="button"
            className='
             inline-flex 
             w-full
             justify-center
             rounded-mg
             bg-white
             py-3
             px-2
             ring-1
             ring-inset
             text-gray-500
             shaddow-sm
             ring-gray-300
             hover:bg-gray-50
             focus:outline-offset-0
             ' >
                <Icon />
             </button>
    )
}

export default SocialButtons;