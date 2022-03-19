import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GavelIcon from '@mui/icons-material/Gavel';
import ManIcon from '@mui/icons-material/Man';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
export const SidebarData =[
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/homepage"
    },
    {
        title:"Dashboard",
        icon:<DashboardRoundedIcon />,
        link:"/dashboard"
    },
    {
        title:"Cases",
        icon:<GavelIcon />,
        link:"/case"
    },
    {
        title:" Clients",
        icon:<ManIcon />,
        link:"/addclient"
    },
    {
        title:"Appoinment",
        icon:<EventAvailableIcon />,
        link:"/viewappointment"
    },{
        title:"Settings",
        icon:<SettingsIcon />,
        link:"/settings"
    },
    {
        title:"Logout",
        icon:<LogoutIcon />,
        link:"/logout"
    },

];



