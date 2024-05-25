import React from 'react';
import { useState } from 'react';

function DeleteConfirmationModal({ showModal, setShowModal, onDelete }) {
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = () => {
        // Implement your delete logic here
        console.log('Delete button clicked');
        onDelete();
        setShowModal(false);
    };

    return (
        <div>
            {/* Modal */}
            {showModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE5CD;</i>
                                </div>
                                <h4 className="modal-title w-100">Are you sure?</h4>
                                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Do you really want to delete these records? This process cannot be undone.</p>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeleteConfirmationModal;
