import Button from "../../../components/UI/Button/Button";
import "../ContactData/ContactData.css";

const ContactData = () => {
    return <>
        <div className="ContactData">
            <h4>Enter your contact data</h4>
            <form>
                <input className="Input" type="text" name="name"/>
                <input className="Input" type="email" name="email"/>
                <input className="Input" type="text" name="street"/>
                <input className="Input" type="text" name="postal"/>
                <Button btnType="Success">Submit</Button>
            </form>
        </div>
    </>
}; 

 export default ContactData
