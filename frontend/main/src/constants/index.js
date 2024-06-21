import { profile,createCampaign, dashboard, logout } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },  
  {
    name: 'logout',
    imgUrl: logout,
    link: '/Signout',
    
  },
];
