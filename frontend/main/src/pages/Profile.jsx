import React, { useState, useEffect } from 'react'
import { CustomButton } from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { useNavigate } from  'react-router-dom';

// import { navlinks } from '../constants';
const Profile = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const { connect, address } = useStateContext();
  const {  contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    // setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    // setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, );

  return (
     <div className='space-x-4'>
    <DisplayCampaigns 
      title="All Campaigns"
      // isLoading={isLoading}
      campaigns={campaigns}
    />
 <div className='px-4 py-4 ml-200'>
    <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
    </div>
</div>
  )
}

export default Profile