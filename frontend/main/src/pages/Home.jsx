import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = () => {
	// const [isLoading, setIsLoading] = useState(false);
	const [campaigns, setCampaigns] = useState([]);

	const {contract, getCampaigns } = useStateContext();

	const fetchCampaigns = async () => {
		// setIsLoading(true);
		const data = await getCampaigns();
		setCampaigns(data);
		// setIsLoading(false);
	};

	useEffect(() => {
		if (contract) fetchCampaigns();
	}, );

	return (
		<>
		<DisplayCampaigns
			title="All Campaigns"
			// isLoading={isLoading}
			campaigns={campaigns}
		/>
		<h1 className="font-epilogue font-semibold text-[20px] text-white px-4 py-4">You Need To Login For Funding</h1>
		</>
	);
};

export default Home;
// import React from 'react'
// import {Link} from 'react-router-dom';

// const Home = () => {
//     return (
     
//         <div className="flex items-center justify-center h-screen">
//           <h1 className="font-epilogue font-semibold text-[35px] text-white uppercase ml-12">Welcome User</h1>
// 		  <p className='font-epilogue font-semibold text-[15px] text-white uppercase ml-36 pt-5'>You Need to Login Down their👇</p>
//           <div className="flex items-center ml-40 mt-20 py-20">
// 			<Link to='/login' className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full'>Login</Link>
// 			<Link to='/SignUp' className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full'>SignUp</Link>
//           </div> 
//         </div>
//     );
//   };


// export default Home
