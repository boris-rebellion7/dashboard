/**
 * Navigation component with slot for dashboard content.
 * Pass children as a prop to render custom dashboard items.
 */
import { useNavigate } from "react-router-dom";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Button from "./Button";

const InnerIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 45%;
    height: auto;
  }

  &.active {
    background-color: #2555e7;
    border-radius: 13px;
  }

  /* Used this as a shorter way of adding the lines this would be different in a real project */
  &:nth-child(3) {
    border-bottom: 1px solid #e0e6eb;
    padding-bottom: 1rem;
  }

  &:last-child {
    border-bottom: 1px solid #e0e6eb;
    padding-bottom: 1rem;
  }
`;

const Hamburger = styled.div`
  width: 3rem;
  height: 3rem;

  .line {
    width: 40%;
    height: 1px;
    margin: 2px auto;
  }
`;

const NavGroup = styled.div`
  &.active {
    border-bottom: 1px solid #E0E6EB;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

interface DashboardLink {
  text: string;
  icon: string;
  chevron?: boolean;
  active?: boolean;
}

const dashboardLinks: Record<string, DashboardLink[]> = {
  Applications: [
    {
      text: "Chat",
      icon: "/icons/chat.svg",
    },
    {
      text: "Products",
      icon: "/icons/products.svg",
      active: true,
    },
    {
      text: "Users",
      icon: "/icons/users.svg",
      chevron: true,
    },
    {
      text: "Settings",
      icon: "/icons/settings.svg",
    },
  ],
  Pages: [
    {
      text: "Resolution hub",
      icon: "/icons/resolution.svg",
    },
    {
      text: "Businesses",
      icon: "/icons/businesses.svg",
    },
    {
      text: "Aborted Project",
      icon: "/icons/aborted.svg",
    },
  ],
};

interface NavigationProps {
  children?: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-wrapper flex fixed h-screen w-full">
        {/* LEFT SECTION */}
        <div className="bg-lightGray px-4 pt-3">
          <Hamburger className="flex flex-col justify-center mb-5">
            <span className="line block bg-black"></span>
            <span className="line block bg-black"></span>
            <span className="line block bg-black"></span>
          </Hamburger>

          <div className="icon-wrapper">
            {Array.from({ length: 8 }).map((_, idx) => (
              <InnerIconWrapper
                key={idx}
                className={`${idx === 0 ? "active" : ""} mb-3`}
              >
                <img src={`/icons/icon-${idx}.svg`} alt={`icon${idx + 1}`} />
              </InnerIconWrapper>
            ))}
          </div>
        </div>
        {/* END :: LEFT SECTION */}

        <div className="inner-wrapper grow pr-4 flex flex-col">
          {/* TOP SECTION */}
          <div className="top-section flex justify-between items-center pt-3 px-8 mb-3">
            <div className="flex">
              <div
                className="logo flex mr-18"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <img src="/logo.svg" alt="Logo" />
              </div>

              <img src="/icons/magnifying.svg" alt="Search" />
            </div>

            <div className="pr-4">
              <div className="user-info flex items-center">
                <img className="mr-4" src="/icons/bell.svg" alt="bell" />
                <img src="/user-image.png" alt="User Avatar" />
              </div>
            </div>
          </div>
          {/* END :: TOP SECTION */}

          {/* BOTTOM SECTION */}
          <div className="bottom-section flex grow px-4">
            <div className="left-nav pt-5 mr-10">
              <div className="nav-items">
                {Object.entries(dashboardLinks).map(([groupName, links], index) => (
                  <NavGroup key={groupName} className={`${index === 0 ? "active" : ""} nav-group`}>
                    <div className={`nav-group-title text-12 text-gray font-bold px-4 mb-2`}>{groupName}</div>

                    {links.map(({ text, icon, chevron, active }) => (
                      <div key={text} className="nav-item">
                        <Button
                          icon={icon}
                          text={text}
                          chevron={chevron}
                          active={active ?? false}
                        />
                      </div>
                    ))}
                  </NavGroup>
                ))}
              </div>
            </div>
            {/* END :: BOTTOM SECTION */}

            {/* SLOT */}
            <div className="nav-content bg-lightGray rounded-2xl grow flex flex-col">{children}</div>
            {/* END :: SLOT */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
