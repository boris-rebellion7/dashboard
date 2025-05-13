/**
 * Navigation component with slot for dashboard content.
 * Pass dashboardContent as a prop to render custom dashboard items.
 */
import styled from "styled-components";
import NavItem from "./NavItem";

const InnerIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: auto;
  }

  &.active {
    background-color: #2555E7;

    img {
      filter: invert(1) brightness(100) saturate(100%);
    }
  }
`;

const dashboardLinks = {
  Applications: [
    {
      text: "Chat",
      icon: "/icons/chat.svg",
    },
    {
      text: "Products",
      icon: "/icons/products.svg",
    },
    {
      text: "Users",
      icon: "/icons/users.svg",
    },
    {
      text: "Settings",
      icon: "/icons/settings.svg",
    },
  ],
  Pages: [
    {
      text: "Resolution",
      icon: "/icons/resolution.svg",
    },
    {
      text: "Businesses",
      icon: "/icons/businesses.svg",
    },
    {
      text: "Aborted",
      icon: "/icons/aborted.svg",
    },
  ],
};

const Navigation = ({ children }) => (
  <nav>
    <div className="nav-wrapper flex p-4">
      <div className="">
        <div className="flex flex-col justify-between w-6 h-5 mb-10">
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
          <span className="block h-0.5 bg-black"></span>
        </div>

        <div className="icon-wrapper">
          {Array.from({ length: 7 }).map((_, idx) => (
            <InnerIconWrapper key={idx} className={idx === 0 ? "active" : ""}>
              <img src={`/icons/icon-${idx + 1}.svg`} alt={`icon${idx + 1}`} />
            </InnerIconWrapper>
          ))}
        </div>
      </div>

      <div className="inner-wrapper grow pr-10">
        <div className="top-section flex justify-between items-center">
          <div>
            <div className="logo flex">
              <img src="/logo.svg" alt="Logo" />
              <span className="font-bold">ProductName</span>
            </div>
            search
          </div>

          <div>
            <div className="user-info flex items-center">
              <img src="/icons/bell.svg" alt="bell" />
              <img src="/user-image.png" alt="User Avatar" />
            </div>
          </div>
        </div>

        <div className="bottom-section flex">
          <div className="left-nav">
            <div className="nav-items">
              {Object.entries(dashboardLinks).map(([groupName, links]) => (
                <div key={groupName} className="nav-group">
                  <div className="nav-group-title">{groupName}</div>

                  {links.map(({ text, icon }) => (
                    <div key={text} className="nav-item">
                      <NavItem icon={icon} text={text} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-content">{children}</div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
