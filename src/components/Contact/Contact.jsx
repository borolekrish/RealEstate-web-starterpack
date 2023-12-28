import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="c-containers">
                <div className="paddings innerWidth flexCenter c-container">
                    {/* left side */}
                    <div className="flexColStart c-left">
                        <span className='orangeText'>Our Contacts</span>
                        <span className='primaryText'>Easy to Contact us</span>
                        <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good <br />place to live can make your life better and more comfortable.</span>
                        <div className="flexColStart contactModes">
                            {/* first row */}
                            <div className="flexStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='myText primarytext'>Call</span>
                                            <span className='myText secondarytext'>+123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button myText">
                                        Call Now
                                    </div>
                                </div>
                                {/* second mode */}
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='myText primarytext'>Chat</span>
                                            <span className='myText secondarytext'>+123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button myText">
                                        Chat Now
                                    </div>
                                </div>
                            </div>
                            {/* second row */}
                            <div className="flexStart row">
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='myText primarytext'>Video Call</span>
                                            <span className='myText secondarytext'>+123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button myText">
                                        Video Call Now
                                    </div>
                                </div>
                                {/* fourth mode */}
                                <div className="flexColStart mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='myText primarytext'>Message</span>
                                            <span className='myText secondarytext'>+123 456 7890</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button myText">
                                        Message Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="c-right">
                        <div className="image-container">
                            <img src="./contact.jpg" alt="contact" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact