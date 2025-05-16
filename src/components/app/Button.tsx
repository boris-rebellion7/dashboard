import styled from "styled-components";

type ButtonTheme = "white" | "blue" | "lavander" | "purple" | "red";

interface ButtonProps {
  icon?: string;
  text: string;
  theme?: ButtonTheme;
  active?: boolean;
  chevron?: boolean;
  smallIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const themeColors = {
    white: {
        bg: "#FFFFFF",
        text: "#1A1A1A",
        padding: "0.75rem 1rem",
        radius: "0.75rem"
    },
    blue: {
        bg: "#2555E7",
        text: "#FFFFFF",
        padding: "0.75rem 1rem",
        radius: "0.75rem"
    },
    lavander: {
        bg: "#DDDBFF",
        text: "#635BFF",
        padding: ".25rem .5rem",
        radius: "0.5rem"
    },
    purple: {
        bg: "#635BFF",
        text: "#FFFFFF",
        padding: ".3rem .5rem",
        radius: "0.4rem"
    },
    red: {
        bg: "#FFE5ED",
        text: "#FF6692",
        padding: ".3rem .5rem",
        radius: "0.4rem"
    }
};

const ItemLink = styled.div<{ $theme: ButtonTheme; $active?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${(props) => themeColors[props.$theme].padding};
    border-radius: ${(props) => themeColors[props.$theme].radius};
    cursor: pointer;
    background-color: ${(props) => themeColors[props.$theme].bg};
    color: ${(props) => themeColors[props.$theme].text};
    transition: all 0.2s ease-in-out;

    ${(props) =>
        props.$active &&
        `
        box-shadow: 0px 8px 15px 2px rgba(77, 91, 236, 0.23);
        z-index: 10;
    `}

    &:hover {
        z-index: 10;
    }
`;

const IconImage = styled.img<{ $smallIcon?: boolean }>`
    margin-right: 0.25rem;
    width: ${props => props.$smallIcon ? '10px' : '20px'};
    height: ${props => props.$smallIcon ? '10px' : '20px'};
`;

const TextSpan = styled.span`
    font-size: 15px;
    white-space: nowrap;
`;

const ChevronIcon = styled.img`
    margin-left: auto;
    width: 10px;
    height: 10px;
`;

const Button = ({
    icon,
    text,
    theme = "white",
    active = false,
    chevron = false,
    smallIcon = false,
    onClick
}: ButtonProps) => (
    <ItemLink
        onClick={onClick}
        $theme={theme}
        $active={active}>
        {icon && <IconImage src={icon} alt={text} $smallIcon={smallIcon} />}
        <TextSpan>{text}</TextSpan>
        {chevron && <ChevronIcon src="/icons/chevron.svg" alt="Chevron" />}
    </ItemLink>
);

export default Button;