// Bismillahirahmanirahim



import Carousel from 'react-bootstrap/Carousel';
import KitchenSinkExample from './card';
import { Row,Col } from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>



<Row>


    <Col>
    
    <KitchenSinkExample wene="https://dynomapper.com/images/5_tips_for_creating_a_great_website.jpg" nav="Web sites"/>

    </Col>

    <Col>
    
    <KitchenSinkExample wene="https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=80&auto=format,compress&fm=png8" nav="Android Apps"/>

    </Col>









    <Col>
    
    <KitchenSinkExample wene="https://www.apple.com/newsroom/images/2024/01/apple-announces-changes-to-ios-app-store-safari-in-the-eu/article/Apple-EU-Digital-Markets-Act-updates-hero_big.jpg.small.jpg" nav="Ios Apps"/>

    </Col>
</Row>


        <Carousel.Caption>
          <h3>Popular</h3>
          <p>Have your own website or mobile app</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>



      <Row>


<Col>

<KitchenSinkExample wene="https://atriainnovation.com/uploads/2023/11/portada-9.jpg" nav="Machine Learning"/>

</Col>

<Col>

<KitchenSinkExample wene="https://media.licdn.com/dms/image/v2/D4D12AQFrE9rkSx842w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709132883621?e=2147483647&v=beta&t=cO5fR7G0sPdA0imRzGy--Ni7Fj05I6wgEVkSxNLSNVc" nav="Robotics"/>

</Col>









<Col>

<KitchenSinkExample wene="https://learn.microsoft.com/tr-tr/windows-app/media/get-started-connect-devices-desktops-apps/windows-welcome.png" nav="Desktop Apps"/>

</Col>
</Row>

        <Carousel.Caption>
          <h3>Useful Solutions</h3>
          <p>Make it easy with modern Aproachs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>




      <Row>


<Col>

<KitchenSinkExample wene="https://cdn.hosting.com.tr/bilgi-bankasi/wp-content/uploads/2024/06/linux-komutlari.jpg" nav="Linux tutorials"/>

</Col>

<Col>

<KitchenSinkExample wene nav="Penteration Tests"/>

</Col>









<Col>

<KitchenSinkExample wene nav="Math & Requirements"/>

</Col>
</Row>
        <Carousel.Caption>
          <h3>Learning & Course</h3>
          <p>

          For developers live coding..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;