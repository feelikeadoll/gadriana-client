// src/components/sections/DropDownItem.tsx
import { Service } from '../../../data/ServicesList';

// A simple icon component kept in the same file for convenience
const ChevronIcon = ({ direction }: { direction: 'down' | 'right' }) => (
    <svg fill="#000000" width="30px" height="30px" viewBox={direction === 'down' ? "0 -6 524 524" : "-77 0 512 512"} xmlns="http://www.w3.org/2000/svg">
        {direction === 'down'
            ? <path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" />
            : <path d="M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z" />
        }
    </svg>
);

interface Props {
    service: Service;
    isOpen: boolean;
    onToggle: () => void;
}

function DropDownItem({ service, isOpen, onToggle }: Props) {
    return (
        <div className="w-full py-8 md:py-14">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 flex justify-between items-center">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl">
                        {service.title}
                    </h3>
                    <button className="block md:hidden" onClick={onToggle}>
                        <ChevronIcon direction={isOpen ? 'down' : 'right'} />
                    </button>
                </div>

                {/* Simplified responsive logic: one paragraph for both views */}
                <p className={`text-lg md:text-xl md:w-1/2 mt-8 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    {service.description}
                </p>
            </div>
        </div>
    );
}

export default DropDownItem;