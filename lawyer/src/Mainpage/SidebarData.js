import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GavelIcon from '@mui/icons-material/Gavel';
import ManIcon from '@mui/icons-material/Man';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
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
        title:"Income",
        icon:<CurrencyRupeeIcon />,
        link:"/rupee"
    },
    {
        title:"Appoinment",
        icon:<EventAvailableIcon />,
        link:"/appoinment"
    },{
        title:"Settings",
        icon:<SettingsIcon />,
        link:"/settings"
    },

];



