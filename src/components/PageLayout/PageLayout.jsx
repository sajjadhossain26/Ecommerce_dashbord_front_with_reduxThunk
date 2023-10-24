import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <>
      {/* <!-- Main Wrapper --> */}
      <div className="main-wrapper">
		
		<Header/>
			
			<Sidebar/>
			
			{/* <!-- Page Wrapper --> */}
            <div className="page-wrapper">
			
                <div className="content container-fluid">
					
				

				<Outlet/>
					
				</div>			
			</div>
			{/* <!-- /Page Wrapper --> */}
		
        </div>
		{/* <!-- /Main Wrapper --> */}
    </>
  )
}

export default PageLayout
