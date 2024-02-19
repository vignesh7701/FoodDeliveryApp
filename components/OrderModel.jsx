import css from "../styles/OrderModal.module.css";

export default (opened) => {
    const theme = useManageTheme();
    
    const [FormData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const total = typeof window !== "undefined" && localStorage.getItem("1");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    };

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            {/* Modal content */}
            <form action="" className={css.formContainer}>
                <input type="text" name="name" required placeholder="Name" />
                <input type="text" name="phone" required placeholder="Phone Number" />
            </form>
        </Modal>
    );
};
