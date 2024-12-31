const Contact = () => {
    return(<div>
        <h1 className="font-bold">Contact Us</h1>
        <form className="flex gap-2">

            <label>Name</label>
            <input className="border border-black p-2" placeholder="name"/>

            <label>Message</label>
            <input className="border border-black p-2 w-6/12" placeholder="message"/>

            <button className="px-4 py-2 bg-green-400 rounded-md" >Submit</button>

        </form>
    </div>)
}

export default Contact;