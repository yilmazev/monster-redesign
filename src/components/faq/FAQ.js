import { useState } from 'react';
import './FAQ.scss';

export default function FAQ() {
    const [selected, setSelected] = useState(null)

    const toggle = (btnToggle) => {
        if(selected === btnToggle) {
            return setSelected(null)
        }

        setSelected(btnToggle)
    }

    return (
        <div id="faq">
            <div className="faq-container">
                <div className="faq-column">
                    <h2 className="column-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-column">
                    <div className="faq-wrapper">
                        { data.map((item, btnToggle) => (
                            <div className="faq-accordion-item">
                                <div className={"faq-header " + (selected === btnToggle ? 'active' : '')} onClick={() => toggle(btnToggle) }>
                                    <h3 className="faq-question-title">{ item.question }</h3>
                                    <div className="faq-arrow-container">
                                        <svg className="arrow-icon-image" viewBox="0 0 24 24"><path d="m4.594 8.912 6.553 7.646a1.126 1.126 0 0 0 1.708 0l6.552-7.646c.625-.73.107-1.857-.854-1.857H5.447c-.961 0-1.48 1.127-.853 1.857Z" /></svg>
                                    </div>
                                </div>
                                <div className={"faq-body " + (selected === btnToggle ? 'show' : 'hidden')}>
                                    <p className="faq-answer-text">{ item.answer }</p>
                                </div>
                                <div className="faq-footer" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        question: 'When is the official launch?',
        answer:
            'The official Monster Ape Club launch date is to be announced. Further updates will be revealed on our official Discord.',
    },
    {
        question: 'How can I buy a Monster Ape?',
        answer:
            'You will be able to buy on our website when we launch. Join our discord to have more information about our launch date.',
    },
    {
        question: 'How can I join the whitelist?',
        answer:
            'Over 100,000 members compete for a Whitelist spot on our Discord. We still have spots left, but they will all be filled quickly. You need to hurry.',
    },
    {
        question: 'What is the mint price?',
        answer:
            'The mint price is to be announced. Join our Discord for the further updates.',
    },
    {
        question: 'How can I use my NFT?',
        answer:
            'You will be able to use your Monster Ape as an avatar in the Metaverse. As well as using it to unlock many members-only benefits and access to exclusive physical goods.',
    },
    {
        question: 'Still have any questions?',
        answer:
            'Go ahead to our Discord and feel free to ask anything.',
    }
]