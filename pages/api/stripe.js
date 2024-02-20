import Stripe from 'stripe'

const stripe = new Stripe(
        "pk_test_51OlthbSA6snor6t79XBFC1A4eK2ixeRG8h3JSQgLoh0Lffc4Nf9k7masklEzRwvLbHeWLYY5BJnJlHRqg5IYdYou00sC0Na6bQ"



)

export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: req.body.map((item) => {
                    const img = item.image.asset._ref;
                    const newImage = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/b5cnwan0/production/"
                        
                    )
                        .replace('-jpg', '.jpg');
                    
                    return {
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: item.name,
                                images: [newImage]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustabel_quantity: {
                            enabled: false
                        },
                        quantity: item.quantity,
                    }
                    
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            }

            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        }
        catch (error) {
            res.status(500).json(error.message)
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}