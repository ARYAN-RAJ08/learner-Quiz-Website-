import React from 'react'
import '../css/Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className='footer-header'>
                    <table className="footer-table">
                        <tr>
                            <th>Overview</th>
                            <th>Others</th>
                            <th>Connect with Us</th>
                        </tr>
                        <tr>
                            <td>About Us</td>
                            <td>Advertise With Us</td>
                            <td>1800 200 3000(Toll-Free)</td>
                        </tr>
                        <tr>
                            <td>FAQ's</td>
                            <td>Carrers</td>
                            <td>support@bestchannel.com</td>
                        </tr>
                        <tr>
                            <td>Privacy Policy</td>
                            <td>Customer Care</td>
                            <td>Dealer Solution</td>
                        </tr>
                        <tr>
                            <td>Terms & Condition</td>
                            <td></td>
                            <td>Contact Us</td>
                        </tr>
                        <tr>
                            <td>Corporate Policies</td>
                            <td></td>
                            <td>Feedback</td>
                        </tr>
                        <tr>
                            <td>Investors</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="footer-footer">
                    <div className="copyright">&copy; 2024 Best Channel</div>
                    <div className="lang">
                        <i class="fa-solid fa-globe"></i>
                        <span className="l">English</span>
                    </div>
                    <div className="term">Terms & Privacy</div>
                    <div className="soccc">
                        <i class="fa-brands fa-square-x-twitter ll"></i>
                        <i class="fa-brands fa-linkedin ll"></i>
                        <i class="fa-brands fa-instagram ll"></i>
                        <i class="fa-brands fa-facebook ll"></i>
                        <i class="fa-brands fa-youtube ll"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer