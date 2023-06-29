import Highlight_1 from '../assets/Highlight_1.png'
import Highlight_2 from '../assets/Highlight_2.png'
import Highlight_3 from '../assets/Highlight_3.png'
import HighlightsComp from "./HighlightsComp"

const Highlights = () => {
    return (
        <div>
            <HighlightsComp
            align="Highlights-left"
            picture={<img src={Highlight_1} alt="phones with Bella Onojie app simulation" />}
            preTitle="Create an account"
            title="Create/login to an existing account to get started"
            text="An account is created with your email and a desired password"
            />
            <HighlightsComp
            align="Highlights-right"
            picture={<img src={Highlight_2} alt="phones with Bella Onojie app simulation" />}
            preTitle="Explore varieties"
            title="Shop for your favorites meal as e dey hot."
            text="Shop for your favorite meals or drinks and enjoy while doing it."
            />
            <HighlightsComp
            align="Highlights-left"
            picture={<img src={Highlight_3} alt="phones with Bella Onojie app simulation" />}
            preTitle="Checkout"
            title="When you done check out and get it delivered."
            text="When you done check out and get it delivered with ease."
            />
    </div>

    )
}

export default Highlights