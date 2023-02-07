<template>
    <section class="about-section">
        <div class="heading">
            <span>about us</span>
            <h3>good quality dishes</h3>
        </div>

        <div class="row">
            <div class="about-content">
                <img src="../assets/images/taco-chefcartoon.png" alt="">
                <div class="about-content-text">
                    <p>Welcome to Ice n Fire Restaurant, where we serve the best fine-dine cuisine in Greater Noida. Our passion for food, combined with our commitment to providing exceptional service, has made us a popular destination for both families and friends.</p>
                    <p>At Ice n Fire, we believe that dining should be an experience, not just a meal. That's why we use only the freshest ingredients and prepare each dish with the utmost care and attention to detail. Our menu features a wide range of dishes, from classic comfort foods to contemporary creations, ensuring that there is something to suit every taste.</p>
                <p>Our spacious dining room is designed to be both comfortable and elegant, providing the perfect setting for a night out with family or a celebration with friends. Whether you're looking for a romantic dinner for two, or a family gathering, Ice n Fire is the ideal choice.</p>
               <p>Our knowledgeable and friendly staff are dedicated to making sure that your dining experience is unforgettable. From the moment you walk through our doors to the moment you leave, our team is here to ensure that every detail is taken care of, so you can sit back, relax and enjoy your meal.</p> </div>
           </div>
        </div>
 
        <div class="row">
            <div class="about-article">
                <h3>Our franchise program</h3>
            </div>
        </div>
        <div class="row">
            <div class="about-content">
                <img src="../assets/images/franchise.png" alt="">
                <div class="about-content-text">
                    <p>Are you looking to bring the exceptional dining experience of Ice n Fire Restaurant to your community? Our franchise program offers you the opportunity to join a growing brand and provide your customers with the finest fine-dine cuisine.</p>
                    <p>At Ice n Fire, we take pride in the quality of our food, service, and overall dining experience. Our menu features a range of dishes made with only the freshest ingredients, and our staff is dedicated to providing each and every guest with exceptional service.</p>
                <p>As a franchisee of Ice n Fire, you'll receive comprehensive training and support to help you every step of the way. From site selection and design to marketing and operations, our team will work closely with you to ensure your success.</p>
               <p>Some of the benefits of joining the Ice n Fire franchise program include:</p>
               <ul>
  <li>A proven business model and established brand</li>
  <li>Access to our signature menu and proprietary recipes</li>
   <li> Comprehensive training and ongoing support</li>
<li>Marketing and advertising support to drive traffic and sales
</li>
  <li>A dedicated franchise support team to assist with all aspects of your business
</li>
</ul> </div>

           </div>
           <router-link @click="scrollToTop()" to="https://docs.google.com/forms/d/1hQAdQhKx1iEvApASr68Php6QbYIeNCfiN89u7mNIUhM" class="btn">Apply Now</router-link>
        </div>

        <div class="row">
            <div class="about-article">
                <h3>food brings people together</h3>
            </div>
        </div>

        <div class="row gallery">
            <div class="wrapper">
                <img src="../assets/images/taco/taco-2.jpg" alt="">
                <img src="../assets/images/taco/taco-4.jpg" alt="">
                <img src="../assets/images/burrito/burrito-6.jpg" alt="">
                <img src="../assets/images/burrito/burrito-2.jpg" alt="">
                <img src="../assets/images/burrito/burrito-3.jpg" alt="">
                <img src="../assets/images/nachos/nachos-1.jpg" alt="">
                <img src="../assets/images/nachos/nachos-2.jpg" alt="">
                <img src="../assets/images/nachos/nachos-3.jpg" alt="">
                <img src="../assets/images/dessert/dessert-2.jpg" alt="">
                <img src="../assets/images/dessert/dessert-6.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.about-section {
    padding: 2rem 9%;
}

.about-section .about-content {
    display: flex;
    width: 100%;

}

.about-section .about-content img {
    background-color: rgb(75, 143, 137);
}

.about-section .about-content .about-content-text {
    font-size: 16px;
    padding-left: 50px;
}

.about-section .about-article {
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    background-color: #27ae60;
    width: 100%;
}

.about-section .about-article h3 {
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    color: white;
}


.about-section .gallery {
    overflow: hidden;
    padding: 100px;
}

.about-section .gallery .wrapper {
    position: relative;
    flex-grow: 1;
    margin: auto;
    max-width: 1200px;
    max-height: 1200px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;
}

.about-section .gallery .wrapper img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: all .25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
    grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
    z-index: 2;
    transform: scale(2);
}

@media (max-width: 768px) {
    .about-section .about-content img {
        width: 250px;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2.5);
    }
}

@media (max-width: 576px) {
    .about-section .about-content img {
        width: inherit;
    }

    .about-section .about-content {
        display: block;
    }

    .about-section .about-content .about-content-text {
        padding-left: 0px;
    }

    .about-section .gallery {
        padding: 50px 0px;
    }

    .about-section .gallery .wrapper img {
        max-width: 100%;

    }

    .about-section .gallery .wrapper {
        grid-gap: 2vmin;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2);
    }

}
</style>