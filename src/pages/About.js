import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 12,
                textAlign: "center",
                p: 2,
                "& h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: "2rem",
                    background: "linear-gradient(90deg, rgba(17,158,146,1) 0%, rgba(9,121,100,1) 51%, rgba(0,255,250,1) 100%)",
                    borderRadius: "10px"
                },
                "& p": {
                    textAlign: "justify",
                    fontWeight: "bold"
                },
                "@media (max-width:600px)": {
                    mt: 0,
                    mb: 3,
                    "& h4": {
                        fontSize: "1.5rem"
                    },
                    "& p": {
                        fontSize: "1rem"
                    },
                }
            }}>
                <Typography variant="h4">Welcome to Chicken Point</Typography>
                <p>
                    A hidden gem nestled in North East Delhi that promises a culinary delight for all chicken enthusiasts. At our restaurant, we pride ourselves on delivering the best Tandoori Chicken in the area, prepared with utmost care and perfection. Our Tandoori Chicken is charcoal roasted to achieve a mouthwatering level of tenderness and juiciness, making every bite a heavenly experience. Accompanied by soft Tandoori Roti, crisp Laccha Onions, and a refreshing dash of Mint Chutney, our Tandoori Chicken stands out as a must-try for non-vegetarians seeking exceptional flavors.
                </p>
                <br />
                <p>
                    In addition to our renowned Tandoori Chicken, our menu features a delectable range of chicken dishes. Savor the succulent Chicken Tikka, which is served with a side of cool curd and vibrant mint chutney, creating a harmonious blend of flavors that will tantalize your taste buds. For those who enjoy a bit of crunch, our Fried Chicken offers a crispy exterior while maintaining a juicy interior. And if you're looking for something uniquely flavorful, our Chicken Changezi is a standout choice, paired perfectly with Tandoori Roti.
                </p>
                <br />
                <p>
                    We understand that great food is not just about the main dishes, so we also offer a savory Egg Curry that complements our menu and adds variety for those who enjoy a blend of egg and spices. At High on Chicken, every meal is crafted with passion and dedication, ensuring that each visit is an unforgettable experience. Whether you're a devoted chicken lover or someone exploring new flavors, our restaurant promises a feast that will keep you coming back for more. Join us for a dining experience that truly celebrates the art of chicken cuisine in a cozy and inviting atmosphere.
                </p>
            </Box>
        </Layout>
    )
}

export default About