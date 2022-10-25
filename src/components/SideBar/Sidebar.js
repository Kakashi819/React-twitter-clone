import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptioin from './SidebarOptioin';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { SearchOffOutlined } from '@mui/icons-material';
import {Button} from '@mui/material'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>
      <SidebarOptioin text="Home" Icon={HomeOutlinedIcon}/>
      <SidebarOptioin text="Explore" Icon={SearchOffOutlined}/>
      <SidebarOptioin text="Notifications" Icon={NotificationsNoneIcon}/>
      <SidebarOptioin text="Messages" Icon={MailOutlineOutlinedIcon}/>
      <SidebarOptioin text="Bookmark" Icon={BookmarkAddOutlinedIcon}/>
      <SidebarOptioin text="List" Icon={ListAltOutlinedIcon}/>
      <SidebarOptioin text="Profile" Icon={PermIdentityOutlinedIcon}/>
      <SidebarOptioin text="More" Icon={MoreHorizOutlinedIcon}/>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}
