import React from 'react';
import styles from './Home.scss';
import Section from '../../layout/Section/Section';
import Hero from '../../layout/Hero/Hero';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home = () => (
  <Section variant='has-hero'>
    <Hero titleText='Let&apos;s read.' imageSrc={'https://i.postimg.cc/5yDv0yhb/alex-knight-v-8x-UFw-Lp-E4-unsplash.jpg'} />
    <Grid>
      <Row middle='md'>
        <Col md={6}>
          <h1 className={styles.title}>Make your special one.</h1>
          <p className={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies eros eu nisl vestibulum iaculis. Maecenas dapibus lorem quis ex ornare dignissim. Donec lobortis commodo augue, vel accumsan nunc facilisis vitae. Suspendisse bibendum congue sapien ut elementum. Nunc pellentesque, tortor et dignissim fermentum, purus mi sagittis neque, ut iaculis arcu lorem nec tellus. Integer in viverra lectus, vitae sollicitudin nulla. Sed mollis at odio eu pretium. Donec porta ligula sed diam pulvinar viverra.</p>
        </Col>
        <Col xs={12} md={5} mdOffset={1} xl={3} xlOffset={2}>
          <List variant='solid'>
            <ListItem title='Delivery from 0$' icon='map-marker-alt' />
            <ListItem title='Different formats' icon='compress-arrows-alt' />
            <ListItem title='Many series' icon='list-alt' />
            <ListItem title='24/7 Support' icon='headset' />
          </List>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Home;
