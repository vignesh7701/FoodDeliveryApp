import css from "../styles/Order.module.css";
import { Modal, useMantineTheme } from "@mantine/core";
import { createOrder } from "../lib/orderHandler";
import { useStore } from "../store/store";
import {useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";


export default function OrderModel({opened, setOpened, PaymentMethod}) {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };
    const resetCart = useStore((state) => state.resetCart);

    const total = typeof window !== "undefined" && localStorage.getItem("total");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({ ...FormData, total, PaymentMethod });
        toast.success("Order Placed");
        resetCart();
        {
            typeof window !== "undefined" && localStorage.setItem("order",id);
        }


        router.push(`/order/${id}`);        
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
        <form onSubmit={handleSubmit} className={css.formContainer}>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <input
            onChange={handleInput}
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
          />
          <textarea
            onChange={handleInput}
            name="address"
            required
                    placeholder="Address"
                    rows={3}
          />

            <span>You will pay <span>Rs {total}</span> on delivery</span>


                <button type="submit" className="btn">Place Order</button>
            </form>
            <Toaster/>
      </Modal>
    );
};
