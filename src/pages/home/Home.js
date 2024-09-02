import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <div>
            <ContactForm sectionId={'contact-form-id'}/>
            <Footer />
        </div>
    );
}

export default Home;