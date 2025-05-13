const NavItem = ({ icon: Icon, text, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#000',
        }}
    >
        <img src={Icon} alt={text} width={20} height={20} />
        <span>{text}</span>
    </button>
);

export default NavItem;