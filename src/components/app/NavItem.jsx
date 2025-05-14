import styled from "styled-components";

const ItemLink = styled.div`
    &.active {
        background-color: #2555E7;
        color: #FFFFFF;
    }
`;

const NavItem = ({ icon: Icon, text, active, chevron = false }) => (
    <ItemLink className={`${active ? 'active' : ''} flex items-center gap-2 py-2 px-4 rounded-xl cursor-pointer`}>
        <img src={Icon} alt={text} width={20} height={20} />

        <span className="">{text}</span>

        {chevron && (
            <img
                src="/icons/chevron.svg"
                alt="Chevron"
                width={10}
                height={10}
                style={{ marginLeft: 'auto' }}
            />
        )}
    </ItemLink>
);

export default NavItem;