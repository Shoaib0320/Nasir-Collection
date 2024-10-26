// About.js
import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, Button, Image } from 'antd';
import { TrophyOutlined, SmileOutlined, CarOutlined } from '@ant-design/icons';
import './About.css'; // Make sure to import your CSS file here

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

export const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Layout
      style={{
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Content style={{ maxWidth: '1200px', margin: 'auto', padding: '60px 20px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Title level={2} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', color: '#fff',}}>
             About Click Shop Store
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#45DFB1' }}>
            Your one-stop solution for quality products and seamless shopping since 2024.
          </Paragraph>
        </div>

        {/* Mission, Vision, Customer Focus */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: '#6DA5C0',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#1976d2',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <TrophyOutlined style={{ fontSize: '40px', color: '#fff' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Our Mission</Title>
              <Paragraph style={{ color: '#fff' }}>
                To provide top-quality products that meet your daily needs and ensure customer satisfaction.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: 'linear-gradient(180deg, #4caf50, #66bb6a)',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#fff',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <SmileOutlined style={{ fontSize: '40px', color: '#4caf50' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Our Vision</Title>
              <Paragraph style={{ color: '#fff' }}>
                To be the most trusted online store, offering premium products with seamless delivery.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              bordered={false}
              hoverable
              className="card-hover" // Add the hover class here
              style={{
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                background: '#45DFB1',
                color: '#fff',
              }}
            >
              <div style={{
                borderRadius: '50%',
                background: '#fff',
                display: 'inline-block',
                padding: '20px',
                marginBottom: '15px',
              }}>
                <CarOutlined style={{ fontSize: '40px', color: '#ff9800' }} />
              </div>
              <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Customer Focus</Title>
              <Paragraph style={{ color: '#fff' }}>
                We prioritize our customers by offering the best service and fast delivery with every order.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        {/* Team & Values Section */}
        <Row align="middle" gutter={[24, 24]} style={{ marginTop: '50px' }}>
          <Col xs={24} md={12}>
            <Image
              src="https://www.synapseindia.com/UserFiles/Step-by-Step%20Guide%20to%20Building%20an%20eCommerce%20Website%20with%20OpenCart.jpg"alt="Team"
              style={{
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                transition: '0.3s',
                width: '100%',
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={3} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Our Values & Team</Title>
            <Paragraph style={{ fontSize: '16px', color: '#DFB6B2' }}>
              At Click Shop Store, we uphold honesty, transparency, and integrity. Our team is
              dedicated to delivering the best experience with every product and service.
            </Paragraph>
            <Text strong style={{ color: '#E9F5DB' }}>
              "Together, we build trust and excellence."
            </Text>
          </Col>
        </Row>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Title level={4} style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Join Us in Our Journey!</Title>
          <Button
            type="primary"
            size="large"
            style={{
              borderRadius: '30px',
              background: isHovered ? 'linear-gradient(90deg, #14919B, #6DA5C0)' : 'linear-gradient(90deg, #6DA5C0, #14919B)',
              borderColor: '#1976d2',
              padding: '0 40px',
              fontSize: '18px',
              color: '#fff',
              transition: '0.3s',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Scale effect on hover
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Shop Now
          </Button>

        </div>
      </Content>
    </Layout>
  );
};

export default About;
