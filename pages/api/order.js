import Layout from "@/components/Layout";
import { client } from "../../lib/client";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const newOrder = await JSON.parse(req.body);
            try {
                await client.create({
                    _type: 'order',
                    name: newOrder.name,
                    address: newOrder.address,
                    phone: newOrder.phone,
                    total: newOrder.total,
                    method: newOrder.method,
                })
                    .then((data) => {
                    res.status(200).json(data._id);
                })
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }
            break;
        default:
            break;
    }
}

function Orders({ order }) {
    return (
        <Layout>
            <div className={css.container}>
                <span className={css.heading}>Order in Process</span>
                <div className={css.details}>
                    <div>
                        <span>Order ID</span>
                        <span>(order._Id)</span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>        </Layout>

    );
}
