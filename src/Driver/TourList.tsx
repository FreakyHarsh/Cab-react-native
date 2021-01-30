import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

function TourList() {
  return (
    <View>
      <View style={{ height: 40 }} />
      <Text>Hello Driver</Text>
      <Text>Let's pick someone</Text>
      <Text>Pick up request near you</Text>
      <Card style={{ backgroundColor: '#FFD428', borderRadius: 20, width: '80%' }}>
        <Card.Content>
          <Title style={{ color: '#808080' }}>John Doe</Title>
          <Paragraph style={{ fontWeight: '700' }}>From: Kohinoor city</Paragraph>
          <Paragraph style={{ fontWeight: '700' }}>To: Thane</Paragraph>
          <Paragraph style={{ fontWeight: '700' }}>Amount Payable: Rs 3000</Paragraph>
        </Card.Content>
        <Card.Actions style={{ justifyContent: 'flex-end', padding: 0 }}>
          <Button color='#808080' onPress={() => console.log('Accept')} style={{ marginRight: 10 }}>
            Accept
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default TourList;
