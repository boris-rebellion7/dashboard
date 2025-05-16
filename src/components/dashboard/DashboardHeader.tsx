import styled from 'styled-components';

interface ArrowIconProps {
    $isActive: boolean;
    $direction: 'asc' | 'desc';
}

const ArrowIcon = styled.img<ArrowIconProps>`
    width: 10px;
    height: 10px;
    margin-left: 4px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(${props => props.$direction === 'desc' ? '180deg' : '0deg'});
    opacity: ${props => props.$isActive ? 1 : 0.5};
`;

interface DashboardHeaderProps {
    onSort: (field: string, order: string) => void;
    currentSort: {
        field: string;
        order: string;
    };
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSort, currentSort }) => {
    return (
        <thead className="text-blueGray text-left">
            <tr className="border-b border-blueGray/20">
                <th className="py-5 px-6 font-lexendBold leading-5">Product name</th>
                <th 
                    onClick={() => onSort('price', currentSort.order === 'asc' ? 'desc' : 'asc')}
                    className="py-5 px-6 font-lexendBold leading-5 flex items-center cursor-pointer hover:text-blue"
                >
                    Price
                    <ArrowIcon 
                        src="/icons/arrow-up.svg"
                        alt="Sort"
                        $isActive={currentSort.field === 'price'}
                        $direction={currentSort.order as 'asc' | 'desc'}
                    />
                </th>
                <th className="py-5 px-6 font-lexendBold leading-5">Rating</th>
                <th className="py-5 px-6 font-lexendBold leading-5">Stock</th>
                <th className="py-5 px-6 font-lexendBold leading-5">Discount</th>
                <th className="py-5 px-6 font-lexendBold leading-5">Actions</th>
            </tr>
        </thead>
    );
};

export default DashboardHeader;
