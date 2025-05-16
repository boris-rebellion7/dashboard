import styled from "styled-components";

type ButtonTheme = "white" | "blue" | "lavander" | "purple" | "red";

interface ButtonProps {
  icon?: string;
  text: string;
  theme?: ButtonTheme;
  active?: boolean;
  chevron?: boolean;
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
        bg: "#6B46C1",
        text: "#FFFFFF",
        padding: ".5rem 1rem",
        radius: "0.75rem"
    },
    red: {
        bg: "#E53E3E",
        text: "#FFFFFF",
        padding: ".5rem 1rem",
        radius: "0.75rem"
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

const IconImage = styled.img`
    margin-right: 0.25rem;
    width: 20px;
    height: 20px;
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
    onClick
}: ButtonProps) => (
    <ItemLink
        onClick={onClick}
        $theme={theme}
        $active={active}>
        {icon && <IconImage src={icon} alt={text} />}
        <TextSpan>{text}</TextSpan>
        {chevron && <ChevronIcon src="/icons/chevron.svg" alt="Chevron" />}
    </ItemLink>
);

export default Button;