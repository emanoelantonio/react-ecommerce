import React from "react"
import "./sidebar.css"
import { 
  Home, 
  Timeline, 
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  Equalizer,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report 
} from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
                Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
                Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
                Sales
            </li>
          </ul>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                  Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                  Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
                Transactions
            </li>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
                Reports
            </li>
          </ul>
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
                Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
                Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
                Messages
            </li>
          </ul>
          <h3 className="sidebarTitle">Stuff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
                Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
                Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
                Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
