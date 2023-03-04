import React from 'react'
import '../css/projectList.css'

import Carousel from 'react-bootstrap/Carousel';

import ecom from '../img/ecom.webp'
import WooCommerce from '../img/WooCommerce.jpg'
import resturant from '../img/resturant.jpg'
import blogs from '../img/blogs.jpg'



function ProjectList() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <div>
            <h1>E-Commerce website</h1>
            <img
              className="img1 d-block w-100"
              src={ecom} alt="First slide"
            />

            <h2 >Technologies</h2>
            <p>Python, React JS, MySql, AWS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem iure, temporibus dolorum sed magnam assumenda harum mollitia distinctio sint quod provident molestiae, aperiam fuga voluptatem velit dolore natus quidem?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius enim at autem quas! Voluptatibus, sint veniam? Vel neque quibusdam facere tempore pariatur. Iure voluptatibus eaque eos, numquam ipsa porro?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eius in. Esse, culpa dolor magnam at et blanditiis libero quae recusandae voluptates repellat in doloribus exercitationem nesciunt illo iusto aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi dolorem impedit, deleniti sit iste maxime asperiores perspiciatis perferendis voluptas distinctio dolorum facilis sunt est quisquam molestiae, nemo eos. Soluta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem asperiores eaque commodi dignissimos nam enim temporibus amet ea reiciendis obcaecati in suscipit, aliquid numquam dolor odit quia? Obcaecati, rerum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum incidunt a, aut minima blanditiis ipsa recusandae aspernatur quisquam tenetur officia nemo ipsum voluptatum dignissimos tempore reprehenderit perferendis fugiat ut facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente temporibus repudiandae enim harum rem ut quia veniam doloremque in sint voluptas sequi corrupti possimus soluta quae, commodi rerum? Quam, accusantium.
            </p>
          </div>

        </Carousel.Item>



        <Carousel.Item>

          <div>
            <h1>Blog website</h1>
            <img
              className="img1 d-block w-100"
              src={blogs} alt="Second slide"
            />

            <h2 >Technologies</h2>
            <p>Python, React JS, MySql, AWS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem iure, temporibus dolorum sed magnam assumenda harum mollitia distinctio sint quod provident molestiae, aperiam fuga voluptatem velit dolore natus quidem?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius enim at autem quas! Voluptatibus, sint veniam? Vel neque quibusdam facere tempore pariatur. Iure voluptatibus eaque eos, numquam ipsa porro?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eius in. Esse, culpa dolor magnam at et blanditiis libero quae recusandae voluptates repellat in doloribus exercitationem nesciunt illo iusto aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi dolorem impedit, deleniti sit iste maxime asperiores perspiciatis perferendis voluptas distinctio dolorum facilis sunt est quisquam molestiae, nemo eos. Soluta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem asperiores eaque commodi dignissimos nam enim temporibus amet ea reiciendis obcaecati in suscipit, aliquid numquam dolor odit quia? Obcaecati, rerum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum incidunt a, aut minima blanditiis ipsa recusandae aspernatur quisquam tenetur officia nemo ipsum voluptatum dignissimos tempore reprehenderit perferendis fugiat ut facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente temporibus repudiandae enim harum rem ut quia veniam doloremque in sint voluptas sequi corrupti possimus soluta quae, commodi rerum? Quam, accusantium.
            </p>
          </div>


        </Carousel.Item>

        <Carousel.Item>

          <div>
            <h1>WooCommerce website</h1>
            <img
              className="img1 d-block w-100"
              src={WooCommerce} alt="Second slide"
            />

            <h2 >Technologies</h2>
            <p>Python, React JS, MySql, AWS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem iure, temporibus dolorum sed magnam assumenda harum mollitia distinctio sint quod provident molestiae, aperiam fuga voluptatem velit dolore natus quidem?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius enim at autem quas! Voluptatibus, sint veniam? Vel neque quibusdam facere tempore pariatur. Iure voluptatibus eaque eos, numquam ipsa porro?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eius in. Esse, culpa dolor magnam at et blanditiis libero quae recusandae voluptates repellat in doloribus exercitationem nesciunt illo iusto aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi dolorem impedit, deleniti sit iste maxime asperiores perspiciatis perferendis voluptas distinctio dolorum facilis sunt est quisquam molestiae, nemo eos. Soluta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem asperiores eaque commodi dignissimos nam enim temporibus amet ea reiciendis obcaecati in suscipit, aliquid numquam dolor odit quia? Obcaecati, rerum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum incidunt a, aut minima blanditiis ipsa recusandae aspernatur quisquam tenetur officia nemo ipsum voluptatum dignissimos tempore reprehenderit perferendis fugiat ut facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente temporibus repudiandae enim harum rem ut quia veniam doloremque in sint voluptas sequi corrupti possimus soluta quae, commodi rerum? Quam, accusantium.
            </p>
          </div>

        </Carousel.Item>


        <Carousel.Item>
          <div>
            <h1>Resturant</h1>
            <img
              className="img1 d-block w-100"
              src={resturant} alt="Third slide"
            />

            <h2 >Technologies</h2>
            <p>Python, React JS, MySql, AWS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem iure, temporibus dolorum sed magnam assumenda harum mollitia distinctio sint quod provident molestiae, aperiam fuga voluptatem velit dolore natus quidem?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius enim at autem quas! Voluptatibus, sint veniam? Vel neque quibusdam facere tempore pariatur. Iure voluptatibus eaque eos, numquam ipsa porro?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, eius in. Esse, culpa dolor magnam at et blanditiis libero quae recusandae voluptates repellat in doloribus exercitationem nesciunt illo iusto aliquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi dolorem impedit, deleniti sit iste maxime asperiores perspiciatis perferendis voluptas distinctio dolorum facilis sunt est quisquam molestiae, nemo eos. Soluta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem asperiores eaque commodi dignissimos nam enim temporibus amet ea reiciendis obcaecati in suscipit, aliquid numquam dolor odit quia? Obcaecati, rerum!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum incidunt a, aut minima blanditiis ipsa recusandae aspernatur quisquam tenetur officia nemo ipsum voluptatum dignissimos tempore reprehenderit perferendis fugiat ut facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente temporibus repudiandae enim harum rem ut quia veniam doloremque in sint voluptas sequi corrupti possimus soluta quae, commodi rerum? Quam, accusantium.
            </p>
          </div>


        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProjectList;