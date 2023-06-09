import { Nav } from "./components/Nav";
import { Landing } from "./components/Landing";
import { Stats } from "./components/Stats";
import { Business } from "./components/Business";
import { Billing } from "./components/Billing";
import { CardDeal } from "./components/CardDeal";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";
import { CTA } from "./components/CTA";

import styles from "./style";
function App() {
    return (
        <div className={`${styles.boxWidth}  mx-auto text-dimWhite`}>
            <div>
                <Nav />
                <Landing />
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
            </div>
        </div>
    );
}

export default App;
