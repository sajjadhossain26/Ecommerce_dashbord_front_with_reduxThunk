import React from 'react'
import {Modal} from '@rakan/bootstrap4rtl'

const ModalPopup = ({target, children}) => {
  return (
    <>
      	{/* <!-- Add Modal --> */}
			<div class="modal fade" id={target} aria-hidden="true" role="dialog">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add Specialities</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							{children}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /ADD Modal --> */}
    </>
  )
}

export default ModalPopup
