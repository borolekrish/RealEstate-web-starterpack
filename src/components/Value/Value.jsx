import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import './Value.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import 'react-accessible-accordion/dist/fancy-example.css'
import data from '../../utils/accordion'

const Value = () => {
    const [className, setClassname] = React.useState('null')
    return (
        <section className="v-wrapper">
            <div className="v-containers">
                <div className="paddings innerWidth flexCenter v-container">
                    {/* left side */}
                    <div className="v-left">
                        <div className="image-container">
                            <img src="./value.png" alt="value" />
                        </div>
                    </div>
                    {/* right side */}
                    <div className="flexColStart v-right">
                        <span className="orangeText">Our Value</span>
                        <span className="primaryText">Value We Give to You</span>
                        <span className="secondaryText">
                            We always ready to help by providing the best services for you.
                            <br />
                            We beleive a good place to live can make your life better and more comfortable.
                        </span>

                        <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
                            {data.map((item, i) => (

                                <AccordionItem className={`accordionItem  ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                            <AccordionItemState className='accordionState'>
                                                {({ expanded }) => expanded ? setClassname('expanded') : setClassname('collapsed')}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Value