import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header
                    heading="i ching for beginners"
                    subHeading="guidance from the ancient oracle"
                />
                <div className="main-col bg-frost opacity-75 p-4 pb-6 mx-4 mt-2 md:mt-8 rounded">
                    <p className="text-grey-dark text-2xl font-bold tracking-normal">
                        What is the I Ching and can it benefit me?
                    </p>
                    <p className="text-grey-darkest text-lg mt-4 leading-normal">
                        The I Ching is an ancient Chinese divination text dating
                        back to 1000 BC. It is used to provide guidance for
                        moral decision making. The basics of its use are quite
                        approachable, the complexity lies in the interpretation
                        which has been evolving over thousands of years.
                    </p>
                    <p className="text-grey-darkest text-lg mt-4 leading-normal">
                        Anyone can use the I Ching by asking a question and
                        generating a hexagram (there are 64 hexagrams) via
                        methods such as tossing three coins six different times.
                        Once you have your hexagram you can use it to reference*
                        the hexagram interpretation as it relates to your
                        question.
                    </p>
                    <p className="text-grey-darkest text-lg mt-4 leading-normal">
                        Why bother doing this? The reason would be to gain
                        insight into a decision beyond what you have already
                        considered. The interpretation text may provide a view
                        into your own unconscious wisdom (like a profound
                        dream).
                    </p>
                    <p>
                        <Link
                            className="btn btn-submit mt-6"
                            to="/build-your-hexagram"
                        >
                            begin
                        </Link>
                    </p>

                    <p className="text-xs text-grey-darker   mt-6">
                        *note: There are many I Ching books.
                    </p>
                </div>
            </>
        );
    }
}

export default Home;
