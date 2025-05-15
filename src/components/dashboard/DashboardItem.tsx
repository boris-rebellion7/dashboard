import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HoverHelper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 100%;
  background: #2555E7;
  transition: transform 0.4s ease;
  transform: translateX(-100%);
`;

const TitleParent = styled.tr`
  &:hover {
    .hover-helper {
      transform: translateX(0); /* Move the helper into view */ 
    }
  }
`;

interface DashboardHeaderProps {
  id: number;
  title: string;
  price: number | string;
  rating: number | string;
  stock: number | string;
  discountPercentage: number | string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  id,
  title,
  price,
  rating,
  stock,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail?id=${id}`);
  };

  const handleEdit = () => {
    navigate(`/edit?id=${id}`);
  };

  return (
    <TitleParent className="border-b border-blueGray/20 px-6 py-2 cursor-pointer">
      <td onClick={handleDetail} className="py-4 px-6 w-[23%] max-w-[15rem] leading-5 truncate whitespace-nowrap relative overflow-hidden">
        <HoverHelper className="hover-helper" />
        <span>{title}</span>
      </td>
      <td onClick={handleDetail} className="py-4 px-6 font-light leading-5 w-auto">
        {price}
      </td>
      <td onClick={handleDetail} className="py-4 px-6 font-light leading-5 w-[14%]">{rating}</td>
      <td onClick={handleDetail} className="py-4 px-6 font-light leading-5 w-[14%]">{stock}</td>
      <td onClick={handleDetail} className="py-4 px-6 font-light leading-5 w-[14%]">%{discountPercentage}</td>
      <td className="py-4 px-6 font-light leading-5 w-[14%]">
        <div className="flex items-center gap-6">
          <img
            onClick={handleEdit}
            className="w-6"
            src="/icons/edit.svg"
            alt="Edit"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
          <img
            className="w-6"
            src="/icons/delete.svg"
            alt="Delete"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
        </div>
      </td>
    </TitleParent>
  );
};

export default DashboardHeader;
