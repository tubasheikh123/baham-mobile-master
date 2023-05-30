import React from 'react';
import { View, Text } from 'react-native';
import { Surface, Title, Paragraph, Divider } from 'react-native-paper';

const AboutUsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Surface style={{ padding: 16, elevation: 4 }}>
        <Title style={{ marginBottom: 16 }}>About Baham</Title>
        <Paragraph>
        Baham is a modern ride-sharing app that aims to provide convenient and
        reliable transportation services to users. Whether you're heading to
        work, meeting friends, or exploring the city, Baham is here to make your
        travel experience enjoyable and hassle-free.
      </Paragraph>
        <Divider style={{ marginVertical: 16 }} />
        <Paragraph>
        With Baham, you can request a ride with just a few taps on your
        smartphone. Our network of professional and friendly drivers is
        available around the clock, ready to take you to your destination safely
        and comfortably. We prioritize your safety and ensure that all our
        drivers undergo thorough background checks and maintain high standards
        of service.
     
        Our app offers a seamless and user-friendly interface, allowing you to
        easily book rides, track your driver in real-time, and make secure
        payments. We strive to provide transparent pricing, and you'll always
        know the cost of your ride upfront, without any hidden charges.
      </Paragraph>

      </Surface>
    </View>
  );
};

export default AboutUsScreen;
