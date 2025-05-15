import styled from "styled-components";

type ButtonProps = {
    icon?: string; // URL to icon image
    text: string;
    active: boolean;
    chevron?: boolean;
};

const ItemLink = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;

  ${(props) =>
        props.$active &&
        `
    background-color: #2555e7;
    color: #ffffff;
    box-shadow: 0px 10px 20px rgba(77, 91, 236, 0.23);
  `}
`;

const IconImage = styled.img`
  margin-right: 0.25rem;
  width: 20px;
  height: 20px;
`;

const TextSpan = styled.span`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChevronIcon = styled.img`
  margin-left: auto;
  width: 10px;
  height: 10px;
`;

const Button = ({ icon, text, active, chevron = false }: ButtonProps) => (
    <ItemLink $active={active}>
        {icon && <IconImage src={icon} alt={text} />}
        <TextSpan>{text}</TextSpan>
        {chevron && <ChevronIcon src="/icons/chevron.svg" alt="Chevron" />}
    </ItemLink>
);

export default Button;