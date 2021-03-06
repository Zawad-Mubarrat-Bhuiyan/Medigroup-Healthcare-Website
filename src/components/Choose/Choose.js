import React from 'react';
import './Choose.css';

const Choose = () => {
    return (
        <div className="container">
        <div className="text-center my-5">
            <h2 className="fcolor">
                Why you should choose us.</h2>
            <p>Our promises</p>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 ">
            <div className="card mb-3 shadow">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-lg-2 text-center">
                        <i className="fas fa-heartbeat icons"></i>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body fcolor">
                            <h5 className="card-title">
                                Honesty & transparency</h5>
                            <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-lg-2 text-center">
                        <i className="fas fa-search-dollar icons"></i>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body fcolor">
                            <h5 className="card-title">
                                Extra Discount</h5>
                            <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow ">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-lg-2 text-center">
                        <i className="fas fa-info-circle icons"></i>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body fcolor">
                            <h5 className="card-title">
                                24/7 Support</h5>
                            <p className="card-text text-secondary">Dignissim libero donec accumsan cubilia consectetuer lobortis ornare si vehicula amet fames</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Choose;