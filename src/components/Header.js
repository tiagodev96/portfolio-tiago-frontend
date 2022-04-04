import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {
  RiContactsLine,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/header.css";

function Header() {
  const state = useSelector((state) => {
    return { menuCollapse: state.menuCollapse };
  });

  const dispatch = useDispatch();

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={state.menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {state.menuCollapse ? (
                  "TDev"
                ) : (
                  <img
                    alt="Logo Tiago Batista"
                    className="logo"
                    src="./assets/logo.png"
                  ></img>
                )}
              </p>
            </div>
            <div
              className="closemenu"
              onClick={() => {
                dispatch({ type: "HANDLE_MENU" });
              }}
            >
              {state.menuCollapse ? (
                <FiArrowRightCircle color="var(--dark-blue)" />
              ) : (
                <FiArrowLeftCircle color="var(--dark-blue)" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <div
                onClick={() => {
                  dispatch({ type: "HOME" });
                }}
              >
                <MenuItem icon={<FiHome color="var(--white)" size="1.5em" />}>
                  Home
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  dispatch({ type: "PORTFOLIO" });
                }}
              >
                <MenuItem
                  icon={<FaRegHeart color="var(--white)" size="1.5em" />}
                >
                  Portfolio
                </MenuItem>
              </div>
              <div
                onClick={() => {
                  dispatch({ type: "CONTACT" });
                }}
              >
                <MenuItem
                  icon={<RiContactsLine color="var(--white)" size="1.5em" />}
                >
                  Contact
                </MenuItem>
              </div>
            </Menu>
          </SidebarContent>

          <SidebarFooter className="sidebar-footer">
            <Menu iconShape="square">
              <MenuItem
                onClick={() => {
                  dispatch({ type: "REDIRECT", payload: "GITHUB" });
                }}
                icon={<RiGithubFill color="var(--white)" size="1.5em" />}
              >
                GitHub
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch({ type: "REDIRECT", payload: "INSTAGRAM" });
                }}
                icon={<RiInstagramLine color="var(--white)" size="1.5em" />}
              >
                Instagram
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch({ type: "REDIRECT", payload: "WHATSAPP" });
                }}
                icon={<FaWhatsapp color="var(--white)" size="1.5em" />}
              >
                WhatsApp
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch({ type: "REDIRECT", payload: "LINKEDIN" });
                }}
                icon={<RiLinkedinBoxFill color="var(--white)" size="1.5em" />}
              >
                LinkedIn
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
}

export default Header;
